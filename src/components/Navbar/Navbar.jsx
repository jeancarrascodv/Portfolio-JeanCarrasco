import './Navbar.css';
import PropTypes from 'prop-types';
//import { useRouter } from 'next/navigation';

function Navbar({
  options = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ],
}) {

  //const router = useRouter();
  return (
    <nav data-testid="nav" className="navbar h-10 w-72 items-center justify-center shadow-lg shadow-indigo-500/40">
      <ul data-testid="ul">
        {options.map((item, index) => (
          <li key={index} data-testid={'li' + index}>
            <a data-testid={'a' + index}
            className="link" href={item.path}>
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
