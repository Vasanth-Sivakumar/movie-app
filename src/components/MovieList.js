import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function MovieList(props) {
  return (
    <div className="row justify-content-center">
      {props.movies.map((movie, index) => (
        <div className="col-md-3 mb-4" key={movie.imdbID}>
          <div className="custom-card text-center" >
            <Link type="button" to={`/${movie.imdbID}`}>
              <img
                src={movie.Poster}
                alt={`We apologize, but the movie information is currently unavailable. Please check back later for more details. Movie Name: ${movie.Title}`}
                className="img-fluid"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
