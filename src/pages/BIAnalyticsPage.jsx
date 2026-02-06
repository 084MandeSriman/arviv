const BIAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* HERO SECTION - Modern Glass Morphism */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg mb-8">
              <div className="flex">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-gray-700">Data-Driven Decision Making</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Business Intelligence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                & Analytics
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8 animate-pulse"></div>
          </div>

          <div className="glass-effect p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl animate-float-slow">
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              We offer comprehensive Business Intelligence Solutions and Services that rely on authentic facts to identify 
              underlying patterns in data. This provides actionable insights to steer your business with predictive and 
              forecasting analysis through data visualization.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '100%', label: 'Data Accuracy', color: 'from-blue-500 to-cyan-500' },
              { value: 'Real-time', label: 'Analytics', color: 'from-indigo-500 to-purple-500' },
              { value: 'Predictive', label: 'Insights', color: 'from-purple-500 to-pink-500' },
              { value: '24/7', label: 'Data Access', color: 'from-cyan-500 to-blue-500' }
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
      <section className="w-full py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Offer
              <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
                Comprehensive BI & Analytics Solutions
              </span>
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-6 px-6 hide-scrollbar">
            <div className="flex gap-8">
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
                      <div className="text-sm opacity-75 mt-2">Service {index + 1}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATA WAREHOUSE SERVICES - Process Timeline */}
      <section className="w-full py-20 bg-gradient-to-br from-indigo-900 to-purple-900 relative">
        <div className="absolute inset-0 bg-dots-white/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data Warehouse
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Services
              </span>
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              We leverage collaborative & iterative methodologies to deliver comprehensive data warehouse solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Process Steps */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8">Our Implementation Process</h3>
                
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400"></div>
                  
                  {/* Process Steps */}
                  {[
                    { step: 'JAD Sessions', desc: 'Extensive sessions with business stakeholders' },
                    { step: 'Data Analysis', desc: 'Analyze current and future data sources' },
                    { step: 'Data Modeling', desc: 'Create comprehensive data models' },
                    { step: 'Implementation', desc: 'Build data marts, warehouse & ETL processes' },
                    { step: 'Project Management', desc: 'Apply relevant SDLC models' },
                    { step: 'Support Services', desc: 'Ensure foundation for valuable insights' }
                  ].map((process, index) => (
                    <div key={index} className="relative flex items-start mb-10 last:mb-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-indigo-500' : 'from-purple-500 to-pink-500'} flex items-center justify-center text-white text-xl font-bold z-10 transform hover:scale-110 transition-transform duration-300 animate-bounce-once`}
                           style={{ animationDelay: `${index * 300}ms` }}>
                        {index + 1}
                      </div>
                      <div className="ml-6 pt-4">
                        <h4 className="text-xl font-bold text-white mb-2">{process.step}</h4>
                        <p className="text-indigo-200">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Services Overview */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Comprehensive Services</h3>
                <p className="text-indigo-200 leading-relaxed mb-8">
                  Our certified consultants build data warehouse structures fully compliant with unique business needs, 
                  storing and analyzing both structured and unstructured data.
                </p>
                
                <div className="grid gap-4">
                  {[
                    { text: 'Data Model Creation & Implementation', icon: '🗺️' },
                    { text: 'Data Marts & OLAP Cubes', icon: '🧊' },
                    { text: 'ETL Processes Development', icon: '🔄' },
                    { text: 'SDLC Models Application', icon: '📊' },
                    { text: 'Continuous Support Services', icon: '🛡️' },
                    { text: 'Data Quality Management', icon: '⭐' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500/30 to-purple-500/30 flex items-center justify-center text-white text-xl">
                        {service.icon}
                      </div>
                      <span className="text-white font-medium">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM SOLUTIONS - Three Column Grid */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform
              <span className="block text-3xl md:text-4xl text-gray-600 font-light mt-4">
                Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Azure Platform */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                ☁️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Microsoft Azure</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                As a Microsoft Gold Partner, we combine the power of Azure SQL Database and advanced analytics 
                to help you utilize all data, manage it effectively, and gain required insights for business growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Microsoft Gold Partner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Azure SQL Database</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Advanced Analytics</span>
                </div>
              </div>
            </div>

            {/* SSAS */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                📊
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SSAS</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use SQL Server Analytic Services (SSAS) to create OLAP or tabular data models utilized by 
                data visualization tools, incorporating data mining and modeling at granular levels.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">OLAP Data Models</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Data Mining & Modeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Platform Integration</span>
                </div>
              </div>
            </div>

            {/* Snowflake */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-200 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                ❄️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Snowflake</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We develop and implement solutions using Snowflake's cloud data platform, providing high-performance, 
                near-zero management with unlimited scalability for every analyst.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Cloud Data Platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Unlimited Scalability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Unique Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ETL TOOLS & DASHBOARD - Split Design */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - ETL Tools */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                ETL Tools
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Extract–Transform–Load
                <span className="block text-3xl md:text-4xl text-gray-600 font-light mt-4">
                  Data Integration Solutions
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We utilize ETL tools for extraction, cleansing, customization, reformatting, integration, 
                and insertion into data warehouses—much faster than traditional methods.
              </p>

              {/* SSIS Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">SSIS Solutions</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700">Complex data integration and transformation for handling diverse data sources</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700">Database development including design, stored procedures, and data migration</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700">Comprehensive reporting solutions across various data sources and services</p>
                  </div>
                </div>
                
                {/* ETL Process Visualization */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-700">Extract</span>
                    <span className="text-sm font-semibold text-gray-700">Transform</span>
                    <span className="text-sm font-semibold text-gray-700">Load</span>
                  </div>
                  <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/3 bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>
                      <div className="w-1/3 bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-1/3 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Dashboard & Visualization */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                Dashboard & Visualization
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Reporting Services
                <span className="block text-3xl md:text-4xl text-gray-600 font-light mt-4">
                  Interactive Visual Analytics
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We support organizations in developing visualization solutions from ground up, starting with 
                business requirements and designing relevant conceptual solutions.
              </p>

              {/* SSRS Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">SSRS Expertise</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700">Full-service business intelligence delivery and maintenance model</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700">Comprehensive services including analysis, implementation, and training</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700">Intelligent reports for critical management decisions</p>
                  </div>
                </div>
                
                {/* Visualization Metrics */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Real-time', value: '📊', color: 'from-blue-400 to-cyan-400' },
                    { label: 'Interactive', value: '🔄', color: 'from-purple-400 to-pink-400' },
                    { label: 'Actionable', value: '🎯', color: 'from-indigo-400 to-blue-400' }
                  ].map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl">
                      <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-2`}>
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-700">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUALIZATION TOOLS - Power BI & Tableau */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visualization
              <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
                Tools & Platforms
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Power BI */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                    📊
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Microsoft Power BI</h3>
                    <p className="text-gray-600">Powerful data visualization software</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We create reports that empower customers to transform raw data into valuable information through 
                  visually stunning dashboards that excel in data transformation.
                </p>

                {/* Power BI Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    'Interactive Charts',
                    'Real-time Dashboards',
                    'Predictive Reports',
                    'Mobile Analytics'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Power BI Stats */}
                <div className="relative h-40">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
                    📈
                  </div>
                  
                  {[
                    { label: 'Data', position: 'top-2 left-8', icon: '📊' },
                    { label: 'Visualize', position: 'top-10 right-4', icon: '🎨' },
                    { label: 'Analyze', position: 'bottom-10 right-4', icon: '🔍' },
                    { label: 'Insights', position: 'bottom-2 left-8', icon: '💡' }
                  ].map((item, idx) => (
                    <div key={idx} className={`absolute ${item.position}`}>
                      <div 
                        className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg animate-float"
                        style={{ animationDelay: `${idx * 0.3}s` }}
                      >
                        {item.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tableau */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                    📈
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Tableau</h3>
                    <p className="text-gray-600">Advanced data visualization tool</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our consultants provide services using Tableau to create visualizations, dashboards, and worksheets 
                  that provide actionable insights and drive business forward.
                </p>

                {/* Tableau Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    'Interactive Visualizations',
                    'Data Drilling Tools',
                    'Multi-source Exploration',
                    'Actionable Insights'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tableau Visualization */}
                <div className="relative h-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div 
                          key={item}
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item % 2 === 0 ? 'from-blue-400 to-indigo-400' : 'from-indigo-400 to-purple-400'} animate-pulse`}
                          style={{ animationDelay: `${item * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute top-2 right-2">
                    <div className="text-xs font-semibold text-gray-700">Interactive</div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <div className="text-xs font-semibold text-gray-700">Dynamic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Visualization */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tool Comparison</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Power BI</span>
                  <div className="w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-fill-width"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Data Transformation</span>
                  <div className="w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-fill-width" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Microsoft Integration</span>
                  <div className="w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-fill-width" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Tableau</span>
                  <div className="w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-fill-width" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Visual Flexibility</span>
                  <div className="w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-fill-width" style={{ animationDelay: '0.8s' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Multi-Platform</span>
                  <div className="w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-fill-width" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-300 transform hover:scale-105 transition-transform duration-300">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your Data into Insights?</h3>
                <p className="text-gray-600">Connect with our BI & Analytics experts for a customized data solution</p>
              </div>
              <button className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap">
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

export default BIAnalyticsPage;