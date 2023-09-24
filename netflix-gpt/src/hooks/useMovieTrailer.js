import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();

    const movieVideos = useSelector((store) => store?.movies?.trailerVideo);
    
    const getMovieVideos = async() => {

        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie_id + '/videos?language=en-US', API_OPTIONS);

        const dataJson = await data.json();

        // console.log("json data" , dataJson);
        
        const filterTrailers = dataJson?.results.filter((d) => d.type == "Trailer")

        // console.log(filterTrailers);

        const trailerVideo = filterTrailers ? filterTrailers[0] : dataJson?.results[0];
        
        // console.log(trailerVideo);
        dispatch(addTrailerVideo(trailerVideo));
    }

    useEffect(() =>{
        !movieVideos && getMovieVideos();
    },[])
}

export default useMovieTrailer;