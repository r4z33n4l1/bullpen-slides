export function WalkthroughFrameVisual({ revealStep = 0 }: { revealStep?: number }) {
  const showCards = revealStep >= 1;
  const showReview = revealStep >= 2;
  const showTimeline = revealStep >= 3;

  return (
    <svg viewBox="0 0 860 440" width="100%" height="100%" role="img" aria-label="Walkthrough frame visual">
      <rect x="78" y="74" width="704" height="236" rx="28" fill="#fff7ee" stroke="rgba(79,52,29,0.15)" />

      {showCards && (
        <>
          <rect x="118" y="122" width="168" height="92" rx="20" fill="#f8e3c5" />
          <rect x="346" y="122" width="168" height="92" rx="20" fill="#f5d4aa" />
          <rect x="574" y="122" width="168" height="92" rx="20" fill="#eed0ab" />
          <text x="202" y="154" textAnchor="middle" fill="#5a4639" fontSize="13" fontWeight="700">01</text>
          <text x="430" y="154" textAnchor="middle" fill="#5a4639" fontSize="13" fontWeight="700">02</text>
          <text x="658" y="154" textAnchor="middle" fill="#5a4639" fontSize="13" fontWeight="700">03</text>
          <text x="202" y="180" textAnchor="middle" fill="#5a4639" fontSize="18" fontWeight="700">Decompose</text>
          <text x="430" y="180" textAnchor="middle" fill="#5a4639" fontSize="18" fontWeight="700">Worker runs</text>
          <text x="658" y="180" textAnchor="middle" fill="#5a4639" fontSize="18" fontWeight="700">State updates</text>
          <text x="202" y="202" textAnchor="middle" fill="#7b6657" fontSize="14">Task plan</text>
          <text x="430" y="202" textAnchor="middle" fill="#7b6657" fontSize="14">Scoped execution</text>
          <text x="658" y="202" textAnchor="middle" fill="#7b6657" fontSize="14">Live dashboard</text>
        </>
      )}

      {showReview && (
        <>
          <rect x="286" y="244" width="288" height="46" rx="16" fill="#b45309" />
          <text x="430" y="273" textAnchor="middle" fill="#fff8f1" fontSize="18" fontWeight="700">Review in the loop</text>
        </>
      )}

      {showTimeline && (
        <>
          <path d="M286 168H346" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
          <path d="M514 168H574" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
