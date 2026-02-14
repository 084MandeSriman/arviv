import { Link } from "react-router-dom";
import AnalyticsGraph from "./AnalyticsGraph";

/* BLOG LIST DATA */
const blogs = [
  {
    id: 1,
    title: "Enabling Enterprise Success Through IT & ITES Workforce Solutions",
    image: "tech-panel",
  },
  {
    id: 2, // Innovative panel
    title:
      "Flexible Engagement Models for Project-Based and Managed Services",
    image: null,
  },
  {
    id: 3, // Graph card
    title: "Payroll, Application Maintenance and Corporate Website Management Services",
    image: "graph",
  },
];

export default function Blog() {
  return (
    <>
      <style>{`
        .card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(2,6,23,0.18);
          transition: transform .6s cubic-bezier(.16,1,.3,1),
                      box-shadow .6s ease;
        }

        .card:hover {
          transform: translateY(-14px);
          box-shadow: 0 50px 110px rgba(2,6,23,0.28);
        }

        .image {
          transition: transform 1.4s cubic-bezier(.16,1,.3,1);
        }

        .card:hover .image {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(2,6,23,0.96) 18%,
            rgba(2,6,23,0.65) 45%,
            transparent 100%
          );
        }

        .meta {
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.35);
        }

        .read-link {
          opacity: 0;
          transform: translateY(10px);
          transition: all .4s ease;
        }

        .card:hover .read-link {
          opacity: 1;
          transform: translateY(0);
        }

        /* Security-themed panel for blog 1 */
        .security-panel {
          position: relative;
          height: 420px;
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
          overflow: hidden;
        }

        .security-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        }

        .security-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(45deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: securityMove 15s linear infinite;
        }

        @keyframes securityMove {
          from { background-position: 0 0, 0 0; }
          to { background-position: 40px 40px, -40px 40px; }
        }

        /* Innovative middle panel */
        .tech-panel {
          position: relative;
          height: 420px;
          background: radial-gradient(circle at 30% 30%, #0ea5e9, transparent 40%),
                      radial-gradient(circle at 70% 60%, #6366f1, transparent 40%),
                      #020617;
          overflow: hidden;
        }

        .tech-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          animation: gridMove 18s linear infinite;
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 120px 120px; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }

        .floating-icon {
          position: absolute;
          opacity: 0.6;
          animation: float 3s ease-in-out infinite;
        }

        .floating-icon:nth-child(2) {
          animation: floatReverse 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .floating-icon:nth-child(3) {
          animation: float 5s ease-in-out infinite;
          animation-delay: 2s;
        }

        .card-floating-icon {
          position: absolute;
          opacity: 0.8;
          pointer-events: none;
          z-index: 1;
        }

        .card-floating-icon:nth-child(1) {
          animation: float 4s ease-in-out infinite;
        }

        .card-floating-icon:nth-child(2) {
          animation: floatReverse 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .graph-wrap {
          height: 420px;
          background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          position: relative;
          overflow: hidden;
        }

        .graph-wrap::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(34,211,238,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99,102,241,0.1) 0%, transparent 50%);
        }
      `}</style>

      <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Floating Icons */}
        <div className="floating-icon top-20 left-10 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-sm">🤖</span>
        </div>
        <div className="floating-icon top-40 right-20 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
          <span className="text-purple-600 text-xs">💡</span>
        </div>
        <div className="floating-icon bottom-32 left-20 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
          <span className="text-green-600 text-sm">📊</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
              Arvish Consulting Insights
            </h2>
            <p className="text-lg text-slate-600">
              Innovative IT solutions and strategies for sustainable business growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-14 items-stretch">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/insights/blog/${blog.id}`}
                className="card group flex flex-col"
              >
                {/* MEDIA */}
                {blog.image === "tech-panel" && (
                  <div className="security-panel">
                    {/* Enhanced AI Neural Network */}
                    <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 400 420">
                      <defs>
                        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Neural Network Nodes */}
                      <circle cx="80" cy="80" r="4" fill="#8b5cf6" filter="url(#glow)">
                        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="200" cy="120" r="3" fill="#06b6d4" filter="url(#glow)">
                        <animate attributeName="r" values="2;5;2" dur="3s" repeatCount="indefinite" begin="0.5s" />
                      </circle>
                      <circle cx="320" cy="100" r="4" fill="#3b82f6" filter="url(#glow)">
                        <animate attributeName="r" values="3;7;3" dur="2.5s" repeatCount="indefinite" begin="1s" />
                      </circle>
                      <circle cx="150" cy="250" r="3" fill="#a855f7" filter="url(#glow)">
                        <animate attributeName="r" values="2;6;2" dur="4s" repeatCount="indefinite" begin="1.5s" />
                      </circle>
                      <circle cx="280" cy="300" r="4" fill="#06b6d4" filter="url(#glow)">
                        <animate attributeName="r" values="3;5;3" dur="3.5s" repeatCount="indefinite" begin="2s" />
                      </circle>
                      
                      {/* Animated Connection Lines */}
                      <line x1="80" y1="80" x2="200" y2="120" stroke="url(#aiGrad)" strokeWidth="1.5" opacity="0.6">
                        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="strokeWidth" values="1;2;1" dur="3s" repeatCount="indefinite" />
                      </line>
                      <line x1="200" y1="120" x2="320" y2="100" stroke="url(#aiGrad)" strokeWidth="1.5" opacity="0.4">
                        <animate attributeName="opacity" values="0.1;0.7;0.1" dur="4s" repeatCount="indefinite" begin="1s" />
                      </line>
                      <line x1="150" y1="250" x2="280" y2="300" stroke="url(#aiGrad)" strokeWidth="1.5" opacity="0.5">
                        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" begin="2s" />
                      </line>
                      <line x1="80" y1="80" x2="150" y2="250" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.3">
                        <animate attributeName="opacity" values="0.1;0.6;0.1" dur="5s" repeatCount="indefinite" begin="0.5s" />
                      </line>
                      <line x1="320" y1="100" x2="280" y2="300" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.4">
                        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
                      </line>
                      
                      {/* Data Flow Particles */}
                      <circle r="2" fill="#ffffff" opacity="0.8">
                        <animateMotion dur="4s" repeatCount="indefinite">
                          <path d="M80,80 Q140,100 200,120" />
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                      </circle>
                      <circle r="1.5" fill="#8b5cf6" opacity="0.9">
                        <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                          <path d="M200,120 Q260,110 320,100" />
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1s" />
                      </circle>
                    </svg>
                    
                    {/* AI Brain Illustration */}
                    <svg className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-20 opacity-30" viewBox="0 0 100 100">
                      <path d="M50 20 C30 20, 20 35, 25 50 C20 65, 35 80, 50 75 C65 80, 80 65, 75 50 C80 35, 70 20, 50 20 Z" 
                            fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;10;0" dur="3s" repeatCount="indefinite" />
                      </path>
                      <circle cx="40" cy="40" r="2" fill="#06b6d4">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="60" cy="45" r="2" fill="#3b82f6">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                      </circle>
                      <circle cx="50" cy="60" r="2" fill="#a855f7">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" begin="1s" />
                      </circle>
                    </svg>
                    
                    {/* Enhanced Floating AI Icons */}
                    <div className="card-floating-icon top-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <span className="text-white text-xl animate-pulse">🤖</span>
                    </div>
                    <div className="card-floating-icon top-28 left-8 w-10 h-10 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <span className="text-white text-base animate-bounce">🧠</span>
                    </div>
                    <div className="card-floating-icon bottom-16 right-12 w-11 h-11 bg-gradient-to-br from-indigo-500/40 to-purple-500/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <span className="text-white text-lg" style={{animation: 'pulse 1.5s infinite'}}>⚡</span>
                    </div>
                    <div className="card-floating-icon bottom-24 left-16 w-9 h-9 bg-gradient-to-br from-violet-500/40 to-pink-500/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <span className="text-white text-sm animate-pulse">🔒</span>
                    </div>
                    <div className="card-floating-icon top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20" style={{transform: 'translate(-50%, -50%)'}}>
                      <span className="text-white text-sm animate-spin" style={{animationDuration: '3s'}}>🛡️</span>
                    </div>
                    
                    {/* AI Processing Indicator */}
                    <div className="absolute top-1/3 right-16 flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    
                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" 
                           style={{animation: 'scan 4s linear infinite'}}></div>
                    </div>
                  </div>
                )}

                {blog.image && blog.image !== "graph" && blog.image !== "tech-panel" && (
                  <>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="image h-[420px] w-full object-cover"
                    />
                    <div className="overlay" />
                    {/* Floating icons in image cards */}
                    <div className="card-floating-icon top-4 right-4 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔒</span>
                    </div>
                    <div className="card-floating-icon top-16 left-4 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🧠</span>
                    </div>
                  </>
                )}

                {blog.image === null && (
                  <div className="tech-panel">
                    {/* AI Circuit Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 400 420">
                      <circle cx="100" cy="100" r="30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5">
                        <animate attributeName="r" values="25;35;25" dur="4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="300" cy="300" r="25" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3">
                        <animate attributeName="r" values="20;30;20" dur="3s" repeatCount="indefinite" begin="1s" />
                      </circle>
                      <rect x="180" y="180" width="40" height="40" fill="none" stroke="#8b5cf6" strokeWidth="1" rx="5">
                        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                      </rect>
                    </svg>
                    
                    {/* AI-themed floating icons */}
                    <div className="card-floating-icon top-6 right-6 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div className="card-floating-icon top-20 left-6 w-6 h-6 bg-black/40 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📊</span>
                    </div>
                    <div className="card-floating-icon bottom-8 left-1/2 w-7 h-7 bg-black/40 rounded-full flex items-center justify-center" style={{transform: 'translateX(-50%)'}}>
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    
                    {/* AI Guardrails Label */}
                    <div className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1">
                      <span className="text-white text-xs font-semibold">AI GUARDRAILS</span>
                    </div>
                  </div>
                )}

                {blog.image === "graph" && (
                  <div className="graph-wrap">
                    <AnalyticsGraph />
                    {/* Floating icons in graph card */}
                    <div className="card-floating-icon top-4 right-4 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📈</span>
                    </div>
                    <div className="card-floating-icon bottom-4 left-4 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">💾</span>
                    </div>
                  </div>
                )}

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-extrabold leading-snug">
                    {blog.title}
                  </h3>

                  <div className="read-link mt-5 text-red-400 font-semibold text-sm">
                    Read Full Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
