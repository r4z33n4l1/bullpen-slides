export function RuntimeShiftVisual({ revealStep = 0 }: { revealStep?: number }) {
  const showRight = revealStep >= 1;
  const showPrimitives = revealStep >= 2;
  const showBridge = revealStep >= 3;
  const chips = [
    ["sessions", 584, 274],
    ["tools", 682, 274],
    ["hooks", 770, 274],
    ["sub-agents", 612, 320],
    ["memory", 738, 320],
    ["workflows", 675, 350],
  ];

  return (
    <svg viewBox="0 0 860 460" width="100%" height="100%" role="img" aria-label="Assistant to runtime comparison">
      <rect x="56" y="54" width="256" height="272" rx="28" fill="#fff7ee" stroke="rgba(79,52,29,0.15)" />
      <text x="88" y="108" fill="#1f1814" fontSize="28" fontWeight="700">Assistant</text>
      <text x="88" y="152" fill="#5a4639" fontSize="20">One agent</text>
      <text x="88" y="186" fill="#5a4639" fontSize="20">One thread</text>
      <text x="88" y="220" fill="#5a4639" fontSize="20">One large context</text>
      <rect x="88" y="250" width="192" height="46" rx="14" fill="#eed0ab" />
      <text x="184" y="279" textAnchor="middle" fill="#5a4639" fontSize="18" fontWeight="700">generalist prompt</text>

      {showRight && (
        <>
          <rect x="548" y="54" width="256" height="312" rx="28" fill="#fff7ee" stroke="rgba(79,52,29,0.15)" />
          <text x="580" y="108" fill="#1f1814" fontSize="28" fontWeight="700">Runtime</text>
          <text x="580" y="152" fill="#5a4639" fontSize="20">Structured work</text>
          <text x="580" y="186" fill="#5a4639" fontSize="20">Session state</text>
          <text x="580" y="220" fill="#5a4639" fontSize="20">Worker boundaries</text>
        </>
      )}

      {showPrimitives && (
        <>
          {chips.map(([label, x, y]) => (
            <g key={label}>
              <rect x={Number(x) - 40} y={Number(y) - 16} width="80" height="32" rx="12" fill="#d97706" />
              <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="#fff8f1" fontSize="12.5" fontWeight="700">
                {label}
              </text>
            </g>
          ))}
        </>
      )}

      {showBridge && (
        <>
          <path d="M338 190H522" stroke="#b45309" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
          <text x="430" y="172" textAnchor="middle" fill="#b45309" fontSize="14" fontWeight="700">mental model shift</text>
        </>
      )}
    </svg>
  );
}
