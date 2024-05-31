import "./ArticleCard.css";
import vector from "./vector.png";
import Image from "next/image";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

// key={index}
//           date={article.date}
//           title={article.title}
//           content={article.content}
//           link={article.link}

const ArticleCard = ({ date, title, content, link }) => {
  return (
    <article data-testid={"articleCard"} className="article-card">
      <div className="article-card-header">
        <time data-testid={"articleCardDate"}>{date}</time>
        <h2 data-testid={"articleCardTitle"}>{title}</h2>
      </div>

      <p data-testid={"articleCardContent"}>{content}</p>
      <a data-testid={"articleCardLink"} href={link}>
        Read article <Image  src={vector} alt="arrow Icon" width={16} height={16} />
      </a>
    </article>
  );
};

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ArticleCard.defaultProps = {
  link: "#",
};

export default ArticleCard;
