import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchResults({ results, onClose, query }) {
  if (!results || results.length === 0) {
    return (
      <div className="w-full bg-gray-900/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-purple-500/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">
            No results found for "<span className="text-purple-400">{query}</span>"
          </h2>
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
        <div className="flex flex-col items-center justify-center py-8">
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
          <p className="text-white/60 text-lg">No matches were found</p>
          <p className="text-white/40 text-sm mt-2">Try different keywords or check for typos</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-900/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-purple-500/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">
          Results for "<span className="text-purple-400">{query}</span>"
        </h2>
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto custom-scrollbar pr-2">
        {results.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            onClick={onClose}
            className="group flex items-start space-x-4 p-4 bg-white/5 hover:bg-indigo-900/30 rounded-xl transition-all duration-200 border border-white/5 hover:border-purple-500/20"
          >
            <div className="relative flex-shrink-0">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                  alt={movie.title}
                  className="w-20 h-30 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-200"
                />
              ) : (
                <div className="w-20 h-30 bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-lg truncate group-hover:text-purple-300 transition-colors duration-200">
                {movie.title}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown'}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center text-yellow-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {movie.vote_average?.toFixed(1) || 'N/A'}
                </span>
                <span className="text-white/60 hover:text-purple-300 text-sm font-medium transition-colors duration-200 ml-auto">
                  View →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 