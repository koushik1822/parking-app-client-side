import React, { useState } from "react";
import video from "../../../assets/section-3/ParkWhiz- Find and Book Parking Anywhere.mp4";
const HomepageSection3 = () => {
  return (
    <section className="w-[80%] mx-auto my-10">
      <div className=" flex items-center w-[100%] justify-center gap-10">
        <div className="text ">
          <div className="heading ml-36">
            <span className="text-5xl font-bold text-blue-400 block">
              DISCOVER
            </span>{" "}
            <span className="text-5xl font-bold text-gray-400 block uppercase ml-10">
              Amazing
            </span>{" "}
            <span className="text-5xl font-bold text-gray-400 block uppercase">
              Spaces
            </span>
          </div>
        </div>
        <div className="video">
          <video className="" muted loop autoPlay>
            <source type="video/mp4" src={video}></source>
          </video>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection3;
