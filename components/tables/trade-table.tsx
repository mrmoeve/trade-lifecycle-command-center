"use client";

import { useMemo, useState } from "react";

import { trades } from "@/lib/mock-data";
import { AssetClass, TradeRecord } from "@/lib/types";
import { cn, formatCurrency, sortByKey } from "@/lib/utils";

const headers: Array<{ key: keyof TradeRecord; label: string }> = [
  { key: "tradeId", label: "Trade ID" },
  { key: "client", label: "Client" },
  { key: "assetClass", label: "Asset Class" },
  { key: "instrument", label: "Instrument" },
  { key: "status", label: "Status" },
  { key: "notional", label: "Notional" },
  { key: "stpScore", label: "STP" }
];

export function TradeTable({ assetClass = "All" }: { assetClass?: AssetClass | "All" }) {
  const [sortKey, setSortKey] = useState<keyof TradeRecord>("notional");
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const rows = useMemo(() => {
    const filtered = assetClass === "All" ? trades : trades.filter((trade) => trade.assetClass === assetClass);
    return sortByKey(filtered, sortKey, direction);
  }, [assetClass, direction, sortKey]);

  function onSort(nextKey: keyof TradeRecord) {
    if (nextKey === sortKey) {
      setDirection(direction === "asc" ? "desc" : "asc");
      return;
    }

    setSortKey(nextKey);
    setDirection(nextKey === "client" ? "asc" : "desc");
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              {headers.map((header) => (
                <th key={header.key} className="px-4 py-3 font-medium">
                  <button className="flex items-center gap-2" type="button" onClick={() => onSort(header.key)}>
                    {header.label}
                    <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      {sortKey === header.key ? direction : ""}
                    </span>
                  </button>
                </th>
              ))}
              <th className="px-4 py-3 font-medium">Allocation</th>
              <th className="px-4 py-3 font-medium">Confirmation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-surface-900/50">
            {rows.map((trade) => (
              <tr key={trade.tradeId} className="transition hover:bg-white/[0.03]">
                <td className="px-4 py-4 font-mono text-xs text-slate-200">{trade.tradeId}</td>
                <td className="px-4 py-4 text-slate-100">{trade.client}</td>
                <td className="px-4 py-4 text-slate-300">{trade.assetClass}</td>
                <td className="px-4 py-4 text-slate-300">{trade.instrument}</td>
                <td className="px-4 py-4">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em]",
                      trade.status === "Exception"
                        ? "bg-red-500/15 text-red-300"
                        : trade.status === "Settled"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-blue-500/15 text-blue-200"
                    )}
                  >
                    {trade.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-100">{formatCurrency(trade.notional)}</td>
                <td className="px-4 py-4 text-slate-100">{trade.stpScore.toFixed(1)}%</td>
                <td className="px-4 py-4 text-slate-400">{trade.allocationStatus}</td>
                <td className="px-4 py-4 text-slate-400">{trade.confirmationStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
