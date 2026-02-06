// import React, { useState, useEffect } from 'react';
// import '../styles/animations.css';

// export const CompanyOverview = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [activeStat, setActiveStat] = useState(null);

//   const leftBullets = [
//     "Experienced team of experts",
//     "Innovative future-ready solutions",
//     "Client-centered approach",
//     "Optimized cost and on-budget implementations",
//   ];

//   const rightBullets = [
//     "Customized service methodology",
//     "Flexible delivery model",
//     "Strategic guidance and recommendations",
//     "Consistent service delivery quality framework",
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX / window.innerWidth,
//         y: e.clientY / window.innerHeight
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const stats = [
//     { value: "20+", label: "Years Experience", color: "from-blue-500 to-cyan-400", icon: "📈" },
//     { value: "500+", label: "Projects Delivered", color: "from-purple-500 to-pink-400", icon: "🚀" },
//     { value: "100+", label: "Happy Clients", color: "from-emerald-500 to-teal-400", icon: "⭐" },
//     { value: "50+", label: "Awards Won", color: "from-amber-500 to-orange-400", icon: "🏆" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 font-sans relative overflow-hidden">
      
//       {/* Smooth Wave Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Animated Wave Layers */}
//         <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
//           <defs>
//             <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" style={{stopColor: 'rgba(59, 130, 246, 0.1)', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: 'rgba(147, 51, 234, 0.05)', stopOpacity: 1}} />
//             </linearGradient>
//             <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" style={{stopColor: 'rgba(16, 185, 129, 0.08)', stopOpacity: 1}} />
//               <stop offset="100%" style={{stopColor: 'rgba(59, 130, 246, 0.03)', stopOpacity: 1}} />
//             </linearGradient>
//           </defs>
          
//           <path d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z" fill="url(#wave1)" className="animate-wave">
//             <animateTransform
//               attributeName="transform"
//               type="translate"
//               values="-100 0;100 0;-100 0"
//               dur="20s"
//               repeatCount="indefinite"
//             />
//           </path>
          
//           <path d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z" fill="url(#wave2)" className="animate-wave-reverse">
//             <animateTransform
//               attributeName="transform"
//               type="translate"
//               values="100 0;-100 0;100 0"
//               dur="25s"
//               repeatCount="indefinite"
//             />
//           </path>
//         </svg>
        
//         {/* Floating Geometric Shapes */}
//         {Array.from({ length: 15 }).map((_, i) => (
//           <div
//             key={i}
//             className={`absolute opacity-20 animate-float ${
//               i % 3 === 0 ? 'bg-blue-400/20' : i % 3 === 1 ? 'bg-purple-400/20' : 'bg-emerald-400/20'
//             } ${
//               i % 4 === 0 ? 'rounded-full' : i % 4 === 1 ? 'rounded-lg rotate-45' : i % 4 === 2 ? 'rounded-full' : 'rounded-lg'
//             }`}
//             style={{
//               width: `${20 + Math.random() * 40}px`,
//               height: `${20 + Math.random() * 40}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 10}s`,
//               animationDuration: `${8 + Math.random() * 12}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Premium Gradient Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 via-purple-400/3 to-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-400/4 via-teal-400/2 to-blue-400/4 rounded-full blur-3xl animate-spin-slow"></div>
//         <div className="absolute top-2/3 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-pink-400/3 via-rose-400/2 to-purple-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//       </div>

//       {/* Premium Breadcrumb */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-20">
//         <div className="flex items-center justify-center space-x-3 text-sm bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50 w-fit mx-auto">
//           <span className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer font-medium">
//             Home
//           </span>
//           <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//           </svg>
//           <span className="text-gray-800 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             About Us
//           </span>
//         </div>
//       </div>

//       {/* HERO SECTION */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
//         <div className="space-y-8 text-center lg:text-left">
//           <div className="relative">
//             <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl rounded-3xl animate-pulse"></div>
//             <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300 mb-6 animate-fade-in-up leading-tight">
//               About Us
//             </h1>
//             <div className="relative">
//               <p className="text-3xl font-light text-slate-600 hover:text-slate-800 transition-colors duration-300 animate-fade-in-up mb-4" style={{animationDelay: '0.2s'}}>
//                 Pioneering Digital Excellence
//               </p>
//               <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-2 rounded-full border border-blue-200/50">
//                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                 <span className="text-sm font-medium text-slate-700">Since 2000</span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6 text-slate-700 leading-relaxed">
//             <p className="text-lg transform hover:translate-x-2 transition-all duration-500 hover:text-slate-900 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
//               <span className="font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-300">Arvish Consulting</span> was born in the pioneering times of the early 2000s when digital technology was transforming lives and reshaping industries. We've been at the forefront of this revolution ever since.
//             </p>
//             <p className="text-lg transform hover:translate-x-2 transition-all duration-500 hover:text-slate-900 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
//               As a leading professional services provider for banks, e-commerce, and healthcare companies, we bridge the gap between cutting-edge technology and business success through innovative solutions and strategic partnerships.
//             </p>
//           </div>

//           {/* Interactive Animated Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-110 animate-fade-in-up`}
//                 style={{animationDelay: `${0.5 + index * 0.1}s`}}
//                 onMouseEnter={() => setActiveStat(index)}
//                 onMouseLeave={() => setActiveStat(null)}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity`}></div>
//                 <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-xl rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300/50">
//                   <div className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
//                     {stat.icon}
//                   </div>
//                   <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-slate-600">{stat.label}</div>
                  
//                   {/* Animated Ring */}
//                   <div className={`absolute inset-0 border-2 rounded-2xl border-transparent group-hover:border-current transition-all duration-500 ${
//                     activeStat === index ? 'animate-ping' : ''
//                   }`}></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Premium 3D Animation Container */}
//         <div className="relative h-[600px] flex items-center justify-center">
//           <div className="absolute inset-0 flex items-center justify-center">
//             {/* Enhanced Geometric Pattern */}
//             <div className="relative w-80 h-80">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute inset-0 border-2 border-blue-400/20 rounded-full animate-spin-slow"
//                   style={{
//                     animationDelay: `${i * 0.8}s`,
//                     animationDuration: `${15 + i * 5}s`,
//                     transform: `rotate(${i * 45}deg) scale(${1 + i * 0.15})`
//                   }}
//                 ></div>
//               ))}
              
//               {/* Premium Central Orb */}
//               <div className="absolute inset-0 m-auto w-40 h-40 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-pulse shadow-2xl shadow-blue-500/30 flex items-center justify-center">
//                   <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                     <span className="text-4xl animate-bounce">💎</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Premium Floating Elements */}
//               {Array.from({ length: 12 }).map((_, i) => {
//                 const angle = (i * 30) * Math.PI / 180;
//                 const radius = 200;
//                 const icons = ['🚀', '💡', '⚡', '🎯', '🌟', '💫', '🔮', '✨', '🎨', '🏆', '🔥', '💎'];
//                 return (
//                   <div
//                     key={i}
//                     className="absolute w-14 h-14 bg-gradient-to-br from-white/80 to-gray-100/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/50 animate-float hover:scale-110 transition-transform duration-300"
//                     style={{
//                       left: `calc(50% + ${radius * Math.cos(angle)}px)`,
//                       top: `calc(50% + ${radius * Math.sin(angle)}px)`,
//                       transform: 'translate(-50%, -50%)',
//                       animationDelay: `${i * 0.2}s`,
//                       animationDuration: `${4 + i * 0.3}s`
//                     }}
//                   >
//                     <span className="text-2xl">{icons[i]}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Enhanced Data Visualization */}
//           <div className="absolute bottom-0 left-0 right-0 h-48">
//             <div className="flex items-end justify-center h-40 space-x-3">
//               {[65, 80, 95, 100, 90, 75, 60, 85].map((height, i) => (
//                 <div key={i} className="relative group">
//                   <div
//                     className="w-8 bg-gradient-to-t from-blue-500 via-purple-500 to-cyan-400 rounded-t-xl shadow-lg animate-bounce hover:shadow-xl transition-shadow duration-300"
//                     style={{
//                       height: `${height}%`,
//                       animationDelay: `${i * 0.1}s`
//                     }}
//                   ></div>
//                   <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
//                     {height}%
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Premium Vision & Mission Section */}
//       <section className="relative py-24 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
//         </div>

