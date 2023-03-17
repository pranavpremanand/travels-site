import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import BannerMgt from "../Components/BannerMgt";

const AdminPage = () => {
  return (
    <div className="min-h-screen">
      <AdminNavbar />
      <BannerMgt/>
    </div>
  );
};

export default AdminPage;
