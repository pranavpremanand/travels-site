import { useState } from "react";

// const roles = [
//   { name: "Super Admin", description: "Can perform any action." },
//   { name: "Add-on Admin", description: "Can manage add-ons." },
//   { name: "Regular Admin", description: "Can perform most actions." },
//   { name: "Read-only Admin", description: "Can view but not edit data." },
// ];
export const roles =['Social Media Manage','Content Manage','Package']

function RoleManagement() {
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <a
        onClick={()=>setOpenCreate(prev=>!prev)}
         className="bg-gray-800 justify-self-end relative cursor-pointer inline-flex items-center justify-center p-2 px-4 py-1 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 rounded-full shadow-xl group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-gray-800 group-hover:translate-x-0 ease">
            <i className="fa-sharp fa-solid fa-user-plus fa-lg text-white"></i>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Add Admin
          </span>
          <span className="relative invisible">Add Admin</span>
        </a>
      </div>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                State
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Role
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Change role
              </th>
              {/* <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th> */}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            <tr class="hover:bg-gray-50">
              <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div class="relative h-10 w-10">
                  <img
                    class="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div class="text-sm">
                  <div class="font-medium text-gray-700">Steven Jobs</div>
                  <div class="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td class="px-6 py-4">Product Designer</td>
              {/* <td class="px-6 py-4">
                <div class="flex gap-2">
                  <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                    Design
                  </span>
                  <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                    Product
                  </span>
                  <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                    Develop
                  </span>
                </div>
              </td> */}
              <td class="px-14 py-4">
                {/* <div class="flex justify-end gap-4"> */}
                {/* <a x-data="{ tooltip: 'Delete' }" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </a> */}
                <a x-data="{ tooltip: 'Edite' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </a>
                {/* </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {openCreate&&<div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

              <div className="inline-block overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-between">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Create Admin
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
                    aria-label="Close"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="px-4 py-2 sm:p-6 flex flex-col gap-5">
                  {/* <p className="text-gray-700">Are you sure?</p> */}
                  {/* <div className="md:w-80 w-56"> */}
                  <div className="px-10">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 text-sm font-medium text-gray-600 absolute">
                Name
              </p>
              <input
              
                required
                placeholder=""
                name="name"
                type="text"
                className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-2xl"
              />
              {/* {emailErr && (
                <small className="text-red-600 ml-1">{emailErr}</small>
              )} */}
            </div>
                  <div className="px-10">
                  {roles.map((val,ind)=>{
                  return <div key={ind} class="flex items-center mb-4">
    <input id={ind} type="radio" value="" name="default-radio" class="w-4 h-4 bg-gray-100 border-gray-300 dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for={ind} class="ml-2 text-sm font-medium text-gray-900">{val}</label>
</div>
                  }) 
}
            </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  
                    <>
                      <button
                        // onClick={addBanner}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => setOpenCreate(false)}
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:mt-0 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  
                </div>
              </div>
            </div>
          </div>}
    </>
  );
}

export default RoleManagement;
