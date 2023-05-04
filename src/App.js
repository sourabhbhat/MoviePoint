import React, { useState, useEffect } from "react";
//84e4ae60
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "https://www.omdbapi.com?apikey=84e4ae60";
const movie1 = {
  Title: "Lauf um Dein Leben - Vom Junkie zum Ironman",
  Year: "2008",
  imdbID: "tt0954542",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      SearchMovies(searchTerm);
    }
  };

  useEffect(() => {
    SearchMovies("Ironman");
  }, []);

  return (
    <div className="app">
      <h1>MovieNation</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <img
          img
          src={SearchIcon}
          alt="search icon"
          onClick={() => SearchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div classname="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
