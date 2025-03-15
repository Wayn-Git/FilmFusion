// File: DemoCarousel.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MovieCarousel({ movies = [] }) {
  // Default settings for the carousel
  const carouselSettings = {
    showArrows: true,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 6000, // 6 seconds per slide for slow movement
    transitionTime: 1000, // 1 second transition between slides
    swipeable: true,
    emulateTouch: true,
    useKeyboardArrows: true
  };

  // If no movies passed, show placeholder content
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-100">
        <p>Loading movie information...</p>
      </div>
    );
  }

  return (
    <div className="movie-carousel-wrapper">
      <Carousel {...carouselSettings}>
        {movies.slice(0, 6).map((movie) => (
          <div key={movie.id} className="relative h-110 md:h-[800px] lg:h-[600px]">
            {/* Movie backdrop image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <img 
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            
            {/* Movie information overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 text-left">
              <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
                  {movie.vote_average.toFixed(1)}
                </span>
                <span>{new Date(movie.release_date).getFullYear()}</span>
              </div>
              <p className="line-clamp-3 text-lg max-w-2xl">
                {movie.overview}
              </p>
              <Link 
                to={`/movie/${movie.id}`} 
                className="mt-4 inline-block bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}