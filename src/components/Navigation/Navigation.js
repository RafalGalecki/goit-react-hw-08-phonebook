//import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <nav>
      <Link active={location.pathname === '/' ? 'on' : 'off'} to="/" end>
        Home
      </Link>
      {isLoggedIn && (
        <Link
          active={location.pathname.startsWith('/phonebook') ? 'on' : 'off'}
          to="/phonebook"
        >
          Phonebook
        </Link>
      )}
    </nav>
  );
};
