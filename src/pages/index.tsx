import styled from '@emotion/styled'
import Footer from 'components/Common/Footer'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/introduction'
import React, { FunctionComponent } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <Footer />
    </Container>
  )
  //
}

export default IndexPage
