import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" className="" />
    </div>
  );
};

export default MovieCard;
