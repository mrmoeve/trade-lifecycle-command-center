"use client";

import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col border-r border-white/10 bg-surface-900/80 px-4 py-6 backdrop-blur">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-cyan/25 to-accent-amber/25 text-accent-cyan shadow-panel">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.35em] text-slate-400">Trade Ops</p>
          <h1 className="font-display text-lg font-semibold text-white">Command Center</h1>
        </div>
      </div>

      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const active = pathname === item.href || (pathname === "/" && item.href === "/executive-dashboard");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition",
                active
                  ? "border-accent-cyan/35 bg-accent-cyan/10 text-white"
                  : "border-transparent bg-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-slate-100"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-white/10 bg-gradient-to-br from-surface-800 to-surface-900 p-4 shadow-panel">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Service Window</p>
        <p className="mt-2 text-sm font-medium text-slate-100">Asia handoff in 02:18</p>
        <p className="mt-1 text-xs text-slate-400">Monitor allocations, affirmations, and overnight settlement risk.</p>
      </div>
    </aside>
  );
}
