import { fixSessions } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function FixSessionsTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium">Session</th>
              <th className="px-4 py-3 font-medium">Counterparty</th>
              <th className="px-4 py-3 font-medium">Region</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Uptime</th>
              <th className="px-4 py-3 font-medium">Msg Rate</th>
              <th className="px-4 py-3 font-medium">Rejects</th>
              <th className="px-4 py-3 font-medium">Heartbeat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-surface-900/50">
            {fixSessions.map((session) => (
              <tr key={session.session}>
                <td className="px-4 py-4 font-mono text-xs text-slate-200">{session.session}</td>
                <td className="px-4 py-4 text-slate-100">{session.counterparty}</td>
                <td className="px-4 py-4 text-slate-300">{session.region}</td>
                <td className="px-4 py-4">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em]",
                      session.status === "Connected"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : session.status === "Degraded"
                          ? "bg-amber-500/15 text-amber-300"
                          : "bg-red-500/15 text-red-300"
                    )}
                  >
                    {session.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-300">{session.uptime.toFixed(2)}%</td>
                <td className="px-4 py-4 text-slate-300">{session.msgRate}/s</td>
                <td className="px-4 py-4 text-slate-300">{session.rejects}</td>
                <td className="px-4 py-4 text-slate-300">{session.lastHeartbeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
