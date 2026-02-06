import { useState } from 'react';
import { Link } from 'react-router-dom';
import arvishLogo from '../assets/arvish-logo.png';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = {
    'About Us': [
      { name: 'Company Overview', link: '/about/company-overview' },
      { name: 'Our Core Values', link: '/about/core-values' },
      { name: 'Our Culture', link: '/about/culture' },
      { name: 'Meet the Leaders', link: '/about/leaders' }
    ],
    'Services': [
      { name: 'Artificial Intelligence', link: '/services/artificial-intelligence' },
      { name: 'Digital Experience', link: '/services/digital-experience' },
      { name: 'Data Analytics', link: '/services/data-analytics' },
      { name: 'Enterprise Application Services', link: '/services/enterprise-application' },
      { name: 'Digital Integration', link: '/services/digital-integration' },
      { name: 'Intelligent IT & Cloud Operations', link: '/services/cloud-operations' },
      { name: 'Intelligent Process Automation', link: '/services/process-automation' },
      { name: 'Quality Engineering and Assurance', link: '/services/quality-engineering' }
    ],
    'Solutions': [
      { name: 'Microsoft Dynamics 365', link: '/solutions/dynamics-365' },
      { name: 'Microsoft Sharepoint', link: '/solutions/sharepoint' },
      { name: 'Microsoft BI & Analytics', link: '/solutions/bi-analytics' },
      { name: 'MuleSoft', link: '/solutions/mulesoft' },
      { name: 'ServiceNow', link: '/solutions/servicenow' },
      { name: 'DevOps', link: '/solutions/devops' }
    ],
    'Insights': [
      { name: 'Arvish Consulting - Techtalk - Blog', link: '/insights/blog' }
    ],
    'Careers': [
      { name: 'What We Offer', link: '/careers/what-we-offer' },
      { name: 'Current Openings', link: '/careers/current-openings' }
    ]
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-gray-50 to-white shadow-2xl backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
              <div className="relative group-hover:drop-shadow-lg transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                <img
                  src={arvishLogo}
                  alt="Arvish Consulting Logo"
                  className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110 rounded-xl border-2 border-slate-200 group-hover:border-blue-400 filter group-hover:brightness-110 group-hover:contrast-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                {/* Desktop & Tablet View */}
                <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent hidden sm:block leading-none group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  Arvish Consulting
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-600 font-semibold tracking-widest hidden sm:block mt-1 group-hover:text-blue-600 transition-colors duration-300">
                  INNOVATE • INTEGRATE • INSPIRE
                </span>
                
                {/* Mobile View */}
                <div className="sm:hidden flex flex-col">
                  <span className="text-sm font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-none group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    Arvish Consulting
                  </span>
                  <span className="text-[7px] text-slate-600 font-semibold tracking-wider mt-0.5 group-hover:text-blue-600 transition-colors duration-300">
                    INNOVATE • INTEGRATE • INSPIRE
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-2">
            {Object.keys(menuItems).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                    activeDropdown === menu ? 'text-red-600' : 'text-slate-700 hover:text-red-600'
                  }`}
                >
                  {menu}
                  <svg 
                    className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menu && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg border border-slate-100 min-w-[250px] xl:min-w-[280px] py-2 animate-fade-in-down max-h-80 overflow-hidden z-50"
                    onMouseEnter={() => handleMouseEnter(menu)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="overflow-y-auto max-h-72 scrollbar-hide">
                      {menuItems[menu].map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          onClick={closeDropdown}
                          className="block px-4 xl:px-5 py-2 text-sm xl:text-base text-slate-700 hover:bg-slate-50 hover:text-[#1e2875] transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Contact Us Button - Hidden on small screens */}
            <Link
              to="/contact"
              className="hidden md:block relative group overflow-hidden px-3 lg:px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-medium text-xs lg:text-sm rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Professional Excellence Badge - Responsive */}
            <div className="hidden sm:block relative transform hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl shadow-lg">
                <div className="flex items-center justify-center gap-1.5">
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-[10px] lg:text-xs font-extrabold tracking-wider">CERTIFIED</span>
                </div>
                <div className="text-xs lg:text-sm font-bold text-center mt-0.5 tracking-wide">
                  AI Excellence
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-40 blur transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Simple animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.2s ease-out;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <nav className="space-y-2">
              {Object.keys(menuItems).map((menu) => (
                <div key={menu} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === menu ? null : menu)}
                    className="w-full flex items-center justify-between py-3 px-4 text-left font-semibold text-slate-700 hover:text-red-600 transition-colors text-sm sm:text-base"
                  >
                    {menu}
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mobile Dropdown */}
                  {activeDropdown === menu && (
                    <div className="ml-3 mt-2 space-y-1 max-h-60 overflow-hidden">
                      <div className="overflow-y-auto max-h-56 scrollbar-hide">
                        {menuItems[menu].map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            onClick={closeMobileMenu}
                            className="block py-2 px-3 text-slate-600 hover:text-[#1e2875] hover:bg-slate-50 rounded-md transition-colors text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Us Button for Mobile */}
              <div className="pt-4 space-y-3">
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </Link>
                
                {/* Mobile Badge */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white px-4 py-2 rounded-lg shadow-lg border border-slate-600/30">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="text-[10px] font-bold tracking-wide text-emerald-400">CERTIFIED AI Excellence</div>
                    </div>
                    <div className="text-[8px] text-slate-300 mt-0.5 opacity-90 text-center">
                      ISO 27001 • SOC 2 Type II
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};


export default Navbar;
