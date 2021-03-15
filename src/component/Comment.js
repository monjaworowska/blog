const Comment = ({ comment }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title notification is-primary">
          By {comment.email}
        </p>
      </div>
      <p className="card-content">
        <span className="is-uppercase is-size-3">
          {comment.body.slice(0, 1)}
        </span>
        {comment.body.slice(1, comment.body.length)}.
      </p>
    </div>
  );
};

export default Comment;
