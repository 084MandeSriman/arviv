import React, { useState, useEffect } from 'react';

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
      <path d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z" fill="url(#waveGradient1)" className="animate-wave-1" />
      <path d="M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z" fill="url(#waveGradient2)" className="animate-wave-2" />
      <defs>
        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
          <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const ConsultingIcon = () => (
  <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="consultingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="35" fill="url(#consultingGrad)" className="animate-pulse" />
    <path d="M25 35h30M25 40h25M25 45h28" stroke="white" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
    <circle cx="55" cy="25" r="8" fill="#10B981" className="animate-bounce" />
    <path d="M52 25l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FloatingParticles = () => {
  const [particles] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.id * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

export const CoreValues = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <WaveBackground />
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <ConsultingIcon />
          </div>
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-pulse">
            ARVISH CONSULTING
          </h1>
          <h2 className="text-4xl font-bold text-slate-800 mb-8">Core Values & Excellence</h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses through strategic consulting, innovative solutions, and unwavering commitment to client success
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '🎯',
              title: 'Strategic Excellence',
              description: 'Data-driven strategies that deliver measurable business outcomes',
              color: 'from-blue-500 to-cyan-500',
              metrics: '300% ROI Average'
            },
            {
              icon: '🚀',
              title: 'Innovation Leadership',
              description: 'Cutting-edge solutions that keep you ahead of the competition',
              color: 'from-purple-500 to-pink-500',
              metrics: '50+ Patents Filed'
            },
            {
              icon: '🤝',
              title: 'Client Partnership',
              description: 'Long-term relationships built on trust and exceptional results',
              color: 'from-emerald-500 to-green-500',
              metrics: '98% Client Retention'
            },
            {
              icon: '⚡',
              title: 'Agile Delivery',
              description: 'Rapid implementation with continuous optimization',
              color: 'from-orange-500 to-red-500',
              metrics: '40% Faster Delivery'
            },
            {
              icon: '🔒',
              title: 'Security First',
              description: 'Enterprise-grade security in every solution we deliver',
              color: 'from-indigo-500 to-purple-500',
              metrics: 'Zero Breaches'
            },
            {
              icon: '🌟',
              title: 'Quality Assurance',
              description: 'Rigorous testing and quality control processes',
              color: 'from-teal-500 to-cyan-500',
              metrics: '99.9% Uptime'
            }
          ].map((value, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:scale-105`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="text-6xl mb-6 text-center group-hover:animate-bounce">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-slate-700 mb-6 text-center leading-relaxed">
                {value.description}
              </p>
              <div className={`text-center text-sm font-bold bg-gradient-to-r ${value.color} text-white px-4 py-2 rounded-full`}>
                {value.metrics}
              </div>
              {activeCard === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* 3D Pyramid */}
        <div className="relative h-[600px] mb-20">
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            <div className="relative w-64 h-64 transform-style-3d animate-pyramid-rotate">
              {[
                { color: 'from-blue-500/40 to-cyan-500/40', rotate: 'rotateY(0deg) translateZ(100px)' },
                { color: 'from-purple-500/40 to-pink-500/40', rotate: 'rotateY(90deg) translateZ(100px)' },
                { color: 'from-emerald-500/40 to-green-500/40', rotate: 'rotateY(180deg) translateZ(100px)' },
                { color: 'from-orange-500/40 to-red-500/40', rotate: 'rotateY(270deg) translateZ(100px)' },
                { color: 'from-cyan-500/40 to-blue-500/40', rotate: 'rotateX(90deg) translateZ(100px)' }
              ].map((face, index) => (
                <div
                  key={index}
                  className={`absolute w-64 h-64 bg-gradient-to-br ${face.color} border border-white/20 backdrop-blur-sm`}
                  style={{ transform: face.rotate }}
                />
              ))}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full animate-pulse shadow-2xl">
                  <div className="absolute inset-4 bg-black/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Arvish <span className="text-blue-600">Excellence</span> Framework
            </h3>
            <p className="text-slate-600 max-w-md text-lg">
              Our integrated approach ensures every project delivers exceptional value and lasting impact
            </p>
          </div>
        </div>

        {/* Services Showcase */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Consulting Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Digital Transformation',
                description: 'End-to-end digital modernization strategies',
                features: ['Cloud Migration', 'Process Automation', 'Data Analytics', 'AI Integration'],
                icon: '🔄'
              },
              {
                title: 'Business Strategy',
                description: 'Strategic planning and market positioning',
                features: ['Market Analysis', 'Competitive Intelligence', 'Growth Planning', 'Risk Assessment'],
                icon: '📊'
              },
              {
                title: 'Technology Solutions',
                description: 'Custom software and system implementations',
                features: ['Custom Development', 'System Integration', 'Mobile Solutions', 'Web Applications'],
                icon: '💻'
              },
              {
                title: 'Operational Excellence',
                description: 'Process optimization and efficiency improvements',
                features: ['Lean Operations', 'Quality Management', 'Performance Metrics', 'Change Management'],
                icon: '⚙️'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:animate-spin">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Arvish Consulting Advantages */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose Arvish Consulting?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: '🏆',
                title: 'Proven Track Record',
                description: '500+ successful projects delivered',
                highlight: '15+ Years Experience'
              },
              {
                icon: '💡',
                title: 'Industry Expertise',
                description: 'Deep knowledge across multiple sectors',
                highlight: '20+ Industries Served'
              },
              {
                icon: '⚡',
                title: 'Rapid Implementation',
                description: 'Fast deployment with minimal disruption',
                highlight: '50% Faster Delivery'
              },
              {
                icon: '💰',
                title: 'Cost Optimization',
                description: 'Maximum ROI through efficient solutions',
                highlight: '40% Cost Reduction'
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{advantage.title}</h3>
                <p className="text-slate-700 mb-4 text-sm">{advantage.description}</p>
                <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {advantage.highlight}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-8">Our Competitive Edge</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Certified Professionals',
                  items: ['AWS Certified Solutions Architects', 'Microsoft Azure Experts', 'Google Cloud Specialists', 'Salesforce Certified Consultants']
                },
                {
                  title: 'Advanced Methodologies',
                  items: ['Agile & Scrum Implementation', 'DevOps Best Practices', 'Lean Six Sigma Processes', 'Design Thinking Approach']
                },
                {
                  title: '24/7 Support & Maintenance',
                  items: ['Round-the-clock Monitoring', 'Proactive Issue Resolution', 'Regular Performance Reviews', 'Continuous Optimization']
                }
              ].map((edge, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 text-center">{edge.title}</h4>
                  <ul className="space-y-2">
                    {edge.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with Arvish Consulting for strategic solutions that drive real results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 font-bold text-xl px-12 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white font-bold text-xl px-12 py-4 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes wave-1 {
          0%, 100% { d: path("M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"); }
          50% { d: path("M0,350 C350,150 650,550 1200,250 L1200,800 L0,800 Z"); }
        }
        
        @keyframes wave-2 {
          0%, 100% { d: path("M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z"); }
          50% { d: path("M0,450 C450,250 850,650 1200,350 L1200,800 L0,800 Z"); }
        }
        
        @keyframes pyramid-rotate {
          0% { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-wave-1 { animation: wave-1 15s ease-in-out infinite; }
        .animate-wave-2 { animation: wave-2 20s ease-in-out infinite reverse; }
        .animate-pyramid-rotate { animation: pyramid-rotate 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default CoreValues;