import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    // console.log("movies:  ",movies);
    return(
        <div className="bg-black text-white ">
        <div className="ml-12 -mt-56 relative z-20">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
            <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
            {/* <MovieList title={"Trending movies"} movies={movies}/>
            <MovieList title={"Comedy movies"} movies={movies}/>
            <MovieList title={"Horror"} movies={movies}/> */}
        </div>
        </div>
    )
}

export default SecondaryContainer;