import { useParams } from "react-router-dom";

const ArticleById = () => {
  const { article_id } = useParams();
  console.log(article_id);
  return <h1>article</h1>;
};

export default ArticleById;
