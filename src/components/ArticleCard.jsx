const ArticleCard = ({ article }) => {
  return (
    <li>
      <h3>{article.title}</h3>
      <p>{article.topic}</p>
      {/* <div>{article}</div> */}
    </li>
  );
};

export default ArticleCard;
