import { Panel } from "@/components/dashboard/panel";
import { SectionHeading } from "@/components/dashboard/section-heading";
import { ClientTable } from "@/components/tables/client-table";
import { clients } from "@/lib/mock-data";
import { formatCompactNumber, formatPercent } from "@/lib/utils";

export default function Client360Page() {
  const largestClient = clients.reduce((largest, current) => (current.aum > largest.aum ? current : largest), clients[0]);
  const topStp = clients.reduce((best, current) => (current.stpRate > best.stpRate ? current : best), clients[0]);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Client 360"
        title="Service quality and exposure by client"
        description="Review client-level AUM, operational quality, open trade activity, failed settlements, and dominant asset class to support service and risk conversations."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Panel title="Largest Relationship">
          <p className="font-display text-3xl font-semibold text-white">{largestClient.name}</p>
          <p className="mt-2 text-sm text-slate-400">${formatCompactNumber(largestClient.aum)} AUM under servicing coverage.</p>
        </Panel>
        <Panel title="Best STP Rate">
          <p className="font-display text-3xl font-semibold text-white">{topStp.name}</p>
          <p className="mt-2 text-sm text-slate-400">{formatPercent(topStp.stpRate)} straight-through processing performance.</p>
        </Panel>
        <Panel title="Coverage Universe">
          <p className="font-display text-3xl font-semibold text-white">{clients.length}</p>
          <p className="mt-2 text-sm text-slate-400">Priority institutional relationships in the command center.</p>
        </Panel>
      </div>

      <Panel title="Client Service Matrix" subtitle="AUM, service KPIs, settlement friction, and asset class concentration">
        <ClientTable />
      </Panel>
    </div>
  );
}
