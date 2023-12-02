import React from "react";
import GPTSearcBar from "./GPTSearcBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { IMG_BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="">
      <div className="fixed">
        <img className="w-screen h-screen" src={IMG_BG_URL} alt="bg-logo" />
      </div>
      <GPTSearcBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
