import React, { useEffect } from 'react';
import styled from 'styled-components'
import { readFile } from '../functions/ReadFile'

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
  const [text, setText] = React.useState([])
  useEffect(() => {
    fileInfo && readFile(fileInfo[0], setText)
  }, [fileInfo])

  if (!fileInfo) return <TextArea />

  return (
    < TextArea >{text.map((word, i) => <p key={i}>{word}</p>)}</TextArea >


  )
}



export default PreviewText