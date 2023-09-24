import { useEffect } from "react";
import { API_OPTIONS, popular_movies_endpoint } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = () => {

    const dispatch = useDispatch();

    const popularMovie = useSelector((store) => store?.movies?.popularMovies)

    const popularMovies = async() =>{
        const data = await fetch(popular_movies_endpoint, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(()=>{
        !popularMovie && popularMovies();
    },[])
}

export default usePopularMovies;