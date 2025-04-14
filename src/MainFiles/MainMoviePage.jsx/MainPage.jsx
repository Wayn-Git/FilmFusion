import { useState, useEffect, useRef } from "react";
import MovieCarousel from "./MovieCarousel.jsx";
import SearchResults from "./SearchResults.jsx";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white border-t border-purple-500/20 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
                FilmFusion
              </span>
            </h2>
            <p className="text-gray-400 text-sm text-center md:text-left mb-6">
              Your ultimate destination for exploring movies
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/movies" className="text-gray-400 hover:text-purple-400 transition-colors">Movies</Link></li>
              <li><Link to="/tv-shows" className="text-gray-400 hover:text-purple-400 transition-colors">TV Shows</Link></li>
              <li><Link to="/wishlist" className="text-gray-400 hover:text-purple-400 transition-colors">Wishlist</Link></li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Legal</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col items-center">
          <p className="text-gray-500 text-sm">
            © 2023 FilmFusion. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Powered by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">TMDB</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function MainPage() {
  // State declarations
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);
  const searchTimeoutRef = useRef(null);
  const searchInputRef = useRef(null);

  // API Configuration
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const endpoints = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&append_to_response=videos`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&append_to_response=videos`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1&per_page=24&append_to_response=videos`,
    search: (query) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`,
    movieDetails: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`
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
        
        // For each movie in results, fetch additional details to get trailers
        const moviesWithDetails = await Promise.all(
          data.results.map(async (movie) => {
            try {
              const detailsResponse = await fetch(endpoints.movieDetails(movie.id));
              const detailsData = await detailsResponse.json();
              return {
                ...movie,
                videos: detailsData.videos?.results || []
              };
            } catch (error) {
              console.error(`Error fetching details for movie ${movie.id}: ${error.message}`);
              return {
                ...movie,
                videos: []
              };
            }
          })
        );
        
        setterFunction(moviesWithDetails);
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

  // Auto-focus search input when opened
  useEffect(() => {
    if (searchInputRef.current && searchQuery === '') {
      searchInputRef.current.focus();
    }
  }, []);

  // Event handlers
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleCloseSearch = () => {
    setSearchQuery("");
    setSearchResults(null);
  };

  const SectionHeader = ({ title }) => (
    <div className="flex w-full items-center px-4 sm:px-6 py-4 sm:py-6">
      <h3 className="whitespace-nowrap font-bold uppercase tracking-widest text-white text-base sm:text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
        {title}
      </h3>
      <div className="mx-4 sm:mx-8 h-0.5 w-full max-w-md rounded bg-gradient-to-r from-purple-600/50 to-indigo-600/50"></div>
    </div>
  );

  // MovieCard component for the grid display
  const MovieCard = ({ movie }) => {
    // Find trailer if available
    const trailer = movie.videos?.find(
      video => video.type === "Trailer" && video.site === "YouTube"
    );

    return (
      <Link to={`/movie/${movie.id}`} className="group">
        <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/20">
          {movie.poster_path ? (
            <div className="relative">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className="w-full h-72 object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {trailer && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-indigo-600 bg-opacity-90 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-72 bg-gradient-to-br from-gray-800 to-indigo-900/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-indigo-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
          )}
          
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-white font-medium line-clamp-1 flex-1">{movie.title}</h3>
              <div className="flex items-center justify-center bg-yellow-500 text-black rounded-full w-8 h-8 font-bold text-sm ml-2">
                {movie.vote_average?.toFixed(1)}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-indigo-400 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span className="text-gray-400 text-sm">{movie.release_date?.split('-')[0]}</span>
              </div>
              
              {trailer && (
                <div className="text-indigo-400 text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 mr-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Trailer
                </div>
              )}
            </div>
            
            <p className="text-gray-400 text-sm mt-2 line-clamp-2 h-10">
              {movie.overview?.substring(0, 80)}...
            </p>
            
            <button
              className="w-full mt-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2 rounded font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-purple-500/20"
            >
              View Details
            </button>
          </div>
        </div>
      </Link>
    );
  };

  // MovieGrid component for non-carousel sections
  const MovieGrid = ({ movies }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {movies.slice(0, 10).map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-gray-900">
      {/* Single Header with navigation */}
      <Header withSearch={false} />
      
      {/* Main Content */}
      <main className="mx-auto py-8 mt-6">
        {/* Page Title */}
        <div className="text-center mb-10 px-4 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
              FilmFusion
            </span>
          </h1>
          <p className="text-purple-200 text-lg mb-8">
            Discover and explore the latest movies and TV shows
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8 relative">
            <form onSubmit={handleSearchSubmit} className="relative z-10">
              <input
                ref={searchInputRef}
                type="text" 
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={handleSearchInput}
                className="w-full py-3 px-4 pl-10 rounded-full bg-white/10 border border-purple-500/30 text-white placeholder-purple-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all shadow-lg"
              />
              
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleCloseSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </form>
          </div>
          
          {/* Loading Overlay - Appears center of screen but doesn't block input */}
          {isSearching && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="bg-black/70 p-6 rounded-xl shadow-2xl flex items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500 border-r-2 border-b-2 border-gray-800 mr-3"></div>
                <span className="text-purple-200 font-medium">Searching...</span>
              </div>
            </div>
          )}
        </div>
      
        {/* Search Results or Main Content */}
        {searchResults ? (
          <div className="mt-4 mb-12 max-w-6xl mx-auto px-4">
            <SearchResults results={searchResults} onClose={handleCloseSearch} query={searchQuery} />
          </div>
        ) : (
          <>
            {/* Featured Movies Section with Carousel */}
            <section className="mb-16">
              <div className="container mx-auto px-4">
                <SectionHeader title="Featured Movies" />
              </div>
              <div className="max-w-[1920px] mx-auto px-0">
                <MovieCarousel movies={popularMovies} />
              </div>
            </section>
            
            {/* Upcoming Movies Section with Grid */}
            <section className="mb-12">
              <div className="container mx-auto px-4">
                <SectionHeader title="Upcoming Movies" />
                <MovieGrid movies={upcomingMovies} />
              </div>
            </section>
            
            {/* Top Rated Movies Section with Grid */}
            <section className="mb-12">
              <div className="container mx-auto px-4">
                <SectionHeader title="Top Rated Movies" />
                <MovieGrid movies={topRatedMovies} />
              </div>
            </section>
          </>
        )}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Scroll Buttons */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-24 p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all z-10"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
      
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          className="fixed right-8 bottom-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all z-10"
          aria-label="Scroll to bottom"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </div>
  );
}
