import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainFiles/MainMoviePage.jsx/MainPage.jsx";
import MoviePage from "./MainFiles/MoviePage/MoviePage.jsx";
import MovieDetail from "./MainFiles/MoviePage/MovieDetail.jsx";
import TVShowsPage from "./MainFiles/TVShowsPage/TVShowsPage.jsx";
import TVShowDetail from "./MainFiles/TVShowsPage/TVShowDetail.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv-shows" element={<TVShowsPage />} />
        <Route path="/tv-show/:id" element={<TVShowDetail />} />
        <Route path="/wishlist" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
