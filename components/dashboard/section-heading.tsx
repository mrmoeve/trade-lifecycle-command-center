import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{eyebrow}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 max-w-3xl text-sm text-slate-400">{description}</p>
      </div>
      {action}
    </div>
  );
}
