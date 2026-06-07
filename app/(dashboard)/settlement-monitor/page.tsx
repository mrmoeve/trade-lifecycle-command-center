import { Panel } from "@/components/dashboard/panel";
import { SectionHeading } from "@/components/dashboard/section-heading";
import { SettlementTable } from "@/components/tables/settlement-table";
import { settlements } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function SettlementMonitorPage() {
  const atRisk = settlements.filter((settlement) => settlement.settlementStatus === "At Risk").length;
  const failed = settlements.filter((settlement) => settlement.settlementStatus === "Failed").length;
  const exposure = settlements.reduce((total, settlement) => total + settlement.amount, 0);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Settlement Monitor"
        title="Cash and securities movement oversight"
        description="Track settlement readiness, custodian exposure, affirmation rates, and failed settlement pressure across global post-trade operations."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Panel title="At Risk">
          <p className="font-display text-3xl font-semibold text-white">{atRisk}</p>
          <p className="mt-2 text-sm text-slate-400">Trades vulnerable to cutoff, SSI, or matching issues.</p>
        </Panel>
        <Panel title="Failed">
          <p className="font-display text-3xl font-semibold text-white">{failed}</p>
          <p className="mt-2 text-sm text-slate-400">Requires escalation to operations, custody, or counterparties.</p>
        </Panel>
        <Panel title="Exposure">
          <p className="font-display text-3xl font-semibold text-white">{formatCurrency(exposure)}</p>
          <p className="mt-2 text-sm text-slate-400">Aggregate settlement notional in the current queue.</p>
        </Panel>
      </div>

      <Panel title="Settlement Queue" subtitle="Affirmations, custody assignments, dates, and settlement state">
        <SettlementTable />
      </Panel>
    </div>
  );
}
