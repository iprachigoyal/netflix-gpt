const VideoTitle = ({title, overview}) => {
    return ( 
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className=" text-xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4"> {overview}</p>
        <div className="my-4">
            <button className="bg-white text-black md:py-4 py-2 px-4 md:px-12 text-xl rounded-md hover:bg-opacity-70"> Play</button>
            <button className= " hidden md:inline-block bg-gray-500 mx-2 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md">More Info</button>
        </div>

    </div> );
}
 
export default VideoTitle;