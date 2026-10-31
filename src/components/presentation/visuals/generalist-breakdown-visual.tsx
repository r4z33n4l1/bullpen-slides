export function GeneralistBreakdownVisual({ revealStep = 0 }: { revealStep?: number }) {
  const showWarnings = revealStep >= 2;
  const showLabels = revealStep >= 3;

  return (
    <svg viewBox="0 0 520 360" width="100%" height="100%" role="img" aria-label="Single overloaded agent visual">
      <rect x="110" y="68" width="300" height="222" rx="28" fill="#fff7ee" stroke="rgba(79,52,29,0.15)" />
      <circle cx="260" cy="138" r="42" fill="#d97706" />
      <text x="260" y="144" textAnchor="middle" fill="#fff8f1" fontSize="18" fontWeight="700">Agent</text>
      <rect x="152" y="204" width="216" height="44" rx="14" fill="#eed0ab" />
      <text x="260" y="231" textAnchor="middle" fill="#5a4639" fontSize="15" fontWeight="700">all tools, all context</text>
      {showWarnings && (
        <>
          <rect x="138" y="106" width="92" height="30" rx="12" fill="#fff7ee" stroke="#b45309" />
          <rect x="290" y="252" width="104" height="30" rx="12" fill="#fff7ee" stroke="#b45309" />
        </>
      )}
      {showLabels && (
        <>
          <text x="184" y="126" textAnchor="middle" fill="#7b6657" fontSize="13.5">too much context</text>
          <text x="342" y="272" textAnchor="middle" fill="#7b6657" fontSize="13.5">hidden state</text>
        </>
      )}
    </svg>
  );
}
