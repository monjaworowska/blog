import { NavLink } from "react-router-dom";

const Post = ({ post, user, details }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">
          <span className="is-uppercase is-size-3">
            {post.title.slice(0, 1)}
          </span>
          {!details
            ? post.title.slice(1, 50) + "..."
            : post.title.slice(1, post.title.length)}
        </p>
      </div>
      <p className="card-content">
        <span className="is-uppercase is-size-3">{post.body.slice(0, 1)}</span>
        {!details
          ? post.body.slice(1, 50) + "..."
          : post.body.slice(1, post.body.length)}
        .
      </p>
      <div className="card-footer">
        <p className="card-footer-item">
          <NavLink to={"/users/" + user.id + "/posts"}>By {user.name}</NavLink>
        </p>
        {details ? <p className="card-footer-item">{user.email}</p> : null}
      </div>
    </div>
  );
};

export default Post;
