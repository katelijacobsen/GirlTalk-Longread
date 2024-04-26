"use client";
import React from "react";
import Lottie from "lottie-react";
import mirrorAnimation from "../../public/Animations/Mirror.json";

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};

const MirrorAnimation = () => {
  return (
    <Lottie animationData={mirrorAnimation} interactivity={interactivity} />
  );
};

export default MirrorAnimation;
