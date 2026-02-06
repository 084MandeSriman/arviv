import { useEffect, useState } from "react";

export default function AnalyticsGraph() {
  const [points, setPoints] = useState(generateData());
  const [threatLevel, setThreatLevel] = useState(generateThreatLevel());
  const [pulseActive, setPulseActive] = useState(false);

  // Re-generate data every few seconds (live effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(generateData());
      setThreatLevel(generateThreatLevel());
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>AI THREAT DETECTION · REAL-TIME</span>
        <span style={{...styles.badge, backgroundColor: threatLevel.color}}>
          {threatLevel.status}
        </span>
      </div>

      <div style={styles.metrics}>
        <div style={styles.metric}>
          <span style={styles.metricValue}>2.4K</span>
          <span style={styles.metricLabel}>Scans/min</span>
        </div>
        <div style={styles.metric}>
          <span style={styles.metricValue}>99.7%</span>
          <span style={styles.metricLabel}>Accuracy</span>
        </div>
      </div>

      <svg viewBox="0 0 300 140" style={styles.svg}>
        {/* Animated background grid */}
        {[25, 50, 75, 100, 125].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="300"
            y2={y}
            stroke="rgba(255,255,255,0.06)"
            strokeDasharray="2,4"
          />
        ))}
        
        {/* Vertical grid */}
        {[50, 100, 150, 200, 250].map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="140"
            stroke="rgba(255,255,255,0.04)"
            strokeDasharray="1,3"
          />
        ))}

        {/* Area fill under line */}
        <path
          d={`M 20,${140 - points[0]} ${points
            .map((p, i) => `L ${i * 40 + 20},${140 - p}`)
            .join(" ")} L ${(points.length - 1) * 40 + 20},140 L 20,140 Z`}
          fill="url(#areaGradient)"
          style={{
            transition: "all 1.2s ease",
          }}
        />

        {/* Enhanced bars with glow effect */}
        {points.map((p, i) => (
          <g key={i}>
            <rect
              x={i * 40 + 14}
              y={140 - p}
              width="12"
              height={p}
              rx="2"
              fill="url(#barGradient)"
              style={{
                transition: "all 1.2s ease",
                filter: pulseActive ? "drop-shadow(0 0 8px rgba(34,211,238,0.8))" : "none",
              }}
            />
            {/* Data points */}
            <circle
              cx={i * 40 + 20}
              cy={140 - p}
              r="3"
              fill="#22d3ee"
              style={{
                filter: "drop-shadow(0 0 4px rgba(34,211,238,0.9))",
                transition: "all 1.2s ease",
              }}
            />
          </g>
        ))}

        {/* Enhanced line with animation */}
        <polyline
          points={points
            .map((p, i) => `${i * 40 + 20},${140 - p}`)
            .join(" ")}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(0 0 8px rgba(34,211,238,0.6))",
            transition: "all 1.2s ease",
          }}
        />

        {/* Threat indicators */}
        {points.map((p, i) => {
          if (p > 80) {
            return (
              <g key={`threat-${i}`}>
                <circle
                  cx={i * 40 + 20}
                  cy={140 - p - 10}
                  r="4"
                  fill="#ef4444"
                  style={{
                    animation: "pulse 2s infinite",
                  }}
                />
                <text
                  x={i * 40 + 20}
                  y={140 - p - 20}
                  textAnchor="middle"
                  fill="#ef4444"
                  fontSize="8"
                  fontWeight="bold"
                >
                  ⚠
                </text>
              </g>
            );
          }
          return null;
        })}

        {/* Enhanced gradients */}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}

/* Fake live data */
function generateData() {
  return Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 80) + 30
  );
}

function generateThreatLevel() {
  const levels = [
    { status: "SECURE", color: "#16a34a" },
    { status: "MONITOR", color: "#eab308" },
    { status: "ALERT", color: "#ef4444" },
  ];
  return levels[Math.floor(Math.random() * levels.length)];
}

/* INLINE STYLES */
const styles = {
  container: {
    height: "280px",
    borderRadius: "16px",
    padding: "16px",
    background:
      "linear-gradient(145deg, #020617 0%, #0f172a 50%, #020617 100%)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.3)",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    color: "#e5e7eb",
    fontSize: "11px",
  },
  title: {
    opacity: 0.9,
    fontWeight: 600,
    letterSpacing: "0.5px",
  },
  badge: {
    padding: "3px 10px",
    borderRadius: "999px",
    fontSize: "9px",
    fontWeight: 700,
    color: "white",
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
  metrics: {
    display: "flex",
    gap: "20px",
    marginBottom: "16px",
  },
  metric: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  metricValue: {
    color: "#22d3ee",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1,
    textShadow: "0 0 10px rgba(34,211,238,0.5)",
  },
  metricLabel: {
    color: "#94a3b8",
    fontSize: "10px",
    opacity: 0.8,
    marginTop: "2px",
  },
  svg: {
    width: "100%",
    height: "160px",
  },
};



