import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-22">
          {/* Left - Logo in glassmorphism box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
               onClick={() => {
                 if (typeof window !== 'undefined') {
                   window.location.href = '/home';
                 }
               }}>
            <img src="/logoimg.png" alt="TakeOff Holidayz Logo - Premier Travel Agency" className="h-7 sm:h-8 md:h-8 lg:h-9 xl:h-10" />
          </div>

          {/* Center - Desktop Navigation Links in glassmorphism box */}
          <div className="hidden lg:flex bg-white/30 backdrop-blur-lg border border-white/20 rounded-full px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-2.5 sm:py-3 shadow-lg">
            <ul className="flex items-center space-x-5 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
              <li><Link to="/home" className="text-base sm:text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Home
              </Link></li>
              <li><Link to="/services" className="text-base sm:text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Services
              </Link></li>
              <li><Link to="/packages" className="text-base sm:text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Packages
              </Link></li>
              <li><Link to="/about" className="text-base sm:text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                About Us
              </Link></li>
              <li><Link to="/contact" className="text-base sm:text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Contact Us
              </Link></li>
            </ul>
          </div>

          {/* Tablet Navigation - Hidden, only hamburger shown */}
          <div className="hidden md:flex lg:hidden">
            {/* Navigation links removed - only hamburger will be visible */}
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg text-black hover:text-blue-600 transition-colors duration-300"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                </svg>
              </button>
            </div>

            {/* Desktop Booking Button */}
            <Link to="/application" className="hidden lg:flex bg-white/30 backdrop-blur-lg border border-white/20 rounded-full px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 flex items-center space-x-1.5 sm:space-x-2 hover:bg-white/20 transition-all duration-300 shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span className="text-base sm:text-lg text-black font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Booking
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/20 backdrop-blur-lg border-t border-white/20 shadow-lg" role="navigation" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 max-w-screen-2xl mx-auto">
            
            {/* Mobile Menu Title */}
            <div className="text-center mb-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-black" style={{fontFamily: "'Abhaya Libre', serif"}}>TakeOff Holidayz</h2>
            </div>

            <ul className="flex flex-col space-y-3 sm:space-y-4" role="menubar">
              <li role="none"><Link to="/home" className="text-lg sm:text-xl text-black hover:text-blue-600 transition-colors duration-300 font-medium py-2.5 px-4 rounded-lg hover:bg-white/10 block" style={{fontFamily: "'Afacad', sans-serif"}} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Home
              </Link></li>
              <li role="none"><Link to="/services" className="text-lg sm:text-xl text-black hover:text-blue-600 transition-colors duration-300 font-medium py-2.5 px-4 rounded-lg hover:bg-white/10 block" style={{fontFamily: "'Afacad', sans-serif"}} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Services
              </Link></li>
              <li role="none"><Link to="/packages" className="text-lg sm:text-xl text-black hover:text-blue-600 transition-colors duration-300 font-medium py-2.5 px-4 rounded-lg hover:bg-white/10 block" style={{fontFamily: "'Afacad', sans-serif"}} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Packages
              </Link></li>
              <li role="none"><Link to="/about" className="text-lg sm:text-xl text-black hover:text-blue-600 transition-colors duration-300 font-medium py-2.5 px-4 rounded-lg hover:bg-white/10 block" style={{fontFamily: "'Afacad', sans-serif"}} onClick={() => setIsMenuOpen(false)} role="menuitem">
                About Us
              </Link></li>
              <li role="none"><Link to="/contact" className="text-lg sm:text-xl text-black hover:text-blue-600 transition-colors duration-300 font-medium py-2.5 px-4 rounded-lg hover:bg-white/10 block" style={{fontFamily: "'Afacad', sans-serif"}} onClick={() => setIsMenuOpen(false)} role="menuitem">
                Contact Us
              </Link></li>
              
              {/* Mobile Booking Button */}
              <li role="none" className="pt-3 sm:pt-4 border-t border-white/20">
                <Link to="/application" className="w-full bg-white/30 backdrop-blur-lg border border-white/20 rounded-full px-5 py-3.5 flex items-center justify-center space-x-2 hover:bg-white/20 transition-all duration-300 shadow-lg block" onClick={() => setIsMenuOpen(false)} role="menuitem">
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-lg sm:text-xl text-black font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                    Booking
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
