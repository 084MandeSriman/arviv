import React from 'react';

const ServiceNowPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* HERO SECTION */}
      <section className="w-full py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              ServiceNow
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">
                Platform Solutions
              </span>
            </h1>
          </div>

          <div className="glass-effect p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              ServiceNow enables organizations to streamline IT service management and operations through a unified digital workflow platform.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-3 md:mt-4">
              Arvish Consulting delivers implementation, customization, integration and support services that help enterprises improve operational efficiency, reduce resolution time and achieve higher service quality through process-driven execution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-16">
            {[
              { value: 'SLA', label: 'Driven Delivery' },
              { value: 'Process', label: 'Oriented' },
              { value: 'Secure', label: 'Operations' },
              { value: 'Scalable', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="h-24 md:h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-white shadow-xl mb-3 md:mb-4">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold">{stat.value}</div>
                </div>
                <div className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE OFFER SECTION */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: 'Modern IT Service Management',
                description: 'Enable structured and process-driven IT service management aligned to business goals.',
                icon: '🔄'
              },
              {
                title: 'Team Alignment',
                description: 'Improve collaboration between support teams through defined workflows and governance.',
                icon: '🤝'
              },
              {
                title: 'Downtime Cost Savings',
                description: 'Reduce resolution time through proactive monitoring and periodic maintenance activities.',
                icon: '💰'
              },
              {
                title: 'Enterprise Capability Expansion',
                description: 'Extend service management across infrastructure, applications and business functions.',
                icon: '📈'
              },
              {
                title: 'Easy Integration',
                description: 'Integrate enterprise systems, portals and applications for seamless information flow.',
                icon: '🔗'
              },
              {
                title: 'Automated Incident Management',
                description: 'Standardize service processes using predefined workflows and SLA-based delivery.',
                icon: '⚡'
              }
            ].map((offer, index) => (
              <div key={index} className="p-5 md:p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 lg:mb-4">{offer.icon}</div>
                <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 leading-tight">{offer.title}</h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING & IMPLEMENTATION */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Consulting & Implementation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8 border border-white/20">
              <div className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 lg:mb-6">🔍</div>
              <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4 leading-tight">ServiceNow Consulting</h3>
              <p className="text-xs md:text-sm lg:text-base text-blue-200 leading-relaxed">
                Bring visibility into IT processes and infrastructure, enable faster response to service disruptions and optimize operational costs through structured service management.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8 border border-white/20">
              <div className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 lg:mb-6">🛠️</div>
              <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4 leading-tight">ServiceNow Implementation</h3>
              <p className="text-xs md:text-sm lg:text-base text-blue-200 leading-relaxed">
                Design and deploy scalable service management solutions aligned with industry best practices and business requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8 border border-white/20">
              <div className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 lg:mb-6">⚙️</div>
              <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4 leading-tight">ServiceNow Customization</h3>
              <p className="text-xs md:text-sm lg:text-base text-blue-200 leading-relaxed">
                Configure workflows, forms and integrations tailored to your operational and domain requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APP DEVELOPMENT & TESTING */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Custom App Development & Testing
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              {[
                { 
                  title: 'Single Data Architecture', 
                  desc: 'Centralized data management with secure access and controlled workflows',
                  icon: '🗄️'
                },
                { 
                  title: 'Cross-Platform Capabilities', 
                  desc: 'Enable access across web and mobile environments with role-based permissions',
                  icon: '📱'
                },
                { 
                  title: 'Rapid Application Development', 
                  desc: 'Accelerate business application development using reusable components',
                  icon: '⚡'
                },
                { 
                  title: 'Pre-built Services', 
                  desc: 'Use standardized templates for faster implementation and deployment',
                  icon: '📦'
                }
              ].map((feature, index) => (
                <div key={index} className="p-3 md:p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg">
                  <div className="flex items-start md:items-center gap-2 md:gap-3 lg:gap-4">
                    <div className="text-xl md:text-2xl lg:text-3xl flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base lg:text-lg mb-0.5 md:mb-1 leading-tight">{feature.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">Testing Services</h3>
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                {[
                  { stage: 'Plan', percentage: 100 },
                  { stage: 'Construct', percentage: 85 },
                  { stage: 'Stabilize', percentage: 75 },
                  { stage: 'Execute', percentage: 90 }
                ].map((phase, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base font-semibold text-gray-700">{phase.stage}</span>
                      <span className="text-xs md:text-sm font-bold text-gray-900">{phase.percentage}%</span>
                    </div>
                    <div className="h-4 md:h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                        style={{ width: `${phase.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT & MANAGED SERVICES */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Support & Managed Services
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8 shadow-xl">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">ServiceNow Support</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed mb-4 md:mb-6 lg:mb-8">
                We provide continuous support services to ensure system performance, security and availability through structured monitoring and periodic enhancements.
              </p>
              
              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                {[
                  { text: 'System administration & performance monitoring', icon: '📊' },
                  { text: 'Troubleshooting & health checks', icon: '🔧' },
                  { text: 'Security & access management', icon: '🛡️' },
                  { text: 'Release & change support', icon: '🔄' }
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 lg:gap-4 p-2.5 md:p-3 lg:p-4 bg-blue-50 rounded-lg md:rounded-xl">
                    <div className="text-lg md:text-xl lg:text-2xl flex-shrink-0">{service.icon}</div>
                    <span className="text-xs md:text-sm lg:text-base text-gray-800 font-medium leading-snug">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8 shadow-xl">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">ServiceNow Managed Services</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed mb-4 md:mb-6 lg:mb-8">
                Our managed services help streamline enterprise processes, improve efficiency and enable faster adoption of new technologies through continuous improvement initiatives.
              </p>
              
              <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
                {[
                  { title: 'Higher Efficiency', icon: '📈' },
                  { title: 'Risk Reduction', icon: '🛡️' },
                  { title: 'Future Ready', icon: '🚀' },
                  { title: 'Continuous Improvement', icon: '🔄' }
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-2.5 md:p-3 lg:p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg md:rounded-xl">
                    <div className="text-lg md:text-xl lg:text-2xl mb-1 md:mb-1.5 lg:mb-2">{benefit.icon}</div>
                    <div className="text-xs md:text-sm lg:text-base font-bold text-gray-900 leading-tight">{benefit.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default ServiceNowPage;
