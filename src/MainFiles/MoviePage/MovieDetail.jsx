import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

// YouTube Trailer Component
const TrailerSection = ({ videos }) => {
  const trailer = videos?.find(
    video => video.type === "Trailer" && video.site === "YouTube"
  ) || videos?.find(video => video.site === "YouTube");

  if (!trailer) return null;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Official Trailer</h2>
        <a 
          href={`https://www.youtube.com/watch?v=${trailer.key}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 flex items-center text-sm"
        >
          <span>Watch on YouTube</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
      
      <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-xl shadow-black/40 bg-black">
        <iframe 
          src={`https://www.youtube.com/embed/${trailer.key}?rel=0&showinfo=0&autoplay=0`} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full" 
          title={trailer.name}
        />
      </div>
    </section>
  );
};

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const apiKey = "95a6b55b1e3846e956fd68b1ba23bbe7";

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch movie details with additional headers
        const options = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        };

        console.log(`Fetching movie details for ID: ${id}`);
        
        // Fetch movie details
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,images`,
          options
        );

        if (!movieResponse.ok) {
          throw new Error(`HTTP error! status: ${movieResponse.status}`);
        }
        
        const movieData = await movieResponse.json();
        console.log('Movie data received:', movieData);
        setMovie(movieData);
        
        // Fetch cast
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
          options
        );

        if (!creditsResponse.ok) {
          throw new Error(`HTTP error! status: ${creditsResponse.status}`);
        }

        const creditsData = await creditsResponse.json();
        console.log('Credits data received:', creditsData);
        setCast(creditsData.cast.slice(0, 10));
        
        // Fetch similar movies
        const similarResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&page=1`,
          options
        );

        if (!similarResponse.ok) {
          throw new Error(`HTTP error! status: ${similarResponse.status}`);
        }

        const similarData = await similarResponse.json();
        console.log('Similar movies data received:', similarData);
        setSimilarMovies(similarData.results.slice(0, 6));
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchMovieDetails();
    // Scroll to top when movie ID changes
    window.scrollTo(0, 0);
  }, [id, apiKey]);

  useEffect(() => {
    // Check if movie is in wishlist
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(storedWishlist.some(item => item.id === movie?.id));
  }, [movie]);

  const toggleWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (isInWishlist) {
      const updatedWishlist = storedWishlist.filter(item => item.id !== movie.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      const newItem = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        type: 'movie'
      };
      localStorage.setItem('wishlist', JSON.stringify([...storedWishlist, newItem]));
    }
    
    setIsInWishlist(!isInWishlist);
  };

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
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl text-white mb-4">Error loading movie information</h2>
          <p className="text-red-400 mb-4">{error}</p>
          <Link to="/movies" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg">
            Back to Movies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-gray-900">
      <Header withSearch={true} />
      
      {loading ? (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-white/60 mb-4"></div>
            <p className="text-white">Loading movie information...</p>
            <p className="text-gray-400 text-sm mt-2">Movie ID: {id}</p>
          </div>
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

                  {/* Add this button in the movie info section */}
                  <button
                    onClick={toggleWishlist}
                    className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-200 ${
                      isInWishlist 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : 'bg-black/50 text-white hover:bg-black/70'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill={isInWishlist ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trailer Section - New */}
          {movie.videos && movie.videos.results && movie.videos.results.length > 0 && (
            <TrailerSection videos={movie.videos.results} />
          )}
          
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 