import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies &&
    movies.popularMovies && (
      <div className=" absolute px-6 md:px-12 bg-black w-full">
        <div className="mt-0 md:-mt-64">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />

          {/* 
    
        MovieList - Popular
          MovieCard * n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror

    */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
