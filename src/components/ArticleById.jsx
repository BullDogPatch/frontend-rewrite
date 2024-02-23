import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/utils";
import Moment from "moment";
import footballImage from "../images/football.png";
import cookingImage from "../images/cooking.png";
import codingImage from "../images/coding.png";
import Loading from "./Loading";

const ArticleById = () => {
  const { article_id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["articleById", article_id],
    queryFn: () => fetchArticleById(article_id),
  });

  console.log("data", data);
  if (isLoading) return <Loading />;

  return (
    <>
      <h3>{data.article.title}</h3>
      <h5>{data.article.topic}</h5>
      <div>
        {data.article.topic === "coding" ? (
          <img className="topic-image" src={codingImage} alt="coding" />
        ) : data?.article.topic === "cooking" ? (
          <img className="topic-image" src={cookingImage} alt="cooking" />
        ) : (
          <img className="topic-image" src={footballImage} alt="football" />
        )}
      </div>
      <p>{data.article.body}</p>
      <p>
        <span style={{ color: "red" }}>Author: </span>
        {data.article.author}
      </p>
      <p>
        <span style={{ color: "red" }}>Created at: </span>
        {Moment(data.article.created_at).format("MMMM Do YYYY")}
      </p>
      <p>Votes: {data.article.votes}</p>
    </>
  );
};

export default ArticleById;
