export type TitleSlide = {
  template: "title";
  title: string;
  subtitle: string;
};

export type AgendaSlide = {
  template: "agenda";
  title: string;
  items: string[];
};

export type Bullet = {
  text: string;
  color?: string;
  bold?: boolean;
  step?: number;
};

export type ContentVisualSlide = {
  template: "content-visual";
  title: string;
  subtitle?: string;
  bullets: Bullet[];
  visualId?: string;
  visualStep?: number;
  footer?: string;
};

export type FullVisualSlide = {
  template: "full-visual";
  title: string;
  visualId: string;
  caption?: string;
  totalSteps?: number;
};

export type TableSlide = {
  template: "table";
  title: string;
  subtitle: string;
  columns: string[];
  rows: { cells: string[]; highlight?: boolean }[];
  footer?: string;
};

export type SlideData =
  | TitleSlide
  | AgendaSlide
  | ContentVisualSlide
  | FullVisualSlide
  | TableSlide;

export type Slide = {
  id: string;
  number: number;
  data: SlideData;
};

export function getSlideSteps(slide: Slide): number {
  const { data } = slide;
  if (data.template === "content-visual") {
    const bulletMax = data.bullets.reduce((m, b) => Math.max(m, b.step ?? 0), 0);
    return Math.max(bulletMax, data.visualStep ?? 0);
  }
  if (data.template === "full-visual") {
    return data.totalSteps ?? 0;
  }
  return 0;
}

export const presentationMeta = {
  title: "Bullpen: OpenClaw as an orchestration runtime",
  course: "OpenClaw x Convex",
  duration: "~12 minutes",
  totalSlides: 11,
};

const ORANGE = "var(--accent-strong)";
const AMBER = "var(--accent)";
const CLAY = "var(--ink-soft)";

export const slides: Slide[] = [
  {
    id: "title",
    number: 1,
    data: {
      template: "title",
      title: "Bullpen:\nOpenClaw as an\norchestration runtime",
      subtitle: "What we learned building on top of OpenClaw",
    },
  },
  {
    id: "who-we-are",
    number: 2,
    data: {
      template: "content-visual",
      title: "Who we are",
      subtitle: "We have been exploring what OpenClaw looks like when used as a runtime for structured work.",
      bullets: [
        { text: "Razeen: product, workflow, and system design", step: 1, color: ORANGE },
        { text: "Mihajlo: engineering, runtime, and systems", step: 2, color: AMBER },
        { text: "We have been building on top of OpenClaw", step: 3 },
        { text: "Bullpen is the system that came out of that exploration", step: 4, bold: true, color: CLAY },
      ],
    },
  },
  {
    id: "mental-model",
    number: 3,
    data: {
      template: "full-visual",
      title: "From assistant to runtime",
      visualId: "runtime-shift",
      caption: "Left: one assistant, one thread, one giant context. Right: sessions, tools, hooks, sub-agents, and workflows.",
      totalSteps: 4,
    },
  },
  {
    id: "didnt-work",
    number: 4,
    data: {
      template: "content-visual",
      title: "What did not work at first",
      bullets: [
        { text: "One generalist agent", step: 1, bold: true },
        { text: "Overloaded context", step: 2, color: ORANGE },
        { text: "Blurred responsibility", step: 3, color: AMBER },
        { text: "Hidden intermediate state", step: 4 },
        { text: "Hard-to-reason-about flow", step: 5 },
      ],
      footer: "The issue was not model capability. It was structure and separation.",
    },
  },
  {
    id: "worked-better",
    number: 5,
    data: {
      template: "content-visual",
      title: "What worked better",
      bullets: [
        { text: "One orchestrator", step: 1, bold: true },
        { text: "Specialized workers", step: 2, color: ORANGE },
        { text: "Scoped context", step: 3, color: AMBER },
        { text: "Explicit tasks and steps", step: 4 },
        { text: "Review in the loop", step: 5, bold: true },
      ],
      visualId: "worker-system",
      visualStep: 2,
      footer: "Cleaner boundaries made the workflow easier to reason about and review.",
    },
  },
  {
    id: "worker-model",
    number: 6,
    data: {
      template: "full-visual",
      title: "One orchestrator, many specialized workers",
      visualId: "worker-system",
      caption: "Focused workers, clearer boundaries, easier review.",
      totalSteps: 4,
    },
  },
  {
    id: "why-convex",
    number: 7,
    data: {
      template: "full-visual",
      title: "Why Convex fit",
      visualId: "architecture-stack",
      caption: "OpenClaw handles sessions, spawned workers, and tool execution. Convex tracks tasks, worker state, events, deliverables, and the reactive dashboard.",
      totalSteps: 4,
    },
  },
  {
    id: "what-changed",
    number: 8,
    data: {
      template: "table",
      title: "What changed for us",
      subtitle: "Separating execution from coordination made the system observable.",
      columns: ["Didn't work", "Worked better"],
      rows: [
        {
          cells: ["State trapped inside runs", "Queryable system state"],
        },
        {
          cells: ["Hard to inspect", "Visible workflow"],
          highlight: true,
        },
        {
          cells: ["Dashboard feels secondary", "Live updates"],
        },
        {
          cells: ["Observability stays blurry", "Cleaner observability"],
        },
      ],
      footer: "OpenClaw runs the work. Convex tracks the system state.",
    },
  },
  {
    id: "walkthrough",
    number: 9,
    data: {
      template: "full-visual",
      title: "A short example",
      visualId: "walkthrough-frame",
      caption: "Work gets decomposed. Workers stay scoped. Progress stays visible. Review happens in the loop.",
      totalSteps: 4,
    },
  },
  {
    id: "lessons",
      number: 10,
    data: {
      template: "content-visual",
      title: "What we learned",
      bullets: [
        { text: "Scoped context beats maximal context", step: 1, bold: true, color: ORANGE },
        { text: "Decomposition is harder than execution", step: 2 },
        { text: "Visibility changes trust", step: 3, color: AMBER },
        { text: "Review loops matter", step: 4, bold: true },
      ],
      visualId: "lessons-grid",
      visualStep: 2,
    },
  },
  {
    id: "close",
    number: 11,
    data: {
      template: "content-visual",
      title: "OpenClaw is the engine. Bullpen is the control tower.",
      bullets: [
        { text: "Specialized workers", step: 1, color: ORANGE },
        { text: "Live visibility", step: 2, color: AMBER },
        { text: "Structured review", step: 3, color: CLAY, bold: true },
      ],
      visualId: "architecture-stack",
      visualStep: 2,
    },
  },
];
