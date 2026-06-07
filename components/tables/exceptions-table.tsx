import { exceptions } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function ExceptionsTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium">Exception</th>
              <th className="px-4 py-3 font-medium">Trade</th>
              <th className="px-4 py-3 font-medium">Reason</th>
              <th className="px-4 py-3 font-medium">Severity</th>
              <th className="px-4 py-3 font-medium">Owner</th>
              <th className="px-4 py-3 font-medium">Age</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-surface-900/50">
            {exceptions.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4 font-mono text-xs text-slate-200">{item.id}</td>
                <td className="px-4 py-4 text-slate-200">{item.tradeId}</td>
                <td className="px-4 py-4 text-slate-400">{item.reason}</td>
                <td className="px-4 py-4">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em]",
                      item.severity === "Critical"
                        ? "bg-red-500/15 text-red-300"
                        : item.severity === "High"
                          ? "bg-orange-500/15 text-orange-300"
                          : item.severity === "Medium"
                            ? "bg-amber-500/15 text-amber-300"
                            : "bg-blue-500/15 text-blue-200"
                    )}
                  >
                    {item.severity}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-300">{item.owner}</td>
                <td className="px-4 py-4 text-slate-300">{item.ageMinutes}m</td>
                <td className="px-4 py-4 text-slate-300">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
