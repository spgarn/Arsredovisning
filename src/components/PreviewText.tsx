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
  const { infoStore } = useStore();
  return (
    <>
      <TextArea>{infoStore.fileText}</TextArea>
      <TextArea>{infoStore?.company?.companyInfo?.name}</TextArea>
      <button type="button" onClick={() => infoStore.getCompanyInfo()} />
    </>
  );
});

export default PreviewText;
