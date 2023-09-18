import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movie_id}) => {
    useMovieTrailer(movie_id);
    const selectTrailer = useSelector((store) => store?.movies?.trailerVideo);

    return(
        <div className="w-screen aspect-video">
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+ selectTrailer?.key+ "?autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground;
