import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieList.css";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.data.map((movie) => (
        <Link
          to={`/movies/${movie.id}`}
          onClick={props.handleClick}
          key={movie.id}
        >
          <div
            className="item-wrapper flex-row"
            data-value={movie.id}
          >
            <img
              className="thumbnail"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              data-value={movie.id}
            />
            <p data-value={movie.id}>{movie.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
