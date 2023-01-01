import React from "react";
import Clients from "../components/Clients";
import AddClientModel from "../components/AddClientModel";
import Projects from "../components/Projects";
import AddProjectModel from "../components/AddProjectModal";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Header />
          <div className="content-wrapper">
            {/* <div className="container p-5"> */}
            <div className="d-flex gap-3 mb-4">
              <AddClientModel />
              <AddProjectModel />
            </div>
            <Projects />
            <hr />
            <Clients />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
