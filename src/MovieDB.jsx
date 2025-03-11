import { useState, useEffect } from "react";

export default function MovieDB() {
  const [movieDB, setMovieDB] = useState([]);
  const [page, setPage] = useState(1);

  const API = `https://api.themoviedb.org/3/search/movie?api_key=95a6b55b1e3846e956fd68b1ba23bbe7&language=en-US&query=ano&page=${page}`;

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        if (data.results.length === 0) {
          setHasMore(false); // No more pages to load
        } else {
          setMovieDB((prevMovies) => [...prevMovies, ...data.results]); // Append new data
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [page]); // Trigger when `page` changes

  // Handle "Load More" button click
  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return (
    <div className="bg-gray-800 min-h-screen text-white ">
    {/* Header */}
    <header className="bg-gray-900 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-blue-500 text-3xl font-bold">MovieDB</h1>

      <nav>
        <ul className="flex gap-6 text-lg font-medium">
          <li className="hover:text-blue-400 transition-colors cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">
            Contact
          </li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">
            Services
          </li>
        </ul>
      </nav>
    </header>

    {/* Section */}
    <section className="p-10">
      <h1 className="text-2xl text-blue-400 mb-6 font-semibold">Movies</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{movieDB.map(movie => (
  <div key={movie.id} className="bg-gray-800 rounded-xl shadow-lg p-5 hover:bg-gray-700 transition-transform transform hover:-translate-y-1" >

<h2 className="text-xl font-semibold text-blue-300">
              {movie.title || 'No Title'} 
              <span className="text-sm text-gray-400 ml-2">({movie.release_date || 'N/A'})</span>
            </h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover mt-2" />
            <p className="text-gray-400 mt-2">
              {movie.overview ? movie.overview.slice(0, 150) + '...' : 'No overview available.'}
            </p>
  </div>
))}
</div>

<div className="mt-8 flex justify-center">
            <button
              onClick={loadMore}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Load More
            </button>
          </div>

    
    </section>
  </div>
  );
}
