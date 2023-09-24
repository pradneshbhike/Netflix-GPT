import { useEffect } from "react";
import { API_OPTIONS, top_rated_movies_endpoint } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {

    const topRatedMovie = useSelector((store) => store?.movies?.topRatedMovies)

    const dispatch = useDispatch();

    const topRatedMovies = async() =>{
        const data = await fetch(top_rated_movies_endpoint, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results));
    }

    useEffect(()=>{
        !topRatedMovie && topRatedMovies();
    },[])
}

export default useTopRatedMovies;