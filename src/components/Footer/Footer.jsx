import './Footer.css';
import PropTypes from 'prop-types';

/* TODO:
  Fill out this component according to the README.
*/

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="footer  bg-white text-justify
    sm:flex flex-col justify-between">
      <ul>
        {links.map((item, index) => (
          <li data-testid={'footerLink' + index} key={'item' + index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

      <p data-testid="footerContent" className='pt-6 sm:pt-0'>{`© ${year} John Doe. All rights reserved`}</p>
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
