export function TeamDuoVisual() {
  return (
    <svg viewBox="0 0 520 360" width="100%" height="100%" role="img" aria-label="Team introduction visual">
      <defs>
        <linearGradient id="duo-bg" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#fff5ea" />
          <stop offset="100%" stopColor="#f6dfc2" />
        </linearGradient>
      </defs>
      <rect x="36" y="42" width="448" height="276" rx="34" fill="url(#duo-bg)" stroke="rgba(95,64,36,0.15)" />
      <circle cx="182" cy="138" r="42" fill="#d97706" opacity="0.92" />
      <circle cx="338" cy="138" r="42" fill="#b45309" opacity="0.92" />
      <rect x="126" y="196" width="112" height="70" rx="22" fill="#fffaf4" stroke="rgba(95,64,36,0.12)" />
      <rect x="282" y="196" width="112" height="70" rx="22" fill="#fffaf4" stroke="rgba(95,64,36,0.12)" />
      <text x="182" y="214" textAnchor="middle" fill="#1f1814" fontSize="16" fontWeight="700">Razeen</text>
      <text x="182" y="238" textAnchor="middle" fill="#6b5547" fontSize="13">product</text>
      <text x="182" y="256" textAnchor="middle" fill="#6b5547" fontSize="13">workflow</text>
      <text x="338" y="214" textAnchor="middle" fill="#1f1814" fontSize="16" fontWeight="700">Mihajlo</text>
      <text x="338" y="238" textAnchor="middle" fill="#6b5547" fontSize="13">runtime</text>
      <text x="338" y="256" textAnchor="middle" fill="#6b5547" fontSize="13">systems</text>
      <path d="M238 138H282" stroke="#7b6657" strokeWidth="5" strokeLinecap="round" />
      <text x="260" y="124" textAnchor="middle" fill="#7b6657" fontSize="12" letterSpacing="0.18em">BUILDING BULLPEN</text>
    </svg>
  );
}
