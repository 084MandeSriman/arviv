import React, { useState, useEffect, useRef } from 'react';

const CultureIcon = ({ type }) => {
  const icons = {
    growth: () => (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <defs>
          <linearGradient id="growth" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981">
              <animate attributeName="stop-color" values="#10b981;#34d399;#10b981" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#059669">
              <animate attributeName="stop-color" values="#059669;#10b981;#059669" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <path d="M20 80 Q30 60 40 70 T60 50 T80 20" stroke="url(#growth)" strokeWidth="4" fill="none" strokeLinecap="round" className="path-draw">
          <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2s" fill="freeze" />
        </path>
        <circle cx="80" cy="20" r="6" fill="url(#growth)" className="pulse-star">
          <animate attributeName="r" values="6;8;6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <path d="M75 15 L80 20 L85 15 M80 20 L80 25" stroke="url(#growth)" strokeWidth="2" strokeLinecap="round" className="draw-in" />
        {[20, 40, 60].map((x, i) => (
          <circle key={i} cx={x} cy={80 - i * 15} r="3" fill="url(#growth)" className="pulse-node" style={{ animationDelay: `${i * 0.3}s` }}>
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    ),
    collab: () => (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <defs>
          <linearGradient id="collab" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6;#60a5fa;#3b82f6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#6366f1">
              <animate attributeName="stop-color" values="#6366f1;#3b82f6;#6366f1" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <g className="orbit-group">
          <circle cx="30" cy="35" r="14" fill="url(#collab)" opacity="0.8" className="orbit-1">
            <animate attributeName="r" values="14;16;14" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="35" r="14" fill="url(#collab)" opacity="0.8" className="orbit-2">
            <animate attributeName="r" values="14;16;14" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="65" r="14" fill="url(#collab)" opacity="0.8" className="orbit-3">
            <animate attributeName="r" values="14;16;14" dur="3s" begin="2s" repeatCount="indefinite" />
          </circle>
          <path d="M38 48 L45 58" stroke="url(#collab)" strokeWidth="3" strokeLinecap="round" className="connect-line">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M62 48 L55 58" stroke="url(#collab)" strokeWidth="3" strokeLinecap="round" className="connect-line" style={{ animationDelay: '0.5s' }}>
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </path>
          <circle cx="30" cy="35" r="8" fill="white" opacity="0.9" className="float-bounce" />
          <circle cx="70" cy="35" r="8" fill="white" opacity="0.9" className="float-bounce" style={{ animationDelay: '0.3s' }} />
          <circle cx="50" cy="65" r="8" fill="white" opacity="0.9" className="float-bounce" style={{ animationDelay: '0.6s' }} />
        </g>
      </svg>
    ),
    innovation: () => (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <defs>
          <linearGradient id="innovation" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7">
              <animate attributeName="stop-color" values="#a855f7;#c084fc;#a855f7" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#a855f7;#8b5cf6" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="40" r="22" fill="none" stroke="url(#innovation)" strokeWidth="3" className="pulse-ring">
          <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <path d="M40 60 L50 70 L60 60" fill="url(#innovation)" className="morph-triangle">
          <animate attributeName="d" values="M40 60 L50 70 L60 60; M38 58 L50 72 L62 58; M40 60 L50 70 L60 60" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M45 70 L55 70 L52 75 L48 75 Z" fill="url(#innovation)" />
        <circle cx="50" cy="40" r="10" fill="url(#innovation)" opacity="0.3" className="pulse-core">
          <animate attributeName="r" values="10;12;10" dur="1.5s" repeatCount="indefinite" />
        </circle>
        {[
          { x: 50, y: 32, x2: 50, y2: 25 },
          { x: 42, y: 35, x2: 37, y2: 30 },
          { x: 58, y: 35, x2: 63, y2: 30 },
          { x: 42, y: 45, x2: 37, y2: 50 },
          { x: 58, y: 45, x2: 63, y2: 50 }
        ].map((line, i) => (
          <path
            key={i}
            d={`M${line.x} ${line.y} L${line.x2} ${line.y2}`}
            stroke="url(#innovation)"
            strokeWidth="2"
            strokeLinecap="round"
            className="energy-ray"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <animate attributeName="stroke-width" values="2;3;2" dur="1s" repeatCount="indefinite" />
          </path>
        ))}
      </svg>
    ),
    purpose: () => (
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <defs>
          <linearGradient id="purpose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c">
              <animate attributeName="stop-color" values="#fb923c;#fdba74;#fb923c" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#ef4444">
              <animate attributeName="stop-color" values="#ef4444;#fb923c;#ef4444" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <g className="purpose-compass">
          <circle cx="50" cy="50" r="27" fill="none" stroke="url(#purpose)" strokeWidth="3" className="spin-slow">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="17" fill="none" stroke="url(#purpose)" strokeWidth="3" className="spin-reverse">
            <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="15s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="7" fill="url(#purpose)" className="pulse-center">
            <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite" />
          </circle>
          {[
            { x1: 50, y1: 25, x2: 50, y2: 15 },
            { x1: 75, y1: 50, x2: 85, y2: 50 },
            { x1: 50, y1: 75, x2: 50, y2: 85 },
            { x1: 25, y1: 50, x2: 15, y2: 50 }
          ].map((line, i) => (
            <path
              key={i}
              d={`M${line.x1} ${line.y1} L${line.x2} ${line.y2}`}
              stroke="url(#purpose)"
              strokeWidth="2"
              strokeLinecap="round"
              className="pulse-ray"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <animate attributeName="stroke-width" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
            </path>
          ))}
          {[
            { x1: 65, y1: 35, x2: 71, y2: 29 },
            { x1: 65, y1: 65, x2: 71, y2: 71 },
            { x1: 35, y1: 65, x2: 29, y2: 71 },
            { x1: 35, y1: 35, x2: 29, y2: 29 }
          ].map((line, i) => (
            <path
              key={i}
              d={`M${line.x1} ${line.y1} L${line.x2} ${line.y2}`}
              stroke="url(#purpose)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="spark-line"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </path>
          ))}
        </g>
      </svg>
    ),
    worklife: () => (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="worklife" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6;#60a5fa;#3b82f6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#3b82f6;#8b5cf6" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="37" fill="none" stroke="url(#worklife)" strokeWidth="3" className="pulse-balance">
          <animate attributeName="r" values="37;40;37" dur="3s" repeatCount="indefinite" />
        </circle>
        <path d="M30 50 Q50 30 70 50" fill="none" stroke="url(#worklife)" strokeWidth="4" className="balance-up">
          <animate attributeName="d" values="M30 50 Q50 30 70 50; M30 50 Q50 35 70 50; M30 50 Q50 30 70 50" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M30 50 Q50 70 70 50" fill="none" stroke="url(#worklife)" strokeWidth="4" className="balance-down">
          <animate attributeName="d" values="M30 50 Q50 70 70 50; M30 50 Q50 65 70 50; M30 50 Q50 70 70 50" dur="4s" begin="2s" repeatCount="indefinite" />
        </path>
        <circle cx="50" cy="50" r="6" fill="url(#worklife)" className="balance-center">
          <animate attributeName="r" values="6;8;6" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    diversity: () => (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="diversity" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981">
              <animate attributeName="stop-color" values="#10b981;#34d399;#10b981" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#14b8a6">
              <animate attributeName="stop-color" values="#14b8a6;#10b981;#14b8a6" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <g className="diversity-grid">
          <circle cx="30" cy="30" r="17" fill="url(#diversity)" opacity="0.8" className="orbit-1">
            <animate attributeName="cx" values="30;32;30" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="30" r="15" fill="url(#diversity)" opacity="0.6" className="orbit-2">
            <animate attributeName="cx" values="70;68;70" dur="4s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="70" r="15" fill="url(#diversity)" opacity="0.7" className="orbit-3">
            <animate attributeName="cy" values="70;72;70" dur="4s" begin="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="70" r="17" fill="url(#diversity)" opacity="0.9" className="orbit-4">
            <animate attributeName="cy" values="70;68;70" dur="4s" begin="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="10" fill="url(#diversity)" className="center-core">
            <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
          </circle>
          {[
            { x1: 30, y1: 30, x2: 50, y2: 50 },
            { x1: 70, y1: 30, x2: 50, y2: 50 },
            { x1: 30, y1: 70, x2: 50, y2: 50 },
            { x1: 70, y1: 70, x2: 50, y2: 50 }
          ].map((line, i) => (
            <path
              key={i}
              d={`M${line.x1} ${line.y1} L${line.x2} ${line.y2}`}
              stroke="url(#diversity)"
              strokeWidth="2"
              strokeLinecap="round"
              className="connect-line"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </path>
          ))}
        </g>
      </svg>
    ),
    learning: () => (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="learning" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981">
              <animate attributeName="stop-color" values="#10b981;#34d399;#10b981" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#059669">
              <animate attributeName="stop-color" values="#059669;#10b981;#059669" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <rect x="20" y="30" width="60" height="40" rx="6" fill="url(#learning)" opacity="0.8" className="book-morph">
          <animate attributeName="y" values="30;28;30" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="25" y="35" width="50" height="30" rx="3" fill="white" opacity="0.9" />
        {[30, 45, 50, 55].map((y, i) => (
          <line
            key={i}
            x1="30"
            y1={y}
            x2={65 - i * 5}
            y2={y}
            stroke="url(#learning)"
            strokeWidth="2"
            className="scan-line"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <animate attributeName="x2" values="30;65;30" dur="3s" repeatCount="indefinite" />
          </line>
        ))}
        <circle cx="50" cy="20" r="10" fill="url(#learning)" opacity="0.6" className="float-bounce">
          <animate attributeName="r" values="10;12;10" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    mentorship: () => (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="mentorship" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6;#60a5fa;#3b82f6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#1d4ed8">
              <animate attributeName="stop-color" values="#1d4ed8;#3b82f6;#1d4ed8" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <circle cx="35" cy="35" r="17" fill="url(#mentorship)" opacity="0.8" className="pulse-mentor">
          <animate attributeName="r" values="17;19;17" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="65" cy="35" r="14" fill="url(#mentorship)" opacity="0.6" className="pulse-mentee">
          <animate attributeName="r" values="14;16;14" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <path d="M35 50 Q50 40 65 47" stroke="url(#mentorship)" strokeWidth="4" fill="none" className="connection-path">
          <animate attributeName="d" values="M35 50 Q50 40 65 47; M35 50 Q50 45 65 47; M35 50 Q50 40 65 47" dur="3s" repeatCount="indefinite" />
        </path>
        <circle cx="35" cy="35" r="10" fill="white" opacity="0.9" className="float-bounce" />
        <circle cx="65" cy="35" r="8" fill="white" opacity="0.9" className="float-bounce" style={{ animationDelay: '0.3s' }} />
        <path d="M45 65 L55 65 L50 75 Z" fill="url(#mentorship)" opacity="0.7" className="morph-triangle">
          <animate attributeName="d" values="M45 65 L55 65 L50 75 Z; M43 65 L57 65 L50 77 Z; M45 65 L55 65 L50 75 Z" dur="2s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    career: () => (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="career" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7">
              <animate attributeName="stop-color" values="#a855f7;#c084fc;#a855f7" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#7c3aed">
              <animate attributeName="stop-color" values="#7c3aed;#a855f7;#7c3aed" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <path d="M20 80 Q30 60 40 75 T60 55 T80 20" stroke="url(#career)" strokeWidth="4" fill="none" strokeLinecap="round" className="career-path">
          <animate attributeName="d" values="M20 80 Q30 60 40 75 T60 55 T80 20; M20 80 Q30 55 40 70 T60 50 T80 15; M20 80 Q30 60 40 75 T60 55 T80 20" dur="4s" repeatCount="indefinite" />
        </path>
        <circle cx="80" cy="20" r="8" fill="url(#career)" className="pulse-peak">
          <animate attributeName="r" values="8;10;8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <path d="M75 15 L80 20 L85 15 M80 20 L80 25" stroke="url(#career)" strokeWidth="2" className="draw-in" />
        {[
          { x: 20, y: 80 },
          { x: 40, y: 75 },
          { x: 60, y: 55 }
        ].map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="url(#career)"
            className="milestone-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    )
  };

  const IconComponent = icons[type];
  return IconComponent ? <IconComponent /> : null;
};

const FloatingParticles = ({ density = 30, color = 'purple' }) => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const newParticles = Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      color: color === 'purple' ? 
        (Math.random() > 0.5 ? 'from-purple-400/20 to-pink-400/20' : 'from-blue-400/20 to-cyan-400/20') :
        (Math.random() > 0.5 ? 'from-emerald-400/20 to-green-400/20' : 'from-amber-400/20 to-orange-400/20'),
      shape: Math.random() > 0.3 ? 'circle' : 'blob'
    }));
    setParticles(newParticles);
  }, [density, color]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute ${particle.shape === 'circle' ? 'rounded-full' : 'rounded-[40%]'} bg-gradient-to-r ${particle.color} animate-particle-float`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            filter: 'blur(1px)',
            willChange: 'transform'
          }}
        />
      ))}
    </div>
  );
};

const HolographicCard = ({ children, className = '', gradient = 'from-purple-500 via-pink-500 to-blue-500' }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      {/* Holographic effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(255,255,255,0.1) 0%, 
            transparent 50%)`
        }}
      />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl p-[1px]">
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient}/0 via-${gradient.split(' ')[1]}/50 to-${gradient.split(' ')[2]}/0 animate-border-flow opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const InteractiveStat = ({ value, label, color = 'purple', delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const endValue = typeof value === 'string' ? value : parseInt(value);
    if (typeof endValue === 'number') {
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setDisplayValue(endValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [value]);

  return (
    <div 
      className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 text-center"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
        {typeof value === 'string' ? value : displayValue.toLocaleString()}
      </div>
      <div className="text-sm text-slate-400 font-medium group-hover:text-white transition-colors duration-300">
        {label}
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${color}/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </div>
  );
};

export const OurCulture = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particle-float {
        0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
        33% { transform: translate3d(20px, -30px, 0) scale(1.1); }
        66% { transform: translate3d(-20px, 15px, 0) scale(0.9); }
      }
      
      @keyframes border-flow {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      
      @keyframes grid-move {
        0% { background-position: 0 0; }
        100% { background-position: 50px 50px; }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      @keyframes float-3d {
        0%, 100% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
        33% { transform: translate3d(10px, -10px, 20px) rotateX(5deg) rotateY(5deg); }
        66% { transform: translate3d(-10px, 5px, -20px) rotateX(-5deg) rotateY(-5deg); }
      }
      
      @keyframes particle-burst {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(3); opacity: 0; }
      }

      @keyframes path-draw {
        to { stroke-dasharray: 100 0; }
      }

      @keyframes draw-in {
        to { stroke-dasharray: 20 0; }
      }

      .animate-particle-float {
        animation: particle-float 15s ease-in-out infinite;
      }
      
      .animate-border-flow {
        background-size: 200% auto;
        animation: border-flow 3s linear infinite;
      }
      
      .animate-shimmer {
        background-size: 200% auto;
        animation: shimmer 2s linear infinite;
      }
      
      .animate-grid-move {
        animation: grid-move 20s linear infinite;
      }

      .animate-float-3d {
        animation: float-3d 6s ease-in-out infinite;
      }

      .path-draw {
        stroke-dasharray: 0 300;
        animation: path-draw 2s ease-out forwards;
      }

      .draw-in {
        stroke-dasharray: 0 20;
        animation: draw-in 0.5s ease-out 1.5s forwards;
      }

      .pulse-star, .pulse-node, .pulse-center, .pulse-peak, .milestone-pulse, .pulse-mentor, .pulse-mentee, .pulse-core, .pulse-ray, .pulse-ring, .pulse-balance {
        animation: pulse 2s ease-in-out infinite;
      }

      .spin-slow {
        animation: spin 20s linear infinite;
      }

      .spin-reverse {
        animation: spin 15s linear infinite reverse;
      }

      .float-bounce {
        animation: bounce 2s ease-in-out infinite;
      }

      .orbit-1, .orbit-2, .orbit-3, .orbit-4 {
        animation: float-3d 4s ease-in-out infinite;
      }

      .connect-line, .energy-ray, .spark-line {
        animation: pulse 2s ease-in-out infinite;
      }

      .morph-triangle, .book-morph, .balance-up, .balance-down, .career-path, .connection-path {
        animation: float-3d 3s ease-in-out infinite;
      }

      .scan-line {
        animation: scan 3s linear infinite;
      }

      @keyframes scan {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // 3D tilt effect for cards
    const cards = document.querySelectorAll('.culture-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = ((x - centerX) / centerX) * 5;
        const rotateX = ((centerY - y) / centerY) * 5;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Floating SVG Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 text-blue-200 animate-float" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.3">
            <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
        <svg className="absolute top-40 right-20 w-24 h-24 text-purple-200 animate-bounce" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" opacity="0.4" />
        </svg>
        <svg className="absolute bottom-32 left-1/4 w-28 h-28 text-emerald-200 animate-spin-slow" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" fill="currentColor" opacity="0.3" rx="10" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Hero Section */}
        <div className={`text-center mb-16 sm:mb-24 pt-8 sm:pt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Logo */}
          <div className="mb-8 sm:mb-12 relative">
            <div className="w-24 h-24 sm:w-32 md:w-40 sm:h-32 md:h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100" fill="none">
                <path d="M50 10L75 30V70L50 90L25 70V30L50 10Z" fill="url(#heroGradient)" />
                <circle cx="50" cy="50" r="25" fill="white" className="animate-pulse" opacity="0.2" />
                <circle cx="50" cy="50" r="15" fill="url(#heroGradient)" className="pulse-center" />
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7">
                      <animate attributeName="stop-color" values="#a855f7;#ec4899;#a855f7" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#3b82f6">
                      <animate attributeName="stop-color" values="#3b82f6;#a855f7;#3b82f6" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 text-slate-900 px-4">
            Our Culture
          </h1>
          
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 font-light px-4">
              Our culture is built on customer satisfaction, quality service and professional integrity. 
              With a strong team of IT & ITES professionals and a customer-centric engagement model, 
              we deliver consistent value and build long-term partnerships across industries.
            </p>
            
            {/* Animated Underline */}
            <div className="w-32 sm:w-48 md:w-64 h-1 mx-auto mt-6 sm:mt-8 relative">
              <div className="absolute inset-0 bg-slate-400" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <div className="w-6 h-10 mx-auto border-2 border-slate-400 rounded-full p-1">
              <div className="w-1 h-3 mx-auto bg-slate-600 rounded-full" />
            </div>
          </div>
        </div>

{/* Culture Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {[
            {
              type: 'growth',
              title: 'Customer Satisfaction',
              description: 'Commitment to surpass customer expectations through quality delivery and continuous engagement.'
            },
            {
              type: 'collab',
              title: 'Strong Team',
              description: 'Skilled IT & ITES professionals deployed at customer locations across the country.'
            },
            {
              type: 'innovation',
              title: 'Quality Focus',
              description: 'Continuous effort to achieve excellence in all our services and solutions.'
            },
            {
              type: 'purpose',
              title: 'Professional Integrity',
              description: 'Highest level of ethical standards and transparency in every engagement.'
            }
          ].map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-300 shadow-lg h-full">
              <div className="relative mb-6 sm:mb-8 flex justify-center">
                <CultureIcon type={pillar.type} />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

{/* Team Values Grid */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-slate-900 px-4">
            Our Core Values in Action
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 items-stretch">
            {[
              {
                icon: '🤝',
                title: 'Customer-Centric Model',
                description: 'Continuous interaction to address challenges and ensure successful collaboration.',
                metrics: '20+ Customers',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '👥',
                title: 'Expert Workforce',
                description: 'Strong pool of trained and empowered IT & ITES professionals.',
                metrics: '50+ Team',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '📍',
                title: 'Growing Presence',
                description: 'Established delivery capability across seven states in India.',
                metrics: '7 States',
                color: 'from-emerald-500 to-green-500'
              },
              {
                icon: '🛡️',
                title: 'Quality Delivery',
                description: 'Structured processes to ensure reliable and timely execution.',
                metrics: 'Process Driven',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: '📊',
                title: 'Resource Screening',
                description: 'Technical evaluation, coding assessments and proctoring mechanism.',
                metrics: 'Validated Resources',
                color: 'from-teal-500 to-emerald-500'
              },
              {
                icon: '⚙️',
                title: 'Operational Support',
                description: 'Relieving clients from operational and regulatory commitments.',
                metrics: 'End-to-End Support',
                color: 'from-amber-500 to-yellow-500'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-300 shadow-lg h-full flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-center group-hover:animate-pulse">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 text-center leading-relaxed flex-grow">
                  {value.description}
                </p>
                <div className="text-center text-sm font-bold text-slate-800 mt-auto bg-slate-50 px-4 py-2 rounded-full">
                  {value.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>



{/* Call to Action */}
        <div className="text-center px-4">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Ready to Be Part of Our Culture?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-800 max-w-3xl mx-auto mb-6 sm:mb-8">
              Partner with Arvish Consulting to leverage a strong workforce, flexible engagement models and quality-driven delivery for your business success.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="bg-slate-900 text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl hover:bg-slate-800 transition-colors duration-300 shadow-lg">
              View Open Positions
            </button>
            <button className="bg-white text-slate-900 border-2 border-slate-900 font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl hover:bg-slate-50 transition-colors duration-300">
              Schedule Culture Tour
            </button>
          </div>
        </div>
      </div>
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
};

export default OurCulture;