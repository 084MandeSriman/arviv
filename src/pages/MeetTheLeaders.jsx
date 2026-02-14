import React, { useState } from 'react';

export const MeetTheLeaders = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-6 sm:mb-8">
            <span className="text-blue-600 font-semibold text-sm">Leadership Excellence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight px-4">
            Our Leadership
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Commitment
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Driven by a customer-centric approach, quality delivery and professional integrity, 
            our leadership team focuses on building long-term partnerships, empowering people 
            and delivering measurable value to our customers.
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {[
            {
              name: 'John Smith',
              role: 'Chief Executive Officer',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
              experience: '20+ years',
              background: 'Former VP at Microsoft, led digital transformation initiatives for Fortune 500 companies',
              expertise: ['Strategic Leadership', 'Digital Transformation', 'Business Growth'],
              education: 'MBA from Harvard Business School',
              color: 'blue',
              colorClasses: {
                gradient: 'from-blue-500 to-blue-700',
                bg: 'bg-blue-50',
                text: 'text-blue-700',
                border: 'border-blue-400'
              },
              quote: 'Innovation is not just about technology; it\'s about transforming how businesses create value for their customers.',
              linkedin: '#',
              twitter: '#'
            },
            {
              name: 'Sarah Johnson',
              role: 'Chief Technology Officer',
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
              experience: '18+ years',
              background: 'Former Principal Engineer at Google, expert in cloud architecture and AI/ML systems',
              expertise: ['Cloud Architecture', 'AI/ML', 'System Design'],
              education: 'PhD in Computer Science from MIT',
              color: 'emerald',
              colorClasses: {
                gradient: 'from-emerald-500 to-emerald-700',
                bg: 'bg-emerald-50',
                text: 'text-emerald-700',
                border: 'border-emerald-400'
              },
              quote: 'The future belongs to organizations that can seamlessly blend human creativity with artificial intelligence.',
              linkedin: '#',
              twitter: '#'
            },
            {
              name: 'Michael Chen',
              role: 'Chief Operating Officer',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
              experience: '16+ years',
              background: 'Former Operations Director at Amazon, specializes in scaling operations and process optimization',
              expertise: ['Operations Excellence', 'Process Optimization', 'Quality Management'],
              education: 'MS in Operations Research from Stanford',
              color: 'purple',
              colorClasses: {
                gradient: 'from-purple-500 to-purple-700',
                bg: 'bg-purple-50',
                text: 'text-purple-700',
                border: 'border-purple-400'
              },
              quote: 'Excellence in execution is what separates good companies from great ones.',
              linkedin: '#',
              twitter: '#'
            },
            {
              name: 'Emily Davis',
              role: 'VP of Engineering',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
              experience: '14+ years',
              background: 'Former Senior Engineering Manager at Netflix, led teams building scalable distributed systems',
              expertise: ['Software Engineering', 'Team Leadership', 'Scalable Systems'],
              education: 'MS in Software Engineering from Carnegie Mellon',
              color: 'rose',
              colorClasses: {
                gradient: 'from-rose-500 to-rose-700',
                bg: 'bg-rose-50',
                text: 'text-rose-700',
                border: 'border-rose-400'
              },
              quote: 'Great software is built by great teams who are passionate about solving real problems.',
              linkedin: '#',
              twitter: '#'
            },
            {
              name: 'David Wilson',
              role: 'VP of Sales & Partnerships',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
              experience: '15+ years',
              background: 'Former Sales Director at Salesforce, built strategic partnerships across multiple industries',
              expertise: ['Strategic Sales', 'Partnership Development', 'Market Expansion'],
              education: 'MBA from Wharton School',
              color: 'indigo',
              colorClasses: {
                gradient: 'from-indigo-500 to-indigo-700',
                bg: 'bg-indigo-50',
                text: 'text-indigo-700',
                border: 'border-indigo-400'
              },
              quote: 'Success in sales is about building relationships and creating mutual value, not just closing deals.',
              linkedin: '#',
              twitter: '#'
            },
            {
              name: 'Lisa Brown',
              role: 'VP of Human Resources',
              image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
              experience: '12+ years',
              background: 'Former HR Director at LinkedIn, expert in talent acquisition and organizational development',
              expertise: ['Talent Management', 'Organizational Culture', 'Leadership Development'],
              education: 'MS in Organizational Psychology from Northwestern',
              color: 'teal',
              colorClasses: {
                gradient: 'from-teal-500 to-teal-700',
                bg: 'bg-teal-50',
                text: 'text-teal-700',
                border: 'border-teal-400'
              },
              quote: 'Our people are our greatest asset. Investing in their growth is investing in our future.',
              linkedin: '#',
              twitter: '#'
            }
          ].map((leader, index) => (
            <div 
              key={index} 
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                hoveredCard === index ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header with Image */}
              <div className={`bg-gradient-to-br ${leader.colorClasses.gradient} p-6 sm:p-8 text-center relative overflow-hidden`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/30 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
                  <div className="absolute top-4 right-0 w-24 h-24 bg-white/20 rounded-full translate-x-12 -translate-y-12 animate-pulse delay-1000"></div>
                  <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-white/25 rounded-full -translate-y-10 animate-pulse delay-2000"></div>
                  <div className="absolute bottom-4 right-1/4 w-16 h-16 bg-white/30 rounded-full translate-y-8 animate-pulse delay-500"></div>
                  
                  {/* Geometric Patterns */}
                  <div className="absolute top-1/4 left-0 w-2 h-16 bg-white/20 rotate-45 animate-pulse delay-700"></div>
                  <div className="absolute top-1/2 right-0 w-2 h-12 bg-white/25 -rotate-45 animate-pulse delay-1500"></div>
                  <div className="absolute bottom-1/4 left-1/2 w-12 h-2 bg-white/20 rotate-12 animate-pulse delay-300"></div>
                </div>
                
                {/* Mesh Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 group-hover:from-white/20 group-hover:to-black/5 transition-all duration-500"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-8 left-8 w-1 h-1 bg-white rounded-full animate-ping delay-100"></div>
                  <div className="absolute top-16 right-12 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
                  <div className="absolute bottom-12 left-16 w-1 h-1 bg-white rounded-full animate-ping delay-1200"></div>
                  <div className="absolute bottom-8 right-8 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 sm:w-24 md:w-28 sm:h-24 md:h-28 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">{leader.name}</h3>
                  <p className="text-white/95 font-semibold text-base sm:text-lg">{leader.role}</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-2 font-medium">{leader.experience} Experience</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={leader.linkedin} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href={leader.twitter} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Background
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{leader.background}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Core Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, i) => (
                      <span key={i} className={`px-3 py-2 ${leader.colorClasses.bg} ${leader.colorClasses.text} text-xs rounded-full font-semibold border border-current border-opacity-20 hover:scale-105 transition-transform duration-200`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Education
                  </h4>
                  <p className="text-sm text-slate-600 font-medium">{leader.education}</p>
                </div>
                
                <div className={`${leader.colorClasses.bg} rounded-2xl p-5 border-l-4 ${leader.colorClasses.border} relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 text-6xl opacity-10">"</div>
                  <p className="text-sm text-slate-700 italic leading-relaxed font-medium relative z-10">
                    {leader.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 md:p-12 mb-12 sm:mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
          <div className="relative">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">Leadership Philosophy</h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Our leadership approach is built on core values that drive organizational excellence and customer success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 rotate-3 group-hover:rotate-6">
                    🎯
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">Vision Driven</h3>
                <p className="text-slate-700 leading-relaxed text-base">
                  To establish a global presence in the IT market and be the partner of choice for customers.
                </p>
              </div>
              
              <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 -rotate-3 group-hover:-rotate-6">
                    🤝
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-200 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-emerald-700 transition-colors duration-300">Customer First</h3>
                <p className="text-slate-700 leading-relaxed text-base">
                  Commitment to surpass customer expectations through quality and continuous engagement.
                </p>
              </div>
              
              <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 rotate-2 group-hover:rotate-12">
                    ⚡
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-200 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">Integrity & Excellence</h3>
                <p className="text-slate-700 leading-relaxed text-base">
                  Ensuring the highest level of professional ethics in all our assignments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Achievements */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/50"></div>
          <div className="relative">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">Collective Achievements</h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Our leadership team's commitment to excellence has delivered consistent growth and customer satisfaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">2015</div>
                  <div className="text-slate-800 font-bold text-lg mb-2">Launch Year</div>
                  <div className="text-sm text-slate-600 font-medium">Strong growth trajectory</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              
              <div className="group text-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl border border-emerald-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-3">20+</div>
                  <div className="text-slate-800 font-bold text-lg mb-2">Customers</div>
                  <div className="text-sm text-slate-600 font-medium">Trusted partnerships</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              
              <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl border border-purple-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3">50+</div>
                  <div className="text-slate-800 font-bold text-lg mb-2">Team</div>
                  <div className="text-sm text-slate-600 font-medium">Expert professionals</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              
              <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl border border-orange-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-3">7</div>
                  <div className="text-slate-800 font-bold text-lg mb-2">States Presence</div>
                  <div className="text-sm text-slate-600 font-medium">Growing network</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheLeaders;