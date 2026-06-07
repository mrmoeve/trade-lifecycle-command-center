import { settlements } from "@/lib/mock-data";
import { cn, formatCurrency } from "@/lib/utils";

export function SettlementTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium">Trade</th>
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Asset Class</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Settle Date</th>
              <th className="px-4 py-3 font-medium">Custodian</th>
              <th className="px-4 py-3 font-medium">Affirmations</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-surface-900/50">
            {settlements.map((settlement) => (
              <tr key={settlement.tradeId}>
                <td className="px-4 py-4 font-mono text-xs text-slate-200">{settlement.tradeId}</td>
                <td className="px-4 py-4 text-slate-100">{settlement.client}</td>
                <td className="px-4 py-4 text-slate-300">{settlement.assetClass}</td>
                <td className="px-4 py-4 text-slate-100">{formatCurrency(settlement.amount, settlement.currency)}</td>
                <td className="px-4 py-4 text-slate-300">{settlement.settlementDate}</td>
                <td className="px-4 py-4 text-slate-300">{settlement.custodian}</td>
                <td className="px-4 py-4 text-slate-300">{settlement.affirmations}%</td>
                <td className="px-4 py-4">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em]",
                      settlement.settlementStatus === "Settled"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : settlement.settlementStatus === "Ready"
                          ? "bg-blue-500/15 text-blue-200"
                          : settlement.settlementStatus === "At Risk"
                            ? "bg-amber-500/15 text-amber-300"
                            : "bg-red-500/15 text-red-300"
                    )}
                  >
                    {settlement.settlementStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
