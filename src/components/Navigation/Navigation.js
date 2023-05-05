import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <Nav>
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
    </Nav>
  );
};
