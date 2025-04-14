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

export default function TVShowDetail() {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const [similarShows, setSimilarShows] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const apiKey = "95a6b55b1e3846e956fd68b1ba23bbe7";

  useEffect(() => {
    async function fetchTVShowDetails() {
      try {
        setLoading(true);
        
        // Fetch TV show details
        const showResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=videos,images`
        );
        const showData = await showResponse.json();
        setTVShow(showData);
        setSeasons(showData.seasons || []);
        
        // Fetch cast
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`
        );
        const creditsData = await creditsResponse.json();
        setCast(creditsData.cast?.slice(0, 10) || []); // Get top 10 cast members
        
        // Fetch similar TV shows
        const similarResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apiKey}&page=1`
        );
        const similarData = await similarResponse.json();
        setSimilarShows(similarData.results?.slice(0, 6) || []); // Get top 6 similar shows
      } catch (error) {
        console.error("Error fetching TV show details:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTVShowDetails();
    // Scroll to top when TV show ID changes
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Check if TV show is in wishlist
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(storedWishlist.some(item => item.id === tvShow?.id));
  }, [tvShow]);

  const toggleWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (isInWishlist) {
      const updatedWishlist = storedWishlist.filter(item => item.id !== tvShow.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      const newItem = {
        id: tvShow.id,
        title: tvShow.name,
        poster_path: tvShow.poster_path,
        vote_average: tvShow.vote_average,
        type: 'tv'
      };
      localStorage.setItem('wishlist', JSON.stringify([...storedWishlist, newItem]));
    }
    
    setIsInWishlist(!isInWishlist);
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
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-gray-900">
      <Header />
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-white/60"></div>
        </div>
      ) : tvShow ? (
        <>
          {/* Hero Section with Backdrop */}
          <div className="relative">
            {tvShow.backdrop_path ? (
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                <img
                  src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
                  alt={tvShow.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Poster */}
                <div className="flex-shrink-0">
                  {tvShow.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                      alt={tvShow.name}
                      className="w-64 h-auto rounded-lg shadow-2xl"
                    />
                  ) : (
                    <div className="w-64 h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* TV Show Info */}
                <div className="flex-1 text-white">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{tvShow.name}</h1>
                  
                  {tvShow.tagline && (
                    <p className="text-xl text-gray-300 mt-2 italic">"{tvShow.tagline}"</p>
                  )}
                  
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    {tvShow.first_air_date && (
                      <span className="text-gray-300">{tvShow.first_air_date.split('-')[0]}</span>
                    )}
                    {tvShow.number_of_seasons && (
                      <span className="text-gray-300">{tvShow.number_of_seasons} {tvShow.number_of_seasons === 1 ? 'Season' : 'Seasons'}</span>
                    )}
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 mr-1">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white font-semibold">{tvShow.vote_average?.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  {/* Genres */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tvShow.genres?.map(genre => (
                      <span key={genre.id} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                  
                  {/* Overview */}
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Overview</h2>
                    <p className="text-gray-300">{tvShow.overview || "No overview available."}</p>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">First Air Date</h3>
                      <p className="text-gray-300">{formatDate(tvShow.first_air_date)}</p>
                    </div>
                    {tvShow.last_air_date && (
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Last Air Date</h3>
                        <p className="text-gray-300">{formatDate(tvShow.last_air_date)}</p>
                      </div>
                    )}
                    {tvShow.status && (
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Status</h3>
                        <p className="text-gray-300">{tvShow.status}</p>
                      </div>
                    )}
                    {tvShow.networks?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Networks</h3>
                        <p className="text-gray-300">
                          {tvShow.networks.map(network => network.name).join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Add this button in the TV show info section */}
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
          
          {/* Seasons Section */}
          {seasons.length > 0 && (
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h2 className="text-2xl font-bold text-white mb-6">Seasons</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {seasons.filter(season => season.season_number > 0).map(season => (
                  <div key={season.id} className="bg-gray-800 rounded-lg overflow-hidden">
                    {season.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w342${season.poster_path}`}
                        alt={`${tvShow.name} - ${season.name}`}
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-white font-medium">{season.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {season.episode_count} {season.episode_count === 1 ? 'Episode' : 'Episodes'}
                      </p>
                      {season.air_date && (
                        <p className="text-gray-400 text-sm mt-1">{season.air_date.split('-')[0]}</p>
                      )}
                      {season.overview && (
                        <p className="text-gray-400 text-sm mt-2 line-clamp-3">{season.overview}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
          
          {/* Similar TV Shows Section */}
          {similarShows.length > 0 && (
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h2 className="text-2xl font-bold text-white mb-6">Similar TV Shows</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {similarShows.map(show => (
                  <Link to={`/tv-show/${show.id}`} key={show.id} className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                    {show.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w342${show.poster_path}`}
                        alt={show.name}
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                      </div>
                    )}
                    <div className="p-3">
                      <h3 className="text-white font-medium truncate">{show.name}</h3>
                      <div className="flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500 mr-1">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-400 text-sm">{show.vote_average?.toFixed(1)}</span>
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
          <h2 className="text-2xl text-white">TV Show not found</h2>
          <Link to="/tv-shows" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Back to TV Shows
          </Link>
        </div>
      )}
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 