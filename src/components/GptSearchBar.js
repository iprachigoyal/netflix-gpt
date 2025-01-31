import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import{addGptMovieResult} from "../utils/gptSlice";


const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang)
    const searchText=useRef(null);
    const dispatch= useDispatch();

    const searchMovieTMDB=async(movieName)=>{

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;

    }
    const handleGptSearchClick=async()=>{
        // make an api call to gpi api and get movie results
        const gptQuery="Act as a Movie Recommendtaion system and suggest some movies for the query" + searchText.current.value+". only give me names of 5 movies, separated by comma like the example result given ahead without numbering a line . Example result : koi mil gya, sholay, don, gadar, raaz";
        const gptResult= await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if(!gptResult.choices){
            // error handling
        }
        
        const gptMovie=gptResult.choices?.[0]?.message.content.split(",");
        const promiseArray= gptMovie.map(movie=>searchMovieTMDB(movie)) ;
        // array of promises [p1, p2, p3, p4, p5]
        const tmdbResults=await Promise.all(promiseArray);
        dispatch(addGptMovieResult({movieNames:gptMovie, movieResults:tmdbResults}));




        // for each movie search for tmdb api

    }
  return (
    <div className="pt-[20%] md:pt-[10%] flex justify-center">
      <form className=" w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-md col-span-3" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
