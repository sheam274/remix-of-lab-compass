import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbProps {
  current: string;
}

export function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-brand-foreground/80">
      <ol className="flex items-center gap-1.5">
        <li>
          <Link to="/" className="hover:text-brand-foreground hover:underline">
            Home
          </Link>
        </li>
        <ChevronRight className="size-3" aria-hidden="true" />
        <li className="font-medium text-brand-foreground">{current}</li>
      </ol>
    </nav>
  );
}
