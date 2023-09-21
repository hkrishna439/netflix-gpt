import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-2">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
