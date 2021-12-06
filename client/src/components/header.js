import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav
    style={{
      background: `#0D0D0D`,
      width: `100%`,
      padding: `0 2rem 0 2rem`,
      overflow: `hidden`
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
      <h2 style={{ marginLeft: 0 }}>
        <Link
          to="/about/"
          activeStyle={{ color: "#CC2936" }}
          style={{
            color: `white`,
            textDecoration: `none`,
            
          }}
        >
          About.
        </Link>
      </h2>
      <h2>
        <Link
          to="/contact/"
          activeStyle={{ color: "#CC2936" }}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact me.
        </Link>
      </h2>
      <h2>
        <Link
          to="/work/"
          activeStyle={{ color: "#CC2936" }}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Work.
        </Link>
      </h2>
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
