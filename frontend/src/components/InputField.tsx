import styled from 'styled-components';

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const Field = styled.div`
  margin-left: 2rem;
`;

const Input = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const InputField = ({ title, children }: IProps) => (
  <Wrapper>
    <Field>{title}</Field>
    <Input>{children}</Input>
  </Wrapper>
);

export default InputField;
