import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import Cover from "./components/Cover";
import "./styles/App.css";

const App = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=30f97dabd23a55145e8c6e9693269e9f&language=en-US&page=1";
  // const API_URL =
  //   "https://api.themoviedb.org/3/movie/popular?api_key=30f97dabd23a55145e8c6e9693269e9f&language=en-US&page=1";

  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [logoClicked, setLogoClicked] = useState(false);

  // Fetch API
  const fetchData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // search input onChange - show movies that match search input value
  const handleSearch = (e) => {
    const { value } = e.target;

    if (value) {
      setSearchValue(value);
      setFilteredMovies(
        [...filteredMovies].filter((movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredMovies(movies);
    }
  };

  // clears input field when backspace is pressed
  const handleClear = (e) => {
    if (e.keyCode === 8) {
      setSearchValue("");
      setFilteredMovies(movies);
    }
  };

  // link onClick - show details of the movie clicked
  const handleMovieClick = (e) => {
    const attribute = e.target.getAttribute("data-value");
    const clickedTitle = [...movies].filter(
      (movie) => movie.id.toString() === attribute
    );
    setClickedMovie(clickedTitle);
    setLogoClicked(false);
  };

  // shows another component when logo is clicked
  const handleHome = () => {
    setLogoClicked(true);
  };

  return (
    <div className="App flex-col">
      <Header handleHome={handleHome} />
      <div className="main flex-row">
        <div className="left-section flex-col">
          <SearchBar
            handleSearch={handleSearch}
            handleClear={handleClear}
            searchValue={searchValue}
          />
          <MovieList data={filteredMovies} handleClick={handleMovieClick} />
        </div>
        <div className="movie-details">
          <Switch>
            {logoClicked ? (
              <Route path="/">
                <Cover />
              </Route>
            ) : (
              <Route>
                <MovieDetails data={clickedMovie} />
              </Route>
            )}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
