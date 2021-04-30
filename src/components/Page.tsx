import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
padding:18px;
box-sizing:border-box;
`



const Page = ({ children }) => {

  return (
    <Container>
      {children}
    </Container>
  )
}



export default Page