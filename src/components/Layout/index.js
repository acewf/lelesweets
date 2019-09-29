import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"

//#E1E2E1


const Layout = ({ children, pageContext: { data } }) => {
  const { info } = data;
  return (
    <>
      <Header
        siteTitle={data.info.logoTitle}
        logo={data.info.logoHeader} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          contacts: {info.email}
        </footer>
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
