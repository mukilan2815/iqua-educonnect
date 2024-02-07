import React from "react";

const VideoPage = () => {
  // Sample video data
  const sampleVideo = {
    id: 1,
    description: "Sample Video",
    videoUrl: "abc123", // Replace with the actual YouTube video ID
  };

  const openVideoInNewTab = (url) => {
    url = url.split("/").pop();
    window.open(`https://www.youtube.com/embed/${url}`, "_blank");
    console.log(`https://www.youtube.com/embed/${url}`);
  };

  return (
    <div className="bg-teal-500 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        Student Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          key={sampleVideo.id}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${sampleVideo.videoUrl}`}
            title={`Embedded YouTube Video ${sampleVideo.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-t-md"
          ></iframe>
          <div className="p-4">
            <p className="text-gray-800 font-semibold mb-2">
              {sampleVideo.description}
            </p>
            <button
              className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none"
              onClick={() => openVideoInNewTab(sampleVideo.videoUrl)}
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
