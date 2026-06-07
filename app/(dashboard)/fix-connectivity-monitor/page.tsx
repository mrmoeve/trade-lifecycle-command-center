import { Panel } from "@/components/dashboard/panel";
import { SectionHeading } from "@/components/dashboard/section-heading";
import { FixSessionsTable } from "@/components/tables/fix-sessions-table";
import { fixSessions } from "@/lib/mock-data";

export default function FixConnectivityMonitorPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="FIX Connectivity Monitor"
        title="Session health and market connectivity"
        description="Monitor counterparty sessions, heartbeat health, message throughput, and reject spikes across AMER, EMEA, and global institutional routing."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Panel title="Connected">
          <p className="font-display text-3xl font-semibold text-white">
            {fixSessions.filter((session) => session.status === "Connected").length}
          </p>
          <p className="mt-2 text-sm text-slate-400">Sessions fully healthy and routing orders normally.</p>
        </Panel>
        <Panel title="Degraded / Disconnected">
          <p className="font-display text-3xl font-semibold text-white">
            {fixSessions.filter((session) => session.status !== "Connected").length}
          </p>
          <p className="mt-2 text-sm text-slate-400">Sessions under active investigation or failover.</p>
        </Panel>
        <Panel title="Reject Volume">
          <p className="font-display text-3xl font-semibold text-white">
            {fixSessions.reduce((total, session) => total + session.rejects, 0)}
          </p>
          <p className="mt-2 text-sm text-slate-400">Cumulative session-level rejects across monitored links.</p>
        </Panel>
      </div>

      <Panel title="Session Matrix" subtitle="Venue, uptime, message rates, rejects, and heartbeat recency">
        <FixSessionsTable />
      </Panel>
    </div>
  );
}
