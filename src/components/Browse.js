import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useGetNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MainContainer
         - VideoBackground
         - VideoTitle
        SecondaryContainer
         - MovieList * n
         - Cards * n
       
       */}
    </div>
  );
};

export default Browse;
