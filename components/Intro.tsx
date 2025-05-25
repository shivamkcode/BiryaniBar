"use client";
import React, { useRef, useState } from "react";
import { Play, Pause } from "@deemlol/next-icons";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        ref={vidRef}
        src="/assets/meal.mp4"
        loop
        controls={false}
        muted
      />
      <div
        className={`absolute inset-0 w-full h-full bg-black ${playVideo ? 'opacity-0' : 'opacity-50'}`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {playVideo ? (
          <Pause
            className="text-white cursor-pointer border border-golden rounded-full w-24 h-24 p-8"
            fill="white"
            onClick={() => {
              setPlayVideo(false);
              vidRef.current?.pause();
            }}
          />
        ) : (
          <Play
            className="text-white cursor-pointer border border-golden rounded-full w-24 h-24 p-8"
            fill="white"
            onClick={() => {
              setPlayVideo(true);
              vidRef.current?.play();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Intro;
