import React from "react";
import { Content } from "../components/atoms";
import Video from "../components/Video";
import { Consumer } from "../layouts/Context";

const IndexPage = (props) => {
  return (
    <Consumer>
      {({ int }) => (
        <Content media>
          {" "}
          IN PROGRESS
          <Video
            videoSrcURL="https://www.youtube.com/embed/dm8aRjXfg1Q"
            videoTitle="Bílá růže"
            width="854"
            height="386"
          />
          {int === "en" ? (
            <Video
              videoSrcURL="https://player.vimeo.com/video/105125679"
              videoTitle="Sandstone"
              width="854"
            />
          ) : (
            <Video
              videoSrcURL="https://player.vimeo.com/video/105630516"
              videoTitle="Sandstone"
              width="854"
            />
          )}
          <Video
            videoSrcURL="https://www.youtube.com/embed/FYsyRBHnA0U"
            videoTitle="Padám vzhůru, Klenba Macochy"
            width="854"
            height="428"
          />
          <Video
            videoSrcURL="https://www.youtube.com/embed/ciYJs5dGWP0"
            videoTitle="Matrix"
            width="854"
            height="480"
          />
        </Content>
      )}
    </Consumer>
  );
};

export default IndexPage;
