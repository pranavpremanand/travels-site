import React from "react";
import Map from "../../assets/map.png";
import Oval from "../../assets/Oval.png";
import Oval1 from "../../assets/Oval-1.png";
import Oval2 from "../../assets/Oval-2.png";
import Oval3 from "../../assets/Oval-3.png";
import Oval4 from "../../assets/Oval-4.png";
import RectangleImg from "../../assets/Rectangle.png";
import rec2 from "../../assets/rec2.png";
import rec3 from "../../assets/rec3.png";
import rec4 from "../../assets/rec4.png";
import Boat from "../../assets/video.png";
import Footer from "../Footer/Footer";

export const pictures = [rec4, rec2, rec4, rec3];

export const avatars = [Oval, Oval1, Oval2, Oval3, Oval4];

const About = () => {
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
        <h1 className="text-3xl md:text-4xl font-semibold mt-16 md:mt-40">
          About Us
        </h1>
      </div>
      <div
        style={{ width: "90%", background: "#d9eef4" }}
        className="md:absolute rounded-md self-center bottom-0 flex justify-center flex-col"
      >
        <div className=" flex justify-center py-8 flex-col items-center">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-md md:w-96 w-56">
            Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
            at nihil tantas platonem eos.{" "}
          </p>
        </div>
      </div>

      <div className="flex mt-2 justify-center flex-wrap gap-5">
        <div>
          <div
            className="self-center md:self-start w-80 h-72 sm:h-72 md:w-96  bg-cover"
            style={{ backgroundImage: `url(${RectangleImg})` }}
          ></div>
          <div className="flex self-center justify-evenly mt-4 flex-row ">
            {avatars.map((pic) => {
              return (
                <img className="h-8 w-8 md:h-12 md:w-12" src={pic} alt="" />
              );
            })}
          </div>
        </div>
        <div className="flex gap-9 md:w-3/5 md:justify-start flex-col">
          <div className="flex flex-col sm:w-auto w-72 gap-4">
            <h4 style={{ color: "#5697b7" }} className="text-xl font-semibold">
              Sebastian Bennett
            </h4>
            <span className="text-sm font-medium uppercase">
              Founder, LEad Photographer, CEO
            </span>
            <p className="sm:w-64 md:w-96 text-sm">
              Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his
              dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera
              integre suavitate per an, alienum phaedrum te sea. Ex sea causae
              dolores, nam et doming dicunt feugait. Ea mel scripta aperiri
              postulant. Ut sed affert audire.
            </p>
          </div>
          <div className="flex gap-4">
            <i class="text-gray-600 text-2xl fa-brands fa-facebook"></i>
            <i class="text-gray-600 text-2xl fa-brands fa-twitter"></i>
            <i class="text-gray-600 text-2xl fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>

      <div
        style={{ background: "#D9EEF4" }}
        className="h-auto justify-center mt-8"
      >
        <div
          style={{ width: "100%" }}
          className="p-16 flex self-center justify-center flex-col gap-9"
        >
          <div className="w-fit md:w-3/6">
            <h1 className="md:text-2xl text-xl font-semibold">
              What customer’s are saying?
            </h1>
            <span className="">
              Take a look at what our customer’s are saying. At Nature we not
              only provide you with services but also we provide you with
              valuable experiences for your valuable time.
            </span>
          </div>
          <div className="flex w-full self-center justify-center">
            <div className="flex self-center justify-center flex-wrap gap-5">
              {pictures.map((pic) => {
                return (
                  <div
                    className="rounded-md bg-cover md:h-64 md:w-44 h-64 w-56 "
                    style={{ backgroundImage: `url(${pic})` }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="self-end shadow-lg w-fit p-3 flex gap-2 rounded-lg bg-white border-b-8 border-blue-400">
            <img src={Oval3} className="w-11 h-11" alt="" />
            <div className="sm:w-56 w-44 xs:text-xs sm:text-sm md:w-72">
              <span className="text-sm">
                “ Great place to spend your vacation while exploring different
                experiences. “
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 flex justify-center flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="font-semibold text-center md:text-3xl text-2xl">Certificate</h3>
          <div className="text-sm w-64 md:w-4/6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
            turpis sodales, facilisis massa at, rutrum eros.
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
              <img src={Boat} className='w-5/6 md:w-2/5' alt="" />
              <img src={Boat} className='w-5/6 md:w-2/5' alt="" />
              <img src={Boat} className='w-5/6 md:w-2/5' alt="" />
              <img src={Boat} className='w-5/6 md:w-2/5' alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
