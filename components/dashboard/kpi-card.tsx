import { ReactNode } from "react";

export function KpiCard({
  label,
  value,
  delta,
  icon
}: {
  label: string;
  value: string;
  delta: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-panel">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{label}</p>
        <div className="text-accent-cyan">{icon}</div>
      </div>
      <p className="mt-4 font-display text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-emerald-300">{delta}</p>
    </div>
  );
}
