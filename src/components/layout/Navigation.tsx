import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/data/site";

export function Navigation() {
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.label} className="group relative">
            <Link
              to={item.to ?? "/"}
              activeProps={{ className: "text-brand" }}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
            >
              {item.label}
              {item.children ? (
                <ChevronDown
                  className="size-3.5 transition-transform group-hover:rotate-180"
                  aria-hidden="true"
                />
              ) : null}
            </Link>
            {item.children ? (
              <div className="invisible absolute left-0 top-full z-40 w-64 translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="mt-1 overflow-hidden rounded-md border border-border bg-card py-1 shadow-lift">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.to}
                        className="block px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
