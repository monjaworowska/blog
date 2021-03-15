import { useState } from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [isActive, toggleIsActive] = useState(0);
  return (
    <nav className="navbar is-light mb-3">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          Blog
        </NavLink>
        <div
          className={cx("navbar-burger", isActive ? "is-active" : null)}
          onClick={() => toggleIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={cx("navbar-menu", isActive ? "is-active" : null)}
        onClick={() => toggleIsActive(!isActive)}
      >
        <NavLink className="navbar-item" to="/posts">
          Posts
        </NavLink>
        <NavLink className="navbar-item" to="/users">
          Users
        </NavLink>
        <NavLink className="navbar-item" to="/albums">
          Albums
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
