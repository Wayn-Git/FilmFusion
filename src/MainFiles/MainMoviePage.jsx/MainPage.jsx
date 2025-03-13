import { useState, useEffect } from 'react';
import MovieCarousel from './MovieCarousel.jsx';

export default function MainPage() {
  const [PopularMovie, setPopularMovie] = useState([]);
  const [UpcomingMovie, setUpcomingMovie] = useState([]);
  const [TopRatedMovie, setTopRatedMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuState, setMenuState] = useState('closed'); // 'closed', 'opening', 'open', 'closing'
  const apiKey = '95a6b55b1e3846e956fd68b1ba23bbe7';
  const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
  const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  const ImageBaseUrl = 'https://image.tmdb.org/t/p/original';
  const PosterBaseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    // Fetch popular movies
    async function getDataPopular() {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setPopularMovie(data.results);
      } catch (error) {
        console.log("Error Fetching Popular Movie Data", error);
      }
    }
    
    // Fetch upcoming movies
    async function getUpcomingMovies() {
      try {
        const response = await fetch(upcomingUrl);
        const data = await response.json();
        setUpcomingMovie(data.results);
      } catch (error) {
        console.log("Error Fetching Upcoming Movie Data", error);
      }
    }
    
    // Fetch top rated movies
    async function getTopRatedMovies() {
      try {
        const response = await fetch(topRatedUrl);
        const data = await response.json();
        setTopRatedMovie(data.results);
      } catch (error) {
        console.log("Error Fetching Top Rated Movie Data", error);
      }
    }
    
    getDataPopular();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  // Handle menu state transitions
  useEffect(() => {
    if (menuState === 'opening') {
      // After rendering the menu with initial styles, transition to open state
      const timer = setTimeout(() => setMenuState('open'), 50);
      return () => clearTimeout(timer);
    } else if (menuState === 'closing') {
      // After animation completes, remove from DOM
      const timer = setTimeout(() => setMenuState('closed'), 300);
      return () => clearTimeout(timer);
    }
  }, [menuState]);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const openMenu = () => {
    setMenuState('opening');
  };

  const closeMenu = () => {
    setMenuState('closing');
  };

  // Determine if menu should be in DOM
  const showInDOM = menuState !== 'closed';
  
  // Determine CSS classes for animation
  const menuClasses = `fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-50 flex flex-col items-center justify-center text-white transition-all duration-300 ease-in-out ${
    menuState === 'opening' ? 'opacity-0 translate-y-full' :
    menuState === 'open' ? 'opacity-100 translate-y-0' :
    menuState === 'closing' ? 'opacity-0 -translate-y-full' : ''
  }`;

  return (
    <>
      <header className="bg-black text-white flex p-5 pl-10 pr-10 justify-between items-center">
        <div className="logo">
          <h1 className="text-4xl">MovieDB</h1>
        </div>
        {/* Search Bar */}
        <div className="border-2 rounded p-2 w-full max-w-xs hidden lg:flex items-center">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={handleSearchInput}
          />
          <i className="search-icon">🔍</i>
        </div>
        {/* Menu Button */}
        <button onClick={openMenu} className="block md:hidden" id="menuButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {/* Nav Links */}
        <ul className="hidden md:flex gap-5 text-lg">
          <li className="cursor-pointer hover:text-gray-400">Movies</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
          <li className="cursor-pointer hover:text-gray-400">About Me</li>
        </ul>
      </header>

      {/* Fullscreen Menu with proper animations */}
      {showInDOM && (
        <div className={menuClasses}>
          <button
            onClick={closeMenu}
            className="absolute top-5 right-10 text-3xl"
          >
            ✕
          </button>
          <ul className="flex flex-col gap-8 text-2xl">
            <li className="hover:text-gray-400 cursor-pointer">Movies</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            <li className="hover:text-gray-400 cursor-pointer">About Me</li>
          </ul>
        </div>
      )}

      {/* Hero Movie Carousel */}
      <section className="movie-hero">
        <MovieCarousel movies={PopularMovie} />
      </section>
      
      {/* Movie Sections */}
      <div className="movie-sections px-10 py-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Movies</h2>
        {/* Add your upcoming movies grid/slider here */}
        
        <h2 className="text-2xl font-bold mt-10 mb-4">Top Rated</h2>
        {/* Add your top rated movies grid/slider here */}
      </div>
    </>
  );
}