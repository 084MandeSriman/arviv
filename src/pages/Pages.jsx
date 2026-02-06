import { Link } from 'react-router-dom';
import { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Blog from '../components/Blog';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';
import JobApplication from './JobApplication';
import arvishLogo from '../assets/arvish-logo.png';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Blog />
      <About />
      <WhyChoose />
    </>
  );
};

// ============== ABOUT US PAGES ==============

export const CompanyOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 xs:px-6 py-12 xs:py-16 sm:py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3 xs:mb-4 text-sm xs:text-base">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="text-slate-600">About Us</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-blue-900 mb-4 xs:mb-6 leading-tight">
            About ARVISH CONSULTING
          </h1>
          <p className="text-lg xs:text-xl text-slate-600 mb-4 xs:mb-6">
            Excellence in Technology Consulting & Digital Innovation
          </p>
          <p className="text-slate-700 text-base xs:text-lg leading-relaxed mb-4 xs:mb-6">
            ARVISH CONSULTING was born in the era where digital transformation began reshaping industries across the globe.
          </p>
          <div className="bg-blue-50 p-4 xs:p-6 rounded-xl border-l-4 border-blue-500">
            We help enterprises design, build, and scale solutions across
            <span className="font-bold text-blue-600"> Digital Experience, Data & AI, Enterprise Applications </span>
            and
            <span className="font-bold text-blue-600"> Intelligent Cloud Operations.</span>
          </div>
        </div>
        <div className="flex justify-center text-6xl xs:text-7xl sm:text-8xl order-first md:order-last">🏢</div>
      </section>
      <section className="bg-gradient-to-r from-emerald-500 to-teal-500 py-12 xs:py-16 sm:py-20 px-4 xs:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
          <div className="bg-white p-6 xs:p-8 sm:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl xs:text-3xl font-bold mb-3 xs:mb-4">Our Vision</h3>
            <p className="text-sm xs:text-base">To be a pioneer in the technology services marketplace by delivering innovative solutions.</p>
          </div>
          <div className="bg-white p-6 xs:p-8 sm:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl xs:text-3xl font-bold mb-3 xs:mb-4">Our Mission</h3>
            <p className="text-sm xs:text-base">We build strong partnerships improving services, reducing costs, and accelerating outcomes.</p>
          </div>
        </div>
      </section>
      <section className="py-12 xs:py-16 sm:py-20 px-4 xs:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 xs:gap-8">
          {[
            "Experienced team of experts",
            "Innovative future-ready solutions",
            "Client-centered approach",
            "Optimized cost implementations",
            "Customized service methodology",
            "Flexible delivery model",
            "Strategic guidance",
            "Consistent quality framework",
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 xs:p-6 rounded-xl shadow-md flex gap-3 xs:gap-4">
              <span className="text-green-600 font-bold text-lg xs:text-xl">✓</span>
              <p className="text-sm xs:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 xs:px-6 pb-12 xs:pb-16 sm:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-12">
        <div className="bg-white p-6 xs:p-8 sm:p-10 rounded-2xl shadow-xl">
          <h3 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6">Accreditations</h3>
          <ul className="space-y-2 xs:space-y-3 text-sm xs:text-base">
            <li>CMMI DEV Level 5</li>
            <li>ISO 27001:2013</li>
            <li>ISO 9001:2015</li>
          </ul>
        </div>
        <div className="bg-white p-6 xs:p-8 sm:p-10 rounded-2xl shadow-xl">
          <h3 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6">Partnerships</h3>
          <ul className="space-y-2 xs:space-y-3 text-sm xs:text-base">
            <li>Gold Application Integration</li>
            <li>Gold Data Analytics</li>
            <li>Gold Cloud Platform</li>
            <li>Gold Business Applications</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export const CoreValues = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 py-12 xs:py-16 sm:py-20">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-900 mb-6 xs:mb-8 text-center sm:text-left">Our Core Values</h1>
        <div className="bg-white rounded-2xl shadow-xl p-6 xs:p-8 sm:p-10">
          <p className="text-lg xs:text-xl text-slate-700 mb-6 xs:mb-8 leading-relaxed">
            Our values guide every decision we make and define who we are as an organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Culture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 py-12 xs:py-16 sm:py-20">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-900 mb-6 xs:mb-8 text-center sm:text-left">Our Culture</h1>
        <div className="bg-white rounded-2xl shadow-xl p-6 xs:p-8 sm:p-10">
          <p className="text-lg xs:text-xl text-slate-700 mb-6 xs:mb-8 leading-relaxed">
            At ARVISH CONSULTING, we foster a culture of innovation, collaboration, and continuous growth.
          </p>
          <div className="space-y-4 xs:space-y-6">
            <div className="border-l-4 border-teal-500 pl-4 xs:pl-6 py-3 xs:py-4">
              <h3 className="text-xl xs:text-2xl font-bold text-slate-900 mb-2">Work-Life Balance</h3>
              <p className="text-slate-600 text-sm xs:text-base">We believe in maintaining a healthy balance between professional and personal life.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 xs:pl-6 py-3 xs:py-4">
              <h3 className="text-xl xs:text-2xl font-bold text-slate-900 mb-2">Learning & Development</h3>
              <p className="text-slate-600 text-sm xs:text-base">Continuous learning opportunities through training programs and certifications.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 xs:pl-6 py-3 xs:py-4">
              <h3 className="text-xl xs:text-2xl font-bold text-slate-900 mb-2">Inclusive Environment</h3>
              <p className="text-slate-600 text-sm xs:text-base">Diversity and inclusion are at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Leaders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 py-12 xs:py-16 sm:py-20">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-slate-900 mb-8 xs:mb-10 sm:mb-12 text-center">Meet the Leaders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 xs:h-56 sm:h-64 bg-gradient-to-br from-blue-400 to-indigo-500"></div>
              <div className="p-4 xs:p-6">
                <h3 className="text-xl xs:text-2xl font-bold text-slate-900 mb-2">Leader Name</h3>
                <p className="text-base xs:text-lg text-blue-600 font-medium mb-2 xs:mb-3">Position Title</p>
                <p className="text-slate-600 text-sm xs:text-base">Brief description about the leader and their role at ARVISH CONSULTING.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============== SERVICES PAGES ==============

export const ArtificialIntelligence = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Artificial Intelligence</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Empower your enterprise with cutting-edge Artificial Intelligence solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DigitalExperience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Digital Experience</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Our industry-leading digital experience services are designed to drive brand engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Data Analytics</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Unlock the power of your data with advanced analytics solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export const EnterpriseApplication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Enterprise Application Services</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Modernize and scale your enterprise platforms with our comprehensive application services.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DigitalIntegration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Digital Integration</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Seamless integration solutions that connect your systems, applications, and data sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CloudOperations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Intelligent IT & Cloud Operations</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Advanced cloud operations and IT management solutions for optimal performance and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProcessAutomation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Intelligent Process Automation</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Automate and optimize your business processes with intelligent automation solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export const QualityEngineering = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Quality Engineering and Assurance</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Comprehensive quality assurance and testing services to ensure excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

// ============== SOLUTIONS PAGES ==============

export const Dynamics365 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-[#1e2875] mb-8">Microsoft Dynamics 365</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Transform your business processes using Microsoft Dynamics 365 intelligent applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Sharepoint = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Microsoft Sharepoint</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Collaboration and content management solutions powered by SharePoint.
          </p>
        </div>
      </div>
    </div>
  );
};

export const BIAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Microsoft BI & Analytics</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Business intelligence and analytics solutions with Microsoft Power BI.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MuleSoft = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">MuleSoft</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            API-led connectivity and integration platform powered by MuleSoft.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ServiceNow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-[#1e2875] mb-8">ServiceNow</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Digital workflow solutions that transform your service management.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DevOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">DevOps</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Continuous integration and deployment solutions for faster delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

// ============== INSIGHTS & CAREERS PAGES ==============

export const WhatWeOffer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-12 xs:py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 text-center">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-4 xs:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            What We Offer
          </h1>
          <p className="text-lg xs:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join ARVISH CONSULTING and discover a career that offers growth, innovation, and meaningful impact. 
            We believe in investing in our people and creating an environment where talent thrives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xs:px-6 py-12 xs:py-16 sm:py-20">
        {/* Compensation & Benefits */}
        <section className="mb-12 xs:mb-16 sm:mb-20">
          <h2 className="text-3xl xs:text-4xl font-bold text-slate-900 mb-8 xs:mb-10 sm:mb-12 text-center">
            💰 Compensation & Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
            {[
              {
                icon: '💵',
                title: 'Competitive Salary',
                desc: 'Market-leading compensation packages with annual reviews and performance bonuses',
                highlight: 'Above industry standards'
              },
              {
                icon: '🏥',
                title: 'Premium Healthcare',
                desc: 'Comprehensive medical, dental, and vision coverage for you and your family',
                highlight: '100% premium covered'
              },
              {
                icon: '🏖️',
                title: 'Generous PTO',
                desc: 'Flexible vacation policy with 25+ days annual leave plus public holidays',
                highlight: 'Unlimited sick days'
              },
              {
                icon: '💼',
                title: 'Equity Participation',
                desc: 'Stock options and profit-sharing programs to share in company success',
                highlight: 'Ownership mindset'
              },
              {
                icon: '🚗',
                title: 'Transportation',
                desc: 'Company car allowance or public transport reimbursement',
                highlight: 'Flexible options'
              },
              {
                icon: '🍽️',
                title: 'Meal Benefits',
                desc: 'Daily catered meals, snacks, and premium coffee in all offices',
                highlight: 'Healthy options'
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 xs:p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl xs:text-4xl mb-3 xs:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl xs:text-2xl font-bold text-slate-900 mb-2 xs:mb-3">{benefit.title}</h3>
                <p className="text-slate-600 mb-3 xs:mb-4 text-sm xs:text-base">{benefit.desc}</p>
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs xs:text-sm font-semibold inline-block">
                  {benefit.highlight}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Development */}
        <section className="mb-12 xs:mb-16 sm:mb-20">
          <h2 className="text-3xl xs:text-4xl font-bold text-slate-900 mb-8 xs:mb-10 sm:mb-12 text-center">
            🚀 Career Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
            <div className="bg-white rounded-3xl shadow-xl p-6 xs:p-8 sm:p-10">
              <h3 className="text-2xl xs:text-3xl font-bold text-slate-900 mb-4 xs:mb-6 flex items-center gap-2 xs:gap-3">
                📚 Learning & Growth
              </h3>
              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm xs:text-base">$5,000 Annual Learning Budget</h4>
                    <p className="text-slate-600 text-xs xs:text-sm">For courses, certifications, conferences, and books</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm xs:text-base">Certification Support</h4>
                    <p className="text-slate-600 text-xs xs:text-sm">AWS, Azure, Google Cloud, and industry certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm xs:text-base">Internal Training Programs</h4>
                    <p className="text-slate-600 text-xs xs:text-sm">Weekly tech talks, workshops, and skill-building sessions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm xs:text-base">Mentorship Program</h4>
                    <p className="text-slate-600 text-xs xs:text-sm">Paired with senior professionals for career guidance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 xs:p-8 sm:p-10">
              <h3 className="text-2xl xs:text-3xl font-bold text-slate-900 mb-4 xs:mb-6 flex items-center gap-2 xs:gap-3">
                📈 Career Progression
              </h3>
              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm xs:text-base">Clear Career Paths</h4>
                    <p className="text-slate-600 text-xs xs:text-sm">Defined progression from junior to senior to leadership roles</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm xs:text-base">Leadership Development</h4>
                    <p className="text-slate-600 text-xs xs:text-sm">Management training and leadership coaching programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm xs:text-base">Internal Mobility</h4>
                    <p className="text-slate-600 text-xs xs:text-sm">Opportunities to switch teams and explore different domains</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm xs:text-base">Global Opportunities</h4>
                    <p className="text-slate-600 text-xs xs:text-sm">International assignments and client projects worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Environment */}
        <section className="mb-12 xs:mb-16 sm:mb-20">
          <h2 className="text-3xl xs:text-4xl font-bold text-slate-900 mb-8 xs:mb-10 sm:mb-12 text-center">
            🏢 Work Environment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8">
            {[
              {
                icon: '🏠',
                title: 'Flexible Work Options',
                features: ['Remote work available', 'Hybrid schedules', 'Flexible hours', 'Work-life balance']
              },
              {
                icon: '🎮',
                title: 'Modern Offices',
                features: ['State-of-the-art facilities', 'Game rooms & relaxation areas', 'Ergonomic workstations', 'Collaborative spaces']
              },
              {
                icon: '🌟',
                title: 'Inclusive Culture',
                features: ['Diversity & inclusion', 'Open communication', 'Team building events', 'Recognition programs']
              }
            ].map((env, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 xs:p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl xs:text-5xl mb-4 xs:mb-6 text-center">{env.icon}</div>
                <h3 className="text-xl xs:text-2xl font-bold text-slate-900 mb-4 xs:mb-6 text-center">{env.title}</h3>
                <ul className="space-y-2 xs:space-y-3">
                  {env.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 xs:gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-600 text-sm xs:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Innovation & Technology */}
        <section className="mb-12 xs:mb-16 sm:mb-20">
          <h2 className="text-3xl xs:text-4xl font-bold text-slate-900 mb-8 xs:mb-10 sm:mb-12 text-center">
            💡 Innovation & Technology
          </h2>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 xs:p-10 sm:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
              <div>
                <h3 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6">Cutting-Edge Technology</h3>
                <div className="space-y-3 xs:space-y-4">
                  <div className="flex items-center gap-2 xs:gap-3">
                    <span className="text-xl xs:text-2xl">🔬</span>
                    <span className="text-sm xs:text-base">20% time for innovation projects</span>
                  </div>
                  <div className="flex items-center gap-2 xs:gap-3">
                    <span className="text-xl xs:text-2xl">⚡</span>
                    <span className="text-sm xs:text-base">Latest tools and technologies</span>
                  </div>
                  <div className="flex items-center gap-2 xs:gap-3">
                    <span className="text-xl xs:text-2xl">🚀</span>
                    <span className="text-sm xs:text-base">R&D opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 xs:gap-3">
                    <span className="text-xl xs:text-2xl">🏆</span>
                    <span className="text-sm xs:text-base">Innovation awards and recognition</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl xs:text-7xl sm:text-8xl mb-3 xs:mb-4">🧠</div>
                <p className="text-lg xs:text-xl opacity-90">
                  Work on AI, Machine Learning, Cloud Computing, and emerging technologies that shape the future
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness & Lifestyle */}
        <section className="mb-12 xs:mb-16 sm:mb-20">
          <h2 className="text-3xl xs:text-4xl font-bold text-slate-900 mb-8 xs:mb-10 sm:mb-12 text-center">
            🌱 Wellness & Lifestyle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
            {[
              { icon: '🏋️', title: 'Fitness', desc: 'Gym memberships & wellness programs' },
              { icon: '🧘', title: 'Mental Health', desc: 'Counseling services & stress management' },
              { icon: '👶', title: 'Family Support', desc: 'Parental leave & childcare assistance' },
              { icon: '🎉', title: 'Social Events', desc: 'Team outings & celebration parties' }
            ].map((wellness, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-4 xs:p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl xs:text-4xl mb-3 xs:mb-4">{wellness.icon}</div>
                <h3 className="text-lg xs:text-xl font-bold text-slate-900 mb-2">{wellness.title}</h3>
                <p className="text-slate-600 text-xs xs:text-sm">{wellness.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 xs:p-10 sm:p-12 text-white">
          <h2 className="text-3xl xs:text-4xl font-bold mb-4 xs:mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg xs:text-xl mb-6 xs:mb-8 opacity-90 max-w-2xl mx-auto">
            Discover exciting career opportunities and be part of a company that invests in your success and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center">
            <Link 
              to="/careers/current-openings" 
              className="bg-white text-blue-600 font-bold px-6 xs:px-8 py-3 xs:py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg text-sm xs:text-base"
            >
              View Open Positions
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white font-bold px-6 xs:px-8 py-3 xs:py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300 text-sm xs:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export const CurrentOpenings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplication, setShowApplication] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Positions');

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplication(true);
  };

  const closeApplication = () => {
    setShowApplication(false);
    setSelectedJob(null);
  };

  const jobs = [
    { 
      title: 'Senior Full Stack Developer', 
      location: 'Hyderabad', 
      type: 'Full-time',
      salary: '₹15-25 LPA',
      experience: '7-10 Years',
      department: 'Development',
      skills: ['React', 'Node.js', 'MongoDB'],
      urgency: 'Urgent',
      icon: '💻',
      color: 'slate'
    },
    { 
      title: 'AI/ML Engineer', 
      location: 'Bangalore', 
      type: 'Full-time',
      salary: '₹20-35 LPA',
      experience: '5-8 Years',
      department: 'AI & Data Science',
      skills: ['Python', 'TensorFlow', 'Deep Learning'],
      urgency: 'Hot',
      icon: '🤖',
      color: 'blue'
    },
    { 
      title: 'DevOps Engineer', 
      location: 'Remote', 
      type: 'Full-time',
      salary: '₹12-20 LPA',
      experience: '4-7 Years',
      department: 'Infrastructure',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      urgency: 'New',
      icon: '⚙️',
      color: 'gray'
    },
    { 
      title: 'UI/UX Designer', 
      location: 'Hyderabad', 
      type: 'Full-time',
      salary: '₹8-15 LPA',
      experience: '3-6 Years',
      department: 'Design',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      urgency: 'Featured',
      icon: '🎨',
      color: 'indigo'
    },
    { 
      title: 'Data Analyst', 
      location: 'Bangalore', 
      type: 'Full-time',
      salary: '₹6-12 LPA',
      experience: '2-5 Years',
      department: 'Analytics',
      skills: ['SQL', 'Python', 'Tableau'],
      urgency: 'New',
      icon: '📊',
      color: 'slate'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    if (activeFilter === 'All Positions') return true;
    if (activeFilter === 'Development') return job.department === 'Development' || job.department === 'AI & Data Science' || job.department === 'Infrastructure';
    if (activeFilter === 'Design') return job.department === 'Design';
    if (activeFilter === 'Remote') return job.location === 'Remote';
    return true;
  });

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'Urgent': return 'bg-red-600 text-white';
      case 'Hot': return 'bg-orange-600 text-white';
      case 'Featured': return 'bg-blue-600 text-white';
      case 'New': return 'bg-green-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  const getColorClasses = (color) => {
    switch(color) {
      case 'blue': return { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', light: 'bg-blue-50', border: 'border-blue-200' };
      case 'indigo': return { bg: 'bg-indigo-600', hover: 'hover:bg-indigo-700', light: 'bg-indigo-50', border: 'border-indigo-200' };
      case 'gray': return { bg: 'bg-gray-600', hover: 'hover:bg-gray-700', light: 'bg-gray-50', border: 'border-gray-200' };
      default: return { bg: 'bg-slate-600', hover: 'hover:bg-slate-700', light: 'bg-slate-50', border: 'border-slate-200' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-b border-gray-200 relative overflow-hidden">
        {/* Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25">
          <img 
            src={arvishLogo} 
            alt="Arvish Consulting Logo" 
            className="w-80 h-80 object-contain animate-pulse-slow"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Current Openings
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Join our team of professionals and advance your career with industry-leading projects. 
              Explore opportunities that match your expertise and career goals.
            </p>
            <div className="flex justify-center items-center gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="font-medium">5 Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
                <span className="font-medium">Multiple Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
                <span className="font-medium">Competitive Packages</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.35; }
          }
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-in-left {
            0% {
              opacity: 0;
              transform: translateX(-20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.5s ease-out;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All Positions', 'Development', 'Design', 'Remote'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeFilter === filter 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredJobs.map((job, i) => {
            const colors = getColorClasses(job.color);
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gray-300">
                {/* Urgency Badge */}
                <div className="flex justify-end p-4 pb-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(job.urgency)}`}>
                    {job.urgency}
                  </span>
                </div>

                <div className="p-6 pt-2">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg ${colors.light} ${colors.border} border flex items-center justify-center text-xl`}>
                      {job.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-all duration-500 transform group-hover:scale-105">
                        <span className="inline-block animate-fade-in-up">{job.title}</span>
                      </h3>
                      <div className="flex items-center gap-4 text-slate-600 text-sm">
                        <span className="flex items-center gap-1 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                          <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                          <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-slate-500 text-xs font-medium mb-1">SALARY RANGE</div>
                      <div className="font-semibold text-slate-900">{job.salary}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-slate-500 text-xs font-medium mb-1">EXPERIENCE</div>
                      <div className="font-semibold text-slate-900">{job.experience}</div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="text-slate-500 text-xs font-medium mb-2">KEY SKILLS</div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Department & Posted Date */}
                  <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
                    <span>{job.department} Department</span>
                    <span>Posted 2 days ago</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleApply(job)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                    >
                      Apply Now
                    </button>
                    <button className="px-4 py-3 border border-slate-300 text-slate-600 rounded-lg hover:border-slate-400 hover:text-slate-700 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Perfect Role?</h2>
            <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
              We're always looking for talented professionals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Send Resume
              </Link>
              <Link 
                to="/careers/what-we-offer" 
                className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-colors duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {showApplication && selectedJob && (
        <JobApplication 
          job={selectedJob} 
          onClose={closeApplication} 
        />
      )}
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 xs:px-6 py-12 xs:py-16 sm:py-20 relative z-10">
        <div className="text-center mb-12 xs:mb-14 sm:mb-16">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 xs:mb-6 leading-tight">Get In Touch</h1>
          <p className="text-lg xs:text-xl text-slate-600 max-w-2xl mx-auto">Ready to transform your business? Let's discuss how we can help you achieve your goals.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 xs:p-8 border border-white/20">
            <h2 className="text-2xl xs:text-3xl font-bold text-slate-900 mb-6 xs:mb-8">Send us a Message</h2>
            <form className="space-y-4 xs:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2 text-sm xs:text-base">First Name</label>
                  <input type="text" className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm xs:text-base" placeholder="John" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2 text-sm xs:text-base">Last Name</label>
                  <input type="text" className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm xs:text-base" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm xs:text-base">Email Address</label>
                <input type="email" className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm xs:text-base" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm xs:text-base">Company</label>
                <input type="text" className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm xs:text-base" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm xs:text-base">Service Interest</label>
                <select className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm xs:text-base">
                  <option>Select a Service</option>
                  <option>Artificial Intelligence</option>
                  <option>Digital Experience</option>
                  <option>Data Analytics</option>
                  <option>Enterprise Applications</option>
                  <option>Cloud Operations</option>
                  <option>Process Automation</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm xs:text-base">Message</label>
                <textarea rows="4" className="w-full px-3 xs:px-4 py-2.5 xs:py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-sm xs:text-base" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 xs:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm xs:text-base">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6 xs:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 xs:p-8 border border-white/20">
              <h2 className="text-2xl xs:text-3xl font-bold text-slate-900 mb-4 xs:mb-6">Contact Information</h2>
              <div className="space-y-4 xs:space-y-6">
                <div className="flex items-start gap-3 xs:gap-4">
                  <div className="w-10 xs:w-12 h-10 xs:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-lg xs:text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm xs:text-base">Office Address</h3>
                    <p className="text-slate-600 text-xs xs:text-sm">4th Floor, CPR Galaxy, Beside<br />Orchids International,<br />Hyderabad, Telangana<br />500033</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 xs:gap-4">
                  <div className="w-10 xs:w-12 h-10 xs:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-lg xs:text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm xs:text-base">Phone</h3>
                    <p className="text-slate-600 text-xs xs:text-sm">+91 79810 01404<br />+91 99665 56804</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 xs:gap-4">
                  <div className="w-10 xs:w-12 h-10 xs:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-lg xs:text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm xs:text-base">Email</h3>
                    <a href="mailto:hr@arvishconsulting.com" className="text-slate-600 text-xs xs:text-sm hover:text-blue-600 transition-colors">hr@arvishconsulting.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 xs:gap-4">
                  <div className="w-10 xs:w-12 h-10 xs:h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 text-lg xs:text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm xs:text-base">Website</h3>
                    <p className="text-slate-600 text-xs xs:text-sm">ArvishConsulting.Com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 xs:p-8 border border-white/20">
              <h3 className="text-xl xs:text-2xl font-bold text-slate-900 mb-3 xs:mb-4">Business Hours</h3>
              <div className="space-y-1.5 xs:space-y-2 text-slate-600 text-sm xs:text-base">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};