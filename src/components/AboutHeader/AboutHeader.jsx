//import "./AboutHeader.css";
import PropTypes from "prop-types";
///workspaces/cs220-portfolio-danielsgroup/src/components/AboutHeader/AboutHeader.css
const AboutHeader = ({items}) => {
  // const defaultImageUrl = "/src/components/ProfileHeader/ProfileIcon/kirby.png";
  return (
    <div className="flex flex-col items-center lg:items-start mx-auto max-w-md lg:max-w-3xl w-full box-border p-4 border border-red-500">
      {items.map((item, index) => (
        <div key={index}>
          <h1 className="text-lg lg:text-2xl font-bold mb-2 text-center lg:text-left border border-green-500">{item.title}</h1>
          {item.content.map((contentItem, contentIndex) => (
            <p className="text-sm lg:text-base text-center lg:text-left border border-blue-500" key={contentIndex}>
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
