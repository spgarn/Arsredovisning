import React, { useEffect } from 'react';
import styled from 'styled-components'
import { infoStore } from '../functions/infoStore'

const TextArea = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction:column;
height:100%;
text-align: center;
background-color:#f5f7fa;
border-radius:8px;
margin-top:12px;
flex-wrap:nowrap;
`



const PreviewText = ({ fileInfo }) => {
  useEffect(() => {
    fileInfo && infoStore.readFile(fileInfo[0])
  }, [fileInfo])

  useEffect(() => {
    infoStore.file_text && infoStore.getCompanyInfo()
  }, [infoStore.file_text])


  return (
   <>
    < TextArea >{infoStore?.company?.company_info?.name}</TextArea >
    {console.log(infoStore?.company?.company_info?.name)}
    <button onClick={() => infoStore.getCompanyInfo()}></button>
</>
  )
}



export default PreviewText