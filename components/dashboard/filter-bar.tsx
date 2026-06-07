"use client";

import { Dispatch, SetStateAction } from "react";

import { AssetClass } from "@/lib/types";

const assetClasses: Array<AssetClass | "All"> = [
  "All",
  "Equities",
  "Options",
  "Futures",
  "FX",
  "Fixed Income",
  "ETFs"
];

export function FilterBar({
  selected,
  setSelected
}: {
  selected: AssetClass | "All";
  setSelected: Dispatch<SetStateAction<AssetClass | "All">>;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {assetClasses.map((asset) => (
        <button
          key={asset}
          type="button"
          onClick={() => setSelected(asset)}
          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
            selected === asset
              ? "border-accent-cyan/40 bg-accent-cyan/10 text-white"
              : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          {asset}
        </button>
      ))}
    </div>
  );
}