//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 relative z-10">
//           {[
//             {
//               title: "Our Vision",
//               description: "To be the pioneering force in the software services marketplace, driving digital transformation through innovation, excellence, and sustainable growth strategies that shape the future of technology.",
//               gradient: "from-blue-500 to-purple-600",
//               icon: "🌌",
//               delay: "0.1s"
//             },
//             {
//               title: "Our Mission",
//               description: "Building enduring relationships with customers and partners by delivering exceptional value through tailored solutions, cutting-edge technology, and unwavering commitment to quality and success.",
//               gradient: "from-emerald-500 to-teal-600",
//               icon: "🎯",
//               delay: "0.2s"
//             }
//           ].map((card, index) => (
//             <div
//               key={index}
//               className="group relative animate-fade-in-up"
//               style={{ animationDelay: card.delay }}
//             >
//               <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
//               <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-10 h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-blue-300/50">
//                 <div className="mb-6">
//                   <div className={`w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-500 shadow-xl`}>
//                     {card.icon}
//                   </div>
//                 </div>

//                 <h3 className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-4`}>
//                   {card.title}
//                 </h3>
                
//                 <p className="text-gray-600 leading-relaxed text-lg font-light">
//                   {card.description}
//                 </p>

//                 <div className="mt-6 flex space-x-2">
//                   {Array.from({ length: 3 }).map((_, i) => (
//                     <div
//                       key={i}
//                       className={`w-3 h-3 rounded-full bg-gradient-to-r ${card.gradient} animate-pulse`}
//                       style={{ animationDelay: `${i * 0.2}s` }}
//                     ></div>
//                   ))}
//                 </div>

