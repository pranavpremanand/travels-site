import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BaseUrl } from "../../API/BaseUrl";
import { addData, setData } from "../../Redux/adminSlice";

export const roles = [
  "Site Administrator",
  "Content Administrator",
  "Marketing Administrator",
  "Booking Administrator",
  "Finance Administrator",
  "IT Administrator",
];

function RoleManagement() {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admins.admins);
  const [admin, setAdmin] = useState({});
  const [openCreate, setOpenCreate] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [nameErr, setNameErr] = useState("");

  // Get data
  useEffect(() => {
    getData();
  }, []);

  // Fetch admins
  const getData = async () => {
    try {
      const { data } = await BaseUrl.get("/admin/get-admins-data");
      dispatch(setData(data));
    } catch (err) {
      // handle err
    }
  };

  // Create new admin
  const createAdmin = async (e) => {
    e.preventDefault();
    const adminData = {
      name: name,
      role: role,
    };
    try {
      const { data } = await BaseUrl.post("/admin/add-admin", adminData);
      toast("Admin added successfully", {
        icon: "✅",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      document.getElementById("form").reset();
      setOpenCreate(false);
      dispatch(addData(data));
      setName("");
      setRole("");
    } catch (err) {
      toast("Something went wrong, try again", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  // Update role
  const updateRole = async () => {
    try {
      const { data } = await BaseUrl.patch("/admin/update-role", {
        id: admin._id,
        role: role,
      });
      if (data) {
        toast("Admin role updated", {
            icon: "✅",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        getData();
        setOpen(false)
      }
    } catch (err) {
      toast("Something went wrong, try again", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <a
          onClick={() => setOpenCreate((prev) => !prev)}
          className="bg-gray-800 justify-self-end relative cursor-pointer inline-flex items-center justify-center p-2 px-4 py-1 overflow-hidden font-medium text-black transition duration-1000 ease-out border-2 rounded-full shadow-xl group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-gray-800 group-hover:translate-x-0 ease">
            <i className="fa-sharp fa-solid fa-user-plus fa-lg text-white"></i>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Add Admin
          </span>
          <span className="relative invisible">Add Admin</span>
        </a>
      </div>
      <div className="overflow-scroll rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                State
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Role
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Change role
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {admins.map((admin) => {
              return (
                <tr className="hover:bg-gray-50">
                  <th className="flex items-center gap-3 px-6 py-6 font-normal text-gray-900">
                    <div className="hidden md:block relative h-10 w-10">
                      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg
                          className="absolute w-12 h-12 text-gray-400 -left-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {admin.name}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">{admin.role}</td>
                  <td className="px-14 py-4">
                    <a
                      className="cursor-pointer"
                      onClick={() => {
                        setOpen(true);
                        setAdmin(admin);
                      }}
                    >
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {openCreate && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

            <div className="inline-block overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Create new Admin
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
                  onClick={() => setOpenCreate(false)}
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
              <form onSubmit={createAdmin} id="form">
                <div className="px-4 py-2 sm:p-6 flex flex-col gap-5">
                  <div className="px-10">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 text-sm font-medium text-gray-600 absolute">
                      Name
                    </p>
                    <input
                      onChange={(e) => {
                        const regex = /^[a-zA-Z]+/;
                        if (
                          e.target.value.length > 0 &&
                          e.target.value.length < 3
                        ) {
                          setNameErr("Enter a valid name");
                        } else if (
                          e.target.value.length > 0 &&
                          !regex.test(e.target.value)
                        ) {
                          setNameErr("Enter a valid name");
                        } else {
                          setNameErr("");
                          setName(e.target.value);
                        }
                      }}
                      required
                      placeholder=""
                      name="name"
                      type="text"
                      className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-black p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-2xl"
                    />
                    {nameErr && (
                      <small className="text-red-600 ml-1">{nameErr}</small>
                    )}
                  </div>
                  <div className="px-10">
                    {roles.map((val, ind) => {
                      return (
                        <div key={ind} className="flex items-center mb-4">
                          <input
                            id={ind}
                            type="radio"
                            value={val}
                            required
                            onChange={(e) => setRole(e.target.value)}
                            name="role"
                            className="w-4 h-4 bg-gray-100 border-gray-300 dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for={ind}
                            class="ml-2 text-sm font-medium text-gray-900"
                          >
                            {val}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Create
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
              </form>
            </div>
          </div>
        </div>
      )}
      {open && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

            <div className="inline-block overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Change Admin Role
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
                  onClick={() => setOpen(false)}
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
                <p className="font-semibold text-gray-800 text-center text-lg">
                  Change the role of{" "}
                  <span className="font-semibold text-blue-500 text-center text-lg">
                    {admin.name}
                  </span>
                </p>
                <div className="px-10">
                  {roles.map((val, ind) => {
                    return (
                      <div key={ind} class="flex items-center mb-4">
                        <input
                          id={ind}
                          type="radio"
                          value={val}
                          required
                          onChange={(e) => setRole(e.target.value)}
                          name="role"
                          class="w-4 h-4 bg-gray-100 border-gray-300 dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for={ind}
                          className="ml-2 text-sm font-medium text-gray-900"
                        >
                          {val}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <>
                  <button
                    const
                    onClick={updateRole}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RoleManagement;
