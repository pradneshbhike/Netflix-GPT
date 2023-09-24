import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    const playingMovies = useSelector((store) => store?.movies?.nowPlayingMovies)

    const dispatch = useDispatch();

    const nowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const jsonData = await data.json();
        // console.log(jsonData);
        // .then(response => console.log(response.json()))
        // .catch(err => console.error(err));
        // .then(response => response.json())
        dispatch(addNowPlayingMovies(jsonData.results));
    }

    useEffect(() => {
        !playingMovies && nowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;
