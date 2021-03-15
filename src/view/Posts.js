import List from "../component/List";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  return <List url={POSTS_URL} />;
};
export default Posts;
