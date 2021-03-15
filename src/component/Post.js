import React from "react";
import { NavLink } from "react-router-dom";
import PostTemplate from "./PostTemplate";
import Comment from "./Comment";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts/";
const USER_URL = "https://jsonplaceholder.typicode.com/users/";

class Post extends React.Component {
  state = {
    id: this.props.id,
    details: this.props.details,
    post: [],
    user: [],
    comments: [],
  };
  componentDidMount() {
    fetch(POSTS_URL + this.state.id).then((response) =>
      response.json().then((data) => {
        this.setState({ post: data });
        fetch(USER_URL + this.state.post.userId).then((response) =>
          response.json().then((data) => {
            this.setState({ user: data });
          })
        );
      })
    );
    if (this.state.details) {
      fetch(POSTS_URL + this.state.id + "/comments").then((response) =>
        response.json().then((data) => this.setState({ comments: data }))
      );
    }
  }
  render() {
    const { post, user, comments, details } = this.state;
    return (
      <>
        {details ? (
          <div className="container mt-3">
            <PostTemplate post={post} user={user} details={details} />
            <div className="mt-4">
              {comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
          </div>
        ) : (
          <NavLink to={"/post/" + post.id} className="column is-one-third">
            <PostTemplate post={post} user={user} />
          </NavLink>
        )}
      </>
    );
  }
}

export default Post;
/**/
