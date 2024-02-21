import { useState, useEffect } from "react";
import { fetchAllArticles } from "../utils/utils";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((data) => {
      console.log(data);
      setArticles(data);
    });
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default Articles;
