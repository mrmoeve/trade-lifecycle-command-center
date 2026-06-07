import { ReactNode } from "react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(61,217,255,0.09),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,179,71,0.08),_transparent_28%)]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] opacity-20" />
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="flex min-h-screen flex-col">
          <Topbar />
          <MobileNav />
          <div className="flex-1 p-5 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
