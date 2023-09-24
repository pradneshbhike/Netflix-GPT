import { useRef } from "react";
import { API_OPTIONS, languagesAvailable } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { suggestedMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {

    const dispatch = useDispatch();
    const language = useSelector((store) => store.langConfig.lang);
    const searchText = useRef(null);
    
    const movieSearchAPI = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const jsonResult = await data.json();
        // console.log(jsonResult.results[0]);
        return jsonResult.results[0];
    }


    const handleSubmit = async() =>{
    console.log(searchText.current.value);

    const query = "Act as movie recommendation system and give movie suggestions for the given query: "+ searchText.current.value + ".only give me names of 5 movies in comma separated format. Example result: gadar, love aj kal, race, golmal, harry potter.";

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
    
    //   console.log(chatCompletion.choices);

      const gptResult = chatCompletion.choices[0].message.content.split(", ");
    //   console.log(gptResult);

      const movieDataArray = gptResult.map((movie) => movieSearchAPI(movie))

      const TMDBResults = await Promise.all(movieDataArray);

    //   console.log(TMDBResults);

    dispatch(suggestedMovies({movieNames: gptResult, movieDataList: TMDBResults}));
    
    }

    // console.log(language);
    return(
        <div className=" pt-[50%] md:pt-[10%] flex justify-center">
            <form className=" w-screen md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder={languagesAvailable[language].gptSearchPlaceholder} className="p-2 m-2 rounded-lg bg-white col-span-9" ref={searchText}></input>
            <button className="p-2 m-2 text-white bg-red-700 rounded-lg col-span-3" onClick={handleSubmit}>{languagesAvailable[language].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;