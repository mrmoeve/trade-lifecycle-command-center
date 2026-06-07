"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";

import { lifecycleBreakdown } from "@/lib/mock-data";
import { ChartWrap } from "@/components/charts/chart-theme";

const colors = ["#3dd9ff", "#6ca7ff", "#3ddc97", "#ffb347", "#f59e0b", "#ff6b7a"];

export function LifecycleChart() {
  return (
    <ChartWrap>
      <PieChart>
        <Pie
          data={lifecycleBreakdown}
          dataKey="value"
          nameKey="stage"
          innerRadius={72}
          outerRadius={104}
          paddingAngle={4}
        >
          {lifecycleBreakdown.map((entry, index) => (
            <Cell key={entry.stage} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ background: "#0f172a", border: "1px solid rgba(148,163,184,0.16)", borderRadius: "16px" }}
          labelStyle={{ color: "#e2e8f0" }}
        />
      </PieChart>
    </ChartWrap>
  );
}
