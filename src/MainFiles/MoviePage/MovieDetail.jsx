import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Header component
const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black to-black/90 text-white sticky top-0 z-40 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-5">
          {/* Logo */}
          <div className="logo mb-4 sm:mb-0">
            <Link to="/">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                MovieDB
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex gap-8 text-lg justify-center">
            <li className="px-3">
              <Link to="/" className="text-gray-300 hover:text-white text-base flex cursor-pointer items-center transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home
              </Link>
            </li>
            <li className="px-3">
              <Link to="/movies" className="text-gray-300 hover:text-white text-base flex cursor-pointer items-center transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 0h-1.5m-1.5 0h-7.5m-1.5 0h-1.5m7.5 0v-1.5c0-.621.504-1.125 1.125-1.125M7.5 15h1.5m-1.5 0v-1.5c0-.621.504-1.125 1.125-1.125M7.5 15v1.5c0 .621.504 1.125 1.125 1.125M7.5 12h7.5m-7.5 3h7.5m-7.5 0v3m0-3h7.5m-7.5 0v-3m-6 3h1.5m-1.5 0v-3m0 0h1.5m-1.5 0v-3m0 0h1.5" />
                </svg>
                Movies
              </Link>
            </li>
            <li className="px-3">
              <Link to="/tv-shows" className="text-gray-300 hover:text-white text-base flex cursor-pointer items-center transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                TV Shows
              </Link>
            </li>
            <li className="px-3">
              <Link to="/wishlist" className="text-gray-300 hover:text-white text-base flex cursor-pointer items-center transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const apiKey = "95a6b55b1e3846e956fd68b1ba23bbe7";

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        
        // Fetch movie details
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,images`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);
        
        // Fetch cast
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        );
        const creditsData = await creditsResponse.json();
        setCast(creditsData.cast.slice(0, 10)); // Get top 10 cast members
        
        // Fetch similar movies
        const similarResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&page=1`
        );
        const similarData = await similarResponse.json();
        setSimilarMovies(similarData.results.slice(0, 6)); // Get top 6 similar movies
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchMovieDetails();
    // Scroll to top when movie ID changes
    window.scrollTo(0, 0);
  }, [id]);

  // Format runtime to hours and minutes
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  
  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-white/60"></div>
        </div>
      ) : movie ? (
        <>
          {/* Hero Section with Backdrop */}
          <div className="relative">
            {movie.backdrop_path ? (
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Poster */}
                <div className="flex-shrink-0">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-64 h-auto rounded-lg shadow-2xl"
                    />
                  ) : (
                    <div className="w-64 h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Movie Info */}
                <div className="flex-1 text-white">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{movie.title}</h1>
                  
                  {movie.tagline && (
                    <p className="text-xl text-gray-300 mt-2 italic">"{movie.tagline}"</p>
                  )}
                  
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    {movie.release_date && (
                      <span className="text-gray-300">{movie.release_date.split('-')[0]}</span>
                    )}
                    {movie.runtime > 0 && (
                      <span className="text-gray-300">{formatRuntime(movie.runtime)}</span>
                    )}
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 mr-1">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white font-semibold">{movie.vote_average?.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  {/* Genres */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {movie.genres?.map(genre => (
                      <span key={genre.id} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                  
                  {/* Overview */}
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Overview</h2>
                    <p className="text-gray-300">{movie.overview || "No overview available."}</p>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Release Date</h3>
                      <p className="text-gray-300">{formatDate(movie.release_date)}</p>
                    </div>
                    {movie.budget > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Budget</h3>
                        <p className="text-gray-300">${movie.budget.toLocaleString()}</p>
                      </div>
                    )}
                    {movie.revenue > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Revenue</h3>
                        <p className="text-gray-300">${movie.revenue.toLocaleString()}</p>
                      </div>
                    )}
                    {movie.production_companies?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Production</h3>
                        <p className="text-gray-300">
                          {movie.production_companies.map(company => company.name).join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cast Section */}
          {cast.length > 0 && (
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h2 className="text-2xl font-bold text-white mb-6">Top Cast</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cast.map(person => (
                  <div key={person.id} className="bg-gray-800 rounded-lg overflow-hidden">
                    {person.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                        alt={person.name}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                    )}
                    <div className="p-3">
                      <h3 className="text-white font-medium truncate">{person.name}</h3>
                      <p className="text-gray-400 text-sm truncate">{person.character}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Similar Movies Section */}
          {similarMovies.length > 0 && (
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h2 className="text-2xl font-bold text-white mb-6">Similar Movies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {similarMovies.map(movie => (
                  <Link to={`/movie/${movie.id}`} key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </div>
                    )}
                    <div className="p-3">
                      <h3 className="text-white font-medium truncate">{movie.title}</h3>
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
            </section>
          )}
        </>
      ) : (
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl text-white">Movie not found</h2>
          <Link to="/movies" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Back to Movies
          </Link>
        </div>
      )}
    </div>
  );
} 