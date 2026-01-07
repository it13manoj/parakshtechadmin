import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Sidebar = ({ setIsLogin }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    window.location.href = "/";
  };
  return (
    <div className="navbar-default sidebar" role="navigation">
      <div className="sidebar-nav navbar-collapse">
        <ul className="nav" id="side-menu">

          <li>
            <Link to="/">
              <i className="fa fa-dashboard fa-fw nav_icon"></i> Dashboard
            </Link>
          </li>



          {/* DROPDOWN */}
          <li className={openMenu === "home" ? "active" : "nav"}>
            <Link
              className="sidebar-link"
              onClick={() => toggleMenu("home")}
            >
              <i className="fa fa-indent  fa-fw nav_icon"></i>
              Home
              <span className="fa arrow"></span>
            </Link>

            {openMenu === "home" && (
              <ul className="nav nav-second-level">
                <li>
                  <Link to="/home/hero">Hero</Link>
                </li>
                <li>
                  <Link to="/home/valuedservices">Valued Services</Link>
                </li>
                <li>
                  <Link to="/home/whychooseus">Why Choose Us</Link>
                </li>
                <li>
                  <Link to="/home/ourfeatures">Our Features</Link>
                </li>
              </ul>
            )}
          </li>

          <li className={openMenu === "about" ? "active" : "nav"}>
            <Link
              className="sidebar-link"
              onClick={() => toggleMenu("about")}
            >
              <i className="fa fa-indent  fa-fw nav_icon"></i>
              About
              <span className="fa arrow"></span>
            </Link>

            {openMenu === "about" && (
              <ul className="nav nav-second-level">
                <li>
                  <Link to="/about/hero">Hero</Link>
                </li>
                <li>
                  <Link to="/about/expertPeople">Expert People</Link>
                </li>
                <li>
                  <Link to="/about/valuedservices">About Us</Link>
                </li>

              </ul>
            )}
          </li>
          <li>
            <Link to="/service-details"><i className="fa fa-indent  fa-fw nav_icon"></i>Service Details</Link>
          </li>
          <li>
            <Link to="/upload-images"><i className="fa fa-indent  fa-fw nav_icon"></i>Upload Images</Link>
          </li>
          <li>
            <Link to="/footers"><i className="fa fa-indent  fa-fw nav_icon"></i>Footers</Link>
          </li>
          <li>
            <Link to="/career"><i className="fa fa-indent  fa-fw nav_icon"></i>Career</Link>
          </li>
          <li>
            <Link to="#" onClick={logout}><i className="fa fa-indent  fa-fw nav_icon"></i>Logout</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
