import { useQuery } from "@tanstack/react-query";
import { fetchAllArticles } from "../utils/utils";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchAllArticles,
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <ul>
        {data.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  );
};

export default Articles;
