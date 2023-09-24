import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggestion from "./GPTSearchSuggestion";
import { BG_IMG } from "../utils/constant";
import { useSelector } from "react-redux";
const GPTSearch = () => {
    const movies = useSelector((store) => store.gpt.suggestedMovieDataList);
    return(
        <div>
            <div className="absolute -z-10">
                <img className="h-screen w-screen object-cover" src={BG_IMG}
                alt="imgBg"/>
            </div>
            <GPTSearchBar/>
            {movies && <GPTSearchSuggestion/>}
        </div>
    )
} 

export default GPTSearch;