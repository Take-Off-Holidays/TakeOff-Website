import React from 'react';

const ServiceBox = ({ icon, title, description }) => {
    return (
        <div className="bg-gradient-to-b from-[#8BD2FB] to-[#F3FAFF] rounded-3xl shadow-lg p-6 flex flex-col w-[22rem] h-48">
            <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {title === "Kerala Special Packages" ? (
                      <img src="./kerala-tourism.svg" className="w-8 h-8 object-cover" alt="Kerala" />
                    ) : title === "Motor Insurance" ? (
                      <div className="w-8 h-8" dangerouslySetInnerHTML={{__html: icon}} />
                    ) : title === "Corporate Travel & Events" ? (
                      <div className="w-8 h-8" dangerouslySetInnerHTML={{__html: icon}} />
                    ) : (
                      <svg className="w-8 h-8" fill="url(#gradient)" viewBox={title === "Schengen Visa Services" ? "0 0 640 576" : title === "Visa Stamping Support" ? "0 0 129 129" : title === "Document Attestation" ? "0 0 32 32" : title === "Travel Insurance" ? "0 0 64 64" : title === "Health Insurance" ? "0 0 1024 1024" : "0 0 24 24"}>
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#7ECFFE"/>
                            <stop offset="100%" stopColor="#000000"/>
                          </linearGradient>
                        </defs>
                        <path d={icon}/>
                      </svg>
                    )}
                </div>
                <h3 className="text-xl font-bold text-black underline flex-1" style={{fontFamily: "'Afacad', sans-serif"}}>{title}</h3>
            </div>
            <p className="text-black text-sm text-left" style={{fontFamily: "'Afacad', sans-serif"}}>{description}</p>
        </div>
    );
};

export default ServiceBox;