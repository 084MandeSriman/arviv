import React from 'react';

const BIAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* HERO SECTION */}
      <section className="w-full py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg mb-6 md:mb-8">
              <div className="flex">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full mr-1"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full mr-1"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-indigo-500 rounded-full"></div>
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-700">Data-Driven Decision Making</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Business Intelligence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                & Analytics
              </span>
            </h1>
            
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 md:mb-8 animate-pulse"></div>
          </div>

          <div className="glass-effect p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl animate-float-slow">
            <p className="text-sm md:text-base lg:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              We offer comprehensive Business Intelligence solutions and services that rely on authentic data to identify underlying patterns and deliver actionable insights. Our BI solutions enable predictive and forecasting analysis through advanced data visualization, helping organizations make informed business decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-12 lg:mt-16">
            {[
              { value: 'BI', label: 'Strategy', color: 'from-blue-500 to-cyan-500' },
              { value: 'ETL', label: 'Integration', color: 'from-indigo-500 to-purple-500' },
              { value: 'OLAP', label: 'Models', color: 'from-purple-500 to-pink-500' },
              { value: 'Dashboards', label: 'Visualization', color: 'from-cyan-500 to-blue-500' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-card-enter"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-24 md:h-28 lg:h-32 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-white shadow-xl mb-3 md:mb-4 transform hover:-translate-y-2 transition-transform duration-300`}>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold">{stat.value}</div>
                </div>
                <div className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE OFFER SECTION - Mobile: One by One, Desktop: Horizontal Scroll */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              We Offer
              <span className="block text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 font-light mt-3 md:mt-4">
                Comprehensive BI & Analytics Solutions
              </span>
            </h2>
          </div>

          <div className="md:flex md:overflow-x-auto md:pb-8 md:-mx-6 md:px-6 md:hide-scrollbar">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {[
                {
                  title: 'BI Strategy Formulation',
                  description: 'Evaluate current tools and processes to formulate effective business intelligence strategy',
                  icon: '🎯',
                  gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                },
                {
                  title: 'High-Performance Analytics',
                  description: 'Ability to run high-performance analytics for complex data processing',
                  icon: '⚡',
                  gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
                },
                {
                  title: 'Easy Data Access',
                  description: 'Enable customers to handle data with easy access to reports and insights',
                  icon: '📊',
                  gradient: 'linear-gradient(135deg, #a855f7 0%, #d946ef 100%)'
                },
                {
                  title: 'Machine Learning Integration',
                  description: 'Incorporate machine learning and data visualization with minimal cost',
                  icon: '🤖',
                  gradient: 'linear-gradient(135deg, #d946ef 0%, #ec4899 100%)'
                },
                {
                  title: 'Data Pattern Identification',
                  description: 'Identify underlying patterns in data for actionable insights',
                  icon: '🔍',
                  gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)'
                },
                {
                  title: 'Predictive Analysis',
                  description: 'Provide predictive and forecasting analysis for future planning',
                  icon: '📈',
                  gradient: 'linear-gradient(135deg, #f43f5e 0%, #f97316 100%)'
                }
              ].map((offer, index) => (
                <div 
                  key={index}
                  className="w-full md:min-w-[300px] md:h-[400px] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-4 animate-slide-left md:animate-slide-right"
                  style={{ 
                    background: offer.gradient,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="h-full p-6 md:p-8 flex flex-col justify-between text-white">
                    <div>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl md:text-4xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {offer.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{offer.title}</h3>
                      <p className="text-sm md:text-base text-white/90 leading-relaxed">{offer.description}</p>
                    </div>
                    <div className="mt-4 md:mt-6">
                      <div className="w-10 md:w-12 h-1 bg-white/50 rounded-full"></div>
                      <div className="text-xs md:text-sm opacity-75 mt-2">Service {index + 1}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounceOnce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-bounce-once {
          animation: bounceOnce 0.5s ease-out;
        }
        .animate-card-enter {
          animation: cardEnter 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-left {
          animation: slideLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-right {
          animation: slideRight 0.6s ease-out forwards;
          opacity: 0;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        .bg-dots-white\\/10 {
          background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BIAnalyticsPage;
