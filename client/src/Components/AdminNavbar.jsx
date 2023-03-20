import React from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = ({page}) => {
  const navigate = useNavigate();
  return (
    <div className="h-24">
      <div className="justify-between px-3 flex items-center bg-gradient-to-tr from-gray-900 to-gray-600 ">
        <div className="flex p-3 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>

          <h2 className="font-normal self-end text-white text-2xl">
            Admin Panel
          </h2>
        </div>

        {page==="role-management"?<a
         onClick={()=>navigate('/admin')}
          className="justify-self-end relative cursor-pointer inline-flex items-center justify-center p-2 px-4 py-1 overflow-hidden font-medium text-black transition duration-1000 ease-out border-2 border-white-500 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
          <i class="fa-sharp fa-regular fa-id-card fa-flip fa-xl" style={{color: "#292d33"}}></i>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Update Banner
          </span>
          <span className="relative invisible">Update Banner</span>
        </a>:<a
         onClick={()=>navigate('/admin/manage-roles')}
         className="justify-self-end relative cursor-pointer inline-flex items-center justify-center p-2 px-4 py-1 overflow-hidden font-medium text-black transition duration-1000 ease-out border-2 border-white-500 rounded-full shadow-md group"
       >
         <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
         <i class="fa-sharp fa-solid fa-image fa-flip fa-xl" style={{color: "#292d33"}}></i>
         </span>
         <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
           Role Management
         </span>
         <span className="relative invisible">Role Management</span>
       </a>}
      </div>
    </div>
  );
};

export default AdminNavbar;