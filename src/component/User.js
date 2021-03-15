import { NavLink } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">{user.username}</p>
      </div>
      <div className="card-footer">
        <p className="card-footer-item">{user.email}</p>
        <NavLink
          className="card-footer-item"
          to={"/" + user.id + "/" + user.username + "/posts"}
        >
          {user.username + "'s"} posts
        </NavLink>
      </div>
    </div>
  );
};

export default User;
