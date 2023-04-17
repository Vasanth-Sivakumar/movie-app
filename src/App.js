import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Header from "./components/Header";

function App() {
  // State for movies data and search value
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Fetch movie data from OMDB API based on search value
  useEffect(() => {
    const getMovieRequest = async () => {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=b0f40852`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };
    getMovieRequest(searchValue);
  }, [searchValue]);
  

  return (
      <div className="container">
        <div className="container my-4 py-4">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} 
          data-testid="header"/>
        </div>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/:id" element={<Movie />} />
        </Routes>
      </div>
  );
}

export default App;
