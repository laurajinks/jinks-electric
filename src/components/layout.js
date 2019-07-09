import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          marginTop: '7em',
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{display: 'flex', justifyContent: 'center'}}>
          © {new Date().getFullYear()}, Jinks Electric Co
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
