import React from "react";
import Map from "../../assets/map.png";
import Footer from "../Footer/Footer";

const Packages = () => {
  return (
    <div className="flex flex-col justify-center">
      <div
        className="relative h-60 md:h-screen bg-contain self-center flex justify-center"
        style={{
          width: "70%",
          backgroundImage: `url(${Map})`,
          //   backgroundSize: "90%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center gap-16 flex-col">
          <h1 className="text-3xl md:text-4xl font-semibold mt-16 md:mt-40">
            Maldives
          </h1>
          <div className="border-2 border-gray-400 rounded-full items-center flex justify-between px-2">
            <input
              placeholder="Type something..."
              className="focus:outline-none rounded-full p-3 bg-transparent"
              type="text"
            />
            <i className="text-blue-600 fa-solid text-2xl fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <div className="flex justify-between px-4 w-11/12">
        <div className="md:w-7/12">
          <div className="flex px-36 justify-between rounded-md shadow-lg bg-white">
            <div className="hover:text-blue-400 hover:underline cursor-pointer p-1 m-2 rounded-sm">
              OVERVIEW
            </div>
            <div className="hover:text-blue-400 hover:underline cursor-pointer p-1 m-2 rounded-sm">
              ITINERARY
            </div>
            <div className="hover:text-blue-400 hover:underline cursor-pointer p-1 m-2 rounded-sm">
              ADDITIONAL INFO
            </div>
          </div>
        </div>
        <div className="md:w-4/12"></div>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Packages;
