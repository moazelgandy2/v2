interface SectionHeaderProps {
  section: {
    title: string;
    heading: string;
    description: string;
  };
}

export const SectionHeader = ({ section }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-primary text-primary-foreground">
          {section.heading}
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          {section.title}
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {section.description}
        </p>
      </div>
    </div>
  );
};
