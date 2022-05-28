import type { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  box-sizing: border-box;
`;

interface IProps {
  children: ReactNode;
}

const Page = ({ children }: IProps) => <Container>{children}</Container>;

export default Page;
