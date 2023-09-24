

const VideoTitle = ({title,overview}) => {
    return(
        <div className="w-screen aspect-video pt-32 md:pl-24 px-6 absolute text-white bg-gradient-to-r from-black">
            <h2 className="font-extrabold md:text-xl text-sm">{title}</h2>
            <p className="md:text-lg text-sm md:w-1/4 w-screen m-4 mx-0">{overview}</p>
            <div className="flex m-4 mx-0">
            <button className="bg-white text-black md:px-10 md:py-4 px-5 py-2 rounded-lg hover:opacity-80">▶️ Play</button>
            <button className=" mx-2 bg-gray-600 text-white md:px-8 md:py-2 px-4 py-1 rounded-lg hover:opacity-80" >More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
