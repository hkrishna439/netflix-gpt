import React, { Fragment } from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useGetNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="overflow-hidden">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <Fragment>
          <MainContainer />
          <SecondaryContainer />
        </Fragment>
      )}

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
