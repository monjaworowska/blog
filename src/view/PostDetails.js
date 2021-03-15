import Post from "../component/Post";

const PostDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="columns">
      <Post id={id} details />
    </div>
  );
};

export default PostDetails;
