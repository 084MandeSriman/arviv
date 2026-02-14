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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <ConsultingIcon />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-pulse px-4">
            ARVISH CONSULTING
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-8 px-4">Core Values & Excellence</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
            Delivering innovative IT & ITES solutions with a strong team of professionals, a customer-centric approach and a growing presence across India.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {[
            {
              icon: '🤝',
              title: 'Customer Satisfaction',
              description: 'Commitment to surpass customer expectations and achieve high customer satisfaction in every engagement.',
              color: 'from-blue-500 to-cyan-500',
              metrics: 'Customer First'
            },
            {
              icon: '🏆',
              title: 'Quality',
              description: 'Continuous focus on excellence in all our functions, products and services.',
              color: 'from-purple-500 to-pink-500',
              metrics: 'Quality Driven'
            },
            {
              icon: '🛡️',
              title: 'Professional Integrity',
              description: 'Ensuring the highest level of ethical standards and transparency in all our assignments.',
              color: 'from-emerald-500 to-green-500',
              metrics: 'Ethical Delivery'
            },
            {
              icon: '👥',
              title: 'Strong Workforce',
              description: 'Skilled IT & ITES professionals deployed at customer locations across the country.',
              color: 'from-orange-500 to-red-500',
              metrics: '50+ Team'
            },
            {
              icon: '📍',
              title: 'Growing Presence',
              description: 'Established delivery capability across seven states within a short span.',
              color: 'from-indigo-500 to-purple-500',
              metrics: '7 States'
            },
            {
              icon: '🚀',
              title: 'Customer-Centric Model',
              description: 'Continuous engagement and flexible delivery models for long-term partnerships.',
              color: 'from-teal-500 to-cyan-500',
              metrics: '20+ Customers'
            }
          ].map((value, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:scale-105`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-center group-hover:animate-bounce">
                {value.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 text-center group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 text-center leading-relaxed">
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
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] mb-12 sm:mb-20">
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
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center px-4 w-full">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
              Arvish <span className="text-blue-600">Excellence</span> Framework
            </h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base md:text-lg">
              Our proven engagement models and structured resource screening process ensure timely delivery, quality service and long-term customer success.
            </p>
          </div>
        </div>

        {/* Services Showcase */}
        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: 'Manpower Services for IT & ITES',
                description: 'End-to-end resource deployment based on customer requirements.',
                features: ['Resource Screening', 'Background Validation', 'Client Interviews', 'Onboarding Support'],
                icon: '👥'
              },
              {
                title: 'Custom Application Development',
                description: 'Design and development of web, mobile and enterprise applications.',
                features: ['Web Applications', 'Mobile Apps', 'Backend Development', 'System Integration'],
                icon: '💻'
              },
              {
                title: 'HR Services',
                description: 'Comprehensive HR and staffing solutions for various industries.',
                features: ['Talent Acquisition', 'Payroll Support', 'Compliance', 'Employee Lifecycle Management'],
                icon: '📄'
              },
              {
                title: 'Maintenance Services',
                description: 'SLA-based support for applications, infrastructure and corporate portals.',
                features: ['Infra Management', 'Database Administration', 'Periodic Maintenance', 'Enhancements'],
                icon: '⚙️'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:animate-spin">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0" />
                      <span className="text-sm sm:text-base text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Arvish Consulting Advantages */}
        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent px-4">
            Why Choose Arvish Consulting?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                icon: '📅',
                title: 'Established in 2015',
                description: 'Strong growth with a proven delivery model',
                highlight: '6 Million Revenue'
              },
              {
                icon: '🤝',
                title: '20+ Customers',
                description: 'Serving IT, Government, Healthcare and service sectors',
                highlight: 'Trusted Partner'
              },
              {
                icon: '👥',
                title: '50+ Professionals',
                description: 'Skilled workforce deployed across client locations',
                highlight: 'Expert Team'
              },
              {
                icon: '📍',
                title: '7 State Presence',
                description: 'Rapid expansion across India',
                highlight: 'Growing Network'
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:animate-bounce">{advantage.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{advantage.title}</h3>
                <p className="text-slate-700 mb-4 text-sm">{advantage.description}</p>
                <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {advantage.highlight}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-6 sm:mb-8">Our Competitive Edge</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: 'Resource Screening',
                  items: ['Technical evaluation', 'Coding assessments', 'Proctoring mechanism']
                },
                {
                  title: 'Operational Support',
                  items: ['Background validation', 'Regulatory compliance', 'Client-centric model']
                },
                {
                  title: 'Continuous Engagement',
                  items: ['Lifecycle support', 'Collaboration reviews', 'Quick issue resolution']
                }
              ].map((edge, index) => (
                <div key={index} className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 text-center">{edge.title}</h4>
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
        <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Partner with Arvish Consulting for strategic solutions that drive real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button className="bg-white text-blue-600 font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
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