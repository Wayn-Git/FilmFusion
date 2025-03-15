import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // API Configuration
  const apiKey = "95a6b55b1e3846e956fd68b1ba23bbe7";
  
  useEffect(() => {
    async function fetchMovieDetails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits,videos,similar`
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch movie details. Status: ${response.status}`);
        }
        
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchMovieDetails();
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Movie</h2>
          <p className="mb-4">{error}</p>
          <Link to="/" className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors duration-200">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  if (!movie) return null;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Backdrop */}
      <div 
        className="relative w-full h-96 lg:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-end">
          <div className="pb-10 flex flex-col md:flex-row items-start gap-8 w-full">
            {/* Poster */}
            <div className="w-48 sm:w-64 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border-2 border-white/10 transform -translate-y-16">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Movie Info */}
            <div className="text-white flex-1 ">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{movie.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full">{movie.release_date?.split('-')[0]}</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 mr-1">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  {movie.vote_average?.toFixed(1)}
                </span>
                <span>{movie.runtime} min</span>
              </div>
              
              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres?.map(genre => (
                  <span key={genre.id} className="bg-white/10 px-3 py-1 rounded-full text-xs">
                    {genre.name}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 max-w-2xl">{movie.overview}</p>
              
              <Link to="/" className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cast Section */}
        <h2 className="text-2xl font-bold text-white mb-6">Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {movie.credits?.cast?.slice(0, 6).map(person => (
            <div key={person.id} className="bg-gray-800 rounded-lg overflow-hidden">
              {person.profile_path ? (
                <img 
                  src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} 
                  alt={person.name}
                  className="w-full h-48 object-cover" 
                />
              ) : (
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-white font-medium">{person.name}</h3>
                <p className="text-gray-400 text-sm">{person.character}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Similar Movies */}
        {movie.similar?.results?.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">Similar Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {movie.similar.results.slice(0, 6).map(movie => (
                <Link to={`/movie/${movie.id}`} key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                  {movie.poster_path ? (
                    <img 
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                      alt={movie.title}
                      className="w-full h-64 object-cover" 
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-white font-medium line-clamp-1">{movie.title}</h3>
                    <div className="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500 mr-1">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-400 text-sm">{movie.vote_average?.toFixed(1)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}