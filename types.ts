import React from "react";

type feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  pointer: React.ReactNode;
};

export type FeaturesType = feature[];

type teamMember = {
  id: number;
  firstname: string;
  lastname: string;
  position: string;
  media: [
    {
      name: string;
      original_url: string;
    }
  ];
};

export type TeamType = teamMember[];

type projectType = {
  id: number;
  title: string;
  description: string;
  category: string;
  client_name: string;
  demo_email: string;
  demo_password: string;
  demo_link: string;
  dashboard_email: string;
  dashboard_password: string;
  dashboard_link: string;
  created_at: string;
  updated_at: string;
  src?: string;
  liveDemo?: string;
  media?: [
    {
      name: string;
      original_url: string;
    }
  ];
  preview_image: {
    name: string;
    original_url: string;
  };
};

export type ProjectsType = projectType[];

type testimonial = {
  id: string;
  name: string;
  position: string;
  opinion: string;
  project_id: string;
  media: [
    {
      name: string;
      original_url: string;
    }
  ];
};

export type TestimonialsType = testimonial[];
