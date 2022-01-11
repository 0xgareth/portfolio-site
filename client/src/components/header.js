import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ location }) => {
  
  if (location) {
    const path = location.pathname.split('/')[1]
    return (
      <nav
        style={{
          background: `#030303`,
          width: `100%`,
          padding: `1.25rem 2rem 1.25rem 2rem`,
          overflow: `hidden`,
          zIndex: `1`,
          borderBottomStyle: path === '' ?`solid` : '',
          borderColor: `#2F2F2F`,
          borderWidth: `1px`
        }}
      >
        <div
          style={{
            margin: `0`,
            width: `100%`,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          <Link
              to="/about/"
              style={{
                textDecoration: `none`,
                fontSize: `1.2vw`,
                fontFamily:`Montserrat-Light`
              }}
          >
                ABOUT
          </Link>
          <Link
              to="/contact/"
              style={{
                textDecoration: `none`,
                fontSize: `1.2vw`,
                fontFamily:`Montserrat-Light`
              }}
          >
                CONTACT
          </Link>

        </div>

        <div style={{ display: `flex`, justifyContent:`center` }}>
          {path === '' ? null : <Link to="/" style={{textDecoration: `none`,fontSize: `1vw`,fontFamily:`Montserrat-Light`}}>HOME</Link>}
        </div>
      </nav>
    )} else {
      return (<div></div>)
    }
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
