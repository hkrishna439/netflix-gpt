import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovies();
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
