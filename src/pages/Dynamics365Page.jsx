const Dynamics365Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* HERO SECTION - Modern Glass Morphism */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg mb-8">
              <div className="flex">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-gray-700">Modern Business Applications</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Microsoft
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Dynamics 365
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          </div>

          <div className="glass-effect p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl animate-float-slow">
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Arvish Consulting's expertise in implementing CRM solutions is achieved through its technically skilled and certified professionals. 
              As your technology partner, we deliver Modern Workplace applications utilizing Dynamics CRM that accelerate 
              business growth and faster Return on Investment.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '100%', label: 'Scalable', color: 'from-blue-500 to-cyan-500' },
              { value: 'AI-Powered', label: 'Intelligence', color: 'from-purple-500 to-pink-500' },
              { value: 'Fast', label: 'Deployment', color: 'from-green-500 to-emerald-500' },
              { value: '24/7', label: 'Support', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-card-enter"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-32 bg-gradient-to-br ${stat.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-xl mb-4 transform hover:-translate-y-2 transition-transform duration-300`}>
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                </div>
                <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE OFFER SECTION - Horizontal Scrolling Cards */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Offer
              <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
                Comprehensive Dynamics 365 Solutions
              </span>
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 hide-scrollbar">
            <div className="flex gap-8">
              {[
                {
                  title: 'Cost-Effective Platform',
                  description: 'Highly scalable CRM platform that grows with your business',
                  icon: '💰',
                  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                },
                {
                  title: 'Built-in Intelligence',
                  description: 'AI-powered automation for several business tasks',
                  icon: '🤖',
                  gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                },
                {
                  title: 'Rapid Deployment',
                  description: 'Easy and fast implementation with minimal disruption',
                  icon: '🚀',
                  gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                },
                {
                  title: 'Excellent Support',
                  description: 'Resulting in increased customer referrals and satisfaction',
                  icon: '⭐',
                  gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                },
                {
                  title: 'Customer Insights',
                  description: 'Harness customer experience to improve products and services',
                  icon: '📊',
                  gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                }
              ].map((offer, index) => (
                <div 
                  key={index}
                  className="min-w-[300px] h-[400px] rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-right"
                  style={{ 
                    background: offer.gradient,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="h-full p-8 flex flex-col justify-between text-white">
                    <div>
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {offer.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                      <p className="text-white/90 leading-relaxed">{offer.description}</p>
                    </div>
                    <div className="mt-6">
                      <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                      <div className="text-sm opacity-75 mt-2">Advantage {index + 1}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT & CONSULTING - Process Timeline */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-900 to-indigo-900 relative">
        <div className="absolute inset-0 bg-dots-white/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Consulting Services
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Arvish Consulting Solutions is a specialist technology success partner focused on providing strategic business outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Process Steps */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8">Our Success Formula</h3>
                
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"></div>
                  
                  {/* Process Steps */}
                  {[
                    { step: 'Due Diligence', desc: 'Initial Discussions & Analysis' },
                    { step: 'Discovery & Design', desc: 'Requirements Gathering & Planning' },
                    { step: 'Build Core Components', desc: 'Development of Core Features' },
                    { step: 'Build Integration', desc: 'System Integration Components' },
                    { step: 'Quality Assurance', desc: 'Testing & Quality Control' },
                    { step: 'Rollout', desc: 'Deployment & Launch' }
                  ].map((process, index) => (
                    <div key={index} className="relative flex items-start mb-10 last:mb-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'} flex items-center justify-center text-white text-xl font-bold z-10 transform hover:scale-110 transition-transform duration-300 animate-bounce-once`}
                           style={{ animationDelay: `${index * 300}ms` }}>
                        {index + 1}
                      </div>
                      <div className="ml-6 pt-4">
                        <h4 className="text-xl font-bold text-white mb-2">{process.step}</h4>
                        <p className="text-blue-200">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Technology Success Partner</h3>
                <p className="text-blue-200 leading-relaxed mb-8">
                  We become a true business partner with our clients, impacting the big costs that affect the bottom line.
                  Our experienced team helps identify, build, implement, service and support Dynamics CRM solutions.
                </p>
                
                <div className="grid gap-4">
                  {[
                    { text: 'Process Transformation Assistance', icon: '🔄' },
                    { text: 'Best Practices Knowledge Sharing', icon: '📚' },
                    { text: 'Detailed Documentation Exchange', icon: '📄' },
                    { text: 'Business Process Optimization', icon: '⚡' }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-white text-xl">
                        {benefit.icon}
                      </div>
                      <span className="text-white font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING SECTION - Split Design */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Marketing Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
                Marketing Automation
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Marketing
                <span className="block text-3xl md:text-4xl text-gray-600 font-light mt-4">
                  Turn leads into customers with intelligent marketing
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Arvish Consulting solutions enables organizations to take advantage of Dynamics 365 and helps businesses 
                turn leads into customers with marketing intelligence tools for highly personalized experiences.
              </p>

              {/* Interactive Marketing Cards */}
              <div className="grid gap-4">
                {[
                  { title: 'Multi-Channel Journeys', desc: 'Right message, right time, right channel' },
                  { title: 'Campaign Automation', desc: 'Configurable templates & reusable content' },
                  { title: 'Seamless Experiences', desc: 'Marketing automation & shared data' },
                  { title: 'Data-Driven Insights', desc: 'Lead scoring & custom dashboards' }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-pink-300 transition-all duration-300 hover:-translate-x-2"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-pink-500 to-purple-500' : 'from-purple-500 to-blue-500'} flex items-center justify-center text-white text-xl`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Marketing Visualization */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                {/* Marketing Funnel Visualization */}
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                      Marketing Funnel
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { stage: 'Awareness', width: '100%', leads: '1000', color: 'from-pink-400 to-rose-400' },
                      { stage: 'Interest', width: '70%', leads: '700', color: 'from-purple-400 to-pink-400' },
                      { stage: 'Consideration', width: '40%', leads: '400', color: 'from-blue-400 to-purple-400' },
                      { stage: 'Conversion', width: '15%', leads: '150', color: 'from-green-400 to-cyan-400' }
                    ].map((funnel, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700">{funnel.stage}</span>
                          <span className="text-sm font-bold text-gray-900">{funnel.leads} Leads</span>
                        </div>
                        <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${funnel.color} rounded-full transition-all duration-1000 ease-out animate-fill-width`}
                            style={{ width: funnel.width, animationDelay: `${idx * 200}ms` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-300">
                    <div className="text-2xl font-bold text-gray-900 mb-2">Unified Interface</div>
                    <p className="text-gray-600">
                      Track marketing performance across multiple devices in real-time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIFIED SERVICE DESK */}
      <section className="w-full py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unified Service Desk
              <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
                Deliver exceptional customer service experiences
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Customer Service Visualization */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                {/* Customer Journey */}
                <div className="relative h-64 mb-8">
                  {/* Central Customer */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl animate-pulse">
                    👤
                  </div>
                  
                  {/* Service Channels */}
                  {[
                    { channel: 'Phone', position: 'top-4 left-1/2 -translate-x-1/2', icon: '📞', delay: '0s' },
                    { channel: 'Email', position: 'top-1/3 right-8', icon: '📧', delay: '0.2s' },
                    { channel: 'Chat', position: 'bottom-1/3 right-8', icon: '💬', delay: '0.4s' },
                    { channel: 'Social', position: 'bottom-1/3 left-8', icon: '🌐', delay: '0.6s' },
                    { channel: 'Self-Service', position: 'bottom-4 left-1/2 -translate-x-1/2', icon: '🖥️', delay: '0.8s' }
                  ].map((channel, idx) => (
                    <div key={idx} className={`absolute ${channel.position}`}>
                      <div 
                        className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg animate-float"
                        style={{ animationDelay: channel.delay }}
                      >
                        {channel.icon}
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{channel.channel}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl">
                    <div className="text-lg font-bold text-gray-900">360°</div>
                    <div className="text-sm text-gray-600">Customer View</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl">
                    <div className="text-lg font-bold text-gray-900">Real-time</div>
                    <div className="text-sm text-gray-600">Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Capabilities */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-xl border border-cyan-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Capabilities</h3>
                
                <div className="space-y-6">
                  {[
                    'Respond faster to customer service issues with empowered service organization',
                    'Deliver value at every touchpoint with personalized interactions',
                    'Interact through customers preferred channels',
                    'Create consistent service experience with threaded customer view',
                    'Quickly offer appropriate knowledge articles using relevance search'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1 transform group-hover:rotate-12 transition-transform duration-300">
                        ✓
                      </div>
                      <p className="text-gray-700 leading-relaxed">{capability}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl border border-cyan-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                      🏆
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Customer Loyalty</h4>
                      <p className="text-gray-600 text-sm">
                        Best-in-class self-service, peer-to-peer service and assisted services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-300 transform hover:scale-105 transition-transform duration-300">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your Business?</h3>
                <p className="text-gray-600">Connect with our Dynamics 365 experts for a customized solution</p>
              </div>
              <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap">
                Schedule Demo
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        @keyframes fillWidth {
          from { width: 0%; }
          to { width: 100%; }
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
        .animate-slide-right {
          animation: slideRight 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fill-width {
          animation: fillWidth 1s ease-out forwards;
          animation-delay: inherit;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        .bg-dots-white\/10 {
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

export default Dynamics365Page;