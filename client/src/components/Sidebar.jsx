import React from "react";
import logo from "./assets/logo2.png";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" className="mr-2 " width="100px" />
        </a>
        <hr />
      </div>
      <ul className="list-unstyled components">
        <p>MENUS</p>
        <li>
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Dashboard
          </a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="/">Top Views</a>
            </li>
            <li>
              <a href="#">Dashboard2</a>
            </li>
            <li>
              <a href="#">Dashboard3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Subscribers
          </a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Idle</a>
            </li>
            <li>
              <a href="#">Non Active</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Timeline</a>
        </li>
        <li>
          <a href="#">Live Chat</a>
        </li>
        <li>
          <a href="#">Likes</a>
        </li>
        <li>
          <a href="#">Comments</a>
        </li>
      </ul>
      <ul className="list-unstyled CTAs">
        <li>
          <a href="#" className="download">
            Subscribe
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
