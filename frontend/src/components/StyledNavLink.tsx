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
  width:'100%';
`;

const StyledNavLink:React.FC<Props> = ({
  to, children, margin, disabled, ...rest
}) => (
  <StyledLink {...rest} disabled={disabled} margin={margin} to={to}>
    {children}
  </StyledLink>
);

export default StyledNavLink;
