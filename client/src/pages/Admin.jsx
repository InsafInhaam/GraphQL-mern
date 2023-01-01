import React from "react";
import AddAdminModel from "../components/AddAdminModel";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Admins from "../components/Admins";

const Admin = () => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div id="content">
        <Header />
        <div className="container p-5">
          <div className="d-flex gap-3 mb-4">
            <AddAdminModel />
          </div>
          <Admins />
        </div>
      </div>
    </div>
  );
};

export default Admin;
