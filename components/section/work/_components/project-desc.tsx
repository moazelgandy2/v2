import { ProjectsType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, LayoutGrid, X } from "lucide-react";
import { useState } from "react";

export const ProjectDescription = ({
  project,
}: {
  project: ProjectsType[0];
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const formattedDate = new Date(project.created_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
    }
  );

  return (
    <Card className="w-full mb-6">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center justify-between">
          <span className="text-2xl font-bold">{project.title}</span>
          <Badge
            variant="outline"
            className="capitalize"
          >
            {project.category}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Project Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="h-4 w-4" />
            <span className="text-sm">Client: {project.client_name}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Created: {formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <LayoutGrid className="h-4 w-4" />
            <span className="text-sm capitalize">Type: {project.category}</span>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Project</h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Media Gallery */}
        {project.media && project.media.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.media.map((item) => (
                <div
                  key={item.name}
                  className="relative w-32 h-32 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item.original_url)}
                >
                  <img
                    src={item.original_url}
                    alt={item.name}
                    className="max-w-full max-h-[48vh] md:max-h-[90vh] object-fit rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[90vw]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-3 right-3 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[48vh] md:max-h-[90vh] object-fit rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
