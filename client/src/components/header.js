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
          {/* <Link
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
          </Link> */}
          <p>
            <Link
              to="/about/"
              className='header-link'
              style={{
                textDecoration: `none`,
                fontSize: `.8vw`,
                fontFamily:`Montserrat-Light`,
                color:`white`
              }}
            >
              about
              <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </Link>
          </p>
          <p>
            <Link
              to="/contact/"
              className='header-link'
              style={{
                textDecoration: `none`,
                fontSize: `.8vw`,
                fontFamily:`Montserrat-Light`,
                color:`white`
              }}
            >
              contact
              <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </Link>
          </p>

        </div>

        <div style={{ display: `flex`, justifyContent:`center` }}>
          {path === '' ? null : 
            
            // <Link to="/" style={{textDecoration: `none`,fontSize: `1vw`,fontFamily:`Montserrat-Light`}}>HOME</Link>
            <p>
              <Link
                to="/"
                className='header-link'
                style={{
                  textDecoration: `none`,
                  fontSize: `.8vw`,
                  fontFamily:`Montserrat-Light`,
                  color:`white`
                }}
              >
                HOME
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </Link>
            </p>

          }
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
