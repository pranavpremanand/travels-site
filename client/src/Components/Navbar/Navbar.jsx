import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/gol-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="p-4">
        <div className="flex items-center justify-between gap-2">
          <div className=" font-bold text-xl">
            <img src={Logo} className="md:h-14 h-10" alt="" />
          </div>
          <div className="items-center hidden lg:flex">
            <a
              href="#"
              className="link font-medium link-underline link-underline-black mr-4 "
            >
              Find Reservations
            </a>
            <a
              href="#"
              className="flex font-medium items-center gap-1 link link-underline link-underline-black mr-4"
            >
              Packages
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
            </a>
            <a
              href="#"
              className="flex font-medium items-center gap-1 link link-underline link-underline-black mr-4"
            >
              About Lakshadweep
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
            </a>
            <a
              href="#"
              className="link font-medium link-underline link-underline-black mr-4"
            >
              About Us
            </a>
            <a
              href="#"
              className="link font-medium link-underline link-underline-black mr-4"
            >
              Gol
            </a>
            <a
              href="#"
              className=" font-medium link link-underline link-underline-black mr-4"
            >
              Support
            </a>
          </div>
          <div className="gap-1 flex items-center">
            <a
              href="/"
              className=" font-medium hover:text-white hover:bg-blue-400 py-2 px-4 rounded-full"
            >
              Login
            </a>
            <a
              href="/"
              className=" font-medium hidden lg:block hover:text-white hover:bg-blue-400 py-2 px-4 rounded-full"
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
            <a
              class=" hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              Find Reservations
            </a>
            <a
              class=" hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              Packages
            </a>
            <a
              class=" hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              About Lakshadweep
            </a>
            <a
              class=" hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              About Us
            </a>
            <a
              class=" hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              Gol
            </a>
            <a
              class=" hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              Support
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
