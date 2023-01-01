import React from "react";

const Header = () => {
  const hideSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    } else {
      sidebar.classList.add("active");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        type="button"
        id="sidebarCollapse"
        className="btn btn-info"
        onClick={hideSidebar}
      >
        <i className="fa fa-align-justify"></i>
      </button>

      <h3 className="px-3 mt-1">Project Management</h3>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto navbar-ul">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
