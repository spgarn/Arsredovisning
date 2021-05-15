import styled from 'styled-components';
import { observer } from 'mobx-react';
import useStore from '../hooks/useStore';

const TextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align:  center;
  background-color: #f5f7fa;
  border-radius: 8px;
  margin-top: 12px;
  flex-wrap: nowrap;
`;

const Test = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px;
  `;

const PreviewText = observer(() => {
  const { companyStore } = useStore();
  return (
    <>
      <TextArea>{companyStore?.company?.info?.name}</TextArea>
      <Test>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </Test>
    </>
  );
});

export default PreviewText;