//                 <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="w-10 h-10 border-2 border-current rounded-full animate-spin flex items-center justify-center">
//                     <div className="w-2 h-2 bg-current rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Premium Arvish Advantage Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
//         <div className="text-center mb-20">
//           <div className="inline-block relative">
//             <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300 mb-6 animate-fade-in-up">
//               The Arvish Advantage
//             </h2>
//             <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
//           </div>
//           <p className="text-2xl text-slate-600 hover:text-slate-800 transition-colors duration-300 mt-8 animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
//             Why Industry Leaders Choose Our Solutions
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-20">
//           {[leftBullets, rightBullets].map((bulletList, listIndex) => (
//             <div key={listIndex} className="space-y-6">
//               {bulletList.map((item, itemIndex) => (
//                 <div
//                   key={itemIndex}
//                   className="group flex items-start gap-6 p-6 rounded-3xl bg-gradient-to-r from-white/80 to-gray-50/80 hover:from-blue-50/80 hover:to-purple-50/80 backdrop-blur-sm border border-gray-200/50 hover:border-blue-300/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:translate-x-2 hover:scale-[1.02] animate-fade-in-up"
//                   style={{animationDelay: `${0.3 + (listIndex * 0.2) + (itemIndex * 0.1)}s`}}
//                 >
//                   <div className="relative">
//                     <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${
//                       listIndex === 0 ? 'from-blue-500 to-cyan-400' : 'from-purple-500 to-pink-400'
//                     } flex items-center justify-center text-white text-xs font-bold group-hover:scale-125 transition-transform duration-300`}>
//                       ✓
//                     </div>
//                     <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${
//                       listIndex === 0 ? 'from-blue-500 to-cyan-400' : 'from-purple-500 to-pink-400'
//                     } opacity-30 animate-ping`}></div>
//                   </div>
                  
//                   <span className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors duration-300 flex-1 font-medium">
//                     {item}
//                   </span>
                  
