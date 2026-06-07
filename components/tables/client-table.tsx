import { clients } from "@/lib/mock-data";
import { formatCompactNumber, formatPercent } from "@/lib/utils";

export function ClientTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Segment</th>
              <th className="px-4 py-3 font-medium">AUM</th>
              <th className="px-4 py-3 font-medium">Open Trades</th>
              <th className="px-4 py-3 font-medium">STP</th>
              <th className="px-4 py-3 font-medium">Failed Settlements</th>
              <th className="px-4 py-3 font-medium">Avg Exception Age</th>
              <th className="px-4 py-3 font-medium">Core Asset Class</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-surface-900/50">
            {clients.map((client) => (
              <tr key={client.name}>
                <td className="px-4 py-4 text-slate-100">{client.name}</td>
                <td className="px-4 py-4 text-slate-300">{client.segment}</td>
                <td className="px-4 py-4 text-slate-300">${formatCompactNumber(client.aum)}</td>
                <td className="px-4 py-4 text-slate-300">{client.openTrades}</td>
                <td className="px-4 py-4 text-slate-300">{formatPercent(client.stpRate)}</td>
                <td className="px-4 py-4 text-slate-300">{client.failedSettlements}</td>
                <td className="px-4 py-4 text-slate-300">{client.avgExceptionAge}m</td>
                <td className="px-4 py-4 text-slate-300">{client.dominantAssetClass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
