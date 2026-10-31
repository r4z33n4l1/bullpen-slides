import { ArchitectureStackVisual } from "./architecture-stack-visual";
import { GeneralistBreakdownVisual } from "./generalist-breakdown-visual";
import { LessonsGridVisual } from "./lessons-grid-visual";
import { RuntimeShiftVisual } from "./runtime-shift-visual";
import { TeamDuoVisual } from "./team-duo-visual";
import { WalkthroughFrameVisual } from "./walkthrough-frame-visual";
import { WorkerSystemVisual } from "./worker-system-visual";

const registry: Record<string, React.FC<{ revealStep?: number }>> = {
  "architecture-stack": ArchitectureStackVisual,
  "generalist-breakdown": GeneralistBreakdownVisual,
  "lessons-grid": LessonsGridVisual,
  "runtime-shift": RuntimeShiftVisual,
  "team-duo": TeamDuoVisual,
  "walkthrough-frame": WalkthroughFrameVisual,
  "worker-system": WorkerSystemVisual,
};

export function SlideVisual({ id, revealStep }: { id: string; revealStep?: number }) {
  const Component = registry[id];
  if (!Component) return null;
  return <Component revealStep={revealStep} />;
}
