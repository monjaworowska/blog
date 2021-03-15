import cx from "classnames";
import { NavLink } from "react-router-dom";

const PostTemplate = ({ post, user, details }) => {
  return (
    <div className={cx("card", details ? "" : null)}>
      <div className="card-header">
        <p className="card-header-title">
          <span className="is-uppercase is-size-3">
            {post.title ? post.title.slice(0, 1) : null}
          </span>
          {!details
            ? post.title
              ? post.title.slice(1, 10) + "..."
              : null
            : post.title
            ? post.title.slice(1, post.title.length)
            : null}
        </p>
      </div>
      <p className="card-content">
        <span className="is-uppercase is-size-3">
          {post.body ? post.body.slice(0, 1) : null}
        </span>
        {!details
          ? post.body
            ? post.body.slice(1, 50) + "..."
            : null
          : post.body
          ? post.body.slice(1, post.body.length)
          : null}
        .
      </p>
      <div className="card-footer">
        {details ? (
          <>
            <NavLink
              to={"/" + user.id + "/" + user.username + "/posts"}
              className="card-footer-item"
            >
              By {user.username}
            </NavLink>
            <p className="card-footer-item">{user.email}</p>
          </>
        ) : (
          <p className="card-footer-item">By {user.username}</p>
        )}
      </div>
    </div>
  );
};

export default PostTemplate;
