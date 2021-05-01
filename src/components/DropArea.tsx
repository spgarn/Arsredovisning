import { observer } from 'mobx-react-lite';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import useStore from '../hooks/useStore';

const DropArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  text-align: center;
  background-color:#c2e9fb;
  border-radius: 8px;
`;

const DropFile = observer(() => {
  const { infoStore } = useStore();
  const handleOnDrop = (acceptedFiles: File[]) => {
    infoStore.readFile(acceptedFiles[0]);
  };

  return (
    <Dropzone onDrop={handleOnDrop}>
      {({ getRootProps, getInputProps }) => (

        <DropArea {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Släpp din SIE-fil här så laddas det in en preview på din årsredovisning i PDF</p>
        </DropArea>

      )}
    </Dropzone>

  );
});

export default DropFile;
