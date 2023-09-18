import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const nowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        // console.log(jsonData);
        // .then(response => console.log(response.json()))
        // .catch(err => console.error(err));
        // .then(response => response.json())
        dispatch(addNowPlayingMovies(jsonData.results));
    }

    useEffect(() => {
        nowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;