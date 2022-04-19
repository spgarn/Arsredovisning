import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  to:string
  margin?:string
  disabled?:boolean
}

const StyledLink = styled(NavLink)<Props>`
  text-decoration: none;
  margin:${(p) => p.margin};
  pointer-events:${(p) => p.disabled && 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink:React.FC<Props> = ({
  to, children, margin, disabled,
}) => (
  <StyledLink disabled={disabled} margin={margin} to={to}>
    {children}
  </StyledLink>
);

export default StyledNavLink;
