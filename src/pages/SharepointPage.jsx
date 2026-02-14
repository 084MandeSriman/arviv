const SharepointPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* HERO SECTION */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-300/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Enterprise Content Management
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Microsoft
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                SharePoint
              </span>
            </h1>
            
            <div className="flex justify-center">
              <div className="w-48 h-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 rounded-full mb-8"></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl animate-fade-up">
            <p className="text-xl text-blue-50 leading-relaxed">
              Gaining quick access to accurate information and relevant documents is essential for efficient business operations. Delivering business-critical content to the right people at the right time, anytime and anywhere, is key to organizational success.
            </p>
            <p className="text-xl text-blue-50 leading-relaxed mt-6">
              Arvish Consulting Solutions has qualified professionals with extensive experience in designing, developing and implementing full-featured Enterprise Content Management solutions that are highly scalable and flexible.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: 'ECMS', label: 'Solutions' },
              { value: 'Scalable', label: 'Architecture' },
              { value: 'Flexible', label: 'Deployment' },
              { value: 'Expert', label: 'Consultants' }
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
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highly customizable ECMS platform that completely supports your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Customizable Platform',
                description: 'Highly customizable ECMS platform that completely supports your business goals',
                icon: '⚙️',
                color: 'from-blue-500 to-cyan-500',
                delay: '100ms'
              },
              {
                title: 'Seamless Integration',
                description: 'Seamless blending of content and processes to improve information sharing',
                icon: '🔄',
                color: 'from-purple-500 to-pink-500',
                delay: '200ms'
              },
              {
                title: 'Simple Management',
                description: 'Simple processes for managing documents and deriving valuable outputs',
                icon: '📄',
                color: 'from-green-500 to-emerald-500',
                delay: '300ms'
              },
              {
                title: 'User-Friendly Interface',
                description: 'Aesthetic and well laid out user interface for effortless navigation',
                icon: '🎨',
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
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    ✓
                  </div>
                </div>
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
              </div>

              <div className="space-y-8">
                <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl">
                      🏢
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Business Consulting</h3>
                      <p className="text-gray-600">We assess core business objectives and suggest suitable process improvements</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We assess core business objectives and recommend appropriate process improvements. Our team specializes in deployment, configuration, system integration and custom solution development for SharePoint both on-premises and in the cloud.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                      🔍
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-3">Technology Feasibility</h4>
                    <p className="text-gray-600 text-sm">
                      Technical due diligence, research and platform recommendation with estimated budget and timelines.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl border border-green-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                      🎓
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-3">Training & Workshops</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive end-user training, change management services and detailed technical documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
                {/* SharePoint Architecture Visualization */}
                <div className="relative h-80 mb-8">
                  <div className="absolute inset-0">
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl animate-pulse">
                      📊
                    </div>
                    
                    {/* Connecting Departments */}
                    {[
                      { label: 'HR', position: 'top-10 left-10', icon: '👥' },
                      { label: 'IT', position: 'top-10 right-10', icon: '💻' },
                      { label: 'Finance', position: 'bottom-10 left-10', icon: '💰' },
                      { label: 'Operations', position: 'bottom-10 right-10', icon: '⚙️' },
                      { label: 'Marketing', position: 'top-1/3 left-4', icon: '📢' }
                    ].map((dept, idx) => (
                      <div key={idx} className={`absolute ${dept.position}`}>
                        <div 
                          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg animate-float"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          {dept.icon}
                        </div>
                        <div className="absolute top-full mt-2 text-center">
                          <span className="text-sm font-medium text-gray-700">{dept.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
<div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Continuous Support</h4>
                      <p className="text-sm text-gray-600">Regular interaction and technical guidance</p>
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
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Configuration
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team assists organizations with initial site preparation, installation, setup and configuration of Microsoft SharePoint.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Methodology */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Methodology</h3>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Our deployment methodology is flexible and scalable to meet varying business needs and is based on Microsoft best practices and our extensive knowledge base.
                  </p>

                  <div className="grid gap-4">
                    {[
                      {
                        title: 'Microsoft Best Practices',
                        description: 'Microsoft best practices based implementation',
                        icon: '📚'
                      },
                      {
                        title: 'Comprehensive Documentation',
                        description: 'Comprehensive documentation and templates',
                        icon: '📋'
                      },
                      {
                        title: 'Robust Planning',
                        description: 'Robust planning and solution design',
                        icon: '🗺️'
                      },
                      {
                        title: 'Risk Mitigation',
                        description: 'Risk mitigation through structured deployment approach',
                        icon: '🛡️'
                      }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 group animate-fade-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
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
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Development
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    Services
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Arvish Consulting delivers next-generation business solutions with certified consultants providing domain expertise and ready-to-use frameworks for faster implementation.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Development</h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        type: 'Internet/Intranet Sites',
                        description: 'Modern digital workplaces with seamless integration across all divisions',
                        icon: '🌐'
                      },
                      {
                        type: 'Business-critical Applications',
                        description: 'Mission critical applications using out-of-the-box SharePoint features',
                        icon: '🎯'
                      },
                      {
                        type: 'Document Management Solutions',
                        description: 'Cost-effective EDMS with scheduled reviews and approval workflows',
                        icon: '📄'
                      },
                      {
                        type: 'Project Management Sites',
                        description: 'Collaborative portals for sharing project information and team coordination',
                        icon: '🤝'
                      }
                    ].map((service, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg mb-2">{service.type}</h4>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Custom Components */}
              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-2xl border border-cyan-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom Components</h3>
                
                <div className="grid gap-4">
                  {[
                    'Members Web Part – Displays all the members of a site',
                    'Quick Links Web Part – Shows quick links from list to all SharePoint Pages',
                    'Tabs/Accordion Web Part – Tabs to display data in SharePoint pages',
                    'HR Request Portal – Portal for HR Related information using React',
                    'Email Signature App – Generate Email Signature with location-specific customization'
                  ].map((component, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{component}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Proven Frameworks</h4>
                      <p className="text-gray-600 text-sm">
                        Leverage previous experience and proven frameworks for maximum development speed and exceptional digital experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaboration Benefits */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                    🤝
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">True Collaboration</h4>
                    <p className="text-gray-600">Cross-functional teams can work on the latest version of documents with complete audit history, ensuring better manageability, higher productivity, full accountability and enhanced operational efficiency.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-lg font-bold text-gray-900">Better</div>
                    <div className="text-sm text-gray-600">Manageability</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-lg font-bold text-gray-900">Higher</div>
                    <div className="text-sm text-gray-600">Productivity</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-lg font-bold text-gray-900">Full</div>
                    <div className="text-sm text-gray-600">Accountability</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-lg font-bold text-gray-900">Enhanced</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
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
              Proven migration methodology for seamless upgrades to latest SharePoint versions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Migration Types */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                    🔄
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Migration Services</h3>
                    <p className="text-gray-600">Seamless upgrade from older versions to latest SharePoint</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Version Upgrade',
                      description: 'Our migration services enable seamless upgrade from older SharePoint versions to the latest platforms, including Office 365.',
                      details: 'Assessment, planning, and reporting capabilities for enterprise content consolidation'
                    },
                    {
                      title: 'File System Migration',
                      description: 'We also migrate file system content to SharePoint, allowing secure access through web browsers anytime and anywhere.',
                      details: 'Access file system content via web browser anytime, anywhere'
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors duration-300"
                    >
                      <h4 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h4>
                      <p className="text-gray-700 mb-2">{item.description}</p>
                      <p className="text-gray-600 text-sm">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Microsoft PowerApps */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 shadow-xl border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Microsoft PowerApps</h3>
                
                <div className="space-y-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Develop custom, high-productivity business applications with minimal coding. 
                    Integrate data from multiple sources such as SharePoint and deploy instantly 
                    across mobile and desktop platforms.
                  </p>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 text-lg mb-4">Pre-defined Templates</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Timesheets', 'Accounting', 'Surveys', 'Asset Management'].map((template, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg text-center">
                          <span className="text-sm font-medium text-gray-700">{template}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white">
                      📱
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Lead Capture APP</h4>
                      <p className="text-gray-600 text-sm">
                        Recently developed Dynamics 365 app providing mobile capabilities for sales personnel
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your Organization?</h3>
                <p className="text-gray-600">Connect with our SharePoint experts to design and implement a solution tailored to your business needs.</p>
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

export default SharepointPage;