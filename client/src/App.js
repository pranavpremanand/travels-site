import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./Pages/AdminPage";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import { BannerContext } from "./Components/Context/BannerContext";
import { useState } from "react";
import AboutPage from "./Pages/AboutPage";
import PackagesPage from "./Pages/PackagesPage";
import ManageRoles from "./Pages/ManageRoles";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  const [banner, setBanner] = useState("");
  return (
    <BannerContext.Provider
      value={{ banner: banner, setBanner: (url) => setBanner(url) }}
    >
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={true} />
        <div className="App bg-gradient-to-b from-blue-100 to-white">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              {/* <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/manage-roles" element={<ManageRoles />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </BannerContext.Provider>
  );
}

export default App;
