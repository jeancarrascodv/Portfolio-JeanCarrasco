/* DON'T CHANGE ME */
import "./UseCard.css";
import PropTypes from "prop-types";

const UsesCard = ({ title, content }) => {
  return (
    <div className="uses-card sm:w-3/4">
  
        <h3>{title}</h3>
        <p>{content}</p>

    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default UsesCard;
