import React, { useState, useEffect } from 'react';
import ServiceManager from '../components/ServiceManager';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1300); // Start after 1 second loading + 300ms buffer
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div>
            {/* Hero Section */}
            <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/Service.webp)'}}>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-2 sm:px-4">
                    <div className={`bg-black bg-opacity-20 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-white max-w-7xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-center transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <h1 className="font-pethra mx-auto" style={{fontSize: 'clamp(2rem, 8vw, 120px)'}}>Our Services</h1>
                        <div className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[380px] h-[2px] bg-white mx-auto mt-4"></div>
                    </div>
                    <div className={`bg-black bg-opacity-20 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-white max-w-7xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] text-center mt-4 transition-all duration-1000 ease-out delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed" style={{fontFamily: "'Afacad', sans-serif"}}>Complete travel services for smooth, stress-free journeys.</p>
                    </div>
                </div>
            </section>

            <ServiceManager />

            {/* Separator */}
            <div className="w-full max-w-4xl lg:max-w-6xl h-0.5 bg-black mx-auto "></div>
            
            {/* Explore Our Packages Section */}
            <section className="py-12 sm:py-16 md:py-20 px-2 sm:px-8 md:px-16 lg:px-52 bg-gray-100 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-4 sm:mb-6 md:mb-8 font-pethra">Explore Our Packages</h2>
                <p className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 md:mb-16" style={{fontFamily: "'Afacad', sans-serif"}}>Discover thoughtfully crafted travel packages designed for comfort, adventure, and unforgettable experiences — find the perfect trip for you.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 lg:px-12 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    PACKAGES 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline ml-1 sm:ml-2">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 12 12)"/>
                    </svg>
                </button>
            </section>
        </div>
    );
};

export default Services;