import React from 'react'

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(/about.jpg)'}}>
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center px-4">
                    <div className="absolute bg-black bg-opacity-20 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 text-white max-w-7xl w-[90%] sm:w-[80%] md:w-[60%] text-center">
                    <h1 className="font-pethra mx-auto" style={{fontSize: 'clamp(3rem, 10vw, 150px)'}}>About Us</h1>
                    <div className="w-[200px] sm:w-[300px] md:w-[380px] h-[2px] bg-white mx-auto mt-0"></div>

                </div>
                <div className="w-40 h-[1px] bg-white mx-auto mt-4"></div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* First Row - What We Do */}
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-3 sm:mb-4" style={{fontFamily: "'Abhaya Libre', serif"}}>What We Do?</h2>
                            <p className="text-lg sm:text-xl md:text-3xl text-gray-600 mb-3 sm:mb-4 leading-relaxed" style={{fontFamily: "'Afacad', sans-serif"}}>
                                We deliver complete travel and tourism services including flight, bus, and railway ticket booking, 
                                hotel and resort reservations, holiday tour packages, and visa assistance. Our goal is to provide 
                                reliable, affordable, and well-planned travel solutions for individuals, families, and corporate clients. </p>
                        </div>

                        {/* First Row - Image */}
                        <div className="flex items-center justify-center">
                            <div className="bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                                <img src="Welcome-to-Travel-Moments-Homepage.webp" alt="Airplane Wing" className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover" />
                            </div>
                        </div>

                        {/* Second Row - Accessibility */}
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-3 sm:mb-4" style={{fontFamily: "'Abhaya Libre', serif"}}>Accessibility</h2>                     
                           <p className="text-lg sm:text-xl md:text-3xl text-gray-600 mb-3 sm:mb-4 leading-relaxed" style={{fontFamily: "'Afacad', sans-serif"}}>
                                Our travel services are designed to be simple, fast, and easily accessible. With responsive customer support and streamlined booking processes, we ensure travelers can plan trips conveniently anytime, anywhere.
                            </p>
                        </div>

                        {/* Second Row - Our Commitment */}
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-3 sm:mb-4" style={{fontFamily: "'Abhaya Libre', serif"}}>Our Commitment</h2>
                            <p className="text-lg sm:text-xl md:text-3xl text-gray-600 mb-3 sm:mb-4 leading-relaxed" style={{fontFamily: "'Afacad', sans-serif"}}>
                                We are committed to providing exceptional travel experiences with transparency, reliability, and personalized care. Your satisfaction and safety are our top priorities in every journey we design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Separator */}
            <div className="w-full max-w-4xl h-0.5 bg-black mx-auto"></div>

            {/* Journey Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <p className="text-xl sm:text-2xl md:text-4xl font-serif text-gray-800 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
                        We turn every journey into a smooth, joyful
                        experience — where comfort meets adventure
                        and every trip becomes a story filled with
                        beautiful memories.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="/packages" className="bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center space-x-2 hover:bg-blue-700 transition duration-300 w-full sm:w-72 justify-center">
                            <span>PACKAGES</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="/contact" className="bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center space-x-2 hover:bg-blue-700 transition duration-300 w-full sm:w-72 justify-center">
                            <span>CONTACT US</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            
        </div>
    )
}

export default About