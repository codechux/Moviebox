import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Aside from "../components/Aside";
import Play from "../assets/Player.svg";
import Star from "../assets/Star.svg";
import TwoTickets from "../assets/two_Tickets.svg";
import Ham from "../assets/Ham.svg";
import GridImg from "../assets/gridImg.png";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ffa229b9bd22ecd8a5cb292da9cd612b`
        )
        .then((res) => {
          setMovieDetails(res.data);
        });
    } catch (error) {
      console.log("Api is doing something fishy:", error);
      setError(
        "Error: Sometimes MTN can play tricks on you. Please try again later."
      );
    }
  }, [id]);

  const { title, release_date, runtime, overview, backdrop_path } =
    movieDetails;

  let backDrop = "";
  if (backdrop_path) {
    backDrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  }

  const UTCdate = new Date(`${release_date}`).toUTCString();

  console.log(UTCdate);

  return (
    <>
      {error && <div className="bg-red-500 text-white font-bold">{error}</div>}
      <div className="flex flex-col sm:flex-row">
        <Aside />
        <div className="m-4">
          <Link to={"/"}>
            <div className="rounded-xl overflow-hidden max-w-[1080px] mx-auto relative">
              <img src={backDrop} alt={title} className="w-full h-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div>
                  <img src={Play} alt="iconplay" />
                </div>
                <p className="text-white font-bold">Watch Trailer</p>
              </div>
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <div className="flex items-center">
              <h1
                data-testid="movie-title"
                className="font-bold text-lg sm:text-xl my-2 mr-4"
              >
                {title}
              </h1>
              <div className="flex items-center">
                <li className="font-bold text-sm my-2 list-none">
                  <span data-testid="movie-release-date">{UTCdate}</span>
                </li>
                <p>
                  <li
                    data-testid="movie-runtime"
                    className="font-bold text-sm mx-2 my-2 list-none"
                  >
                    {runtime} <span>mins</span>
                  </li>
                </p>
                <div className="flex text-rose-700 gap-2">
                  <button className="border border-rose-300 px-3 rounded-3xl">
                    Action
                  </button>
                  <button className="border border-rose-300 px-3 rounded-3xl">
                    Drama
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <img src={Star} alt="staricon" className="mr-2" />
              <p className="text-gray-400">8.5 | 350k</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-4">
            <div className="w-full sm:w-1/2">
              <p data-testid="movie-overview">{overview}</p>
              <p className="bg-rose-700 w-full sm:w-[200px] mt-5 rounded-xl p-2 text-white text-center">
                Top rated movie #65
              </p>
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <button className="bg-rose-700 w-full mb-2 sm:mr-2 rounded-xl p-2 flex justify-center text-white">
                <img src={TwoTickets} alt="two tickets" />
                <p className="ml-1">See Showtimes</p>
              </button>
              <button className="bg-rose-300 border border-rose-700 w-full rounded-xl flex justify-center p-2">
                <img src={Ham} alt="more options" />
                <p className="ml-1">More Watch Options</p>
              </button>
            </div>
          </div>
          <div className="mt-4 sm:hidden">
            <img src={GridImg} alt="gridposters" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
