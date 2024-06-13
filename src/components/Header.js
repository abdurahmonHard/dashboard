import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/userActions";



const Header = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const handleOffcanvasClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const offcanvasId = e.currentTarget.getAttribute("data-trigger");
      const offcanvasElement = document.querySelector(offcanvasId);
      offcanvasElement.classList.toggle("show");
    };

    const handleAsideMinimizeClick = () => {
      if (window.innerWidth < 768) {
        document.body.classList.remove("aside-mini");
        const navbarAsideElement = document.querySelector(".navbar-aside");
        navbarAsideElement.classList.remove("show");
      } else {
        // minimize sidebar on desktop
        document.body.classList.toggle("aside-mini");
      }
    };

    document
      .querySelectorAll("[data-trigger]")
      .forEach((element) => element.addEventListener("click", handleOffcanvasClick));

    document
      .querySelector(".btn-aside-minimize")
      .addEventListener("click", handleAsideMinimizeClick);

    return () => {
      document
        .querySelectorAll("[data-trigger]")
        .forEach((element) => element.removeEventListener("click", handleOffcanvasClick));

      document
        .querySelector(".btn-aside-minimize")
        .removeEventListener("click", handleAsideMinimizeClick);
    };
  }, []);

  const logoutHandler = ()=>{
    dispatch(logout)
  }
  
  return (
    <header className="main-header navbar">
      <div className="col-search">
        <form className="searchform">
          <div className="input-group">
            <input
              list="search_terms"
              type="text"
              className="form-control"
              placeholder="Search term"
            />
            <button className="btn btn-light bg" type="button">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#63E6BE", }} />
            </button>
          </div>
          <datalist id="search_terms">
            <option value="Products" />
            <option value="New orders" />
            <option value="Apple iphone" />
            <option value="Ahmed Hassan" />
          </datalist>
        </form>
      </div>
      <div className="col-nav">
        <button className="btn btn-icon btn-mobile me-auto" data-trigger="#offcanvas-aside">
          <FontAwesomeIcon className="md-28" icon={faBarsStaggered} size="lg" style={{ color: "#6c757d", }} />
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link className={`nav-link btn-icon`} title="dark mode" to="#">
              <FontAwesomeIcon icon={faMoon} size="lg" style={{ color: "#63E6BE", }} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-icon" to="#">
              <FontAwesomeIcon icon={faBell} style={{ color: "#63E6BE", }} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              English
            </Link>
          </li>
          <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              <img
                className="img-xs rounded-circle"
                src="/images/favicon.png"
                alt="User"
              />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/">
                Settings
              </Link>
              <Link onClick={logoutHandler} className="dropdown-item text-danger" to="/">
                Exit
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;