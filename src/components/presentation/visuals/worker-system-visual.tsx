export function WorkerSystemVisual({ revealStep = 0 }: { revealStep?: number }) {
  const showWorkers = revealStep >= 1;
  const showReview = revealStep >= 2;
  const showFlow = revealStep >= 3;

  return (
    <svg viewBox="0 0 620 380" width="100%" height="100%" role="img" aria-label="Orchestrator and workers visual">
      <rect x="214" y="42" width="192" height="60" rx="18" fill="#d97706" />
      <text x="310" y="79" textAnchor="middle" fill="#fff8f1" fontSize="22" fontWeight="700">Orchestrator</text>

      {showWorkers && (
        <>
          {[
            [72, 184, "Frontend"],
            [240, 184, "Backend"],
            [408, 184, "QA review"],
          ].map(([x, y, label]) => (
            <g key={String(label)}>
              <rect x={Number(x)} y={Number(y)} width="140" height="62" rx="18" fill="#fff7ee" stroke="rgba(79,52,29,0.15)" />
              <text x={Number(x) + 70} y={Number(y) + 38} textAnchor="middle" fill="#1f1814" fontSize="18" fontWeight="700">
                {label}
              </text>
            </g>
          ))}
        </>
      )}

      {showFlow && (
        <>
          <path d="M310 102V168" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
          <path d="M310 152C270 152 220 164 142 184" stroke="#b45309" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M310 152H310" stroke="#b45309" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M310 152C350 152 400 164 478 184" stroke="#b45309" strokeWidth="4" strokeLinecap="round" fill="none" />
          <text x="310" y="138" textAnchor="middle" fill="#7b6657" fontSize="14">scoped tasks</text>
        </>
      )}

      {showReview && (
        <>
          <rect x="190" y="300" width="240" height="42" rx="14" fill="#eed0ab" />
          <text x="310" y="326" textAnchor="middle" fill="#5a4639" fontSize="16" fontWeight="700">review in the loop</text>
        </>
      )}
    </svg>
  );
}
