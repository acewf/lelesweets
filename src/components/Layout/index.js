import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"

const Layout = ({ children, pageContext: { data } }) => {
  const { info } = data;
  console.log('info:>>', info);
  return (
    <>
      <Header
        siteTitle={data.info.logoTitle}
        logo={data.info.logoHeader} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
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
