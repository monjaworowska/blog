import { NavLink } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">{user.name}</p>
      </div>
      <div className="card-footer">
        <p className="card-footer-item">{user.email}</p>
        <p className="card-footer-item">{user.website}</p>{" "}
        <NavLink
          className="card-footer-item"
          to={"/users/" + user.id + "/posts"}
        >
          {user.name + "'s"} posts
        </NavLink>
        <NavLink className="card-footer-item" to="/">
          All posts
        </NavLink>
      </div>
    </div>
  );
};

export default User;
