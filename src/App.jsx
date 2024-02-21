import { useState, useEffect } from "react";
import Header from "./components/Header";
import { fetchAllArticles } from "./utils/utils";
import "./App.css";
import ArticleCard from "./components/ArticleCard";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((data) => {
      console.log(data);
      setArticles(data);
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <ul>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}

export default App;
