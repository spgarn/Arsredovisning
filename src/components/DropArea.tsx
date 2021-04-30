import React from 'react';
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

const DropArea = styled.div`
display: flex;
justify-content: center;
align-items:center;
height:25vh;
text-align: center;
background-color:#c2e9fb;
border-radius:8px;
`



const DropFile = ({ setFileInfo }) => {

  return (

    <Dropzone onDrop={acceptedFiles => setFileInfo(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (

        <DropArea {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Släpp din SIE-fil här så laddas det in en preview på din årsredovisning i PDF</p>
        </DropArea>

      )}
    </Dropzone>


  )
}



export default DropFile