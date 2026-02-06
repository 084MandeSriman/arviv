import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/company-profile.pdf';
    link.download = 'Arvish-Company-Profile.pdf';
    link.click();
    setTimeout(() => setIsDownloading(false), 2000);
  };
  
  // Animated background dots
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate random dots for background
    const dotsArray = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    setDots(dotsArray);
  }, []);

  const features = [
    { 
      title: "Operational Excellence", 
      icon: "🚀",
      description: "Streamlined processes for maximum efficiency"
    },
    { 
      title: "Actionable Insights", 
      icon: "📊",
      description: "Data-driven visibility for informed decisions"
    },
    { 
      title: "Customer Excellence", 
      icon: "⭐",
      description: "Exceptional experiences at every touchpoint"
    },
    { 
      title: "Quality Development", 
      icon: "💻",
      description: "High-quality, scalable software solutions"
    },
    { 
      title: "Modern Infrastructure", 
      icon: "🏗️",
      description: "Integrated, future-ready IT infrastructure"
    },
    { 
      title: "Compliant Processes", 
      icon: "✅",
      description: "CMMI compliant systems & methodologies"
    }
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 30s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
          background-size: 1000px 100%;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-glow {
          transition: all 0.3s ease;
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #22c1dc, #2dd4bf);
          border-radius: 10px;
        }
      `}</style>

      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {dots.map(dot => (
            <div
              key={dot.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-200 to-cyan-200"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                opacity: 0.1,
                animation: `float ${dot.duration}s ease-in-out infinite`,
                animationDelay: `${dot.delay}s`
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-32 xs:w-48 sm:w-64 h-32 xs:h-48 sm:h-64 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 xs:w-64 sm:w-96 h-48 xs:h-64 sm:h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-12 xs:py-16 sm:py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-6 xs:mb-8">
                <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-xs xs:text-sm font-medium text-blue-700">About Our Company</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 xs:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  Transforming Businesses
                </span>
                <br />
                <span className="text-slate-900">Through Digital Innovation</span>
              </h1>

              {/* Animated indicator */}
              <div className="relative w-24 xs:w-28 sm:w-32 h-0.5 xs:h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8 xs:mb-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
              </div>

              {/* Description */}
              <div className="space-y-4 xs:space-y-6 mb-8 xs:mb-10">
                <p className="text-base xs:text-lg text-slate-700 leading-relaxed">
                  <span className="font-bold text-blue-600">Arvish Consulting Solutions</span> is a premier 
                  technology partner that delivers value-added innovative IT and software solutions 
                  designed to optimize costs and maximize ROI for businesses worldwide.
                </p>
                
                <p className="text-base xs:text-lg text-slate-700 leading-relaxed">
                  Our client-centered approach, combined with cutting-edge technology and 
                  customized service plans, drives measurable business success and sustainable 
                  growth in today's dynamic digital landscape.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 mb-8 xs:mb-10">
                {[
                  { value: "7+", label: "Years Experience" },
                  { value: "98+", label: "Projects Delivered" },
                  { value: "25+", label: "Happy Clients" },
                  { value: "48%", label: "Satisfaction Rate" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm p-3 xs:p-4 rounded-xl border border-slate-200 hover-lift hover-glow"
                  >
                    <div className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs xs:text-sm text-slate-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 xs:gap-4">
                <button onClick={() => navigate('/services')} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm xs:text-base">
                  Explore Our Services →
                </button>
                <button onClick={handleDownload} disabled={isDownloading} className="bg-white border border-slate-300 text-slate-700 px-6 xs:px-8 py-3 xs:py-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm xs:text-base disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isDownloading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Company Profile
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Visual - Enhanced Orbit System */}
            <div className="relative min-h-[400px] xs:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
              {/* Outer orbit rings */}
              <div className="absolute w-[300px] h-[300px] xs:w-[400px] xs:h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]">
                {/* Outer ring */}
                <div className="absolute inset-0 border-2 border-dashed border-blue-200/50 rounded-full animate-spin-slow"></div>
                
                {/* Middle ring */}
                <div className="absolute inset-6 xs:inset-8 sm:inset-12 border border-dotted border-cyan-200/50 rounded-full animate-spin-reverse"></div>
                
                {/* Inner ring */}
                <div className="absolute inset-12 xs:inset-16 sm:inset-24 border border-dashed border-purple-200/50 rounded-full animate-spin-slow"></div>

                {/* Floating nodes */}
                {[
                  { icon: "☁️", label: "Cloud", color: "from-blue-400 to-cyan-400", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                  { icon: "🌐", label: "Global", color: "from-cyan-400 to-emerald-400", pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
                  { icon: "📧", label: "Connect", color: "from-purple-400 to-pink-400", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                  { icon: "💻", label: "Code", color: "from-emerald-400 to-teal-400", pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
                  { icon: "📊", label: "Analytics", color: "from-orange-400 to-amber-400", pos: "top-1/4 left-1/4" },
                  { icon: "🔍", label: "Research", color: "from-pink-400 to-rose-400", pos: "bottom-1/4 right-1/4" }
                ].map((node, index) => (
                  <div 
                    key={index}
                    className={`absolute ${node.pos} group`}
                  >
                    <div className={`w-10 xs:w-12 sm:w-16 h-10 xs:h-12 sm:h-16 rounded-full bg-gradient-to-r ${node.color} 
                      flex items-center justify-center shadow-xl hover-lift cursor-pointer
                      transition-all duration-300 animate-float`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <div className="text-lg xs:text-xl sm:text-2xl">{node.icon}</div>
                    </div>
                    <div className="absolute -bottom-6 xs:-bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                      transition-all duration-300 text-xs xs:text-sm font-semibold text-slate-700 bg-white/90 
                      backdrop-blur-sm px-2 xs:px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                      {node.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Core */}
              <div className="relative z-10">
                <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                  {/* Core gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
                  
                  {/* Core border */}
                  <div className="absolute inset-0 border-4 border-transparent rounded-full 
                    bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-origin-border 
                    [mask-composite:exclude] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] animate-spin-slow">
                  </div>

                  {/* Inner core */}
                  <div className="absolute inset-4 xs:inset-6 sm:inset-8 bg-gradient-to-br from-white to-slate-100 rounded-full 
                    shadow-2xl flex items-center justify-center hover-scale transition-all duration-500">
                    <div className="text-center p-3 xs:p-4 sm:p-6">
                      <div className="text-2xl xs:text-3xl sm:text-4xl mb-2 xs:mb-3 sm:mb-4">🚀</div>
                      <div className="text-lg xs:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Arvish
                      </div>
                      <div className="text-xs xs:text-sm text-slate-600 mt-1 xs:mt-2">Consulting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 xs:h-24 sm:h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
}