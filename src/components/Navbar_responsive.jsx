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
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative group-hover:drop-shadow-lg transition-all duration-300">
                <img
                  src={arvishLogo}
                  alt="Arvish Consulting Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight font-serif bg-gradient-to-r from-[#1e2875] to-[#3b5998] bg-clip-text text-transparent hidden sm:block">
                Arvish Consulting
              </span>
              <span className="text-sm font-bold tracking-tight font-serif bg-gradient-to-r from-[#1e2875] to-[#3b5998] bg-clip-text text-transparent sm:hidden">
                Arvish
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Show on medium screens and up */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-1 mx-4 lg:mx-8">
            {Object.keys(menuItems).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-1 md:px-2 lg:px-3 py-2 text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${
                    activeDropdown === menu ? 'text-red-600' : 'text-slate-700 hover:text-red-600'
                  }`}
                >
                  {menu}
                  <svg 
                    className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menu && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg border border-slate-100 min-w-[280px] py-3 animate-fade-in-down z-50">
                    {menuItems[menu].map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        onClick={closeDropdown}
                        className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1e2875] transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
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
              <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg shadow-lg border border-slate-600/30">
                <div className="flex items-center gap-1 lg:gap-1.5">
                  <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="text-[8px] lg:text-[10px] font-bold tracking-wide text-emerald-400">CERTIFIED</div>
                </div>
                <div className="text-[10px] lg:text-xs font-extrabold mt-0.5 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  AI Excellence
                </div>
                <div className="text-[7px] lg:text-[8px] text-slate-300 mt-0.5 opacity-90">
                  ISO 27001 • SOC 2 Type II
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
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

      {/* Add fade-in-down animation */}
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
      `}</style>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
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
                    <div className="ml-4 mt-2 space-y-1">
                      {menuItems[menu].map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          onClick={closeMobileMenu}
                          className="block py-2 px-4 text-sm text-slate-600 hover:text-[#1e2875] hover:bg-slate-50 rounded-md transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Us Button */}
              <div className="pt-4 space-y-3">
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </Link>
                
                {/* Mobile Badge */}
                <div className="flex justify-center sm:hidden">
                  <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white px-3 py-2 rounded-lg shadow-lg border border-slate-600/30">
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="text-[10px] font-bold tracking-wide text-emerald-400">CERTIFIED</div>
                    </div>
                    <div className="text-xs font-extrabold mt-0.5 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent text-center">
                      AI Excellence
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