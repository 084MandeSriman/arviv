const ServiceNowPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* HERO SECTION - Modern Glass Morphism */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-green-500/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg mb-8">
              <div className="flex">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-gray-700">IT Service Management Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              ServiceNow
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">
                Platform Solutions
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          </div>

          <div className="glass-effect p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl animate-float-slow">
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              ServiceNow Platform provides a shared resource for IT operations and IT Service Management teams to work together efficiently during service disruptions. 
              Our ServiceNow Platform services offer capabilities that make it easy for enterprises to leverage seamless integrations and extend platform capabilities.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: 'Automated', label: 'Problem Resolution', color: 'from-blue-500 to-cyan-500' },
              { value: 'Zero Delays', label: 'Ticket Processing', color: 'from-teal-500 to-emerald-500' },
              { value: 'Seamless', label: 'Integration', color: 'from-green-500 to-lime-500' },
              { value: '24/7', label: 'Managed Services', color: 'from-cyan-500 to-blue-500' }
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
      <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Offer
              <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
                Comprehensive ServiceNow Platform Benefits
              </span>
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 hide-scrollbar">
            <div className="flex gap-8">
              {[
                {
                  title: 'Modern IT Service Management',
                  description: "Your organisation's IT Service Management can be modernised with ServiceNow Platform",
                  icon: '🔄',
                  gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
                },
                {
                  title: 'Team Alignment',
                  description: 'Alignment between IT Ops and ITSM teams can be achieved',
                  icon: '🤝',
                  gradient: 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)'
                },
                {
                  title: 'Downtime Cost Savings',
                  description: 'Reduces mean time to resolution for infrastructure and application issues',
                  icon: '💰',
                  gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                },
                {
                  title: 'Enterprise Capability Expansion',
                  description: 'Service management across IT, security operations and customer service',
                  icon: '📈',
                  gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)'
                },
                {
                  title: 'Easy Integration',
                  description: 'Connect tickets, cases, work orders, warranties and SLAs with ERP/CRM',
                  icon: '🔗',
                  gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
                },
                {
                  title: 'Automated Incident Management',
                  description: 'Automatically populates relevant data into incident tickets',
                  icon: '⚡',
                  gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
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
                      <div className="text-sm opacity-75 mt-2">Benefit {index + 1}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING & IMPLEMENTATION - Process Timeline */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-900 to-teal-900 relative">
        <div className="absolute inset-0 bg-dots-white/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Consulting &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
                Implementation
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We provide strategic value, best practice design and process improvement for your ServiceNow platform
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Consulting */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                🔍
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ServiceNow Consulting</h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                We bring visibility to IT processes and infrastructure, allow prompt response to disruptions, 
                minimize negative impact of infrastructural changes and help optimize IT support costs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">IT Process Visibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">Rapid Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">Cost Optimization</span>
                </div>
              </div>
            </div>

            {/* Implementation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                🛠️
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ServiceNow Implementation</h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                We design, develop and implement ready-to-use ServiceNow instances with strategic value and 
                best practice design. Quick wins that provide immediate value to your business.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-white">Ready-to-use Instances</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-white">Best Practice Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-white">Quick Wins</span>
                </div>
              </div>
            </div>

            {/* Customization */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ServiceNow Customization</h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                We customize and configure the ServiceNow platform to optimize it for your operations, 
                workflows and industry requirements. Tailored solutions for unique business needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white">Flexible Cloud Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white">Workflow Optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white">Industry Requirements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP DEVELOPMENT & TESTING - Split Design */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - App Development */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                Custom App Development
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Custom App
                <span className="block text-3xl md:text-4xl text-gray-600 font-light mt-4">
                  Development & Testing
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                ServiceNow platform opens up new possibilities for custom business solutions. We help you 
                assess the buy vs. build decision and leverage the ServiceNow Application Development suite.
              </p>

              {/* Development Features */}
              <div className="grid gap-4">
                {[
                  { 
                    title: 'Single Data Architecture', 
                    desc: 'Extensible data architecture with reusable components',
                    icon: '🗄️'
                  },
                  { 
                    title: 'Cross-Platform Capabilities', 
                    desc: 'Workflow, notifications and mobile capabilities',
                    icon: '📱'
                  },
                  { 
                    title: 'Rapid Application Development', 
                    desc: 'Minimal to no coding required for business applications',
                    icon: '⚡'
                  },
                  { 
                    title: 'Pre-built Services', 
                    desc: 'Rich set of templates for quick development',
                    icon: '📦'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-x-2"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-cyan-500' : 'from-teal-500 to-green-500'} flex items-center justify-center text-white text-xl`}>
                        {feature.icon}
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

            {/* Right - Testing Services */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-teal-500/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                {/* Testing Process Visualization */}
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold">
                      ServiceNow Testing Services
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { stage: 'Plan', percentage: 100, color: 'from-cyan-400 to-blue-400' },
                      { stage: 'Construct', percentage: 85, color: 'from-blue-400 to-indigo-400' },
                      { stage: 'Stabilize', percentage: 75, color: 'from-indigo-400 to-purple-400' },
                      { stage: 'Execute', percentage: 90, color: 'from-purple-400 to-teal-400' }
                    ].map((phase, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700">{phase.stage}</span>
                          <span className="text-sm font-bold text-gray-900">{phase.percentage}%</span>
                        </div>
                        <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${phase.color} rounded-full transition-all duration-1000 ease-out animate-fill-width`}
                            style={{ width: `${phase.percentage}%`, animationDelay: `${idx * 200}ms` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-300">
                    <div className="text-2xl font-bold text-gray-900 mb-2">End-to-End Testing</div>
                    <p className="text-gray-600">
                      Automated regression tests and functional testing of the entire platform
                    </p>
                  </div>
                </div>
              </div>

              {/* Testing Capabilities */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-gray-900 text-lg mb-4">Comprehensive Testing</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Automated Tests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Regression Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Functional Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Platform Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT & MANAGED SERVICES */}
      <section className="w-full py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support &
              <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
                Managed Services
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Support Services */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ServiceNow Support</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  When IT problems occur the impact can be high and the resolution time has to be low. 
                  We offer paramount service and support with focus, expertise and experience.
                </p>
                
                <div className="grid gap-4">
                  {[
                    { text: 'System Administration & Performance Monitoring', icon: '📊' },
                    { text: 'Troubleshooting & Solution Health Checks', icon: '🔧' },
                    { text: 'Security Audits & Functionality Expansions', icon: '🛡️' },
                    { text: 'Release Migration & Implementation Support', icon: '🔄' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-blue-100">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-600 text-xl">
                        {service.icon}
                      </div>
                      <span className="text-gray-800 font-medium">{service.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                      🚨
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Critical Response</h4>
                      <p className="text-gray-600 text-sm">
                        Flexible service components for personalized service scope
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Managed Services */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ServiceNow Managed Services</h3>
                
                <div className="space-y-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    We offer a wide variety of services that help consolidate and streamline processes across 
                    your enterprise, resulting in higher ROI, risk minimization and rapid adoption of future IT trends.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: 'Higher ROI', value: '📈', desc: 'Increased return on investment' },
                      { title: 'Risk Minimized', value: '🛡️', desc: 'Reduced business risks' },
                      { title: 'Future Ready', value: '🚀', desc: 'Adopt IT trends faster' },
                      { title: '24/7 Support', value: '⏰', desc: 'Round-the-clock assistance' }
                    ].map((benefit, index) => (
                      <div key={index} className="text-center p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl">
                        <div className="text-2xl mb-2">{benefit.value}</div>
                        <div className="font-bold text-gray-900">{benefit.title}</div>
                        <div className="text-sm text-gray-600">{benefit.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Visualization */}
                <div className="relative h-48 mb-8">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
                    ☁️
                  </div>
                  
                  {[
                    { service: 'Periodic Assessments', position: 'top-4 left-1/2 -translate-x-1/2', icon: '📋', delay: '0s' },
                    { service: 'Personalized Advice', position: 'top-1/3 right-4', icon: '💡', delay: '0.3s' },
                    { service: 'Latest Features', position: 'bottom-1/3 right-4', icon: '✨', delay: '0.6s' },
                    { service: 'Tailored Solutions', position: 'bottom-1/3 left-4', icon: '🎯', delay: '0.9s' },
                    { service: 'Process Improvements', position: 'bottom-4 left-1/2 -translate-x-1/2', icon: '⚡', delay: '1.2s' }
                  ].map((item, idx) => (
                    <div key={idx} className={`absolute ${item.position}`}>
                      <div 
                        className="w-14 h-14 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg animate-float"
                        style={{ animationDelay: item.delay }}
                      >
                        {item.icon}
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center w-24">
                        <span className="text-xs font-semibold text-gray-700">{item.service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-300 transform hover:scale-105 transition-transform duration-300">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your IT Operations?</h3>
                <p className="text-gray-600">Connect with our ServiceNow experts for a customized platform solution</p>
              </div>
              <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap">
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

export default ServiceNowPage;