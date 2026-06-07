"use client";

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import { assetClassVolumes } from "@/lib/mock-data";
import { ChartWrap } from "@/components/charts/chart-theme";

export function AssetClassChart() {
  return (
    <ChartWrap>
      <BarChart data={assetClassVolumes}>
        <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
        <XAxis dataKey="assetClass" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{ background: "#0f172a", border: "1px solid rgba(148,163,184,0.16)", borderRadius: "16px" }}
          labelStyle={{ color: "#e2e8f0" }}
        />
        <Bar dataKey="volume" fill="#6ca7ff" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ChartWrap>
  );
}
