const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.author}</p>
      <p>{comment.body}</p>
    </div>
  );
};
export default Comment;
