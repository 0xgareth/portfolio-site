import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {

return (
  <nav
    style={{
      background: `#030303`,
      width: `100%`,
      padding: `2rem 2rem 0 2rem`,
      overflow: `hidden`,
      borderStyle: `solid`,
      borderColor: `green`,
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
          activeStyle={{ color: "#CC2936" }}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
      >
            About
      </Link>
      <Link
          to="/contact/"
          activeStyle={{ color: "#CC2936" }}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
      >
            Contact me
      </Link>
      <Link
          to="/work/"
          activeStyle={{ color: "#CC2936" }}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
      >
            Work
      </Link>
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
