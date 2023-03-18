import React from "react";
import Map from "../../assets/map.png";
import Resort from "../../assets/resort.png";
import Footer from "../Footer/Footer";

const Packages = () => {
  return (
    <div className="flex flex-col justify-center">
      <div
        className="relative h-60 mb-12 md:mb-32 lg:mb-0 lg:h-screen bg-contain self-center flex justify-center"
        style={{
          width: "70%",
          backgroundImage: `url(${Map})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center gap-10 flex-col">
          <h1 className="text-3xl md:text-4xl font-semibold mt-16 md:mt-40">
            Maldives
          </h1>
          <div className="border-2 border-gray-400 rounded-full items-center flex justify-between px-2">
            <input
              placeholder="Type something..."

              className="w-52 md:w-auto focus:outline-none rounded-full p-3 bg-transparent"
              type="text"
            />
            <i className="text-blue-600 fa-solid text-2xl fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center gap-10 md:justify-between flex-wrap px-4 w-11/12">
          <div className="md:w-7/12 flex justify-center flex-col gap-6">
            <div className="flex lg:px-36 px-5 justify-between rounded-md shadow-lg bg-white">
              <div className="text-sm hover:text-blue-400 hover:underline cursor-pointer p-1 m-2 rounded-sm">
                OVERVIEW
              </div>
              <div className="text-sm hover:text-blue-400 hover:underline cursor-pointer p-1 m-2 rounded-sm">
                ITINERARY
              </div>
              <div className=" text-sm hover:text-blue-400 hover:underline cursor-pointer p-1 m-2 rounded-sm">
                ADDITIONAL INFO
              </div>
            </div>
            <div
              className="self-center flex flex-col gap-6"
              style={{ width: "80%" }}
            >
              <img src={Resort} alt="" />
              <div className="text-xl md:text-2xl">Package Overview</div>
              <p>
                Experience World-class Service at Kandima Maldives - Escape the
                ordinary Located on the largest island in Dhaalu Atoll, Kandima
                Maldives has the longest outdoor swimming pool in the Maldives,
                an abundance of water-sports, the largest beach club and tennis
                and basketball courts. It offers a marine biology centre, an art
                studio and cooking classes. Located at a 30-minute flight from
                Male’ and followed by a 20-minute boat ride to the island, the
                resort offers studios and villas with a private terrace and
                private pool. They offer endless tropical views. For fitness
                lovers, Kandima Maldives has a gym with personal trainers and
                provides classes like anti-gravity yoga, Zumba, aqua-bike
                classes and POUND® fitness lessons. Guests can hire bikes or
                electric scooters. Guests can choose among the 10 restaurants
                and bars the property offers. Sea Dragon serves authentic
                Chinese cuisine while Forbidden Bar plays live music in the
                night. Start the day at Aroma with fresh beverages and baked
                goods. For total relaxation, choose from massages, facials and a
                range of Signature local treatments. The Kandima Kids Club is
                run by a multilingual team of certified child care-givers. We
                speak your language! Kandima Maldives - Escape the ordinary...
              </p>
              <hr className="border-b-2 border-gray-500" />
            </div>
          </div>
          <div className="md:w-4/12 flex flex-col items-center">
            <div className="flex items-center w-full md:w-3/4 px-4 justify-between rounded-md shadow-lg bg-white">
              <div className="text-sm hover:underline cursor-pointer p-1 m-2 rounded-sm">
                Starting from
              </div>
              <div className="text-sm">₹50,999</div>
            </div>
            <div className="bg-blue-300 rounded-t-md w-72 p-3 flex justify-center my-4">
              <div className="flex font-medium flex-col gap-2">
                <span>Want to Go For A Memorable Holiday?</span>
                <div className="text-xs">
                  Provide Your Details to Know Best Holiday Deals
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col gap-4">
              <div className="flex flex-col gap-1 w-full self-center">
                <span className="font-normal text-sm">Package Name</span>
                <input type="text" className="bg-white p-2 w-auto md:w-72 focus:outline-none rounded-md" />
              
            </div>
              <div className="flex flex-col gap-1 w-full self-center">
                <span className="font-normal text-sm">City of Departure</span>
                <input type="text" className="bg-white p-2 w-full focus:outline-none rounded-md" />
              
            </div>
              <div className="flex flex-col gap-1 w-full self-center">
                <span className="font-normal text-sm">Date of Departure</span>
                <input type="text" className="bg-white p-2 w-full focus:outline-none rounded-md" />
             
            </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Packages;