//                   <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
//                     <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Premium Accreditations & Partners */}
//         <div className="grid md:grid-cols-2 gap-10 mt-20">
//           {[
//             {
//               title: "Accreditations",
//               description: "Certified Excellence in Quality & Security",
//               gradient: "from-blue-500 to-cyan-400",
//               icon: "🏆",
//               items: ["ISO 9001:2015", "ISO 27001:2013", "CMMI Level 3", "GDPR Compliant"]
//             },
//             {
//               title: "Strategic Partnerships",
//               description: "Collaborating with Industry Leaders",
//               gradient: "from-purple-500 to-pink-400",
//               icon: "🤝",
//               items: ["Microsoft Gold Partner", "AWS Advanced Partner", "Google Cloud Partner", "Salesforce Partner"]
//             }
//           ].map((card, index) => (
//             <div
//               key={index}
//               className="group relative animate-fade-in-up"
//               style={{ animationDelay: `${0.5 + index * 0.1}s` }}
//             >
//               <div className="transform transition-all duration-700">
//                 <div className="relative h-full">
//                   <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
//                   <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-10 h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-blue-300/50">
//                     <div className="flex items-center gap-4 mb-8">
//                       <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-xl transform group-hover:rotate-12 transition-transform duration-500`}>
//                         {card.icon}
//                       </div>
//                       <div>
//                         <h3 className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
//                           {card.title}
//                         </h3>
//                         <p className="text-gray-600 mt-1 font-medium">{card.description}</p>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       {card.items.map((item, i) => (
//                         <div
//                           key={i}
//                           className={`relative p-5 rounded-2xl bg-gradient-to-r ${card.gradient} bg-opacity-5 backdrop-blur-sm border border-gray-200/50 transform transition-all duration-300 hover:scale-105 hover:bg-opacity-10 hover:shadow-lg animate-fade-in-up`}
//                           style={{ animationDelay: `${0.6 + i * 0.1}s` }}
//                         >
//                           <div className="text-center">
//                             <div className="text-lg font-bold text-gray-800 mb-1">{item}</div>
//                             <div className="text-sm text-gray-500">Certified</div>
//                           </div>
                          
//                           <div className="absolute inset-0 rounded-2xl border border-blue-300/30 animate-ping opacity-0 group-hover:opacity-100"></div>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="mt-10 flex justify-center space-x-8">
//                       {[90, 85, 95, 88].map((percent, i) => (
//                         <div key={i} className="relative w-16 h-16">
//                           <svg className="w-full h-full transform -rotate-90">
//                             <circle
//                               cx="32"
//                               cy="32"
//                               r="28"
//                               stroke="currentColor"
//                               strokeWidth="4"
//                               fill="none"
//                               strokeOpacity="0.2"
//                               className="text-current"
//                             />
//                             <circle
//                               cx="32"
//                               cy="32"
//                               r="28"
//                               stroke="url(#gradient)"
//                               strokeWidth="4"
//                               fill="none"
//                               strokeLinecap="round"
//                               strokeDasharray={`${percent * 1.76} 176`}
//                               className="animate-draw"
//                               style={{ animationDelay: `${i * 0.2}s` }}
//                             />
//                           </svg>
//                           <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700">
//                             {percent}%
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Premium Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center relative z-10">
//         <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200/50 backdrop-blur-sm">
//           <div className="text-slate-700 text-lg font-medium mb-4">
//             ✨ Transforming Businesses Through Digital Innovation Since 2000 ✨
//           </div>
//           <div className="flex justify-center space-x-4">
//             {['🚀', '💡', '🎯', '⚡'].map((icon, i) => (
//               <div key={i} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: `${i * 0.2}s`}}>
//                 <span className="text-xl">{icon}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <svg style={{ position: 'absolute', width: 0, height: 0 }}>
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
//             <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// export default CompanyOverview;

import React, { useState, useEffect } from 'react';
import '../styles/animations.css';

