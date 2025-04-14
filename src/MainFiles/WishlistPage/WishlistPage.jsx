import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[...Array(8)].map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-gradient-to-b from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5"
      >
        <div className="animate-pulse">
          <div className="h-64 bg-indigo-700/20"></div>
          <div className="p-4">
            <div className="h-4 bg-indigo-700/20 rounded-full w-3/4 mb-2"></div>
            <div className="h-4 bg-indigo-700/20 rounded-full w-1/2"></div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// Empty State Component
const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-16"
  >
    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-5 shadow-xl shadow-indigo-500/20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </div>
    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white mb-4">Your Wishlist is Empty</h3>
    <p className="text-indigo-200/80 mb-8 max-w-sm mx-auto">Start adding movies and TV shows to your wishlist to keep track of what you want to watch</p>
    <Link
      to="/movies"
      className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      Browse Movies
    </Link>
  </motion.div>
);

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Get wishlist from localStorage
      const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlist(storedWishlist);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-950 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white mb-4">
            My Wishlist
          </h1>
          <p className="text-indigo-200/80 max-w-xl mx-auto">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved in your personal collection
          </p>
        </motion.div>

        {loading ? (
          <LoadingSkeleton />
        ) : wishlist.length === 0 ? (
          <EmptyState />
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlist.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.05 }
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-gradient-to-b from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300"
                >
                  <Link to={`/${item.type === 'movie' ? 'movie' : 'tv-show'}/${item.id}`}>
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title || item.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium truncate">{item.title || item.name}</h3>
                      <div className="flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400 mr-1">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="text-indigo-200/70 text-sm">{item.vote_average?.toFixed(1)}</span>
                        
                        <span className="ml-auto text-indigo-200/50 text-xs">{item.type === 'movie' ? 'Movie' : 'TV'}</span>
                      </div>
                    </div>
                  </Link>
                  <motion.button
                    onClick={() => removeFromWishlist(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500/90 hover:shadow-red-500/30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}
      </main>
    </motion.div>
  );
}
