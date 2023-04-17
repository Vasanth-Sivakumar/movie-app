import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function Movie() {
  // Get movie ID from URL parameters
  const { id } = useParams();

  // State for movie data
  const [movie, setMovie] = useState([]);

  // Fetch movie data from OMDB API based on movie ID
  useEffect(() => {
    const getMovieRequest = async () => {
      const url = `https://www.omdbapi.com/?i=${id}&apikey=b0f40852`;
      const response = await fetch(url);
      setMovie(await response.json());
    };
    getMovieRequest(id);
  }, [id]);

  const MovieDisplay = () => {
    return (
      <>
        <div className="col-md-6 p-1">
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
        </div>
        <div className="col-md-6 p-1">
          <h4 className="text-uppercase">{movie.Genre}</h4>
          <h1 className="display-5">{movie.Title}</h1>
          <p className="lead">
            Rating {movie.imdbRating} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-9 my-4">Languages: {movie.Language}</h3>
          <p className="lead">{movie.Plot}</p>
          <p className="lead">Director: {movie.Director}</p>{" "}
          <p className="lead">Writer: {movie.Writer}</p>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <MovieDisplay />
        </div>
      </div>
    </div>
  );
}

export default Movie;
