import footballImage from "../images/football.png";
import cookingImage from "../images/cooking.png";
import codingImage from "../images/coding.png";
import Moment from "moment";
console.log(Moment);

const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
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
      <p>
        <span style={{ color: "red" }}>Created at</span>
        {Moment(article.created_at).format("MMMM Do YYYY")}
      </p>
    </li>
  );
};

export default ArticleCard;
