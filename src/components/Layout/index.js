import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled';

import Header from "../Header"
import Footer from "../Footer"

//#E1E2E1

const Wrapper = styled.div`
  padding-top:0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 148px);
`

const Main = styled.main`
  display:flex;
  flex:1 1 auto;
  flex-direction:column;
`

const Layout = ({ children }) => {
  const { props } = children;
  const { data: { infoJson } } = props;
  return (
    <>
      <Header
        siteTitle={infoJson.logoTitle}
        logo={infoJson.logoHeader.publicURL} />
      <Wrapper>
        <Main>{children}</Main>
        <Footer>
          contacts: {infoJson.email}
        </Footer>
      </Wrapper>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
