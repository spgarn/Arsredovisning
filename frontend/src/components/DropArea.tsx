import { observer } from 'mobx-react-lite';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import useStore from '../hooks/useStore';
import fileReader from '../functions/fileReader';
import extractCompanyFromSie from '../functions/extractCompanyFromSie';
import calculateResults from '../functions/calculateResults';
import calculateBalance from '../functions/calculateBalances';

const DropArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  text-align: center;
  background-color:#918686;
  border-radius: 8px;
`;

const DropFile = observer(() => {
  const { companyStore } = useStore();
  const handleOnDrop = async (acceptedFiles: File[]) => {
    const sieText = await fileReader(acceptedFiles[0]);
    const company = extractCompanyFromSie(sieText);
    company.result = calculateResults(company.accounts);
    company.balance = calculateBalance(company.accounts);
    companyStore.hydrate(company);
    localStorage.setItem('companyInfo', JSON.stringify(company));
  };

  return (
    <Dropzone onDrop={handleOnDrop}>
      {({ getRootProps, getInputProps }) => (

        <DropArea {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Släpp din SIE-fil här för att ladda upp filen.</p>
        </DropArea>

      )}
    </Dropzone>

  );
});

export default DropFile;
