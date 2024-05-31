import './Navbar.css';
import PropTypes from 'prop-types';

function Navbar({
  options = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ],
}) {
  return (
    <nav data-testid="nav" className="navbar">
      <ul data-testid="ul">
        {options.map((item, index) => (
          <li key={index} data-testid={'li' + index}>
            <a data-testid={'a' + index} className="link" href={item.path}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
