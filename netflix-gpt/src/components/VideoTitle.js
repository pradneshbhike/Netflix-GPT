

const VideoTitle = ({title,overview}) => {
    return(
        <div className="w-screen aspect-video pt-32 pl-24 absolute text-white bg-gradient-to-r from-black">
            <h2 className="font-extrabold text-xl">{title}</h2>
            <p className="text-lg w-1/4 m-4 mx-0">{overview}</p>
            <div className="flex m-4 mx-0">
            <button className="bg-white text-black px-10 py-4 rounded-lg hover:opacity-80">▶️ Play</button>
            <button className=" mx-2 bg-gray-600 text-white px-8 py-2 rounded-lg hover:opacity-80" >More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
