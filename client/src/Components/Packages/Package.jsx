import React, { useState } from "react";
import Map from "../../assets/map.png";
import Resort from "../../assets/resort.png";
import PersonIcon from "../../assets/person.png";
import MailIcon from "../../assets/mail.png";
import Calender from "../../assets/calender.png";
import UmbrellaIcon from "../../assets/umbrella.png";
import CityIcon from "../../assets/city.png";
import PhoneIcon from "../../assets/phone-icon.png";
import Footer from "../Footer/Footer";

export const boxOptions = ["OVERVIEW", "ITINERARY", "ADDITIONAL INFO"];
export const dayWiseItineary = [
  { day: 1, title: "ARRIVAL AT MALDIVES" },
  { day: 2, title: "MALDIVES" },
  { day: 3, title: "DEPATURE FROM MALDIVES" },
];
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
              className="w-52 placeholder:text-gray-500 md:w-auto focus:outline-none rounded-full p-3 bg-transparent"
              type="text"
            />
            <i className="text-gray-600 fa-solid text-2xl fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center gap-10 md:justify-between flex-wrap px-4 w-11/12">
          <div className="md:w-7/12 flex justify-center flex-col gap-6">
            <div className="flex w-11/12 self-center lg:px-36 px-5 justify-evenly rounded-md shadow-lg bg-white">
              {boxOptions.map((val) => {
                return (
                  <div className="text-sm hover:text-blue-400 hover:underline cursor-pointer m-2 rounded-sm">
                    {val}
                  </div>
                );
              })}
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
              <hr className="border-b-2" />
              <div>
                <div>
                  <p className="text-lg font-semibold mb-5">
                    Day Wise Itineary
                  </p>
                  {dayWiseItineary.map((data) => {
                    return (
                      <div className="mb-8 flex flex-col lg:flex-row justify-between gap-3 my-4">
                        <div>
                          <button
                            className="p-2 w-24 text-white rounded-md"
                            style={{ background: "#3282ad" }}
                          >
                            Day {data.day}
                          </button>
                        </div>
                        <div className="lg:w-3/4 shadow-lg bg-white p-4 rounded-md">
                          <p className="font-medium text-md">
                            {data.title}
                            <hr />
                          </p>
                          <div className="mt-3">
                            On arrival at the Maldives International airport you
                            will be met by the resort's airport representative
                            and will be transferred to Vivanta By Taj Coral Reef
                            by a speedboat ( shared basis ) . Afternoon free for
                            relaxation . Overnight stay at the resort .
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">Additional information</p>
                <div className="flex gap-2 mt-4 flex-col">
                  <p className="text-sm font-semibold uppercase">Inclusions</p>
                  <ol
                    style={{ listStyle: "disc", listStylePosition: "inside" }}
                  >
                    <li>4 Nights’ accommodation in selected room category</li>
                    <li>Meal Plan: Full Board (Breakfast, Lunch & Dinner)</li>
                    <li>
                      Dolphin Watching Tour with Lunch, Water & Soft Drinks
                    </li>
                    <li>Snorkelling Gear & Photography</li>
                    <li>In-Room 500ml Bottled Mineral Water Per Day</li>
                  </ol>
                </div>
              </div>
              <div className="flex gap-2 mt-4 flex-col">
                <p className="text-sm font-semibold uppercase">Exclusions</p>
                <ol style={{ listStyle: "disc", listStylePosition: "inside" }}>
                  <li>4 Nights’ accommodation in selected room category</li>
                  <li>Meal Plan: Full Board (Breakfast, Lunch & Dinner)</li>
                  <li>Dolphin Watching Tour with Lunch, Water & Soft Drinks</li>
                  <li>Snorkelling Gear & Photography</li>
                  <li>In-Room 500ml Bottled Mineral Water Per Day</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="md:w-4/12 flex flex-col items-center">
            <div className="shadow-lg p-5 bg-white rounded-md">
            <div className="flex items-center w-full px-4 justify-between rounded-md shadow-lg bg-white">
              <div className="text-sm hover:underline cursor-pointer p-1 m-2 rounded-sm">
                Starting from
              </div>
              <div className="text-sm text-blue-500 font-semibold">₹50,999</div>
            </div>
            <div className="bg-blue-200 rounded-t-md w-full p-3 flex justify-center my-4">
              <div className="flex font-medium flex-col gap-2">
                <span>Want to Go For A Memorable Holiday?</span>
                <div className="text-xs">
                  Provide Your Details to Know Best Holiday Deals
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full self-center">
              <span className="font-normal text-sm">Package Name</span>
              <div className="flex gap-2 border-2 items-center bg-white px-2 rounded-md">
                <div>
                  <img src={UmbrellaIcon} alt="" />
                </div>
                <input
                  type="text"
                  className="bg-white py-2 w-auto md:w-64 focus:outline-none rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full self-center">
              <span className="font-normal text-sm">City of Departure</span>
              <div className="flex gap-2 border-2 items-center bg-white px-2 rounded-md">
                <div>
                  <img src={CityIcon} alt="" />
                </div>
                <input
                  type="text"
                  className="bg-white py-2 w-full focus:outline-none rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full self-center">
              <span className="font-normal text-sm">Date of Departure</span>
              <div className="flex gap-2 border-2 items-center bg-white px-2 rounded-md">
                <div>
                  <img src={Calender} alt="" />
                </div>
                <input
                  type="text"
                  className="bg-white py-2 w-full focus:outline-none rounded-md"
                />
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-sm">Adult</p>
                  <div className="mt-1 border-2 rounded-md flex">
                    <div className="cursor-pointer border-r-2 p-2">-</div>
                    <div className="border-r-2 p-2 bg-blue-200">0</div>
                    <div className="cursor-pointer p-2">+</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm">Child</p>
                  <div className="border-2 mt-1 rounded-md flex">
                    <div className="cursor-pointer border-r-2 p-2">-</div>
                    <div className="border-r-2 p-2 bg-blue-200">0</div>
                    <div className="cursor-pointer p-2">+</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 w-full self-center">
                  <span className="font-normal text-sm">Contact Details</span>
                  <div className="flex border-2 gap-2 items-center bg-white px-2 rounded-md">
                    <div>
                      <img src={PersonIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="placeholder:text-sm bg-white py-2 w-full focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-full self-center">
                  <div className="flex border-2 gap-2 items-center bg-white px-2 rounded-md">
                    <div>
                      <img src={MailIcon} alt="" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your E-mail Address"
                      className="placeholder:text-sm bg-white py-2 w-full focus:outline-none rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-full self-center justify-between">
                  <div className="flex justify-start gap-2 w-full rounded-md">
                    <div className="cursor-pointer bg-white rounded-md border-2 p-2">
                      +91
                    </div>
                    <div className="flex gap-2 border-2 items-center w-full bg-white px-2 rounded-md">
                      <div>
                        <img src={PhoneIcon} alt="" />
                      </div>
                      <input
                        type="text"
                        placeholder="Your E-mail Address"
                        className="placeholder:text-sm bg-white py-2 w-full focus:outline-none rounded-md"
                      />
                    </div>
                  </div>
                  <button
                    className="w-full mt-3 p-2 rounded-md"
                    style={{ border: "#3282AD solid 2px", color: "#3282AD" }}
                  >
                    Send Query
                  </button>
                  <div className="text-sm text-center mt-2">OR</div>
                  <button
                    className="w-full mt-2 p-2 rounded-sm"
                    style={{ background: "#3282AD", color: "#ffff" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-8 shadow-xl rounded-lg p-5 justify-center">
              <p className="text-center">Need Help?</p>
              <div className="flex gap-4 items-center text-sm">
                <div className="cursor-pointer">
                  <img src={PhoneIcon} alt="" />
                </div>
                91-8474846846
              </div>
              <div className="flex gap-4 items-center text-sm">
                <div className="cursor-pointer">
                  <img src={MailIcon} alt="" />
                </div>
                sara.cruz@example.com
              </div>
            </div>
            <div className="mt-8 w-full">
              <p className="font-semibold text-center">FAQ</p>
              <div className="bg-blue-100 rounded-md flex p-2 items-center">
                <input
                  type="text"
                  placeholder="Search a question"
                  className="placeholder:text-sm bg-blue-100 w-full focus:outline-none"
                />
                <i className="text-gray-500 fa-solid text-xl fa-magnifying-glass"></i>
              </div>
              <div className="mt-3 border-2 rounded-md flex p-2 items-center">
                <div className="flex items-center w-full justify-between">
                  <div className="font-semibold text-sm">
                    Try using our templates
                  </div>
                  <i class="fa-solid text-lg fa-plus"></i>
                </div>
              </div>
              <div className="mt-3 border-2 rounded-md flex p-2 items-center">
                <div className="flex items-center w-full justify-between">
                  <div className="font-semibold text-sm">
                    Try using our templates
                    <div className="font-normal text-xs w-5/6">
                      Let’s embody your beautiful ideas together, simplify the
                      way you visualize your next big things.
                    </div>
                  </div>
                  <i class="fa-solid text-lg fa-minus"></i>
                </div>
              </div>
              <div className="mt-3 border-2 rounded-md flex p-2 items-center">
                <div className="flex items-center w-full justify-between">
                  <div className="font-semibold text-sm">
                    Try using our templates
                  </div>
                  <i class="fa-solid text-lg fa-plus"></i>
                </div>
              </div>
              <div className="mt-3 border-2 rounded-md flex p-2 items-center">
                <div className="flex items-center w-full justify-between">
                  <div className="font-semibold text-sm">
                    Try using our templates
                  </div>
                  <i class="fa-solid text-lg fa-plus"></i>
                </div>
              </div>
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
