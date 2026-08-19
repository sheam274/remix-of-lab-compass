import { Link } from "@tanstack/react-router";
import { Mail, PhoneCall, Search } from "lucide-react";
import { siteInfo } from "@/data/site";

export function TopBar() {
  return (
    <div className="border-b border-border bg-brand-deep text-brand-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href={`tel:${siteInfo.emergency.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:underline">
            <PhoneCall className="size-3.5" aria-hidden="true" />
            <span>Emergency: {siteInfo.emergency}</span>
          </a>
          <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-1.5 hover:underline">
            <Mail className="size-3.5" aria-hidden="true" />
            <span>{siteInfo.email}</span>
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <form
            className="flex items-center gap-1.5 rounded-md bg-brand-foreground/10 px-2.5 py-1"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <Search className="size-3.5" aria-hidden="true" />
            <label htmlFor="site-search" className="sr-only">
              Search the site
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search…"
              className="w-28 bg-transparent text-xs placeholder:text-brand-foreground/60 focus:outline-none sm:w-36"
            />
          </form>
          <a href={`https://mail.${siteInfo.email.split("@")[1]}`} className="hover:underline">
            Email Login
          </a>
          <Link to="/contact" className="rounded-md bg-brand-foreground/15 px-2.5 py-1 font-semibold hover:bg-brand-foreground/25">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
}
