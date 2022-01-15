import type { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 18px;
  box-sizing: border-box;
`;

type Props = {
  children: ReactNode
}

const Page:React.FC<Props> = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Page;
