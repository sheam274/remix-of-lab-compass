import { Breadcrumb } from "./Breadcrumb";

export interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="bg-gradient-brand">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumb current={title} />
        <h1 className="mt-3 text-3xl font-semibold text-brand-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-foreground/85 sm:text-base">
          {description}
        </p>
      </div>
    </header>
  );
}
