import { useState, useEffect, useRef } from "react";
import MovieCarousel from "./MovieCarousel.jsx";
import SearchResults from "./SearchResults.jsx";

export default function MainPage() {
  // State declarations
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [menuState, setMenuState] = useState("closed");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);
  const searchTimeoutRef = useRef(null);

  // API Configuration
  const apiKey = "95a6b55b1e3846e956fd68b1ba23bbe7";
  const endpoints = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1&per_page=24`,
    search: (query) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`,
  };

  // Scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowScrollTop(scrollPosition > 300);
      setShowScrollBottom(scrollPosition < documentHeight - windowHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  // Fetch movies data
  useEffect(() => {
    async function fetchMovies(endpoint, setterFunction) {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setterFunction(data.results);
      } catch (error) {
        console.error(`Error fetching movies: ${error.message}`);
      }
    }

    fetchMovies(endpoints.popular, setPopularMovies);
    fetchMovies(endpoints.upcoming, setUpcomingMovies);
    fetchMovies(endpoints.topRated, setTopRatedMovies);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      searchTimeoutRef.current = setTimeout(async () => {
        try {
          const response = await fetch(endpoints.search(searchQuery.trim()));
          const data = await response.json();
          setSearchResults(data.results);
        } catch (error) {
          console.error(`Error searching movies: ${error.message}`);
        } finally {
          setIsSearching(false);
        }
      }, 500);
    } else {
      setSearchResults(null);
    }
  }, [searchQuery]);

  // Menu animation handlers
  useEffect(() => {
    if (menuState === "opening") {
      const timer = setTimeout(() => setMenuState("open"), 50);
      return () => clearTimeout(timer);
    } else if (menuState === "closing") {
      const timer = setTimeout(() => setMenuState("closed"), 300);
      return () => clearTimeout(timer);
    }
  }, [menuState]);

  // Event handlers
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleCloseSearch = () => {
    setSearchQuery("");
    setSearchResults(null);
  };

  const toggleMenu = (action) => {
    setMenuState(action === "open" ? "opening" : "closing");
  };

  // UI Helper Variables
  const showMenu = menuState !== "closed";

  const menuClasses = `fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-50 flex flex-col items-center justify-center text-white transition-all duration-300 ease-in-out ${
    menuState === "opening"
      ? "opacity-0 translate-y-full"
      : menuState === "open"
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-full"
  }`;

  // Component Sections
  const NavLinks = () => (
    <ul className="hidden md:flex gap-8 text-lg justify-center">
      <NavItem icon="home" label="Home" />
      <NavItem icon="movie" label="Movies" />
      <NavItem icon="tv" label="TV Shows" />
      <NavItem icon="wishlist" label="Wishlist" />
    </ul>
  );

  const NavItem = ({ icon, label }) => {
    const iconElement = {
      home: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      movie: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 0h-1.5m-1.5 0h-7.5m-1.5 0h-1.5m7.5 0v-1.5c0-.621.504-1.125 1.125-1.125M7.5 15h1.5m-1.5 0v-1.5c0-.621.504-1.125 1.125-1.125M7.5 15v1.5c0 .621.504 1.125 1.125 1.125M7.5 12h7.5m-7.5 3h7.5m-7.5 0v3m0-3h7.5m-7.5 0v-3m-6 3h1.5m-1.5 0v-3m0 0h1.5m-1.5 0v-3m0 0h1.5"
          />
        </svg>
      ),
      tv: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
      wishlist: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
    };

    return (
      <li className="px-3">
        <button className="text-gray-300 hover:text-white text-base flex items-center transition-colors duration-200">
          {iconElement[icon]}
          {label}
        </button>
      </li>
    );
  };

  const SectionHeader = ({ title }) => (
    <div className="flex w-full items-center px-4 sm:px-6 py-4 sm:py-6">
      <h3 className="whitespace-nowrap font-bold uppercase tracking-widest text-white text-base sm:text-lg">
        {title}
      </h3>
      <div className="mx-4 sm:mx-8 h-0.5 w-full max-w-md rounded bg-gray-300"></div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 transition-colors duration-200">
      {/* Header Section */}
      <header className="bg-gradient-to-b from-black to-black/90 text-white sticky top-0 z-40 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-5">
            {/* Logo */}
            <div className="logo mb-4 sm:mb-0">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                MovieDB
              </h1>
            </div>

            {/* Navigation */}
            <NavLinks />

            {/* Search and Theme Toggle */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex-1 sm:flex-none">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <input
                    type="text"
                    className="relative bg-black/40 backdrop-blur-md border border-white/10 text-white text-sm w-full sm:w-96 px-4 py-3 pl-12 rounded-full h-12 outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300 placeholder:text-white/40 group-hover:border-white/30"
                    placeholder="Search for movies, TV shows, actors..."
                    value={searchQuery}
                    onChange={handleSearchInput}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 group-hover:text-white/60 transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={handleCloseSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/80 transition-all duration-200 hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                  {isSearching && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white/60"></div>
                    </div>
                  )}
                </div>
              </form>

              {/* Mobile Menu Button */}
              <button
                onClick={() => toggleMenu("open")}
                className="block md:hidden focus:outline-none text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Open Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMenu && (
        <div className={menuClasses}>
          <button
            onClick={() => toggleMenu("close")}
            className="absolute top-5 right-10 text-3xl focus:outline-none"
            aria-label="Close Menu"
          >
            ✕
          </button>
          <ul className="flex flex-col gap-8 text-2xl">
            <li className="hover:text-gray-400 cursor-pointer transition-colors duration-200">
              Home
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors duration-200">
              Movies
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors duration-200">
              TV Shows
            </li>
            <li className="hover:text-gray-400 cursor-pointer transition-colors duration-200">
              Wishlist
            </li>
          </ul>
        </div>
      )}

      {/* Search Results */}
      {searchResults !== null && (
        <SearchResults results={searchResults} onClose={handleCloseSearch} />
      )}

      {/* Hero Carousel Section */}
      <section className="movie-hero">
        <MovieCarousel movies={popularMovies} />
      </section>

      {/* Upcoming Movies Section */}
      <section>
        <SectionHeader title="Upcoming" />
        <div className="px-4 sm:px-6 py-4 flex gap-4 overflow-x-auto snap-x">
          {upcomingMovies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 snap-start bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl w-48 sm:w-56"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-full h-72 sm:h-80 object-cover"
                alt={movie.title}
              />
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {movie.title.length > 18
                    ? movie.title.slice(0, 18) + "..."
                    : movie.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                  {movie.overview || "No overview available."}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs sm:text-sm font-bold text-yellow-500">
                    ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-semibold">
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Movies Section */}
      <section className="top-rated-movies mt-4 sm:mt-8">
        <SectionHeader title="Top Rated" />
        <div className="px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 py-4 gap-3 sm:gap-4">
          {topRatedMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-full h-64 sm:h-64 lg:h-80 object-cover"
                alt={movie.title}
              />
              <div className="p-2 sm:p-4">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  {movie.title.length > 18
                    ? movie.title.slice(0, 18) + "..."
                    : movie.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                  {movie.overview || "No overview available."}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs sm:text-sm font-bold text-yellow-500">
                    ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-semibold">
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll Buttons */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>

      <button
        onClick={scrollToBottom}
        className={`fixed bottom-6 right-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
          showScrollBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to bottom"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* Footer Section */}
      <footer className="mt-auto bg-gradient-to-t from-black to-black/90 text-white border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                MovieDB
              </h3>
              <p className="text-white/60 text-sm">
                Your ultimate destination for movies, TV shows, and entertainment.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    Movies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    TV Shows
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    Action
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    Drama
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    Comedy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                    Horror
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
              <p className="text-white/60 text-sm mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                />
                <button
                  type="submit"
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} MovieDB. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/40 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/40 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-white/40 hover:text-white transition-colors duration-200 text-sm">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
