import { Activity, ArrowLeftRight, BriefcaseBusiness, CircleAlert, Network, Wallet } from "lucide-react";

import { AssetClassChart } from "@/components/charts/asset-class-chart";
import { LifecycleChart } from "@/components/charts/lifecycle-chart";
import { StpTrendChart } from "@/components/charts/stp-trend-chart";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { LifecycleWorkflow } from "@/components/dashboard/lifecycle-workflow";
import { Panel } from "@/components/dashboard/panel";
import { SectionHeading } from "@/components/dashboard/section-heading";
import { TradeTable } from "@/components/tables/trade-table";
import { kpis } from "@/lib/mock-data";
import { formatCompactNumber, formatCurrency, formatPercent } from "@/lib/utils";

export default function ExecutiveDashboardPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Executive Dashboard"
        title="Global trade lifecycle oversight"
        description="Real-time monitoring for order capture, allocation, confirmation, matching, and settlement across Equities, Options, Futures, FX, Fixed Income, and ETFs."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <KpiCard label="Gross Notional" value={formatCurrency(kpis.grossNotional)} delta="+6.2% vs prior day" icon={<Wallet className="h-5 w-5" />} />
        <KpiCard label="Trades Today" value={formatCompactNumber(kpis.tradesToday)} delta="937 captured" icon={<BriefcaseBusiness className="h-5 w-5" />} />
        <KpiCard label="STP Rate" value={formatPercent(kpis.stpRate)} delta="target 96.0%" icon={<Activity className="h-5 w-5" />} />
        <KpiCard label="Open Exceptions" value={String(kpis.openExceptions)} delta="4 critical / high" icon={<CircleAlert className="h-5 w-5" />} />
        <KpiCard label="FIX Sessions Healthy" value={`${kpis.connectedFixSessions}/24`} delta="2 require attention" icon={<Network className="h-5 w-5" />} />
        <KpiCard label="Failed Settlements" value={String(kpis.failedSettlements)} delta="-1 day over day" icon={<ArrowLeftRight className="h-5 w-5" />} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <Panel title="Trade Lifecycle Workflow" subtitle="Operational handoffs and control points">
          <LifecycleWorkflow />
        </Panel>
        <Panel title="Lifecycle Stage Mix" subtitle="Open activity by post-trade stage">
          <LifecycleChart />
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="STP and Exception Trend" subtitle="Intraday straight-through processing performance">
          <StpTrendChart />
        </Panel>
        <Panel title="Volume by Asset Class" subtitle="Institutional flow distribution across asset classes">
          <AssetClassChart />
        </Panel>
      </div>

      <Panel title="Priority Trade Flow" subtitle="Largest trades with lifecycle, allocation, and confirmation status">
        <TradeTable />
      </Panel>
    </div>
  );
}
