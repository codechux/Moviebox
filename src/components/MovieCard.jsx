import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "axios";
import Orange from "../assets/orange.svg";
import Imdb from "../assets/imdb.svg";
import Favorite from "../assets/Icons/Heart.svg";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const [movieList, setMovielist] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(requests.getMovies)
      .then((res) => {
        setMovielist(res.data.results);
      })
      .catch((error) => {
        console.error("Api is doing something fishy:", error);
        setError(
          "Error: Sometimes MTN can play tricks on you. Please try again later."
        );
      });
  }, []);

  const favoriteHandler = (title) => {
    if (favorite.includes(title)) {
      setFavorite((prev) => prev.filter((item) => item !== title));
    } else {
      setFavorite((prev) => [...prev, title]);
    }
  };

  return (
    <>
      {error && <div className="bg-red-500 text-white font-bold">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movieList &&
          movieList.slice(0, 10).map((movie) => (
            <ul
              data-testid="movie-card"
              key={movie.id}
              className="rounded-lg p-2 shadow-xl cursor-pointer relative"
            >
              <div className="rounded-full w-8 h-8 absolute right-5 mt-2 bg-white overflow-hidden">
                <img
                  onClick={() => favoriteHandler(movie.title)}
                  src={Favorite}
                  alt=""
                  className={`h-full w-full object-contain p-2 bg-${
                    favorite.includes(movie.title) ? "rose-700" : "white"
                  }`}
                />
              </div>

              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      data-testid="movie-poster"
                      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-start">
                  <h1 data-testid="movie-title">{movie.title}</h1>
                  <p>
                    Release Date:{" "}
                    <span data-testid="movie-release-date">
                      {movie.release_date}
                    </span>
                  </p>
                </div>
              </Link>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={Imdb} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <p className="ml-2 text-xs sm:text-base">78.9/100</p>
                </div>
                <div className="flex items-center">
                  <img src={Orange} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <p className="ml-2 text-xs sm:text-base">90%</p>
                </div>
              </div>
            </ul>
          ))}
      </div>
    </>
  );
};

export default MovieCard;
