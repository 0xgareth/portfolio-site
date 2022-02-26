import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ location }) => {
  
  if (location) {
    const path = location.pathname.split('/')[1]
    return (
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <p style={{margin:`0`}}>
            <Link to="/about/" className='header-link'>
              about
              <svg className='header-svg' viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </Link>
          </p>
          {/* <p style={{margin:`0`}}>
            <Link to="/posts/" className='header-link'>
              posts
              <svg className='header-svg' viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </Link>
          </p> */}
          {/* <p style={{margin:`0`}}>
            <a href="https://github.com/gareth-xyz" target="_blank" rel="noopener noreferrer" className='header-link'>
              projects
              <svg className='header-svg' viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </p> */}
          <p style={{margin:`0`}}>
            <Link to="/contact/" className='header-link'>
              contact
              <svg className='header-svg' viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </Link>
          </p>
        </div>

        <div style={{ display: `flex`, justifyContent:`center`, paddingRight:`1rem`, paddingTop: `1rem` }}>
          {path === '' ? null :
            <p style={{margin:`0`}}>
              <Link to="/" className='header-link'>
                HOME
                <svg className='header-svg' viewBox="0 0 70 36">
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
