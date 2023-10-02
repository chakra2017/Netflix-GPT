import React, { useRef } from "react";
import { lang } from "../utils/languageContants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
const GptSearchBar = () => {
  const CurrLang = useSelector((store) => store.config?.lang);
  const searchText = useRef("");
  const dispatch = useDispatch();
  const searchTMDBMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gpt_Query =
      "Act as Movie Recomendation system and suggest some movies for my query :" +
      searchText.current.value +
      ". only give me names fo 5 movies, comma seperated like the example results given ahead  Example Results: Gadar,Sholay,Don,Golmaal,koi mil gaya";
    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gpt_Query }],
      model: "gpt-3.5-turbo",
    });

    console.log(GptResults);
    const GptMovies = GptResults.choices?.[0]?.message?.content.split(",");
    console.log(GptMovies);
    const promiseArray = GptMovies.map((movie) => searchTMDBMovies(movie));

    const TMDBresults = await Promise.all(promiseArray);

    console.log(TMDBresults);
    dispatch(
      addGptMovieResults({ movieNames: GptMovies, movieResults: TMDBresults })
    );
  };
  return (
    <div className="pt-[55%] md:pt-[10%] flex justify-center">
      <form
        className="  w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[CurrLang].gptSearchPlaceHolder}
        ></input>
        <button
          className="py-2 md:px-4 px-2 m-4 col-span-3 bg-red-700 text-white  rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[CurrLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
