import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Key, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DemoLinkProps {
  description: string;
  demo_email: string;
  demo_password: string;
  demo_link: string;
  dashboard_email: string;
  dashboard_password: string;
  dashboard_link: string;
}

export const ProjectDemoCredential = ({
  description,
  demo_email,
  demo_password,
  demo_link,
  dashboard_email,
  dashboard_password,
  dashboard_link,
}: DemoLinkProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Project Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {demo_link && (
            <Card className="border bg-card/50">
              <CardContent className="pt-6">
                <h4 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Demo Access
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Email:</span>
                    <code className="bg-muted px-2 py-1 rounded">
                      {demo_email}
                    </code>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Key className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Password:</span>
                    <code className="bg-muted px-2 py-1 rounded">
                      {demo_password}
                    </code>
                  </div>
                  <LinkPreview url={demo_link}>
                    <Button
                      className="w-full mt-2"
                      variant="default"
                    >
                      Open Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </LinkPreview>
                </div>
              </CardContent>
            </Card>
          )}

          {dashboard_link && (
            <Card className="border bg-card/50">
              <CardContent className="pt-6">
                <h4 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Dashboard Access
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Email:</span>
                    <code className="bg-muted px-2 py-1 rounded">
                      {dashboard_email}
                    </code>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Key className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Password:</span>
                    <code className="bg-muted px-2 py-1 rounded">
                      {dashboard_password}
                    </code>
                  </div>
                  <LinkPreview url={dashboard_link}>
                    <Button
                      className="w-full mt-2"
                      variant="outline"
                      onClick={() => window.open(dashboard_link, "_blank")}
                    >
                      Open Dashboard
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </LinkPreview>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
