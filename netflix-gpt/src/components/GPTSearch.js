import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggestion from "./GPTSearchSuggestion";
import { BG_IMG } from "../utils/constant";
const GPTSearch = () => {
    return(
        <div>
            <div className="absolute -z-10">
                <img src={BG_IMG}
                alt="imgBg"/>
            </div>
            <GPTSearchBar/>
            <GPTSearchSuggestion/>
        </div>
    )
} 

export default GPTSearch;