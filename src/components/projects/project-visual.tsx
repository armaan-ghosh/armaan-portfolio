import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Bespoke, lightweight CSS mockups for each project. No external images.
 * Decorative — wrapped with aria-hidden by callers where appropriate.
 */
export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl border border-border bg-surface-2",
        className,
      )}
    >
      {project.visual === "taxlens" ? <TaxLensMock /> : <PredictorMock />}
    </div>
  );
}

function TaxLensMock() {
  return (
    <div className="flex h-full flex-col p-5">
      {/* Browser bar */}
      <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="flex-1 rounded-md bg-surface-2 px-2 py-1 font-mono text-[0.65rem] text-muted">
          amazon.ca/product
        </span>
      </div>

      {/* Listing */}
      <div className="mt-4 flex flex-1 gap-4">
        <div className="h-20 w-20 shrink-0 rounded-lg bg-gradient-to-br from-border-strong to-surface" />
        <div className="flex-1 space-y-2">
          <div className="h-2.5 w-4/5 rounded-full bg-border-strong" />
          <div className="h-2.5 w-3/5 rounded-full bg-border" />
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-xl font-semibold text-foreground">
              $129.99
            </span>
            <span className="text-xs text-muted line-through">list</span>
          </div>

          {/* TaxLens overlay chip */}
          <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent-soft px-2.5 py-1.5">
            <span className="font-mono text-[0.6rem] uppercase tracking-wider text-accent-strong">
              after tax
            </span>
            <span className="text-sm font-semibold text-accent-strong">
              $146.89
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[0.6rem] text-muted">
        <span>ON · 13% HST</span>
        <span>local · no accounts</span>
      </div>
    </div>
  );
}

function PredictorMock() {
  const bars = [62, 40, 78, 55, 70, 48, 84];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
          match prediction
        </span>
        <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-[0.6rem] text-emerald-500">
          ~70% acc
        </span>
      </div>

      {/* Match row */}
      <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-3">
        <div className="flex flex-col items-center gap-1">
          <span className="size-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
          <span className="font-mono text-[0.6rem] text-muted">HOME</span>
        </div>
        <div className="text-center">
          <span className="text-lg font-semibold text-foreground">68%</span>
          <p className="font-mono text-[0.55rem] text-muted">win prob.</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="size-7 rounded-full bg-gradient-to-br from-border-strong to-surface-2" />
          <span className="font-mono text-[0.6rem] text-muted">AWAY</span>
        </div>
      </div>

      {/* Form chart */}
      <div className="mt-4 flex flex-1 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/30 to-emerald-500/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="mt-2 font-mono text-[0.6rem] text-muted">
        last 20 matches · recency weighted
      </p>
    </div>
  );
}
