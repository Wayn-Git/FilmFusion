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
    useKeyboardArrows: true,
    showIndicators: false, // Hide default indicators on mobile
    centerMode: false // Prevent edge issues on mobile
  };

  // If no movies passed, show placeholder content
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-8 bg-indigo-950/50 rounded-lg">
        <div className="animate-pulse flex justify-center">
          <div className="h-10 w-64 bg-indigo-700/30 rounded"></div>
        </div>
      </div>
    );
  }

  // Function to handle trailer click
  const openTrailer = (event, videoKey) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(`https://www.youtube.com/watch?v=${videoKey}`, '_blank');
  };

  return (
    <div className="movie-carousel-wrapper rounded-lg overflow-hidden">
      <Carousel {...carouselSettings}>
        {movies.slice(0, 6).map((movie) => {
          // Find a trailer if available
          const trailer = movie.videos?.find(
            video => video.type === "Trailer" && video.site === "YouTube"
          );
          
          return (
            <div key={movie.id} className="relative h-96 sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px]">
              {/* Movie backdrop image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              <img 
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              
              {/* Mobile-optimized info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 text-white z-20 text-left">
                <div className="container mx-auto">
                  <div className="flex flex-col gap-2 md:gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{movie.title}</h2>
                    
                    <div className="flex items-center gap-3 mt-1">
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 mr-1">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        {movie.vote_average?.toFixed(1)}
                      </span>
                      <span className="bg-indigo-900/70 px-2 py-1 rounded-full text-xs sm:text-sm">
                        {new Date(movie.release_date).getFullYear()}
                      </span>
                    </div>
                    
                    <p className="line-clamp-2 sm:line-clamp-3 md:line-clamp-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mt-1 sm:mt-2 md:mb-4 max-w-3xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {movie.overview}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-3 sm:mt-5">
                      <Link 
                        to={`/movie/${movie.id}`} 
                        className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/30 text-white"
                      >
                        View Details
                      </Link>
                      
                      {trailer && (
                        <button 
                          onClick={(e) => openTrailer(e, trailer.key)}
                          className="inline-flex items-center bg-black/50 hover:bg-black/70 border border-white/20 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-200 text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span className="hidden sm:inline">Watch</span> Trailer
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Custom mobile controls */}
              <div className="absolute inset-0 flex">
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-r-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-l-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}