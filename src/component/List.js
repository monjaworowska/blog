import React from "react";
import cx from "classnames";
import Post from "./Post";
import User from "./User";

class List extends React.Component {
  state = { data: [], sites: 0, site: 0 };
  componentDidMount() {
    fetch(this.props.url).then((response) =>
      response
        .json()
        .then((data) => this.setState({ data: data, sites: data.length / 10 }))
    );
  }
  render() {
    const { site, sites } = this.state;
    const data = this.state.data.slice(site * 10, site * 10 + 10);
    const { type } = this.props;
    return (
      <>
        <div className="pagination is-centered is-small">
          <ul className="pagination-list"></ul>
          {Array(sites)
            .fill(1)
            .map((el, i) => (
              <li
                className={cx(
                  "pagination-link",
                  site === i ? "is-current" : null
                )}
                key={i}
                onClick={() => this.setState({ site: i })}
              >
                {i + 1}
              </li>
            ))}
        </div>
        <div className="columns is-multiline mt-1">
          {type === "posts"
            ? data.map((post) => <Post id={post.id} key={post.id} />)
            : type === "users"
            ? data.map((user) => (
                <div className="column is-half" key={user.id}>
                  <User user={user} />
                </div>
              ))
            : null}
        </div>
      </>
    );
  }
}
export default List;
