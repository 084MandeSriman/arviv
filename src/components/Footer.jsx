import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-slate-100 py-8 xs:py-10 sm:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 px-4 xs:px-6">
        {/* About Us Column */}
        <div className="xs:col-span-1">
          <h4 className="font-semibold text-gray-800 text-sm xs:text-base mb-3 xs:mb-4">About us</h4>
          <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm text-gray-600">
            <li>
              <button 
                onClick={() => handleNavigation('/about/company-overview')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Company Overview
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/about/core-values')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Our Core Values
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/about/culture')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Our Culture
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/about/leaders')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Meet the Leaders
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/careers/current-openings')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Careers
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="xs:col-span-1">
          <h4 className="font-semibold text-gray-800 text-sm xs:text-base mb-3 xs:mb-4">Services</h4>
          <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm text-gray-600">
            <li>
              <button 
                onClick={() => handleNavigation('/services/artificial-intelligence')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Artificial Intelligence
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/services/digital-experience')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Digital Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/services/data-analytics')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Data Analytics
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/services/enterprise-applications')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Enterprise Application Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/services/digital-experience')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Digital Integration
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/services/intelligent-it-&-cloud')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Intelligent IT & Cloud Operations
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/services/artificial-intelligence')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Intelligent Process Automation
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/services/quality-engineering')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Quality Engineering & Assurance
              </button>
            </li>
          </ul>
        </div>

        {/* Solutions Column */}
        <div className="xs:col-span-1">
          <h4 className="font-semibold text-gray-800 text-sm xs:text-base mb-3 xs:mb-4">Solutions</h4>
          <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm text-gray-600">
            <li>
              <button 
                onClick={() => handleNavigation('/solutions/dynamics-365')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Microsoft Dynamics 365
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/solutions/sharepoint')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Microsoft Sharepoint
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/solutions/bi-analytics')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                Microsoft BI & Analytics
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/solutions/mulesoft')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                MuleSoft
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/services/servicenow-platform')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                ServiceNow
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/solutions/devops')}
                className="hover:text-blue-600 transition-colors text-left w-full"
              >
                DevOps
              </button>
            </li>
          </ul>
        </div>

        {/* Certifications & Social Column */}
        <div className="xs:col-span-2 md:col-span-1">
          {/* Microsoft Partner Badge */}
          <div className="mb-4 xs:mb-6 bg-white p-3 xs:p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-2 xs:gap-3">
              <svg className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 flex-shrink-0" viewBox="0 0 23 23" fill="none">
                <rect width="11" height="11" fill="#f25022"/>
                <rect x="12" width="11" height="11" fill="#7fba00"/>
                <rect y="12" width="11" height="11" fill="#00a4ef"/>
                <rect x="12" y="12" width="11" height="11" fill="#ffb900"/>
              </svg>
              <div className="text-xs">
                <p className="font-bold text-slate-800 mb-1">Microsoft Partner</p>
                <p className="text-slate-600 leading-tight text-xs">
                  Gold Application Integration<br/>
                  Gold Data Analytics<br/>
                  Gold Application Development<br/>
                  Gold Cloud Platform<br/>
                  Gold Cloud Business Applications
                </p>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-6">
            {/* CMMI DEV/5 */}
            <div className="bg-white p-2 xs:p-3 rounded-lg shadow-sm flex items-center gap-2 xs:gap-3">
              <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 xs:w-6 sm:w-8 h-5 xs:h-6 sm:h-8" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="3"/>
                  <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="2"/>
                  <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-xs xs:text-sm text-slate-800">CMMI DEV/5</p>
                <p className="text-xs text-slate-600">Capability Maturity Model</p>
              </div>
            </div>
            
            {/* ISO 27001:2013 */}
            <div className="bg-white p-2 xs:p-3 rounded-lg shadow-sm flex items-center gap-2 xs:gap-3">
              <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-blue-700 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 xs:w-6 sm:w-8 h-5 xs:h-6 sm:h-8" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="3"/>
                  <text x="50" y="60" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">ISO</text>
                </svg>
              </div>
              <div>
                <p className="font-bold text-xs xs:text-sm text-slate-800">ISO 27001:2013</p>
                <p className="text-xs text-slate-600">Information Security</p>
              </div>
            </div>
            
            {/* ISO 9001:2015 */}
            <div className="bg-white p-2 xs:p-3 rounded-lg shadow-sm flex items-center gap-2 xs:gap-3">
              <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-blue-700 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 xs:w-6 sm:w-8 h-5 xs:h-6 sm:h-8" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="3"/>
                  <text x="50" y="60" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle">ISO</text>
                </svg>
              </div>
              <div>
                <p className="font-bold text-xs xs:text-sm text-slate-800">ISO 9001:2015</p>
                <p className="text-xs text-slate-600">Quality Management</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2 xs:gap-3">
            <span className="text-xs xs:text-sm text-gray-600">Follow us on</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              <svg className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/arvish-consulting/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              <svg className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 xs:mt-8 sm:mt-10 pt-4 xs:pt-6 border-t border-gray-300">
        <p className="text-xs text-gray-600">
          Copyright © 2025 <span className="font-semibold">Arvish Consulting.</span> All Rights Reserved
        </p>
      </div>
    </footer>
  );
}