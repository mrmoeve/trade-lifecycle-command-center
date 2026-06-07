import { Bell, Search, ShieldCheck } from "lucide-react";

export function Topbar() {
  return (
    <div className="flex flex-col gap-4 border-b border-white/10 bg-surface-900/70 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Institutional Operations</p>
        <h2 className="font-display text-2xl font-semibold text-white">Trade Lifecycle Command Center</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 lg:flex">
          <Search className="h-4 w-4" />
          Search trades, accounts, sessions
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-300">
          <ShieldCheck className="h-4 w-4" />
          STP Healthy
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:text-white"
          type="button"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
