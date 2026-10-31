export function LessonsGridVisual({ revealStep = 0 }: { revealStep?: number }) {
  const count = Math.max(1, Math.min(4, revealStep));
  const cards = [
    ["Scoped context", "#fff7ee"],
    ["Decomposition", "#f5d4aa"],
    ["Visibility", "#eed0ab"],
    ["Review loops", "#e7c9a5"],
  ];

  return (
    <svg viewBox="0 0 520 360" width="100%" height="100%" role="img" aria-label="Lessons learned visual">
      {cards.slice(0, count).map(([label, fill], index) => {
        const x = index % 2 === 0 ? 44 : 272;
        const y = index < 2 ? 54 : 194;
        return (
          <g key={label}>
            <rect x={x} y={y} width="204" height="112" rx="28" fill={fill} stroke="rgba(79,52,29,0.15)" />
            <text x={x + 102} y={y + 62} textAnchor="middle" fill="#1f1814" fontSize="24" fontWeight="700">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
