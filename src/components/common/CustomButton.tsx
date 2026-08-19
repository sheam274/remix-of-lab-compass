import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  solid: "bg-gradient-brand text-brand-foreground hover:opacity-90",
  outline: "border border-brand/40 text-brand hover:bg-accent",
  ghost: "text-foreground hover:bg-accent",
};

export interface CustomButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: ComponentProps<typeof Link>["to"];
  onClick?: () => void;
  type?: "button" | "submit";
}

export function CustomButton({
  children,
  variant = "solid",
  className,
  to,
  onClick,
  type = "button",
}: CustomButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
