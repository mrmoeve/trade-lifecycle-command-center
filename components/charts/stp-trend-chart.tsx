"use client";

import { Area, AreaChart, CartesianGrid, Line, Tooltip, XAxis, YAxis } from "recharts";

import { stpTrend } from "@/lib/mock-data";
import { ChartWrap } from "@/components/charts/chart-theme";

export function StpTrendChart() {
  return (
    <ChartWrap>
      <AreaChart data={stpTrend}>
        <defs>
          <linearGradient id="stpFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3dd9ff" stopOpacity={0.35} />
            <stop offset="95%" stopColor="#3dd9ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
        <XAxis dataKey="label" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} domain={[90, 100]} />
        <Tooltip
          contentStyle={{ background: "#0f172a", border: "1px solid rgba(148,163,184,0.16)", borderRadius: "16px" }}
          labelStyle={{ color: "#e2e8f0" }}
        />
        <Area type="monotone" dataKey="stp" stroke="#3dd9ff" fill="url(#stpFill)" strokeWidth={2.5} />
        <Line type="monotone" dataKey="exceptions" stroke="#ff6b7a" strokeWidth={2} dot={false} />
      </AreaChart>
    </ChartWrap>
  );
}
