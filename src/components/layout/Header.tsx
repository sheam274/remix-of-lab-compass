import { Link } from "@tanstack/react-router";
import { Dna } from "lucide-react";
import { siteInfo } from "@/data/site";
import { MobileNav } from "./MobileNav";
import { Navigation } from "./Navigation";
import { TopBar } from "./TopBar";

export function Header() {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <TopBar />
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-md bg-gradient-brand text-brand-foreground">
              <Dna className="size-6" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-semibold text-brand">{siteInfo.shortName}</span>
              <span className="block text-[11px] text-muted-foreground sm:text-xs">
                {siteInfo.name}
              </span>
            </span>
          </Link>
          <Navigation />
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
