import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground lg:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="px-4 pb-8">
          <Accordion type="multiple">
            {navItems.map((item) =>
              item.children ? (
                <AccordionItem key={item.label} value={item.label}>
                  <AccordionTrigger className="text-sm font-medium">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 pl-2">
                      <li>
                        <Link
                          to={item.to ?? "/"}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm font-medium text-brand"
                        >
                          Overview
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-sm text-muted-foreground"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={item.label} className="border-b border-border">
                  <Link
                    to={item.to ?? "/"}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-sm font-medium text-foreground"
                  >
                    {item.label}
                  </Link>
                </div>
              ),
            )}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
