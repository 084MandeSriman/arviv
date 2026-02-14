import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* BLOG DATA */
const blogDetails = {
  1: {
    title: "Enabling Enterprise Success Through IT & ITES Workforce Solutions",
    date: "Dec 18, 2025",
    author: "Team Arvish Consulting",
    readTime: "6 min read",
    category: "IT & ITES Services",
    tags: ["Manpower Services", "Customer Centric", "SLA Delivery", "Professional Screening"],
    sections: [
      {
        title: "Introduction",
        content:
          "Arvish Consulting provides a strong team of IT and ITES professionals deployed across customer locations to support enterprise and government organizations. Our customer-centric operating model ensures timely delivery, quality execution, and continuous engagement throughout the assignment lifecycle."
      },
      {
        title: "Professional Screening and Onboarding",
        content:
          "We follow a structured technical screening process that includes proctoring mechanisms, coding assessments, and background validation. This enables our customers to receive the right resources within defined timelines while ensuring compliance with operational and regulatory requirements."
      },
      {
        title: "Customer-Centric Delivery",
        content:
          "Our engagement model focuses on regular interaction, performance tracking, and quick resolution of collaboration challenges. This approach allows clients to concentrate on their core business while we manage the resource lifecycle efficiently."
      },
      {
        title: "Nationwide Presence",
        content:
          "Within a short span, Arvish Consulting has established its presence across multiple states in India, delivering services to IT, government, healthcare, and service sectors with consistent quality and reliability."
      }
    ]
  },

  2: {
    title: "Flexible Engagement Models for Project-Based and Managed Services",
    date: "Nov 11, 2025",
    author: "Arvish Consulting Solutions",
    readTime: "7 min read",
    category: "Project Delivery",
    tags: ["Fixed Model", "T&M", "Milestone Based", "AMS"],
    sections: [
      {
        title: "Structured Engagement Approach",
        content:
          "Arvish Consulting offers multiple engagement models including Fixed, Time & Material, Milestone-based, and Application Management Services. These models are designed to suit diverse project requirements and provide flexibility to customers."
      },
      {
        title: "End-to-End Project Execution",
        content:
          "Our strong pool of project managers, team leads, and skilled resources enables us to plan, execute, and control project-based initiatives aligned with strategic business goals."
      },
      {
        title: "Performance Visibility",
        content:
          "We provide objective performance reporting through dashboards that offer visibility into project execution. This enables timely decision-making and improved operational efficiency."
      },
      {
        title: "Continuous Efficiency Improvement",
        content:
          "Clients benefit from our ongoing operational efficiency enhancement initiatives, helping them operate at optimal performance levels while maintaining service quality."
      }
    ]
  },

  3: {
    title: "Payroll, Application Maintenance and Corporate Website Management Services",
    date: "Oct 28, 2025",
    author: "Team Arvish Consulting",
    readTime: "8 min read",
    category: "Managed Services",
    tags: ["Payroll Processing", "Application Support", "Database Administration", "IT Infrastructure"],
    sections: [
      {
        title: "Payroll Management Services",
        content:
          "Our payroll services follow clearly defined processes and SLA-driven execution with fully automated workflows to eliminate manual errors. Multi-level validation ensures compliance with statutory and tax regulations while providing complete visibility of payroll costs."
      },
      {
        title: "Application Maintenance and Support",
        content:
          "We provide continuous support for enterprise applications including enhancements, change requests, periodic maintenance, and SLA-based ticket resolution to ensure high availability and performance."
      },
      {
        title: "Corporate Website Management",
        content:
          "With extensive experience in CMS platforms such as Drupal, WordPress, and Typo3, we manage corporate portals for enterprises and SMEs. Our services include content updates, UI improvements, performance optimization, and backup and recovery."
      },
      {
        title: "IT Administration and Infrastructure Support",
        content:
          "Our expertise includes data center management, network security, active directory services, database administration, and infrastructure monitoring to ensure stable and secure operations."
      }
    ]
  }
};

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogDetails[id];
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.pageYOffset / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  if (!blog) return <div className="py-32 text-center text-2xl font-bold">Blog not found</div>;

  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      <style>{`
        @keyframes drift { from { transform: translateY(0); } to { transform: translateY(-100%); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }
        @keyframes scan-line { 0% { top: -10%; } 100% { top: 110%; } }
        @keyframes rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .hud-grid {
          background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .glass-card {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .progress-bar {
          position: fixed; top: 0; left: 0; height: 3px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa, #a855f7);
          z-index: 1000; transition: width 0.1s;
        }
      `}</style>

      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 hud-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-blue-500/80 tracking-wide uppercase text-xs">{blog.category}</span>
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            {blog.title.split(':').map((part, i) => (
              <span key={i} className={i === 1 ? "block text-slate-500 text-4xl mt-4 font-light" : ""}>
                {part}{i === 0 && blog.title.includes(':') ? ':' : ''}
              </span>
            ))}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {blog.author}
            </div>
            <span>{blog.date}</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          
          {/* THE "WOW" VISUALIZATIONS */}
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden glass-card mb-16 group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
            
            {/* 1. DEFENSE VISUAL (HUD SHIELD) */}
            {id === "1" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="400" height="400" viewBox="0 0 200 200" className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  <g style={{ animation: 'rotate-slow 20s linear infinite' }}>
                    <path d="M100,20 A80,80 0 0,1 180,100" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                    <path d="M100,180 A80,80 0 0,1 20,100" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <circle cx="100" cy="100" r="50" fill="url(#shieldGrad)" className="animate-pulse" style={{ animationDuration: '3s' }} />
                  <defs>
                    <radialGradient id="shieldGrad">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>
                  <text x="100" y="105" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="bold" className="tracking-widest">ENCRYPTED_CORE</text>
                </svg>
                <div className="absolute bottom-10 flex gap-10 font-mono text-[10px] text-blue-400">
                  <span>SECURE_CHANNELS: ACTIVE</span>
                  <span>BIT_DEPTH: 256</span>
                </div>
              </div>
            )}

            {/* 2. GUARDRAILS VISUAL (BINARY FLOW) */}
            {id === "2" && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20 flex justify-around text-[10px] font-mono text-emerald-500 leading-none">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="animate-drift" style={{ animationDuration: `${5 + i}s`, animationDelay: `-${i}s` }}>
                      {Array(50).fill(0).map(() => Math.round(Math.random())).join('<br/>')}
                    </div>
                  ))}
                </div>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_20px_#10b981]" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="px-8 py-4 bg-emerald-500/10 border border-emerald-500/40 rounded-lg backdrop-blur-md">
                      <span className="text-emerald-400 font-mono text-sm tracking-[0.3em]">VALIDATING_AI_OUTPUT...</span>
                   </div>
                </div>
              </div>
            )}

            {/* 3. THREAT VISUAL (RADAR SCAN) */}
            {id === "3" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 border border-red-500/20 rounded-full">
                  <div className="absolute inset-0 rounded-full" style={{ 
                    background: 'conic-gradient(from 0deg, rgba(239, 68, 68, 0.2), transparent 90deg)',
                    animation: 'rotate-slow 4s linear infinite'
                  }} />
                  <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-red-500 font-mono text-xs font-bold animate-pulse">THREAT_FOUND: POISON_DATA.EXE</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Universal Overlay Scan Line */}
            <div className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none" style={{ animation: 'scan-line 6s linear infinite' }} />
          </div>

          {/* ARTICLE CONTENT */}
          <div className="space-y-12">
            {blog.sections.map((section, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -left-8 top-0 text-blue-500/20 font-mono text-4xl font-bold group-hover:text-blue-500/40 transition-colors">
                  0{idx + 1}
                </div>
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">{section.title}</h2>
                <div className="text-slate-400 text-lg leading-relaxed space-y-4">
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Arvish Consulting Solutions</h3>
              <p className="text-sm text-slate-400 mb-6">Partner with Arvish Consulting for IT & ITES resourcing, project-based delivery, payroll management, application maintenance and corporate portal support through SLA-driven engagement models.</p>
              <Link to="/contact" className="block w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-center">
                Book a Consultation
              </Link>
            </div>

            <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Expertise Tags</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-md text-[11px] text-blue-400 font-mono hover:bg-blue-500/20 cursor-default transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="max-w-7xl mx-auto px-6 pb-20">
        <div className="glass-card rounded-[40px] p-12 text-center relative overflow-hidden border-blue-500/20">
          <div className="absolute inset-0 bg-blue-600/5" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative">Build reliable delivery teams and streamline your operations.</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto relative text-lg">Get updates on IT & ITES services, project execution strategies and enterprise support solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
            <input type="email" placeholder="your-email@company.com" className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}