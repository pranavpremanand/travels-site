import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./Pages/AdminPage";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import { BannerContext } from "./Components/Context/BannerContext";
import { useState } from "react";

function App() {
  const [banner, setBanner] = useState("");
  return (
    <BannerContext.Provider
      value={{ banner: banner, setBanner: (url) => setBanner(url) }}
    >
      <Toaster position="top-center" reverseOrder={true} />
      <div className="App bg-gradient-to-b from-blue-200 to-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BannerContext.Provider>
  );
}

export default App;
