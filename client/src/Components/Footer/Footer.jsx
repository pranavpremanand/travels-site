import React from "react";
import Phone from "../../assets/iphonepng.png";

const Footer = () => {
  return (
    <div className="relative mt-28" style={{background:'#55b0c9'}}>
      <div className="h-80 flex justify-center">
        <div className="relative -mt-14 bg-black md:h-72 h-72 w-11/12 rounded-xl">
          <div className="flex gap-4 flex-col p-12">
            <h1 className="text-white text-4xl md:text-5xl">Download Our App</h1>
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
          <div className="absolute -top-12 md:right-36 rotate-12">
            <img src={Phone} className="h-80 hidden lg:block" alt="" />
          </div>
        </div>
        <div>

</div>
      </div>
    </div>
  );
};

export default Footer;
