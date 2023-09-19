import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    // console.log(title,movies);
    return(
        <div className="py-6">
            <h1 className="text-2xl p-4">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    
                { movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;