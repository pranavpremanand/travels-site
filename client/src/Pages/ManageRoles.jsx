import React from "react";
import RoleManagement from "../Components/AdminCredentials/RoleManagement";
import AdminNavbar from "../Components/AdminNavbar";

const ManageRoles = () => {
  return (
    <div>
      <AdminNavbar page={'role-management'}/>
      <RoleManagement />
    </div>
  );
};

export default ManageRoles;
