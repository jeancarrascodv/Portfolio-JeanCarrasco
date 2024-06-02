//import "./ProfileHeader.css";
import PropTypes from "prop-types";
import Image from "next/image";

///workspaces/cs220-portfolio-danielsgroup/src/components/LinksAbout/LinksImages/GitHub.png
const LinkAbout = ({ items, Email }) => {
  return (
    <div>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image src={item.image} alt="Image Not Found" width={24} height={24} />
              <p>{item.content}</p>
            </a>
          </div>
        ))}
      </div>

      {Email.map((item, index) => (
        <div key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Image src={item.image} alt="Image Not Found" width={24} height={24} />
            <p>{item.content}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

LinkAbout.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  Email: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

LinkAbout.defaultProps = {
  items: [],
  Email: [],
};

export default LinkAbout;
