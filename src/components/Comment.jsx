import Moment from "moment";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>
        <span style={{ color: "red" }}>created at:</span>{" "}
        {Moment(comment.created_at).format("MMMM Do YYYY")}
      </p>
      <p>
        <span style={{ color: "red" }}>Votes: </span>
        {comment.votes}
      </p>
    </div>
  );
};
export default Comment;
