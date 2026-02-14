
import React, { useState, useEffect } from 'react';
import '../styles/animations.css';

export const CompanyOverview = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeStat, setActiveStat] = useState(null);

  const leftBullets = [
    "Strong team of IT & ITES professionals",
    "Customer-centric engagement model",
    "Quality-driven service delivery",
    "Flexible engagement options",
  ];

  const rightBullets = [
    "Proven resource screening process",
    "Background validation of candidates",
    "Relieves clients from operational overhead",
    "Continuous collaboration and support",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
  { value: "2015", label: "Launch Year", color: "from-blue-500 to-cyan-400", icon: "📅" },
  { value: "20+", label: "Customers", color: "from-purple-500 to-pink-400", icon: "🤝" },
  { value: "50+", label: "Team Size", color: "from-emerald-500 to-teal-400", icon: "👥" },
  { value: "7", label: "States Presence", color: "from-amber-500 to-orange-400", icon: "📍" }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950 text-gray-200 font-sans relative overflow-hidden">
      
      {/* Interactive Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.15) 0px, transparent 50%)`
          }}>
        </div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        
        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-3/4 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Breadcrumb with Animation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-6 md:pt-8 relative z-20">
        <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-sm">
          <span className="text-blue-300 hover:text-white transition-colors duration-300 cursor-pointer animate-fade-in">
            Home
          </span>
          <svg className="w-4 h-4 text-blue-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            About Us
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 md:py-16 lg:py-24 grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="relative">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl rounded-3xl animate-pulse"></div>
            <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-300 bg-clip-text text-transparent mb-3 md:mb-4 animate-fade-in-up">
              About Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-blue-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Delivering Innovative IT & ITES Solutions Since 2015
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 text-blue-100/90 leading-relaxed">
            <p className="text-sm sm:text-base md:text-lg transform hover:translate-x-2 transition-all duration-500 hover:text-white animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <span className="font-semibold text-cyan-300">Arvish Consulting</span> is a strong team of IT and ITES experts deployed at various customer locations across India, delivering quality-driven and customer-centric technology solutions.
            </p>
            <p className="text-sm sm:text-base md:text-lg transform hover:translate-x-2 transition-all duration-500 hover:text-white animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Within a short span, we have established a strong presence across 7 states with happy customers in IT, Government, Healthcare and service sectors.

            </p>
          </div>

          {/* Interactive Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-6 md:pt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-110 animate-fade-in-up`}
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
                onMouseEnter={() => setActiveStat(index)}
                onMouseLeave={() => setActiveStat(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 transform group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-0.5 md:mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-blue-200/70">{stat.label}</div>
                  
                  {/* Animated Ring */}
                  <div className={`absolute inset-0 border-2 rounded-xl md:rounded-2xl border-transparent group-hover:border-current transition-all duration-500 ${
                    activeStat === index ? 'animate-ping' : ''
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 3D Animation Container */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated Geometric Pattern */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin-slow"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    transform: `rotate(${i * 30}deg) scale(${1 + i * 0.2})`
                  }}
                ></div>
              ))}
              
              {/* Central Orb */}
              <div className="absolute inset-0 m-auto w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse shadow-2xl shadow-blue-500/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl">💫</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const radius = 120;
                return (
                  <div
                    key={i}
                    className="absolute w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center animate-float"
                    style={{
                      left: `calc(50% + ${radius * Math.cos(angle)}px)`,
                      top: `calc(50% + ${radius * Math.sin(angle)}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }}
                  >
                    <span className="text-base md:text-lg">{['🚀', '💡', '🔧', '📊', '⚡', '🎯', '🤝', '✨'][i]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Visualization Graphs */}
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 lg:h-40">
            {/* Animated Bar Chart */}
            <div className="flex items-end justify-center h-20 md:h-24 lg:h-32 space-x-1 md:space-x-2">
              {[40, 60, 80, 100, 85, 65, 45].map((height, i) => (
                <div
                  key={i}
                  className="w-4 md:w-6 lg:w-8 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg animate-bounce"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION - Animated Cards */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-cyan-900/30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 55%),
                             radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 55%)`,
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {[
            {
              title: "Our Vision",
              description: "To provide innovative solutions to our customers, create value for our stakeholders and remain committed to empowering the masses.",
              gradient: "from-blue-500 to-purple-600",
              icon: "🌌",
              delay: "0.1s"
            },
            {
              title: "Our Mission",
              description: "To establish a global presence in the IT market and be the partner of choice for our customers and the employer of choice for our employees.",
              gradient: "from-emerald-500 to-teal-600",
              icon: "🎯",
              delay: "0.2s"
            }
          ].map((card, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: card.delay }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 md:-inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl md:rounded-3xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-slate-600/50">
                {/* Animated Icon */}
                <div className="mb-4 md:mb-6">
                  <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${card.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl transform group-hover:rotate-12 transition-transform duration-500 shadow-xl`}>
                    {card.icon}
                  </div>
                </div>

                <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-3 md:mb-4`}>
                  {card.title}
                </h3>
                
                <p className="text-sm md:text-base lg:text-lg text-blue-100/80 leading-relaxed">
                  {card.description}
                </p>

                {/* Animated Elements */}
                <div className="mt-4 md:mt-6 flex space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient} animate-pulse`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>

                {/* Interactive Hover Effect */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-current rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE FINT ADVANTAGE - Interactive Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative">
        {/* Animated Title */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-300 bg-clip-text text-transparent mb-3 md:mb-4 animate-fade-in-up">
              The Arvish Advantage
            </h2>
            <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-blue-200/70 mt-4 md:mt-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Why Industry Leaders Choose Our Solutions
          </p>
        </div>

        {/* Interactive Bullet Points with Animation */}
        <div className="grid md:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-12 gap-y-4 md:gap-y-6 lg:gap-y-8 mb-12 md:mb-16 lg:mb-20">
          {[leftBullets, rightBullets].map((bulletList, listIndex) => (
            <div key={listIndex} className="space-y-3 md:space-y-4 lg:space-y-6">
              {bulletList.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group flex items-start gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-slate-800/50 to-transparent hover:from-slate-700/50 transition-all duration-500 transform hover:translate-x-2 md:hover:translate-x-4 animate-fade-in-up"
                  style={{animationDelay: `${0.3 + (listIndex * 0.2) + (itemIndex * 0.1)}s`}}
                >
                  {/* Animated Bullet */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r ${
                      listIndex === 0 ? 'from-blue-500 to-cyan-400' : 'from-purple-500 to-pink-400'
                    } flex items-center justify-center text-white text-xs font-bold group-hover:scale-125 transition-transform duration-300`}>
                      ✓
                    </div>
                    <div className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r ${
                      listIndex === 0 ? 'from-blue-500 to-cyan-400' : 'from-purple-500 to-pink-400'
                    } opacity-30 animate-ping`}></div>
                  </div>
                  
                  {/* Text with Gradient Highlight */}
                  <span className="text-sm md:text-base lg:text-lg text-blue-100 group-hover:text-white transition-colors duration-300 flex-1 leading-snug">
                    {item}
                  </span>
                  
                  {/* Animated Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 translate-x-2 md:translate-x-4 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>


      </section>

      {/* Animated Footer */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12 text-center relative z-10">
        <div className="text-blue-300/50 text-xs md:text-sm animate-pulse">
          ✨ Innovate • Integrate • Inspire ✨
        </div>
      </div>

      {/* Add this style tag for the SVG gradients */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CompanyOverview;