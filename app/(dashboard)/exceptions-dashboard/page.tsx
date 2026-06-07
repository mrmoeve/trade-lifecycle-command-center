import { Panel } from "@/components/dashboard/panel";
import { SectionHeading } from "@/components/dashboard/section-heading";
import { ExceptionsTable } from "@/components/tables/exceptions-table";
import { exceptions } from "@/lib/mock-data";

export default function ExceptionsDashboardPage() {
  const criticalOpen = exceptions.filter((item) => item.severity === "Critical" || item.severity === "High").length;
  const avgAge = Math.round(exceptions.reduce((total, item) => total + item.ageMinutes, 0) / exceptions.length);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Exceptions Dashboard"
        title="Operational exception management"
        description="Prioritize breaks across allocations, SSIs, economics, and counterparty confirmations with severity-aware routing and aging metrics."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Panel title="Open / Investigating">
          <p className="font-display text-3xl font-semibold text-white">
            {exceptions.filter((item) => item.status !== "Resolved").length}
          </p>
          <p className="mt-2 text-sm text-slate-400">Actively managed exceptions across desks.</p>
        </Panel>
        <Panel title="Critical / High">
          <p className="font-display text-3xl font-semibold text-white">{criticalOpen}</p>
          <p className="mt-2 text-sm text-slate-400">Escalated issues with near-term operational risk.</p>
        </Panel>
        <Panel title="Average Age">
          <p className="font-display text-3xl font-semibold text-white">{avgAge}m</p>
          <p className="mt-2 text-sm text-slate-400">Mean time in queue before resolution or escalation.</p>
        </Panel>
      </div>

      <Panel title="Exception Queue" subtitle="Severity, owner, aging, and current work state">
        <ExceptionsTable />
      </Panel>
    </div>
  );
}
