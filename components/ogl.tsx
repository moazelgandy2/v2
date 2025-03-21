"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Transform, Vec3, Color, Polyline, RenderTarget } from "ogl";

interface LineType {
  spring: number;
  friction: number;
  mouseVelocity: Vec3;
  mouseOffset: Vec3;
  points: Vec3[];
  polyline: Polyline;
}

const OGLPolylines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const sceneRef = useRef<Transform | null>(null);
  const linesRef = useRef<LineType[]>([]);
  const mouseRef = useRef<Vec3>(new Vec3());
  const animationRef = useRef<number | null>(null);

  // Helper function for random values
  const random = (a: number, b: number): number => {
    const alpha = Math.random();
    return a * (1.0 - alpha) + b * alpha;
  };

  // Shader for the polylines
  const vertex = /* glsl */ `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;

    vec4 getPosition() {
        vec4 current = vec4(position, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
        vec2 nextScreen = next.xy * aspect;
        vec2 prevScreen = prev.xy * aspect;

        // Calculate the tangent direction
        vec2 tangent = normalize(nextScreen - prevScreen);

        // Rotate 90 degrees to get the normal
        vec2 normal = vec2(-tangent.y, tangent.x);
        normal /= aspect;

        // Taper the line to be fatter in the middle, and skinny at the ends using the uv.y
        normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0) );

        // When the points are on top of each other, shrink the line to avoid artifacts.
        float dist = length(nextScreen - prevScreen);
        normal *= smoothstep(0.0, 0.02, dist);

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;

        return current;
    }

    void main() {
        gl_Position = getPosition();
    }
  `;

  // Setup function to initialize the renderer and scene
  const setupScene = (): void => {
    if (!canvasRef.current) return;

    // Create renderer with transparent background
    const renderer = new Renderer({
      dpr: 2,
      canvas: canvasRef.current,
      alpha: true, // Enable transparency
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0); // Set clear color with 0 alpha (fully transparent)
    rendererRef.current = renderer;

    // Create scene
    const scene = new Transform();
    sceneRef.current = scene;

    // Create lines
    const lines: LineType[] = [];
    linesRef.current = lines;

    // Create multiple colored lines
    ["#1B86F8", "#E93656", "#A51AFB", "#311847"].forEach((color) => {
      // Store values for each line's spring movement
      const line = {
        spring: random(0.02, 0.1),
        friction: random(0.7, 0.95),
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(random(-1, 1) * 0.02),
        points: [] as Vec3[],
      } as LineType;

      // Create array of Vec3s for the line points
      const count = 20;
      const points = line.points;
      for (let i = 0; i < count; i++) points.push(new Vec3());

      // Create the polyline
      line.polyline = new Polyline(gl, {
        points,
        vertex,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: random(5, 10) },
        },
      });

      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    // Set initial size
    handleResize();
  };

  // Handle window resize
  const handleResize = (): void => {
    if (!rendererRef.current) return;

    rendererRef.current.setSize(window.innerWidth, window.innerHeight);

    // Update polylines resolution uniforms
    linesRef.current.forEach((line) => line.polyline.resize());
  };

  // Handle mouse/touch movement
  const updateMouse = (
    e: MouseEvent | TouchEvent,
    isScroll: boolean = false
  ): void => {
    if (!rendererRef.current) return;

    const gl = rendererRef.current.gl;
    let clientX: number, clientY: number;

    // Get client coordinates accounting for both mouse and touch events
    if ("changedTouches" in e && e.changedTouches.length) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    } else if ("clientX" in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      return; // Exit if we can't get coordinates
    }

    // Calculate coordinates relative to the canvas
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Get position relative to canvas
    const x = clientX;
    const y = clientY;

    // Only update the mouse position if not triggered by scroll
    if (!isScroll) {
      // Get mouse value in -1 to 1 range, with y flipped
      mouseRef.current.set(
        (x / gl.renderer.width) * 2 - 1,
        (y / gl.renderer.height) * -2 + 1,
        0
      );
    }
  };

  // Animation update function
  const update = (): void => {
    if (!rendererRef.current || !sceneRef.current) return;

    const tmp = new Vec3();

    linesRef.current.forEach((line) => {
      // Update polyline input points
      for (let i = line.points.length - 1; i >= 0; i--) {
        if (!i) {
          // For the first point, spring ease it to the mouse position
          tmp
            .copy(mouseRef.current)
            .add(line.mouseOffset)
            .sub(line.points[i])
            .multiply(line.spring);
          line.mouseVelocity.add(tmp).multiply(line.friction);
          line.points[i].add(line.mouseVelocity);
        } else {
          // The rest of the points ease to the point in front of them, making a line
          line.points[i].lerp(line.points[i - 1], 0.9);
        }
      }
      line.polyline.updateGeometry();
    });

    rendererRef.current.render({ scene: sceneRef.current });
    animationRef.current = requestAnimationFrame(update);
  };

  // Setup effect that runs once on component mount
  useEffect(() => {
    setupScene();

    // Add event listeners
    window.addEventListener("resize", handleResize);

    // Handle scroll without moving the cursor
    // This function exists to keep the cursor position stable
    // but doesn't actively update when scrolling
    const handleScroll = () => {
      // We don't need to simulate a mouse event on scroll anymore
      // The cursor will only update on actual mouse movement
    };

    window.addEventListener("scroll", handleScroll);

    if ("ontouchstart" in window) {
      window.addEventListener("touchstart", updateMouse as EventListener);
      window.addEventListener("touchmove", updateMouse as EventListener);
    } else {
      window.addEventListener("mousemove", updateMouse as EventListener);
    }

    // Hide the default cursor
    document.body.style.cursor = "none";

    // Start animation loop
    animationRef.current = requestAnimationFrame(update);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

      if ("ontouchstart" in window) {
        window.removeEventListener("touchstart", updateMouse as EventListener);
        window.removeEventListener("touchmove", updateMouse as EventListener);
      } else {
        window.removeEventListener("mousemove", updateMouse as EventListener);
      }

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      // Restore the default cursor
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="block w-full h-screen"
        style={{
          backgroundColor: "transparent",
          position: "fixed", // Keep it fixed during scrolling
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default OGLPolylines;
