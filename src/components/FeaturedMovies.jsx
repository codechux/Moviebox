import React from "react";
import MovieCard from "./MovieCard";

const FeaturedMovies = () => {
  return (
    <div className="my-4 mx-16">
      <div className="flex justify-between my-4">
        <h1>Featured Movies</h1>
        <h4>See More...</h4>
      </div>
      <MovieCard />
    </div>
  );
};

export default FeaturedMovies;
