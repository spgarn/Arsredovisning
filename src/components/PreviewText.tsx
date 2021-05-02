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

const PreviewText = observer(() => {
  const { sieStore } = useStore();
  return (
    <>
      <TextArea>{sieStore?.company?.info?.name}</TextArea>
    </>
  );
});

export default PreviewText;
