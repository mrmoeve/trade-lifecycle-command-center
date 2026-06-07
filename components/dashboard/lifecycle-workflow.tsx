const steps = [
  { name: "Order Capture", detail: "OMS / EMS ingestion" },
  { name: "Allocation", detail: "Fund and account splits" },
  { name: "Confirmation", detail: "Affirmation and economics" },
  { name: "Matching", detail: "Venue, CCP, and custodian matching" },
  { name: "Settlement", detail: "Cash and securities movement" }
];

export function LifecycleWorkflow() {
  return (
    <div className="grid gap-4 xl:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step.name} className="relative rounded-3xl border border-white/10 bg-surface-900/70 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Step {index + 1}</span>
            <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-accent-cyan">
              Active
            </span>
          </div>
          <h5 className="font-display text-lg font-semibold text-white">{step.name}</h5>
          <p className="mt-2 text-sm text-slate-400">{step.detail}</p>
        </div>
      ))}
    </div>
  );
}
