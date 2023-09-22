import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearcBar = () => {
  const language = useSelector((store) => store.config.lang);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pt-[10%] flex justify-center relative">
      <form
        className=" bg-black w-1/2 grid grid-cols-12"
        onSubmit={submitHandler}
      >
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearcBar;
