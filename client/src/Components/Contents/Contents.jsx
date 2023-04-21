import React, { useContext, useEffect, useState } from "react";
import NotFoundImg from "../../assets/notfoundImage.png";
import Img1 from "../../assets/kayakingimage1.png";
import Img2 from "../../assets/boatimg.png";
import Img3 from "../../assets/Shipimg.png";
import Img4 from "../../assets/kavarathi1.png";
import Img5 from "../../assets/kavarathi2.png";
import Img6 from "../../assets/kavarathi3.png";
import Img7 from "../../assets/kavarathi4.png";
import Img8 from "../../assets/kavarathi5.png";
import Img9 from "../../assets/kavarathi6.png";
import Map from "../../assets/map.png";
import "./Contents.css";
import Footer from "../Footer/Footer";
import { BannerContext } from "../Context/BannerContext";
import { BaseUrl } from "../../API/BaseUrl";

export const packageImgs = [Img1, Img2, Img3];
export const islandStaysImgs = [Img4, Img5, Img6, Img7, Img8, Img9];
export const clients = [
  {
    name: "Alex Tom",
    img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Finn Balor",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    name: "Roman Rey",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Contents = () => {
  // const { banner, setBanner } = useContext(BannerContext);
  const [banner, setBanner] = useState(process.env.REACT_APP_BANNERIMG);

  //Get banner
  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = async () => {
    try {
      const { data } = await BaseUrl.get("/");
      setBanner(data.url);
    } catch (err) {
      // handle err
    }
  };
  return (
    <>
      <div className="flex flex-col pt-16 md:pt-0">
        <div
          className="bg-cover h-96 md:h-screen flex items-center"
          style={{ backgroundImage: `url(${banner ? banner : NotFoundImg})` }}
        >
          <div className="flex flex-col gap-3 ml-12 md:ml-20">
            <div>
              <button
                type="button"
                style={{ background: "#D3ECF5" }}
                className="flex break-inside rounded-full px-6 py-2 mb-4 dark:text-white"
              >
                <div className="flex items-center justify-between flex-1">
                  <span className="text-2xl font-medium text-gray-800 flex gap-2">
                    Visit
                    <i className="text-2xl text-blue-400 self-center fa-solid fa-compass"></i>
                  </span>
                </div>
              </button>
            </div>
            <h1 className="md:text-6xl text-4xl font-bold text-gray-900">
              The Exotic
            </h1>
            <h1 className="md:text-6xl text-4xl font-bold text-blue-100">
              Lakshadweep
            </h1>
            <h1 className="md:text-6xl text-4xl font-bold text-gray-900">
              Islands
            </h1>
            <div className="mt-2">
              <button
                type="button"
                className=" hover:bg-blue-500  hover:text-blue-400 flex break-inside rounded-md md:px-4 px-2 py-2 md:py-3 mb-4 bg-transparent border-2 hover:border-blue-400 dark:text-white"
              >
                <div className="flex items-center justify-between flex-1">
                  <span className=" text-md font-medium text-white">
                    Discover Now
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col self-center lg:justify-start justify-center h-auto p-5 md:p-0 bg-white shadow-lg m-7 rounded-md"
          style={{ width: "90%" }}
        >
          <div className="p-5">
            <h4 className="text-xl md:text-2xl font-medium">
              Where are you flying?
            </h4>
          </div>
          <div className="px-10 py-4 flex gap-3 items-center md:items-start flex-col sm:flex-row flex-wrap justify-center md:justify-evenly">
            <div className="md:w-64 w-52 sm:w-96 lg:w-56">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-2 text-sm font-medium text-gray-800 absolute">
                From - To
              </p>
              <input
                defaultValue="Lahore - Karachi"
                className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            <div className="md:w-64 w-52 sm:w-48 lg:w-56">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-2 text-sm font-medium text-gray-800 absolute">
                Trip
              </p>
              <input
                defaultValue="Return"
                className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            <div className="md:w-64 w-52 sm:w-48 lg:w-56">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-2 text-sm font-medium text-gray-800 absolute">
                Depart - Return
              </p>
              <input
                defaultValue="07 Nov 22 - 13 Nov 22"
                className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
            <div className="md:w-64 hidden lg:w-56 md:block">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-2 text-sm font-medium text-gray-800 absolute">
                Passenger - Class
              </p>
              <input
                defaultValue="1 Passenger, Economy"
                className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-center sm:justify-end mr-10">
            <div className="flex items-center gap-3 my-2 sm:flex-row flex-col ">
              <h6 className="mb-4 cursor-pointer flex justify-center text-sm gap-2 items-center">
                <i className="fa-solid fa-plus"></i> Add Promo Code
              </h6>
              <button
                style={{ background: "#3282AD" }}
                type="button"
                className="flex break-inside rounded-md px-4 py-3 mb-4 bg-transparent border-2 dark:text-white"
              >
                <div className="flex items-center gap-2 justify-between flex-1">
                  <i class="fa-solid fa-location-arrow"></i>
                  <span className=" text-md font-light text-white">
                    Show Flights
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="gap-4 flex flex-col">
          <div className="flex flex-col gap-2 justify-center">
            <h1 className="text-2xl md:text-3xl text-center font-semibold">
              Best Packages For You
            </h1>
            <p className="md:w-auto self-center w-80 text-sm text-gray-600 text-center">
              This is a unique experience on ship, sea and land, exploring
              different coral islands of Lakshadweep.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="options-box rounded-sm px-3 md:px-12 py-2 font-semibold">
              Maldives
            </div>
            <div className="options-box rounded-sm px-3 md:px-12 py-2 font-semibold">
              Samudram
            </div>
            <div className="options-box hidden md:block rounded-sm px-12 py-2 font-semibold">
              Cordelia
            </div>
            <div className="options-box hidden lg:block rounded-sm px-12 py-2 font-semibold">
              Agatti
            </div>
            <div className="options-box rounded-sm px-6 md:px-12 py-2 font-semibold">
              More
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 self-center px-3">
            {packageImgs.map((url) => {
              return (
                <div>
                  <div
                    style={{ backgroundImage: `url(${url})` }}
                    className="rounded-t-md shadow-md h-56 lg:h-64 bg-cover flex justify-end p-2"
                  >
                    <div>
                      <span className="text-sm text-blue-500 bg-white py-1 px-3 rounded-full">
                        ₹500
                      </span>
                    </div>
                  </div>
                  <div className="relative w-full p-2 h-40 lg:h-40 bg-white gap-3 rounded-b-md mb-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1 text-sm">
                        <i className="fa-solid fa-location-dot text-xs"></i>
                        Indonesia
                      </div>
                      <div className="flex gap-1 items-center text-sm">
                        <i className="fa-solid text-blue-400 fa-star text-xs"></i>
                        4.5
                      </div>
                    </div>
                    <span className="text-xs">
                      Explore the Beauty of the island for 3 days and 2 nights
                      with our travel agency...
                    </span>
                    <div className="absolute right-0 left-0 bottom-0 flex justify-center m-3">
                      <button
                        style={{ background: "#3282AD" }}
                        type="button"
                        className="flex break-inside rounded-md px-5 py-1 mb-4 bg-transparent border-2 dark:text-white"
                      >
                        <span className=" text-sm font-light text-white">
                          Book Now
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-2">
            <div
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ border: "#3282AD solid 1px" }}
            ></div>
            <div
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ background: "#3282AD", border: "#3282AD solid 1px" }}
            ></div>
            <div
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ border: "#3282AD solid 1px" }}
            ></div>
          </div>
          <div className="mt-3 flex justify-center">
            <button
              type="button"
              className="discover-btn flex break-inside rounded-md px-4 py-2 mb-4 bg-transparent border-2 hover:border-blue-400 dark:text-white"
            >
              <div className="flex items-center justify-between flex-1">
                <span className="btn-text text-md font-medium">
                  Discover More
                </span>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <h1 className="text-2xl md:text-3xl text-center font-semibold">
              Island Stays
            </h1>
            <p
              style={{ maxWidth: "70%" }}
              className="md:w-auto self-center w-96 text-sm text-gray-600 text-center"
            >
              One can choose from a variety of beautiful coral islands which
              offers different staying experiences from thatched huts to
              luxurious modern properties. Every island offers a wider range of
              water sports and beach activities for you to enjoy.
            </p>
          </div>

          <div className="gap-8 self-center grid grid-cols-1 md:grid-cols-3 px-3 mt-6">
            {islandStaysImgs.map((url) => {
              return (
                <div>
                  <div
                    style={{ backgroundImage: `url(${url})` }}
                    className="rounded-t-md shadow-md h-56 lg:h-64 bg-cover flex justify-end p-2"
                  ></div>
                  <div className="p-2 h-40 lg:h-40 bg-white gap-3 rounded-b-md mb-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1 font-medium text-sm">
                        Kavaratti
                      </div>
                    </div>
                    <span className="text-xs">
                      Kavaratti is the capital of the Union Territory of
                      Lakshadweep having ....
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 m-3">
                      <div className="flex gap-1 items-center text-xs mb-3">
                        <i className="fa-solid text-blue-400 fa-star text-xs"></i>
                        <b>4.5</b>(1.5k Review)
                      </div>
                      <div>
                        <button
                          style={{ background: "#3282AD" }}
                          type="button"
                          className="flex justify-center break-inside rounded-md px-1 py-1 mb-4 bg-transparent border-2 dark:text-white"
                        >
                          <span className=" text-xs font-light text-white">
                            Explore More
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="md:h-64 h-auto rounded-lg w-11/12 flex-wrap flex items-center p-4 justify-center md:justify-between"
            style={{ background: "#6ad3ed" }}
          >
            <div className="md:ml-8 flex flex-col gap-3 w-96">
              <h1 className="md:w-80 w-72  text-white font-semibold text-2xl max-w-xs">
                Let’s Ready to Explore The World With Us.
              </h1>
              <span className="md:w-80 w-72 md:block hidden text-white font-light text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur ac quam in congue.{" "}
              </span>
            </div>
            <div className="md:flex items-center w-64 justify-center md:justify-end">
              <img
                src={Map}
                alt=""
                className="relative md:w-80 lg:h-40 lg:mr-32 w-72 lg:w-auto"
              />
              <div className="">
                <button
                  type="button"
                  className="md:right-20 md:absolute xl:relative bg-white flex break-inside rounded-md text-sm md:text-md md:px-3 px-1 py-1 md:py-2 mb-4 border-2"
                >
                  <span className=" text-xs font-normal bg-white text-black">
                    Explore More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 flex-col">
          <div>
            <h1 className="text-2xl md:text-3xl text-center mb-5 font-semibold">
              What Our Clients Says <br />
              About Us
            </h1>
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            {clients.map((client) => {
              return (
                <div className="flex flex-col gap-5 justify-center bg-white shadow-lg rounded-lg p-4">
                  <div className="flex flex-col gap-2 justify-center">
                    <img
                      className="inline-block self-center h-20 w-20 rounded-full ring-2 ring-white"
                      src={client.img}
                      alt=""
                    />
                    <h1 className="text-lg text-center font-semibold">
                      {client.name}
                    </h1>
                    <span className="text-sm text-center">Toranto, Canada</span>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <p className="text-sm font-light w-60 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur ac quam in congue.{" "}
                    </p>
                    <div className="flex gap-1 justify-center">
                      <i className="fa-solid text-blue-400 fa-star text-2xl"></i>
                      <i className="fa-solid text-blue-400 fa-star text-2xl"></i>
                      <i className="fa-solid text-blue-400 fa-star text-2xl"></i>
                      <i className="fa-solid text-blue-400 fa-star text-2xl"></i>
                      <i className="fa-solid text-blue-400 fa-star text-2xl"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <div
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ border: "#3282AD solid 1px" }}
            ></div>
            <div
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ background: "#3282AD", border: "#3282AD solid 1px" }}
            ></div>
            <div
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ border: "#3282AD solid 1px" }}
            ></div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contents;
