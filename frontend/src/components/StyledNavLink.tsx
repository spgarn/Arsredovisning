import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  to: string;
  margin?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const StyledLink = styled(NavLink)<IProps>`
  text-decoration: none;
  margin: ${(p) => p.margin};
  pointer-events: ${(p) => p.disabled && 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: '100%';
`;

const StyledNavLink = ({ to, children, margin, disabled, ...rest }: IProps) => (
  <StyledLink {...rest} disabled={disabled} margin={margin} to={to}>
    {children}
  </StyledLink>
);

export default StyledNavLink;
