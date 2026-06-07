"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="border-b border-white/10 bg-surface-900/80 px-4 py-3 lg:hidden">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {navigationItems.map((item) => {
          const active = pathname === item.href || (pathname === "/" && item.href === "/executive-dashboard");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition",
                active
                  ? "border-accent-cyan/35 bg-accent-cyan/10 text-white"
                  : "border-white/10 bg-white/5 text-slate-400"
              )}
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
