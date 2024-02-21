import footballImage from "../images/football.png";
import cookingImage from "../images/cooking.png";
import codingImage from "../images/coding.png";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <h3>{article.title}</h3>
      <p>{article.topic}</p>
      <div>
        {" "}
        {article.topic === "coding" ? (
          <img className="topic-image" src={codingImage} alt="coding" />
        ) : article.topic === "cooking" ? (
          <img className="topic-image" src={cookingImage} alt="cooking" />
        ) : (
          <img className="topic-image" src={footballImage} alt="football" />
        )}
      </div>
    </li>
  );
};

export default ArticleCard;
