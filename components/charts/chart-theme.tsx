"use client";

import { ReactElement } from "react";
import { ResponsiveContainer } from "recharts";

export function ChartWrap({ children }: { children: ReactElement }) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </div>
  );
}
