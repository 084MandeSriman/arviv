const DevOpsPage = () => {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              Modern Software Delivery
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                DevOps
              </span>
            </h1>
            
            <div className="flex justify-center">
              <div className="w-48 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mb-8"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Improve application performance through periodic maintenance, performance tuning and infrastructure optimization.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accelerated Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Achieve faster implementation and release cycles using structured development, testing and deployment processes.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated teams work closely with customers to ensure timely delivery, continuous improvements and quick resolution of issues.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">DevOps Lifecycle</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A continuous journey from planning to monitoring, enabling rapid innovation and reliable delivery
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full -translate-y-1/2 hidden md:block"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                {[
                  { step: 'Plan', desc: 'Requirement analysis and resource planning', color: 'from-blue-500 to-cyan-500', delay: '500ms' },
                  { step: 'Code', desc: 'Custom application development', color: 'from-purple-500 to-pink-500', delay: '600ms' },
                  { step: 'Build', desc: 'Testing and quality validation', color: 'from-green-500 to-emerald-500', delay: '700ms' },
                  { step: 'Deploy', desc: 'Implementation and release management', color: 'from-orange-500 to-red-500', delay: '800ms' },
                  { step: 'Monitor', desc: 'SLA-based support and performance monitoring', color: 'from-indigo-500 to-blue-500', delay: '900ms' }
                ].map((item, index) => (
                  <div key={index} className="text-center animate-fade-up" style={{ animationDelay: item.delay }}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.step}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVOPS IMPLEMENTATION JOURNEY */}
      <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Structured Implementation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Transformation</span> Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We orchestrate seamless DevOps adoption through a phased, collaborative approach that bridges development and operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  phase: 'Assessment & Analysis',
                  icon: '📊',
                  description: 'Comprehensive gap analysis and roadmap development',
                  detail: 'We evaluate your current workflows to identify automation opportunities and bottlenecks.',
                  color: 'from-blue-500 to-cyan-500',
                  delay: '100'
                },
                {
                  phase: 'Architecture Design',
                  icon: '🏗️',
                  description: 'Tool selection and infrastructure blueprint',
                  detail: 'Designing scalable architecture with optimal technology stack for your needs.',
                  color: 'from-purple-500 to-pink-500',
                  delay: '200'
                },
                {
                  phase: 'Automation Integration',
                  icon: '⚙️',
                  description: 'CI/CD pipeline and testing automation',
                  detail: 'Implementing automated deployment, testing, and monitoring solutions.',
                  color: 'from-green-500 to-teal-500',
                  delay: '300'
                },
                {
                  phase: 'Deployment & Integration',
                  icon: '🚀',
                  description: 'Seamless implementation and team enablement',
                  detail: 'Phased rollout with comprehensive training and documentation.',
                  color: 'from-orange-500 to-red-500',
                  delay: '400'
                },
                {
                  phase: 'Optimization & Security',
                  icon: '🛡️',
                  description: 'Performance tuning and security hardening',
                  detail: 'Continuous monitoring, network testing, and security compliance checks.',
                  color: 'from-indigo-500 to-blue-500',
                  delay: '500'
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-up"
                  style={{ animationDelay: `${step.delay}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800 shadow-md">
                        {index + 1}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">{step.description}</p>
                      <p className="text-gray-500 text-sm">{step.detail}</p>
                      
                      <div className="mt-4">
                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${step.color} rounded-full group-hover:w-full transition-all duration-1000 ease-out`}
                            style={{ width: '0%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-gray-300 group-hover:text-blue-500 transition-colors duration-300 transform group-hover:translate-x-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="relative h-96">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 border-4 border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center animate-pulse">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      {[
                        { text: 'Plan', color: 'bg-blue-500', top: '10%', left: '35%' },
                        { text: 'Code', color: 'bg-purple-500', top: '30%', left: '80%' },
                        { text: 'Build', color: 'bg-green-500', top: '70%', left: '80%' },
                        { text: 'Test', color: 'bg-yellow-500', top: '90%', left: '35%' },
                        { text: 'Deploy', color: 'bg-red-500', top: '70%', left: '-10%' },
                        { text: 'Monitor', color: 'bg-indigo-500', top: '30%', left: '-10%' }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`absolute ${item.color} text-white w-14 h-14 rounded-xl flex items-center justify-center font-bold shadow-lg transform animate-float`}
                          style={{ 
                            top: item.top, 
                            left: item.left,
                            animationDelay: `${idx * 0.2}s`
                          }}
                        >
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">70%</div>
                    <div className="text-sm text-gray-600 mt-1">Faster Deployment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">50%</div>
                    <div className="text-sm text-gray-600 mt-1">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">90%</div>
                    <div className="text-sm text-gray-600 mt-1">Automation Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-transparent rounded-3xl -z-10 blur-xl opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-500 to-transparent rounded-3xl -z-10 blur-xl opacity-30"></div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center gap-3 mx-auto">
              Start Your DevOps Journey
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CONTINUOUS DELIVERY ACCELERATION */}
      <section className="w-full py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold mb-6 animate-bounce-subtle">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                DevOps Powered Delivery
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Accelerate <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Continuous Delivery</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-600 font-light">with DevOps Excellence</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We transform traditional development pipelines into automated, high-velocity delivery systems that 
                accelerate your time-to-market while maintaining exceptional quality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: 'Rapid Innovation',
                    desc: 'Release features 10x faster with automated pipelines',
                    icon: '🚀',
                    color: 'from-orange-500 to-red-500',
                    delay: '100'
                  },
                  {
                    title: 'Reduced Effort',
                    desc: '90% reduction in manual deployment tasks',
                    icon: '⚡',
                    color: 'from-yellow-500 to-orange-500',
                    delay: '200'
                  },
                  {
                    title: 'Cost Efficiency',
                    desc: 'Optimize infrastructure costs by up to 60%',
                    icon: '💰',
                    color: 'from-green-500 to-emerald-600',
                    delay: '300'
                  },
                  {
                    title: 'Value Added',
                    desc: 'Enhanced services through intelligent automation',
                    icon: '🌟',
                    color: 'from-purple-500 to-pink-500',
                    delay: '400'
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-slide-up"
                    style={{ animationDelay: `${benefit.delay}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-xl transform group-hover:rotate-12 transition-transform duration-300`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-gray-200 to-transparent transition-all duration-700 ease-out"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Continuous Quality Improvements</h4>
                    <p className="text-gray-600">Automated testing & monitoring ensure 99.9% reliability across deployments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="relative h-[500px]">
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>
                    
                    <div className="absolute top-1/2 left-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-y-1/2 shadow-lg animate-marquee"></div>
                    
                    {[
                      { 
                        step: 'Code', 
                        icon: '💻', 
                        desc: 'Develop', 
                        left: '5%',
                        color: 'from-blue-500 to-cyan-500',
                        delay: '0s'
                      },
                      { 
                        step: 'Build', 
                        icon: '🏗️', 
                        desc: 'Compile', 
                        left: '25%',
                        color: 'from-purple-500 to-pink-500',
                        delay: '0.2s'
                      },
                      { 
                        step: 'Test', 
                        icon: '🧪', 
                        desc: 'Validate', 
                        left: '45%',
                        color: 'from-green-500 to-teal-500',
                        delay: '0.4s'
                      },
                      { 
                        step: 'Deploy', 
                        icon: '🚀', 
                        desc: 'Release', 
                        left: '65%',
                        color: 'from-orange-500 to-red-500',
                        delay: '0.6s'
                      },
                      { 
                        step: 'Monitor', 
                        icon: '📊', 
                        desc: 'Observe', 
                        left: '85%',
                        color: 'from-indigo-500 to-blue-500',
                        delay: '0.8s'
                      }
                    ].map((stage, idx) => (
                      <div key={idx} className="absolute top-1/2" style={{ left: stage.left }}>
                        <div 
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-2xl transform hover:scale-110 transition-transform duration-300 shadow-xl animate-pulse`}
                          style={{ animationDelay: stage.delay, marginTop: '-40px' }}
                        >
                          {stage.icon}
                        </div>
                        
                        <div className="absolute top-full mt-4 text-center" style={{ width: '100px', left: '-40px' }}>
                          <h4 className="font-bold text-gray-900">{stage.step}</h4>
                          <p className="text-sm text-gray-600">{stage.desc}</p>
                        </div>
                        
                        <div className="absolute top-1/2 left-20 w-16 h-1 flex items-center justify-between">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: `${idx * 0.1 + i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="grid grid-cols-3 gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">10x</div>
                          <div className="text-xs text-gray-600">Faster Releases</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">99.9%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">24/7</div>
                          <div className="text-xs text-gray-600">Deployment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-gray-900 text-green-400 font-mono text-xs p-3 rounded-lg shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <code className="block mt-2">$ deploy --prod</code>
                      <code className="block text-gray-400">✓ Pipeline Successful</code>
                    </div>
                  </div>
                  
                  <div className="absolute top-32 left-10 animate-float" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-white p-3 rounded-lg shadow-lg border">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">All Tests Passed</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">1000+</div>
                      <div className="text-sm text-gray-600">Daily Deployments</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">50ms</div>
                      <div className="text-sm text-gray-600">Avg. Build Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">0</div>
                      <div className="text-sm text-gray-600">Manual Steps</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">∞</div>
                      <div className="text-sm text-gray-600">Scalability</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-transparent rounded-2xl -z-10 blur-xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-blue-500 to-transparent rounded-2xl -z-10 blur-xl opacity-20"></div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 animate-fade-in">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Accelerate Your Delivery?</h3>
                <p className="text-gray-600">Transform your development workflow with our DevOps expertise</p>
              </div>
              <button className="group px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center gap-3 whitespace-nowrap">
                Schedule a Demo
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CHANGE & RELEASE AUTOMATION */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Automated Transformation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Change & Release
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Automation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform enterprise systems with intelligent automation for faster, safer delivery of change
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our experienced team transforms how enterprises manage systems, enabling rapid, 
                  safe delivery of change that gives your business a competitive edge.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Automation eliminates manual processes, accelerates change deployment, and 
                  enhances efficiency across the entire release lifecycle.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { text: 'Minimal errors & downtime', icon: '✓', color: 'bg-green-100 text-green-600' },
                  { text: 'Eliminates manual effort', icon: '⚡', color: 'bg-blue-100 text-blue-600' },
                  { text: 'Quick adaptation to change', icon: '🔄', color: 'bg-purple-100 text-purple-600' },
                  { text: 'Minimizes implementation cost', icon: '💰', color: 'bg-yellow-100 text-yellow-600' },
                  { text: 'Efficient project management', icon: '📊', color: 'bg-indigo-100 text-indigo-600' },
                  { text: 'End-to-end transparency', icon: '👁️', color: 'bg-cyan-100 text-cyan-600' }
                ].map((point, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200 flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg ${point.color} flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {point.icon}
                    </div>
                    <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10x</div>
                  <div className="text-sm text-gray-600">Faster Releases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">90%</div>
                  <div className="text-sm text-gray-600">Cost Saved</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="relative h-80 mb-8">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>
                  
                  {[
                    { step: 'Plan', icon: '📋', color: 'bg-orange-500', delay: '0s' },
                    { step: 'Code', icon: '💻', color: 'bg-blue-500', delay: '0.5s' },
                    { step: 'Test', icon: '🧪', color: 'bg-green-500', delay: '1s' },
                    { step: 'Deploy', icon: '🚀', color: 'bg-purple-500', delay: '1.5s' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="absolute top-1/2 transform -translate-y-1/2"
                      style={{ left: `${25 * index + 12.5}%` }}
                    >
                      <div 
                        className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-2xl text-white shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-subtle`}
                        style={{ animationDelay: item.delay }}
                      >
                        {item.icon}
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="font-semibold text-gray-800">{item.step}</span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="absolute top-1/2 left-0 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform -translate-y-1/2 shadow-lg animate-flow"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Zero Downtime Deployments</h4>
                      <p className="text-sm text-gray-600">Seamless updates without service interruption</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Rapid Rollback Capability</h4>
                      <p className="text-sm text-gray-600">Instant recovery from any deployment issue</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Full Audit Trail</h4>
                      <p className="text-sm text-gray-600">Complete visibility into every change made</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-200 to-transparent rounded-full -z-10 blur-xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-red-200 to-transparent rounded-full -z-10 blur-xl opacity-30"></div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform flex items-center gap-3 mx-auto">
              Automate Your Releases
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS SECTION */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Transformative Advantages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Benefits of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                DevOps Implementation
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  text: 'Continuous quality assurance testing and delivery with short cycle times and feedback loops',
                  icon: '🧪',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  text: 'Frequent releases enabling rapid market adaptation',
                  icon: '🚀',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  text: 'Improved productivity and efficiency through structured processes and resource optimization',
                  icon: '📈',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((benefit, index) => (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  text: 'Complete transparency across the entire development life cycle',
                  icon: '👁️',
                  color: 'from-indigo-500 to-blue-500'
                },
                {
                  text: 'Process automation of key functional areas reducing manual effort',
                  icon: '⚙️',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  text: 'Minimal issues with higher quality output and better application availability',
                  icon: '✅',
                  color: 'from-emerald-500 to-green-500'
                }
              ].map((benefit, index) => (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-2xl shadow-xl border border-blue-100 max-w-xl w-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-4">
                  💰
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Higher Return on Investment
                </h3>
                <p className="text-gray-600">
                  Achieve significantly higher ROI through optimized processes, reduced costs, 
                  and accelerated time-to-market with DevOps implementation.
                </p>
              </div>
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
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes marquee {
          0% { left: 0; transform: translateY(-50%); }
          100% { left: 100%; transform: translateY(-50%); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes flow {
          0% { left: 0; }
          100% { left: calc(100% - 1rem); }
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
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        .animate-bounce-subtle {
          animation: bounce 2s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee 8s linear infinite;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-flow {
          animation: flow 8s ease-in-out infinite alternate;
        }
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default DevOpsPage;