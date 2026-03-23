import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-3" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center">
            <div className="mb-4">
              <img src="/logoimg.png" alt="Takeoff Holidayz - Premier Travel Agency Logo" className="h-12 w-auto mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-1 font-pethra">TAKEOFF HOLIDAYZ</h3>
            <h3 className="text-lg font-bold mb-4 font-pethra">TOH Pvt Ltd<sup>™</sup></h3>
            <p className="text-gray-400 mb-4" style={{fontFamily: "'Afacad', sans-serif"}}>
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
            
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="text-lg font-semibold mb-4 font-pethra">Quick Links</h4>
            <ul className="space-y-2" style={{fontFamily: "'Afacad', sans-serif"}}>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-white transition-colors">Packages</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our Services">
            <h4 className="text-lg font-semibold mb-4 font-pethra">Services</h4>
            <ul className="space-y-2" style={{fontFamily: "'Afacad', sans-serif"}}>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Flight Booking</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Hotel Reservations</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Travel Insurance</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Car Rentals</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-white transition-colors">Tour Packages</Link></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-pethra">Contact Info</h4>
            <div className="space-y-3" style={{fontFamily: "'Afacad', sans-serif"}}>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-400 text-sm md:text-base break-words">DD Vyapar Bhavan, KP Vallon Road, Kadavanthra, Kochi - 682 020, Kerala, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-400 text-sm md:text-base"><strong>Kochi:</strong> +91 812 902 3279</span>
                  <span className="text-gray-400 text-sm md:text-base"><strong>UK:</strong> +44 7785 341907</span>
                  <span className="text-gray-400 text-sm md:text-base"><strong>Pathanamthitta:</strong> +91 807 587 7726</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:support.cok@takeoffholidayz.in" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors break-words max-w-full overflow-wrap-break-word" style={{wordBreak: 'break-all'}}>support.cok@takeoffholidayz.in</a>
                  <a href="mailto:sales@takeoffholidayz.in" className="text-gray-400 text-sm md:text-base hover:text-white transition-colors break-words max-w-full overflow-wrap-break-word" style={{wordBreak: 'break-all'}}>sales@takeoffholidayz.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-4">
                <img src="/kerala-gods-own-country.gif" alt="Kerala - God's Own Country" className="h-16 w-auto rounded-lg object-cover" />
                <img src="/isomark.png" alt="Takeoff Holidayz Isomark" className="h-20 w-auto" />
                <img src="/nidhi.jpeg" alt="Nidhi" className="h-16 w-auto rounded-lg object-cover" />
              </div>
              <span className="text-gray-400 text-xs" style={{fontFamily: "'Afacad', sans-serif"}}>ISO Certified 9001:2025</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm" style={{fontFamily: "'Afacad', sans-serif"}}>
              © 2024 Takeoff Holidayz Pvt Ltd<sup>™</sup>. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" style={{fontFamily: "'Afacad', sans-serif"}}>
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" style={{fontFamily: "'Afacad', sans-serif"}}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
