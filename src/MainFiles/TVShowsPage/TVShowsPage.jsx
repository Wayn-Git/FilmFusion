import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header";

// TVShowCard Component
const TVShowCard = ({ show }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-b from-purple-900/30 to-indigo-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
    >
      <Link to={`/tv-show/${show.id}`}>
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={show.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          
          <div className="absolute top-3 right-3">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-md flex items-center shadow-lg">
              <svg className="w-3 h-3 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {show.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-white font-semibold truncate">{show.name}</h3>
          <p className="text-purple-200/70 text-sm mt-1">
            {show.first_air_date ? new Date(show.first_air_date).getFullYear() : "N/A"}
          </p>
          
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-block py-1.5 px-3 bg-white/10 hover:bg-white/20 rounded-lg text-xs text-white transition-colors duration-200">
              View details
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {[...Array(12)].map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="bg-gradient-to-b from-purple-900/30 to-indigo-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20"
      >
        <div className="animate-pulse">
          <div className="h-72 bg-purple-700/20 rounded-t-xl"></div>
          <div className="p-5">
            <div className="h-5 bg-purple-700/20 rounded-md w-3/4 mb-3"></div>
            <div className="h-4 bg-purple-700/20 rounded-md w-1/2"></div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// TVShowList Component
const TVShowList = ({ shows }) => {
  return (
    <AnimatePresence mode="popLayout">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {shows.map((show) => (
          <TVShowCard key={show.id} show={show} />
        ))}
      </div>
    </AnimatePresence>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Calculate page range to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;
    
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-12">
      <nav className="flex flex-wrap items-center justify-center space-x-2" aria-label="Pagination">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentPage === 1
              ? "text-purple-300/40 bg-purple-900/20 cursor-not-allowed"
              : "text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/20"
          }`}
        >
          <span className="sr-only">Previous</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentPage === page
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                : "text-white bg-purple-900/30 hover:bg-purple-800/50"
            }`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentPage === totalPages
              ? "text-purple-300/40 bg-purple-900/20 cursor-not-allowed"
              : "text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/20"
          }`}
        >
          <span className="sr-only">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default function TVShowsPage() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = "95a6b55b1e3846e956fd68b1ba23bbe7";

  useEffect(() => {
    async function fetchTVShows() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${currentPage}`
        );
        const data = await response.json();
        setShows(data.results);
        setTotalPages(Math.min(data.total_pages, 500)); // TMDB API limits to 500 pages
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular TV shows:", error);
        setLoading(false);
      }
    }

    fetchTVShows();
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, apiKey]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent mb-4">
            Popular TV Shows
          </h1>
          <p className="text-purple-200/80 max-w-2xl mx-auto">
            Explore top-rated TV series from around the world. Discover new shows and returning favorites.
          </p>
        </motion.div>

        {loading ? <LoadingSkeleton /> : <TVShowList shows={shows} />}
        
        {!loading && shows.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>
    </motion.div>
  );
}
