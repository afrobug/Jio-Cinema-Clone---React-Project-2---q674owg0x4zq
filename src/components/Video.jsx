import React from "react";

const Video = () => {
  return (
    <div>
      <video width="500" height="800" controls>
        <source src={'https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd509.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
