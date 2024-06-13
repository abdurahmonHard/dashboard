import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="/images/logo.png"
              style={{ height: "46" }}
              className="logo"
              alt="ecommerce dashboard template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <FontAwesomeIcon icon={faBarsStaggered} size="lg" style={{ color: "#6c757d", }} />
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}
              >
                <FontAwesomeIcon className="icon" icon={faHouseChimney} style={{ color: "#63E6BE", }} />
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/products"
              >
                <FontAwesomeIcon className="icon" icon={faBagShopping} style={{ color: "#63E6BE", }} />
                <span className="text">Products</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/addproduct"
              >
                <FontAwesomeIcon className="icon" icon={faCartPlus} style={{ color: "#63E6BE", }} />
                <span className="text">Add product</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/category"
              >
                <FontAwesomeIcon className="icon" icon={faList} style={{ color: "#63E6BE", }} />
                <span className="text">Categories</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/orders"
              >
                <i className='icon bags bx bxs-shopping-bags'></i>
                <span className="text">Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/users"
              >
                <FontAwesomeIcon className="icon" icon={faUser} style={{ color: "#63E6BE", }} />
                <span className="text">Users</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/sellers"
              >
                <FontAwesomeIcon className="icon" icon={faShop} style={{ color: "#63E6BE", }} />
                <span className="text">Sellers</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link desabled"
                to="/transaction"
              >
                <i className='icon bags bx bxs-dollar-circle'></i>
                <span className="text">Transaction</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar;