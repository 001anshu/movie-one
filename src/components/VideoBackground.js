import useTrailer from "../hook/useTrailer";

const VideoBackground = (movieId) => {
  const trailer = useTrailer(movieId);

  return (
    <div className="z-9 w-screen">

      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.trailerKey +
          "?.&autoplay=1&mute=1"
        }
        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 
      
      ></iframe>
    </div>
  );
};

export default VideoBackground;
