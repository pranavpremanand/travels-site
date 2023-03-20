import React from "react";
import Phone from "../../assets/iphonepng.png";
import WhiteLogo from "../../assets/gol-logo-white.png";

const Footer = () => {
  return (
    <div className="relative mt-28" style={{ background: "#55b0c9" }}>
      <div className="h-80 flex justify-center">
        <div className="relative -mt-14 bg-black md:h-72 h-80 w-11/12 rounded-xl">
          <div className="flex gap-6 md:gap-4 flex-col p-12">
            <h1 className="text-white text-4xl md:text-5xl">
              Download Our App
            </h1>
            <span className="text-white text-xl">
              The best travel in the world
            </span>
            <div>
              <button
                style={{ background: "#3282AD" }}
                type="button"
                className="flex gap-2 items-center break-inside px-4 py-2 rounded-sm mb-4 bg-transparent border-2 dark:text-white"
              >
                <i class="text-3xl fab fa-google-play"></i>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase self-start mr-6">
                    Get in on
                  </span>
                  <span className=" text-sm font-light text-white ml-6 self-end">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="absolute -top-12 md:right-36">
            <img src={Phone} className="h-80 hidden lg:block" alt="" />
          </div>
        </div>
      </div>
      <div className="flex px-12 flex-col">
        <div className="flex justify-center gap-6 mb-6 md:justify-between px-8">
          <div className="md:w-2/5 lg:flex flex-col gap-6 hidden">
            <div>
              <img src={WhiteLogo} alt="" />
            </div>
            <p className="text-white w-64">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
            <div className="flex gap-3">
              <i class="text-white text-2xl fa-brands fa-facebook"></i>
              <i class="text-white text-2xl fa-brands fa-twitter"></i>
              <i class="text-white text-2xl fa-brands fa-linkedin"></i>
              <i class="text-white text-2xl fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="flex gap-2 flex-col justify-center md:flex-row md:justify-between md:w-full mb-3">
            <ul className="flex flex-col items-center">
              <th className="text-white text-md md:text-md text-center">Company</th>
              <li className="text-white text-sm hidden md:block">Events</li>
              <li className="text-white text-sm hidden md:block">Blogs</li>
              <li className="text-white text-sm hidden md:block">Join US</li>
            </ul>
            <ul className="flex flex-col items-center">
              <th className="text-white text-md md:text-md text-center">About</th>
              <li className="text-white text-sm hidden md:block">Project</li>
              <li className="text-white text-sm hidden md:block">Lorem</li>
              <li className="text-white text-sm hidden md:block">Services</li>
              <li className="text-white text-sm hidden md:block">Our Story</li>
            </ul>
            <ul className="flex flex-col items-center">
              <th className="text-white text-md md:text-md text-center">Contact Us</th>
              <li className="text-white text-sm hidden md:block">abc@lorem.com</li>
              <li className="text-white text-sm hidden md:block">Blogs</li>
            </ul>
          </div>
        </div>
        <div>
          <hr />
          <div className="h-20 flex items-center justify-center">
            <span className="text-center text-xs text-white">Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
