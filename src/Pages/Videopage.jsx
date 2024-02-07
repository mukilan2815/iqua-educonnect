import React, { useRef } from "react";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const playerRef = useRef(null);

  return (
    <div className="flex items-center justify-center h-screen">
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/watch?v=e7a4amOfEfU`}
        width="90%"
        height="90%"
        controls={false}
        volume={1}
        playbackRate={1}
        muted={false}
        loop={false}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              disablekb: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              origin: window.location.origin,
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPage;
