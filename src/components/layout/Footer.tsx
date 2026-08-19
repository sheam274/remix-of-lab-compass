import { Link } from "@tanstack/react-router";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { useState } from "react";
import { navItems, siteInfo } from "@/data/site";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="mt-20 bg-brand-deep text-brand-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold">{siteInfo.shortName}</h2>
          <p className="mt-2 max-w-md text-sm text-brand-foreground/80">
            {siteInfo.name} — advancing plant biotechnology, cytogenetics and frugal science at{" "}
            {siteInfo.university}.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-brand-foreground/85">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{siteInfo.address}</span>
            </li>
            <li className="flex gap-2.5">
              <PhoneCall className="size-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${siteInfo.phone.replace(/\s/g, "")}`} className="hover:underline">
                {siteInfo.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteInfo.email}`} className="hover:underline">
                {siteInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-foreground/80">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.to ?? "/"} className="hover:text-brand-foreground hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">Newsletter</h2>
          <p className="mt-4 text-sm text-brand-foreground/80">
            Seminar announcements, calls for applications and lab notes, once a month.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              if (email.trim().length === 0) return;
              setSubscribed(true);
              setEmail("");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@university.edu"
              className="min-w-0 flex-1 rounded-md bg-brand-foreground/10 px-3 py-2 text-sm placeholder:text-brand-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-foreground/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-md bg-brand-foreground/20 px-3 py-2 transition-colors hover:bg-brand-foreground/30"
            >
              <Send className="size-4" aria-hidden="true" />
            </button>
          </form>
          {subscribed ? (
            <p className="mt-2 text-xs text-brand-foreground/90">
              Thanks — you're on the list.
            </p>
          ) : null}
        </div>
      </div>
      <div className="border-t border-brand-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-brand-foreground/70 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteInfo.shortName}, {siteInfo.university}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Department of Biotechnology &amp; Genetic Engineering</p>
        </div>
      </div>
    </footer>
  );
}
