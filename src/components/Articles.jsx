import { useState, useEffect } from "react";
import { fetchAllArticles } from "../utils/utils";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      fetchAllArticles().then((data) => {
        console.log(data);
        setLoading(false);
        setArticles(data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default Articles;
