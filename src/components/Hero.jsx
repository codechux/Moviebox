import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../requests";
import Imdb from "../assets/imdb.svg";
import Orange from "../assets/orange.svg";
import Play from "../assets/Play.svg";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.getPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  let backDrop = "";
  if (movie?.poster_path) {
    backDrop = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  }
  return (
    <div className="w-full h-[700px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[700px] absolute bg-gradient-to-r from-black to-transparent"></div>
        <img className="w-full h-full" src={`${backDrop}`} alt={movie?.title} />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-5xl md:text-5xl font-bold w-[404px]">
            {movie?.title}
          </h1>

          <div className="flex justify-between items-center my-4 w-[200px]">
            <div className="flex w-10 h-10 items-center">
              <img src={Imdb} alt="" className="w-full h-full" />
              <p className="ml-2">78.9/100</p>
            </div>
            <div className="flex w-6 h-6 items-center">
              <img src={Orange} alt="" className="w-full h-full" />
              <p className="ml-2">90%</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Released on: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {movie?.overview}
          </p>
          <button
            className="flex items-center mt-4 bg-rose-700 py-2 px-4 rounded-lg
          "
          >
            <img src={Play} alt="" />
            <p className="ml-2">WATCH TRAILER</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
