//"use client";
import './Navbar.css';
import PropTypes from 'prop-types';
/*import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';*/

function Navbar({
  options = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ],
}) {
/*
  const pathname = usePathname(); // Use the usePathname hook
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (pathname) { // Check if pathname is ready
      setCurrentPath(pathname);
    }
  }, [pathname]);*/
  //const router = useRouter();  <DropDown className="sm:hidden" />
  return (
    <nav data-testid="nav" className="hidden sm:flex navbar h-10 w-72 items-center justify-center shadow-lg
     shadow-indigo-500/40 dark:bg-neutral-800  ">
      <ul data-testid="ul">
        {options.map((item, index) => (
          <li key={index} data-testid={'li' + index}>
            <a data-testid={'a' + index}
            className="link dark:text-white" href={item.path} >
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
