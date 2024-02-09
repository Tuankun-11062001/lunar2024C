import React, { useState } from "react";
import intro from "../images/intro.mp4";
import { useNavigate } from "react-router-dom";
import touch from "../images/touch.gif";

const Home = () => {
  const navigate = useNavigate();

  const enableAutoPlay = (e) => {
    const video = document.querySelector("video");

    e.target.classList.add("fade");
    video.classList.add("active");
    video.play();
    video.addEventListener("ended", () => {
      navigate("/gift");
    });
  };
  return (
    <div className="home">
      <div className="touch" onClick={enableAutoPlay}>
        <img src={touch} />
        Touch me, please
      </div>
      <video src={intro}></video>
    </div>
  );
};

export default Home;
