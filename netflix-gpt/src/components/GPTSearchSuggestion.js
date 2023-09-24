import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchSuggestion = () =>{

    const movies = useSelector((store) => store.gpt.suggestedMovieDataList);
    // console.log("suggested movies", movies);

    return(
        <div className="mx-11 mt-10 bg-black opacity-80 text-white">
        <div className="justify-center">
            <MovieList title={"Suggestion"} movies={movies}/>
        </div>
        </div>
       
    )
}

export default GPTSearchSuggestion;