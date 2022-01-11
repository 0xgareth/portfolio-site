import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <Header location={location} />
      
        <main>{children}</main>

      {/* footer */}
      <footer
          style={{
            marginBottom: `1rem`,
            bottom: 0,
            position: 'fixed',
            display:`flex`,
            justifyContent: `center`,
            width: `100%`,
            zIndex: `4`
          }}
        >
          <div style={{ display: `flex` }}>
            <Link to="https://twitter.com/gareth_was_here" target="_blank" style={{ textDecoration: `none`, padding: `0 4rem 0 4rem`, fontSize: `0.9vw`, fontFamily:`Montserrat-Light` }}>
                Twitter
            </Link>
            <Link to="https://github.com/garethiv" target="_blank" style={{ textDecoration: `none`, padding: `0 4rem 0 4rem`, fontSize: `0.9vw`, fontFamily:`Montserrat-Light` }}>
                Github
            </Link>
            <Link to="https://www.behance.net/garethveale" target="_blank" style={{ textDecoration: `none`, padding: `0 4rem 0 4rem`, fontSize: `0.9vw`, fontFamily:`Montserrat-Light` }}>
                Behance
            </Link>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
