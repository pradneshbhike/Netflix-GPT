import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { UseSelector, useSelector } from "react-redux";

const Browse = () => {

    const showGPTSearch = useSelector((store) => store.gpt.gptEnable);
    // console.log(selector)

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    // useMoviesList(popular_movies_endpoint);
    
    return (
        <div>
            <Header/>
            {showGPTSearch ? 
            <GPTSearch/> :
            <>
            <MainContainer/>
            <SecondaryContainer/>
            </>}
        </div>
    )
}

export default Browse;