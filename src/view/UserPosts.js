import List from "../component/List";

const UserPosts = (props) => {
  const { user, id } = props.match.params;

  const USER_POSTS_URL =
    "https://jsonplaceholder.typicode.com/users/" + id + "/posts";
  return (
    <div>
      <div className="notification is-info">Posts by {user}</div>
      <List url={USER_POSTS_URL} type="posts" />
    </div>
  );
};

export default UserPosts;
