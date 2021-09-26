import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Cover from "./Cover";
import "../styles/MovieDetails.css";

const MovieDetails = (props) => {
  const movie = props.data[0];

  // const getMovie = () => {
  //   const endpoint = `/movies/${props.match.params.id}`;
  //   API.get(endpoint).then((apiResponse) => {
  //     setCompanyInfo(apiResponse.data);
  //   });
  // };

  const starRatings = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i += 1) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon icon={fasStar} key={i} />);
      } else {
        stars.push(<FontAwesomeIcon icon={farStar} key={i} />);
      }
    }
    return stars;
  };

  return (
    <>
      {movie ? (
        <div className="movie flex-row fadeIn">
          <div className="text-content flex-col">
            <div className="ratings flex-row">
              <span className="stars">
                {starRatings(Math.round(movie.vote_average / 2))}{" "}
                <i>{(movie.vote_average / 2).toFixed(1)}</i>{" "}
              </span>
              <span>
                <i>{Math.round(movie.popularity)}% popularity</i>{" "}
              </span>
            </div>
            <h1>{movie.title}</h1>
            <a
              href={`https://www.netflix.com/search?q=${movie.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on NETFLIX
            </a>
            <p>
              <i>* This movie may or may not be available on Netflix</i>
            </p>
            <div className="overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div className="img-wrapper">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        </div>
      ) : (
        <Cover />
      )}
    </>
  );
};

export default MovieDetails;
