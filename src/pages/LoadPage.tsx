import React from 'react';
import styled from 'styled-components'
import Page from '../components/Page'
import DropArea from '../components/DropArea'
import PreviewText from '../components/PreviewText'
import { dataStore } from '../functions/dataStore';





const LoadPage = () => {
  const [fileInfo, setFileInfo] = React.useState('')


  return (
    <Page>
      <DropArea setFileInfo={setFileInfo} />
      <PreviewText fileInfo={fileInfo} />
    </Page>
  )
}



export default LoadPage