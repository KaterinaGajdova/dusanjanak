import React from "react";

const Video = ({
  videoSrcURL,
  videoTitle,
  width = "640",
  height = "360",
  ...props
}) => (
  <div className="video" style={{ margin: "30px auto" }}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width={width}
      height={height}
    />
  </div>
);
export default Video;
