import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Animated link component with hover effect
const NavLink = ({ to, icon, label, isMobile, onClick }) => {
  const location = useLocation();
  const isActive = 
    (to === '/' && location.pathname === '/') || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <li className={`${isMobile ? "w-full mb-2" : "mx-1"}`}>
      <Link 
        to={to} 
        onClick={onClick}
        className={`group relative flex items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 ${
          isMobile 
            ? "text-lg py-3 px-6 w-full" 
            : "text-sm font-medium"
        } ${
          isActive 
            ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/30" 
            : "text-white hover:bg-white/10 hover:shadow"
        }`}
      >
        <span className="mr-2">
          {iconMap[icon]}
        </span>
        {label}
      </Link>
    </li>
  );
};

// Icon map
const iconMap = {
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  movies: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 0h-1.5m-1.5 0h-7.5m-1.5 0h-1.5m7.5 0v-1.5c0-.621.504-1.125 1.125-1.125M7.5 15h1.5m-1.5 0v-1.5c0-.621.504-1.125 1.125-1.125M7.5 15v1.5c0 .621.504 1.125 1.125 1.125M7.5 12h7.5m-7.5 3h7.5m-7.5 0v3m0-3h7.5m-7.5 0v-3m-6 3h1.5m-1.5 0v-3m0 0h1.5m-1.5 0v-3m0 0h1.5" />
    </svg>
  ),
  tv: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  wishlist: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
};

export default function Header({ withSearch = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Disable body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  // Check if a link is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`sticky top-0 z-50 ${
      scrolled 
        ? 'bg-black/85 backdrop-blur-sm shadow-lg' 
        : 'bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900'
      } transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                FilmFusion
              </span>
            </Link>
          </div>
          
          {/* Navigation items */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-1 mr-4">
              {["Home", "Movies", "TV Shows", "Wishlist"].map((item, index) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <Link
                    key={index}
                    to={path}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive(path)
                        ? "text-white font-semibold shadow-md" 
                        : "text-white hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="relative z-10 drop-shadow-sm">{item}</span>
                    {isActive(path) && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/30 -z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            
            {/* Search */}
            {withSearch && (
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-black/30 text-white border border-white/20 rounded-full py-2 px-4 pl-9 text-sm focus:outline-none focus:border-purple-400/50 w-40 focus:w-56 transition-all duration-300"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button - Improved */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center text-white p-2 rounded-full hover:bg-white/10 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen 
                    ? "rotate-45 translate-y-2 w-6 bg-purple-400" 
                    : "w-6"
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen 
                    ? "opacity-0 translate-x-2" 
                    : "opacity-100 w-4 ml-auto"
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen 
                    ? "-rotate-45 -translate-y-2 w-6 bg-purple-400" 
                    : "w-6"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-purple-500/20"
          >
            <div className="container mx-auto px-6 py-4">
              {/* Mobile Search */}
              {withSearch && (
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search movies, TV shows..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white/10 text-white border border-white/20 rounded-lg py-2 px-4 pl-10 text-sm focus:outline-none focus:border-purple-400/50 w-full transition-all duration-300"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              <nav className="flex flex-col space-y-3">
                {["Home", "Movies", "TV Shows", "Wishlist"].map((item, index) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                  return (
                    <Link
                      key={index}
                      to={path}
                      className={`py-3 px-4 rounded-lg text-center text-base font-medium transition-all duration-200 ${
                        isActive(path)
                          ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 