export const CompanyOverview = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeStat, setActiveStat] = useState(null);

  const leftBullets = [
    "Experienced team of experts",
    "Innovative future-ready solutions",
    "Client-centered approach",
    "Optimized cost and on-budget implementations",
  ];

  const rightBullets = [
    "Customized service methodology",
    "Flexible delivery model",
    "Strategic guidance and recommendations",
    "Consistent service delivery quality framework",
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
    { value: "20+", label: "Years Experience", color: "from-blue-500 to-cyan-400", icon: "📈" },
    { value: "500+", label: "Projects Delivered", color: "from-purple-500 to-pink-400", icon: "🚀" },
    { value: "100+", label: "Happy Clients", color: "from-emerald-500 to-teal-400", icon: "⭐" },
    { value: "50+", label: "Awards Won", color: "from-amber-500 to-orange-400", icon: "🏆" }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-20">
        <div className="flex items-center space-x-3 text-sm">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl rounded-3xl animate-pulse"></div>
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              About Us
            </h1>
            <p className="text-2xl font-light text-blue-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Pioneering Digital Excellence Since 2000
            </p>
          </div>

          <div className="space-y-6 text-blue-100/90 leading-relaxed">
            <p className="text-lg transform hover:translate-x-2 transition-all duration-500 hover:text-white animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <span className="font-semibold text-cyan-300">Arvish Consulting</span> was born in the pioneering times of the early 2000s when digital technology was transforming lives and reshaping industries. We've been at the forefront of this revolution ever since.
            </p>
            <p className="text-lg transform hover:translate-x-2 transition-all duration-500 hover:text-white animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              As a leading professional services provider for banks, e-commerce, and healthcare companies, we bridge the gap between cutting-edge technology and business success through innovative solutions and strategic partnerships.
            </p>
          </div>

          {/* Interactive Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-110 animate-fade-in-up`}
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
                onMouseEnter={() => setActiveStat(index)}
                onMouseLeave={() => setActiveStat(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200/70">{stat.label}</div>
                  
                  {/* Animated Ring */}
                  <div className={`absolute inset-0 border-2 rounded-2xl border-transparent group-hover:border-current transition-all duration-500 ${
                    activeStat === index ? 'animate-ping' : ''
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 3D Animation Container */}
        <div className="relative h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated Geometric Pattern */}
            <div className="relative w-64 h-64">
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
              <div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse shadow-2xl shadow-blue-500/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl">💫</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const radius = 180;
                return (
                  <div
                    key={i}
                    className="absolute w-10 h-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float"
                    style={{
                      left: `calc(50% + ${radius * Math.cos(angle)}px)`,
                      top: `calc(50% + ${radius * Math.sin(angle)}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }}
                  >
                    <span className="text-lg">{['🚀', '💡', '🔧', '📊', '⚡', '🎯', '🤝', '✨'][i]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Visualization Graphs */}
          <div className="absolute bottom-0 left-0 right-0 h-40">
            {/* Animated Bar Chart */}
            <div className="flex items-end justify-center h-32 space-x-2">
              {[40, 60, 80, 100, 85, 65, 45].map((height, i) => (
                <div
                  key={i}
                  className="w-8 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg animate-bounce"
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
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-cyan-900/30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 55%),
                             radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 55%)`,
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 relative z-10">
          {[
            {
              title: "Our Vision",
              description: "To be the pioneering force in the software services marketplace, driving digital transformation through innovation, excellence, and sustainable growth strategies that shape the future of technology.",
              gradient: "from-blue-500 to-purple-600",
              icon: "🌌",
              delay: "0.1s"
            },
            {
              title: "Our Mission",
              description: "Building enduring relationships with customers and partners by delivering exceptional value through tailored solutions, cutting-edge technology, and unwavering commitment to quality and success.",
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
              <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-slate-600/50">
                {/* Animated Icon */}
                <div className="mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-500 shadow-xl`}>
                    {card.icon}
                  </div>
                </div>

                <h3 className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-4`}>
                  {card.title}
                </h3>
                
                <p className="text-blue-100/80 leading-relaxed text-lg">
                  {card.description}
                </p>

                {/* Animated Elements */}
                <div className="mt-6 flex space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient} animate-pulse`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>

                {/* Interactive Hover Effect */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 border-2 border-current rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE FINT ADVANTAGE - Interactive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Animated Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              The Arvish Advantage
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-blue-200/70 mt-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Why Industry Leaders Choose Our Solutions
          </p>
        </div>

        {/* Interactive Bullet Points with Animation */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-20">
          {[leftBullets, rightBullets].map((bulletList, listIndex) => (
            <div key={listIndex} className="space-y-6">
              {bulletList.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group flex items-start gap-6 p-4 rounded-2xl bg-gradient-to-r from-slate-800/50 to-transparent hover:from-slate-700/50 transition-all duration-500 transform hover:translate-x-4 animate-fade-in-up"
                  style={{animationDelay: `${0.3 + (listIndex * 0.2) + (itemIndex * 0.1)}s`}}
                >
                  {/* Animated Bullet */}
                  <div className="relative">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${
                      listIndex === 0 ? 'from-blue-500 to-cyan-400' : 'from-purple-500 to-pink-400'
                    } flex items-center justify-center text-white text-xs font-bold group-hover:scale-125 transition-transform duration-300`}>
                      ✓
                    </div>
                    <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${
                      listIndex === 0 ? 'from-blue-500 to-cyan-400' : 'from-purple-500 to-pink-400'
                    } opacity-30 animate-ping`}></div>
                  </div>
                  
                  {/* Text with Gradient Highlight */}
                  <span className="text-lg text-blue-100 group-hover:text-white transition-colors duration-300 flex-1">
                    {item}
                  </span>
                  
                  {/* Animated Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ACCREDITATIONS & PARTNERS - Animated Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Accreditations",
              description: "Certified Excellence in Quality & Security",
              gradient: "from-blue-500 to-cyan-400",
              icon: "🏆",
              items: ["ISO 9001:2015", "ISO 27001:2013", "CMMI Level 3", "GDPR Compliant"]
            },
            {
              title: "Strategic Partnerships",
              description: "Collaborating with Industry Leaders",
              gradient: "from-purple-500 to-pink-400",
              icon: "🤝",
              items: ["Microsoft Gold Partner", "AWS Advanced Partner", "Google Cloud Partner", "Salesforce Partner"]
            }
          ].map((card, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {/* 3D Effect Container */}
              <div className="transform transition-all duration-700 group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-slate-600/50">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-xl transform group-hover:rotate-12 transition-transform duration-500`}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                          {card.title}
                        </h3>
                        <p className="text-blue-200/70 mt-1">{card.description}</p>
                      </div>
                    </div>

                    {/* Animated Badges */}
                    <div className="grid grid-cols-2 gap-4">
                      {card.items.map((item, i) => (
                        <div
                          key={i}
                          className={`relative p-4 rounded-xl bg-gradient-to-r ${card.gradient} bg-opacity-10 backdrop-blur-sm border border-current border-opacity-20 transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 animate-fade-in-up`}
                          style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                        >
                          <div className="text-center">
                            <div className="text-lg font-semibold text-white mb-1">{item}</div>
                            <div className="text-xs text-blue-200/60">Certified</div>
                          </div>
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 rounded-xl border border-current border-opacity-30 animate-ping opacity-0 group-hover:opacity-100"></div>
                        </div>
                      ))}
                    </div>

                    {/* Animated Progress Rings */}
                    <div className="mt-8 flex justify-center space-x-6">
                      {[90, 85, 95, 88].map((percent, i) => (
                        <div key={i} className="relative w-12 h-12">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              strokeOpacity="0.2"
                              className="text-current"
                            />
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="url(#gradient)"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray={`${percent * 1.26} 126`}
                              className="animate-draw"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                            {percent}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animated Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative z-10">
        <div className="text-blue-300/50 text-sm animate-pulse">
          ✨ Transforming Businesses Through Digital Innovation Since 2000 ✨
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