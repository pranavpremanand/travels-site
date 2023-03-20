import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import NotFoundImg from "./../assets/notfoundImage.png";
import { BaseUrl } from "../API/BaseUrl";
import { BannerContext } from "./Context/BannerContext";
import axios from "axios";

const BannerMgt = () => {
  const imageRef = useRef();
  const [imgForm, setImgForm] = useState("");
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [imag, setImage] = useState({});
  const { banner, setBanner } = useContext(BannerContext);

  //Get current banner
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

  //Set banner
  const changeBanner = (file) => {
    const fData = new FormData();
    fData.append("file", file.target.files[0]);
    fData.append("upload_preset", "aiaeajln");
    setImgForm(fData);
    if (file.target.files && file.target.files[0]) {
      if (
        file.target.files[0].type === "image/png" ||
        file.target.files[0].type === "image/jpeg" ||
        file.target.files[0].type === "image/jpg"
      ) {
        let img = file.target.files[0];
        setImage({ image: URL.createObjectURL(img) });
        setOpen(true);
      } else {
        toast("Select an image file", {
          icon: "❌",
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  };

  //Upload banner
  const addBanner = async () => {
    let img;
    if (imag) {
      const response = await axios.post(
        process.env.REACT_APP_CLOUDINARY,
        imgForm
      );
      if (response.data) {
        img = response.data.secure_url;
      }
      setUpdate(true);
      await BaseUrl.patch("/admin/change-banner", { url: img })
        .then(() => {
          toast("Banner updated successfully", {
            icon: "✅",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setOpen(false);
          setUpdate(false);
          getBanner();
        })
        .catch((err) => {
          setOpen(false);
          setUpdate(false);
          toast("Something went wrong, try again", {
            icon: "❌",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        });
    } else {
      setOpen(false);
      toast("Select a banner image to upload", {
        icon: "❌",
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  return (
    <div>
      <div className="pl-5 md:pl-8 flex flex-col justify-center md:justify-start">
        <img
          src={banner ? banner : NotFoundImg}
          className="w-3/4 md:w-1/2 rounded-lg"
          alt=""
        />
        <div className="mt-3">
          <button
            onClick={() => imageRef.current.click()}
            type="button"
            className=" hover:text-gray-800 flex break-inside rounded-xl px-3 py-2 mb-4 bg-gray-800 border-2 hover:bg-white hover:border-gray-800 dark:text-white"
          >
            <span className=" text-md font-medium">Change Banner</span>
          </button>
        </div>
        <div hidden>
          <input
            name="banner"
            accept="image/png,image/jpeg,image/jpg"
            ref={imageRef}
            type="file"
            onChange={(e) => changeBanner(e)}
          />
        </div>
        {open && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

              <div className="inline-block overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-between">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Update Banner
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
                <div className="px-4 py-2 sm:p-6">
                  <p className="text-gray-700">Are you sure?</p>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  {!update ? (
                    <>
                      <button
                        onClick={addBanner}
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
                  ) : (
                    <>
                      <button
                        disabled
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Banner updating
                      </button>
                      <button
                        disabled
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:mt-0 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerMgt;
