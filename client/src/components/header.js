import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav
    style={{
      background: `#030303`,
      width: `100%`,
      padding: `2rem 2rem 0 2rem`,
      overflow: `hidden`,
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
        <a style={{ marginLeft: 0, fontSize: `1.5rem`, }}>
            About
        </a>
      </Link>
      <Link
          to="/about/"
          activeStyle={{ color: "#CC2936" }}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
      >
        <a style={{ marginLeft: 0, fontSize: `1.5rem`, }}>
            Contact me
        </a>
      </Link>
      <Link
          to="/about/"
          activeStyle={{ color: "#CC2936" }}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
      >
        <a style={{ marginLeft: 0, fontSize: `1.5rem`, }}>
            Work
        </a>
      </Link>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
