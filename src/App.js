import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b0f40852`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <BrowserRouter>
      <div class="container">
        <div className="container my-4 py-4">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/:id" element={<Movie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;