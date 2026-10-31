export function ArchitectureStackVisual({ revealStep = 0 }: { revealStep?: number }) {
  const showState = revealStep >= 1;
  const showExecution = revealStep >= 2;
  const showConnectors = revealStep >= 3;

  return (
    <svg viewBox="0 0 820 440" width="100%" height="100%" role="img" aria-label="Dashboard, Convex, and OpenClaw architecture stack">
      <rect x="190" y="40" width="440" height="74" rx="22" fill="#fff7ee" stroke="rgba(79,52,29,0.15)" />
      <text x="410" y="84" textAnchor="middle" fill="#1f1814" fontSize="28" fontWeight="700">Dashboard</text>
      <text x="410" y="104" textAnchor="middle" fill="#7b6657" fontSize="15">Live operator view</text>

      {showState && (
        <>
          <rect x="154" y="166" width="512" height="88" rx="24" fill="#d97706" />
          <text x="410" y="208" textAnchor="middle" fill="#fff8f1" fontSize="30" fontWeight="700">Convex</text>
          <text x="410" y="232" textAnchor="middle" fill="#fff3e4" fontSize="17">Tasks, worker state, events, deliverables</text>
        </>
      )}

      {showExecution && (
        <>
          <rect x="140" y="304" width="540" height="88" rx="24" fill="#3a2c23" />
          <text x="410" y="346" textAnchor="middle" fill="#fff8f1" fontSize="30" fontWeight="700">OpenClaw</text>
          <text x="410" y="370" textAnchor="middle" fill="#ead6c5" fontSize="17">Sessions, tools, worker execution</text>
        </>
      )}

      {showConnectors && (
        <>
          <path d="M410 114V166" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
          <path d="M410 254V304" stroke="#8a5a2b" strokeWidth="5" strokeLinecap="round" />
          <text x="430" y="144" fill="#7b6657" fontSize="14">visibility</text>
          <text x="430" y="286" fill="#7b6657" fontSize="14">coordination</text>
        </>
      )}
    </svg>
  );
}
