"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const ReviewCard = ({
  author,
  company,
  quote,
}: {
  author: string;
  company: string;
  quote: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarFallback>{author.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {author}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{company}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{quote}</blockquote>
    </figure>
  );
};
