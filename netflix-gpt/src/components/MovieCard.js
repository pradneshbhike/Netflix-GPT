import { IMG_CMD } from "../utils/constant";

const MovieCard = ({movie}) => {
    // console.log(movie);
    return (
        <div className="w-48 pr-4">
            {/* <h1>{movie.original_title}</h1> */}
            <img className="w-44" alt="movie img" src={IMG_CMD+movie.poster_path}/>
        </div>
    )
}

export default MovieCard;