import "./AboutHeader.css";
import PropTypes from "prop-types";
///workspaces/cs220-portfolio-danielsgroup/src/components/AboutHeader/AboutHeader.css
const AboutHeader = ({items}) => {
  // const defaultImageUrl = "/src/components/ProfileHeader/ProfileIcon/kirby.png";
  return (
    <div className="profile-header">
      {items.map((item, index) => (
        <div key={index}>
          <h1 className="home-head-title">{item.title}</h1>
          {item.content.map((contentItem, contentIndex) => (
            <p className="home-description" key={contentIndex}>
              {contentItem.inside}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

AboutHeader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          inside: PropTypes.string.isRequired,
        })
      ).isRequired,

    })
  ).isRequired,
};


AboutHeader.defaultProps = {
  items: {
    title: "Default",
    content: [],
  },
};

export default AboutHeader;
