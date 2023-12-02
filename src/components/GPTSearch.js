import React from "react";
import GPTSearcBar from "./GPTSearcBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { IMG_BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed">
        <img
          className="w-screen h-screen object-cover"
          src={IMG_BG_URL}
          alt="bg-logo"
        />
      </div>
      <div>
        <GPTSearcBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
