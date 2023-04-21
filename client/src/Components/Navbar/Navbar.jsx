import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/gol-logo.png";
import { useNavigate } from "react-router-dom";

export const navbarOptions = [
  { title: "Find Reservations", path: "/", dropdown: false },
  { title: "Packages", path: "/packages", dropdown: true },
  { title: "About Lakshadweep", path: "/", dropdown: true },
  { title: "About Us", path: "/about", dropdown: false },
  { title: "Gol", path: "/", dropdown: false },
  { title: "Support", path: "/", dropdown: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="fixed bg-sky-100 w-screen z-30">
      <nav className="p-4">
        <div className="flex items-center justify-between gap-2">
          <div className=" font-bold text-xl">
            <img
              onClick={() => navigate("/")}
              src={Logo}
              className="cursor-pointer md:h-14 h-10"
              alt=""
            />
          </div>
          <div className="items-center hidden lg:flex">
            {navbarOptions.map((value) => (
              <p
                onClick={() => navigate(value.path)}
                className="cursor-pointer flex font-medium items-center gap-1 link link-underline link-underline-black mr-4"
              >
                {value.title}
                {value.dropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </p>
            ))}
          </div>
          <div className="gap-1 flex items-center">
            <a
              href="/"
              className="cursor-pointer font-medium hover:text-white hover:bg-blue-400 py-2 px-4 rounded-full"
            >
              Login
            </a>
            <a
              href="/"
              className="cursor-pointer font-medium hidden lg:block hover:text-white hover:bg-blue-400 py-2 px-4 rounded-full"
            >
              Sign Up
            </a>
            <svg
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden cursor-pointer block h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>

      {open && (
        <div class="lg:hidden block">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navbarOptions.map((value) => {
              return (
                <a
                  class="cursor-pointer hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => navigate(value.path)}
                >
                  {value.title}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
