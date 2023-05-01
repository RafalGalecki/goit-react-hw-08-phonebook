import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const activeNav = active => {
  switch (active) {
    case 'on':
      return 'color: violet';
    case 'off':
      return 'color: blueviolet';
    default:
      return 'color: blueviolet';
  }
};

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  font-family: Coiny;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: magenta;
  }
  &:not(:hover, :focus) {
    ${({ active }) => activeNav(active)}
  }
  nav &:hover,
  nav &:focus {
    color: magenta;
  }
`;

