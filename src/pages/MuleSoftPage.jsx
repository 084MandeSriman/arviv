const MuleSoftPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* HERO SECTION */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              API-Led Integration Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                MuleSoft
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-blue-100 font-light">
                Integration Platform
              </span>
            </h1>
            
            <div className="flex justify-center">
              <div className="w-48 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mb-8"></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl animate-fade-up">
            <p className="text-xl text-blue-100 leading-relaxed text-center">
              Managing multiple, complex API integrations can be a daunting task. With our MuleSoft services, 
              it will be well-managed, risk-controlled and seamless activity. We offer a range of comprehensive 
              MuleSoft services to help your organization build a connected and integrated ecosystem.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: '100%', label: 'Integration Success' },
              { value: '70%', label: 'Cost Reduction' },
              { value: '50%', label: 'Faster Deployment' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE OFFER SECTION */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive MuleSoft services to achieve greater agility by creating reusable APIs and loosely coupled applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expertise & Governance',
                description: 'Controlling, accessing and monetizing your data using industry knowledge, best practice, governance and reusable assets.',
                icon: '👑',
                color: 'from-blue-500 to-cyan-500',
                delay: '100ms'
              },
              {
                title: 'Tools & Accelerators',
                description: 'Access to tools, reusable assets, accelerators and best practices for solving complex data transformation challenges.',
                icon: '🛠️',
                color: 'from-purple-500 to-pink-500',
                delay: '200ms'
              },
              {
                title: 'Agile Delivery',
                description: 'Continuous delivery approach and agile/DevOps methodology for faster, effective outcomes in integration and API development.',
                icon: '⚡',
                color: 'from-green-500 to-emerald-500',
                delay: '300ms'
              },
              {
                title: 'Application Services',
                description: 'Implementation, upgrades, migration projects and production support for connected and secure ecosystems.',
                icon: '🔄',
                color: 'from-orange-500 to-red-500',
                delay: '400ms'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-up"
                style={{ animationDelay: item.delay }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING SERVICES */}
      <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Expert Guidance
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Consulting
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    Services
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  MuleSoft allows developers to quickly and seamlessly connect applications for data exchange, 
                  making integration of different systems simpler, regardless of their technology platform.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    service: 'MuleSoft Enterprise Service Bus (ESB)',
                    desc: 'Connect your applications through MuleSoft on-premise or in the cloud',
                    icon: '🌉'
                  },
                  {
                    service: 'Mediation of Service',
                    desc: 'Shield services from message formats and protocols, enable location-independent service calls',
                    icon: '🛡️'
                  },
                  {
                    service: 'AnyPoint Platform',
                    desc: 'Solve connectivity problems on-premise or in the cloud across SOA, SaaS, and APIs',
                    icon: '🎯'
                  },
                  {
                    service: 'Service Hosting',
                    desc: 'Use MuleSoft as a lightweight service container to host reusable services',
                    icon: '🏠'
                  },
                  {
                    service: 'Data Transformation',
                    desc: 'Exchange data across varying formats and transport protocols',
                    icon: '🔄'
                  }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300 border border-gray-200 flex items-start gap-4 animate-fade-up"
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{service.service}</h4>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
                {/* Integration Flow Visualization */}
                <div className="relative h-96 mb-8">
                  <div className="absolute inset-0">
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl animate-pulse">
                      🔄
                    </div>
                    
                    {/* Connecting Nodes */}
                    {[
                      { label: 'Web Services', position: 'top-10 left-10', delay: '0s' },
                      { label: 'JDBC', position: 'top-10 right-10', delay: '0.2s' },
                      { label: 'HTTP', position: 'top-1/2 right-4', delay: '0.4s' },
                      { label: 'JMS', position: 'bottom-10 right-10', delay: '0.6s' },
                      { label: 'SaaS', position: 'bottom-10 left-10', delay: '0.8s' },
                      { label: 'APIs', position: 'top-1/2 left-4', delay: '1s' }
                    ].map((node, idx) => (
                      <div key={idx} className={`absolute ${node.position}`}>
                        <div 
                          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg animate-float"
                          style={{ animationDelay: node.delay }}
                        >
                          {node.label.split('')[0]}
                        </div>
                        <div className="absolute top-full mt-2 text-center">
                          <span className="text-sm font-medium text-gray-700">{node.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration Features */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Universal Connectivity</h4>
                      <p className="text-sm text-gray-600">Connect any system regardless of technology platform</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Real-time & Batch</h4>
                      <p className="text-sm text-gray-600">Available for deployment anywhere, integrating real-time or batch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT & CONFIGURATION */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Deployment &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Configuration
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible deployment models for cloud services, on-premise, and hybrid integration platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Deployment Options */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Deployment Options</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      platform: 'CloudHub',
                      type: 'iPaaS',
                      description: 'Integration Platform as a Service with no conventional installation needed',
                      color: 'from-blue-500 to-cyan-500'
                    },
                    {
                      platform: 'On-Premise',
                      type: 'Self-hosted',
                      description: 'Customer-operated environments for complete control and security',
                      color: 'from-purple-500 to-pink-500'
                    },
                    {
                      platform: 'AWS & Azure',
                      type: 'Public Cloud',
                      description: 'Deploy on leading cloud platforms with enterprise-grade scalability',
                      color: 'from-green-500 to-emerald-500'
                    }
                  ].map((option, index) => (
                    <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center text-white text-xl`}>
                            {option.platform.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{option.platform}</h4>
                            <span className="text-sm text-gray-500">{option.type}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Benefits */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Benefits</h3>
                
                <div className="grid gap-6">
                  {[
                    {
                      title: 'Gain MuleSoft Expertise',
                      description: 'Skills transfer accelerates time-to-value and gives ongoing returns',
                      icon: '🎓',
                      delay: '100ms'
                    },
                    {
                      title: 'Targeted Deployment',
                      description: 'Configuration optimized to meet your specific business goals',
                      icon: '🎯',
                      delay: '200ms'
                    },
                    {
                      title: 'Boost Performance',
                      description: 'Analysis and testing guarantee performance, security, and efficiency',
                      icon: '🚀',
                      delay: '300ms'
                    },
                    {
                      title: 'Accelerate Implementation',
                      description: 'Rapid deployment while minimizing potential business risks',
                      icon: '⚡',
                      delay: '400ms'
                    }
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 group animate-fade-up"
                      style={{ animationDelay: benefit.delay }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-purple-600 text-xl flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HIP Info */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    🔄
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Hybrid Integration Platform</h4>
                    <p className="text-gray-600 text-sm">
                      Build flexible hybrid integration platforms that can expand in cloud or customer-operated environments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT SERVICES */}
      <section className="w-full py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  Development Excellence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Development
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    Services
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Best-in-class MuleSoft development providing several advantages to developers and software testers, 
                  boosting your organization's growth and improving productivity.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Real-time Tracking',
                    description: 'Track and audit usage of all connected applications',
                    icon: '📊'
                  },
                  {
                    title: 'Component Reusability',
                    description: 'Reuse infrastructure segments to save time and resources',
                    icon: '♻️'
                  },
                  {
                    title: 'Wide Accessibility',
                    description: 'Support for variety of languages and real-time sync',
                    icon: '🌐'
                  },
                  {
                    title: 'Easy Embedding',
                    description: 'Seamlessly embed into new applications for testing',
                    icon: '🔧'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group hover:border-cyan-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center text-cyan-600 text-xl mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-2xl border border-cyan-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Development Advantages</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      advantage: 'Effective Scaling',
                      details: 'Interface entire systems without restrictions on application connections',
                      icon: '📈'
                    },
                    {
                      advantage: 'Non-disruptive Updates',
                      details: 'Update individual systems without disturbing others',
                      icon: '🔄'
                    },
                    {
                      advantage: 'Cross-platform Communication',
                      details: 'Enable true agility with seamless inter-platform communication',
                      icon: '🤝'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.advantage}</h4>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">
                      💡
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Smart Business Transformation</h4>
                      <p className="text-gray-600 text-sm">
                        Make your business self-dependent and agile with MuleSoft development services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIGRATION & UPGRADE */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Migration &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Upgrade Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enable digital transformation with Mule 4's enhanced capabilities for sustainable growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mule 4 Features */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                    M4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Mule 4 Platform</h3>
                    <p className="text-gray-600">Next-generation integration capabilities</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      feature: 'Frictionless Upgrades',
                      description: 'Class-loader isolation ensures internal library changes don\'t affect your apps or APIs',
                      icon: '🔄'
                    },
                    {
                      feature: 'Data Management',
                      description: 'Provision data, metadata and connections with optimized retention policies',
                      icon: '🗄️'
                    },
                    {
                      feature: 'Legacy Modernization',
                      description: 'Assist in modernizing legacy systems and implementing secure SaaS integrations',
                      icon: '🆙'
                    },
                    {
                      feature: 'API Lifecycle Management',
                      description: 'Full API lifecycle management from creation to retirement',
                      icon: '📋'
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 animate-fade-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-purple-600 text-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.feature}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Digital Transformation */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 shadow-xl border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Digital Transformation</h3>
                
                <div className="space-y-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Migration is typically just the first step to enabling a broader digital transformation vision, 
                    encompassing hybrid connectivity between Cloud, SaaS and on-premise systems.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Mule 4 enables federated agile delivery and a new operating model that supports creation and 
                    reuse of digital capabilities and assets (APIs) for sustainable growth.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">APIs</div>
                    <div className="text-sm text-gray-600">Reusable Assets</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">Micro-services</div>
                    <div className="text-sm text-gray-600">Agile Delivery</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">Cloud</div>
                    <div className="text-sm text-gray-600">Hybrid Connectivity</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Accelerated Development</h4>
                      <p className="text-gray-600 text-sm">
                        Promote creation and reuse of digital capabilities to accelerate development and production cycles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl shadow-xl border border-blue-200">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your Integration Strategy?</h3>
                <p className="text-gray-600">Connect with our MuleSoft experts for a customized solution</p>
              </div>
              <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center gap-3 whitespace-nowrap">
                Get Started
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
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .bg-grid-white\/10 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
};

export default MuleSoftPage;