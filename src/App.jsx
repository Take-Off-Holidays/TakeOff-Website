import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import Loading from './components/Loading'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Packages from './pages/Packages'
import Application from './pages/Application'
import LoadingPage from './pages/LoadingPage'

const AppContent = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Show loading for 1 second

        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Check if on loading page
    const isLoadingPage = location.pathname === '/';

    // If on loading page, show only LoadingPage without Navbar or Footer
    if (isLoadingPage) {
        return <LoadingPage />;
    }

    return (
        <>
            {loading && <Loading />}
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/application" element={<Application />} />
            </Routes>
            <Footer />
        </>
    );
}

const App = () => {
    return (
        <Router>
            <ScrollToTopOnRouteChange />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "TakeOff Holidayz Pvt Ltd",
                        "alternateName": "TakeOff Holidayz",
                        "url": "https://takeoffholidayz.com",
                        "logo": "https://takeoffholidayz.com/logoimg.png",
                        "description": "Premium travel agency in Kerala offering customized holiday packages to Dubai, Maldives, Thailand, and international destinations.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "DD Vyapar Bhavan, KP Vallon Road, Kadavanthra",
                            "addressLocality": "Kochi",
                            "addressRegion": "Kerala",
                            "postalCode": "682020",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "9.9312",
                            "longitude": "76.2673"
                        },
                        "telephone": "+91-8129023279",
                        "email": "support.cok@takeoffholidayz.in",
                        "sameAs": [
                            "https://www.facebook.com/takeoffholidayz",
                            "https://www.instagram.com/takeoffholidayz",
                            "https://twitter.com/takeoffholidayz"
                        ],
                        "priceRange": "$$",
                        "openingHours": "Mo-Su 00:00-23:59"
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "TakeOff Holidayz",
                        "url": "https://takeoffholidayz.com",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://takeoffholidayz.com/packages?search={search_term_string}"
                            },
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>
            </Helmet>
            <AppContent />
        </Router>
    )
}
export default App
