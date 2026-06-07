"use client";

import { useMemo, useState } from "react";

import { FilterBar } from "@/components/dashboard/filter-bar";
import { Panel } from "@/components/dashboard/panel";
import { SectionHeading } from "@/components/dashboard/section-heading";
import { TradeTable } from "@/components/tables/trade-table";
import { trades } from "@/lib/mock-data";
import { AssetClass } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

export default function TradeMonitorPage() {
  const [selectedAsset, setSelectedAsset] = useState<AssetClass | "All">("All");

  const summary = useMemo(() => {
    const filtered = selectedAsset === "All" ? trades : trades.filter((trade) => trade.assetClass === selectedAsset);
    const notionals = filtered.reduce((total, trade) => total + trade.notional, 0);
    const exceptions = filtered.filter((trade) => trade.exceptionFlag).length;
    return {
      count: filtered.length,
      notionals,
      exceptions
    };
  }, [selectedAsset]);

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Trade Monitor"
        title="Intraday blotter and lifecycle control"
        description="Filter institutional trade flow across asset classes and review order status tracking, allocations, confirmations, and current lifecycle stage."
        action={<FilterBar selected={selectedAsset} setSelected={setSelectedAsset} />}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Panel title="Visible Trades">
          <p className="font-display text-3xl font-semibold text-white">{summary.count}</p>
          <p className="mt-2 text-sm text-slate-400">Filtered across {selectedAsset === "All" ? "all asset classes" : selectedAsset}</p>
        </Panel>
        <Panel title="Visible Notional">
          <p className="font-display text-3xl font-semibold text-white">{formatCurrency(summary.notionals)}</p>
          <p className="mt-2 text-sm text-slate-400">Institutional gross notional in current monitor view.</p>
        </Panel>
        <Panel title="Exception Flags">
          <p className="font-display text-3xl font-semibold text-white">{summary.exceptions}</p>
          <p className="mt-2 text-sm text-slate-400">Trades requiring middle office intervention.</p>
        </Panel>
      </div>

      <Panel title="Sortable Trade Blotter" subtitle="Order status, allocation tracking, confirmation tracking, and STP readiness">
        <TradeTable assetClass={selectedAsset} />
      </Panel>
    </div>
  );
}
