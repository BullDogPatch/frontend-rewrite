import { fetchCommentsByArticleId } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Comment from "./Comment";

const Comments = ({ article_id }) => {
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments", article_id],
    queryFn: () => fetchCommentsByArticleId(article_id),
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
