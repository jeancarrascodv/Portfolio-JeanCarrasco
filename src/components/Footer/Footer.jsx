import './Footer.css';
import PropTypes from 'prop-types';

/* TODO:
  Fill out this component according to the README.
*/

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="footer">
      <ul>
        {links.map((item, index) => (
          <li data-testid={'footerLink' + index} key={'item' + index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

      <p data-testid="footerContent">{`© ${year}`}</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
