import React from 'react';

export default function SearchResults({ results, onClose }) {
  if (!results || results.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-start justify-center pt-20">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 w-full max-w-4xl mx-4 border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Search Results</h2>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors duration-200 hover:scale-110"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 h-16 text-white/40 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-white/60 text-lg">No results found</p>
            <p className="text-white/40 text-sm mt-2">Try different keywords or check for typos</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-start justify-center pt-20">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 w-full max-w-4xl mx-4 border border-white/10 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Search Results</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors duration-200 hover:scale-110"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="group flex items-start space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 border border-white/5 hover:border-white/10"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                  alt={movie.title}
                  className="w-24 h-36 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-lg truncate group-hover:text-white/90 transition-colors duration-200">
                  {movie.title}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {new Date(movie.release_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-white/40 text-sm mt-2 line-clamp-2">
                  {movie.overview}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="flex items-center text-yellow-400 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    {movie.vote_average?.toFixed(1) || 'N/A'}
                  </span>
                  <button className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 