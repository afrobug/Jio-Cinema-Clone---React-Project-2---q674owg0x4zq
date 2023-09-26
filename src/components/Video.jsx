import React from "react";
import { MyContext } from "../App";
import { useContext, useEffect, useState } from "react";


const Video = () => {
  const { videoUrl } = useContext(MyContext);

  return (
    <div>
      <video width="500" height="800" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
