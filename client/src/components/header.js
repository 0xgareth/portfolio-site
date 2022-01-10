import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, location }) => {

const path = location.pathname.split('/')[1]
console.log(typeof(path))
console.log(path==='')

return (
  <nav
    style={{
      background: `#030303`,
      width: `100%`,
      padding: `1.25rem 2rem 1.25rem 2rem`,
      overflow: `hidden`,
      zIndex: `1`,
      // display: `flex`,
      // position:`absolute`,
      // opacity: `0.1`
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
          // activeStyle={{ color: "#2AB7CA" }}
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
          // activeStyle={{ color: "#CC2936" }}
          style={{
            textDecoration: `none`,
            fontSize: `1.2vw`,
            fontFamily:`Montserrat-Light`
          }}
      >
            CONTACT
      </Link>
      {/* <Link
          to="/work/"
          activeStyle={{ color: "#CC2936" }}
          style={{
            textDecoration: `none`,
            fontSize: `2vw`,
          }}
      >
            Work
      </Link> */}
    </div>

    <div style={{ display: `flex`, justifyContent:`center` }}>
      {path === '' ? null : <Link to="/" style={{textDecoration: `none`,fontSize: `1vw`,fontFamily:`Montserrat-Light`}}>HOME</Link>}
    </div>
  </nav>
)}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
