import React, { useState } from 'react';
import DomesticPackages from '../components/Domestic';
import InternationalPackages from '../components/International';

const Packages = () => {
    const [selectedBox, setSelectedBox] = useState('domestic');
    const [showAll, setShowAll] = useState(false);
    const [mobileShowCount, setMobileShowCount] = useState(3);
    
    const currentPackages = selectedBox === 'domestic' ? DomesticPackages : InternationalPackages;
    
    // Responsive package display logic
    const displayedPackages = (() => {
        if (typeof window !== 'undefined' && window.innerWidth < 640) {
            // Mobile: Show packages in batches of 3
            return currentPackages.slice(0, mobileShowCount);
        } else {
            // Tablet/Desktop: Show first 6 or all
            return showAll ? currentPackages : currentPackages.slice(0, 6);
        }
    })();
    
    // Check if there are more packages to show
    const hasMorePackages = (() => {
        if (typeof window !== 'undefined' && window.innerWidth < 640) {
            // Mobile: Check if there are more packages to show
            return mobileShowCount < currentPackages.length;
        } else {
            // Tablet/Desktop: Check if we should show "Show More" button
            return currentPackages.length > 6 && !showAll;
        }
    })();

    return (
        <div>
            {/* Hero Section */}
            <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/packages.jpg)'}}>
                <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4">
                    <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 text-white max-w-7xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] text-center">
                        <h1 className="font-pethra mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Our Best Travel Packages</h1>
                        <div className="w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[380px] h-[2px] bg-white mx-auto mt-2 sm:mt-4"></div>
                    </div>
                </div>
            </section>

            {/* Explore Our Top Travel Deals Section */}
            <section className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-52 bg-gray-100 text-left">
                <div className="inline-block text-center mb-4 sm:mb-6 md:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-2 sm:mb-4 font-pethra text-left">Explore Our Top Travel Deals</h2>
                    <div className="w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] h-[2px] bg-black mx-auto mt-0"></div>
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8" style={{fontFamily: "'Afacad', sans-serif"}}>Discover our best-value travel deals crafted for comfort, adventure, and memorable experiences — giving you more to explore for less.</p>
                
                {/* Button Boxes */}
                <div className="flex items-center justify-center gap-0">
                    <button 
                        className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 font-semibold rounded-l-full border-2 transition-colors w-28 sm:w-32 md:w-40 font-pethra text-center text-sm sm:text-base md:text-lg ${
                            selectedBox === 'domestic' 
                                ? 'bg-[#B0D4FF] text-black border-[#B0D4FF]' 
                                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedBox('domestic')}
                    >
                        Domestic
                    </button>
                    <span className="text-gray-500 mx-1 sm:mx-2 text-sm sm:text-base md:text-lg">/</span>
                    <button 
                        className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 font-semibold rounded-r-full border-2 transition-colors w-28 sm:w-32 md:w-40 font-pethra text-center text-sm sm:text-base md:text-lg ${
                            selectedBox === 'international' 
                                ? 'bg-[#B0D4FF] text-black border-[#B0D4FF]' 
                                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedBox('international')}
                    >
                        International
                    </button>
                </div>
                
                {/* Package Display Section */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {displayedPackages.map((pkg) => (
                        <div key={pkg.id} className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden">
                            <div className="relative">
                                <img 
                                    src={pkg.image} 
                                    alt={pkg.title} 
                                    className="object-cover rounded-xl sm:rounded-2xl m-2 sm:m-4 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] h-48 sm:h-56 md:h-64"
                                    onError={(e) => {
                                        e.target.src = '/placeholder-package.jpg';
                                    }}
                                />
                                <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 bg-gray-800 bg-opacity-70 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm flex items-center gap-1">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                                    {selectedBox === 'domestic' ? 'India' : 'International'}
                                </div>
                            </div>
                            <div className="p-3 sm:p-4 md:p-6">
                                <div className="flex justify-between items-center mb-2 sm:mb-3">
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900" style={{fontFamily: "'Abhaya Libre', serif"}}>{pkg.title}</h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1l2.5 6.5H19l-5.5 4 2 6.5L10 14l-5.5 4 2-6.5L1 7.5h6.5z"/></svg>
                                        <span className="text-gray-600 font-semibold text-sm sm:text-base md:text-lg">4.5</span>
                                    </div>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-4" style={{fontFamily: "'Abhaya Libre', serif"}}>{pkg.price}</p>
                                <p className="text-xs sm:text-sm text-gray-700 flex-1 mb-3 sm:mb-4" style={{fontFamily: "'Afacad', sans-serif"}}>{pkg.description}</p>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 flex-1" style={{fontFamily: "'Afacad', sans-serif"}}>
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-1 sm:gap-2">
                                                <span className="text-green-600 text-xs sm:text-sm">✓</span> <span className="text-xs sm:text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base hover:bg-blue-700 transition-all whitespace-nowrap" style={{fontFamily: "'Afacad', sans-serif"}}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Show More Button */}
                {hasMorePackages && (
                    <div className="mt-8 sm:mt-12 text-center">
                        <button 
                            onClick={() => {
                                if (typeof window !== 'undefined' && window.innerWidth < 640) {
                                    // Mobile: Add 3 more packages
                                    setMobileShowCount(prev => Math.min(prev + 3, currentPackages.length));
                                } else {
                                    // Tablet/Desktop: Toggle show all
                                    setShowAll(!showAll);
                                }
                            }}
                            className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg"
                            style={{fontFamily: "'Afacad', sans-serif"}}
                        >
                            {typeof window !== 'undefined' && window.innerWidth < 640 
                                ? (mobileShowCount + 3 >= currentPackages.length 
                                    ? `Show All (${currentPackages.length})` 
                                    : `Show More (+3)`)
                                : (showAll ? 'Show Less' : 'Show More')
                            }
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Packages;