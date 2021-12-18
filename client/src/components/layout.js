/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: ``,
          // borderStyle: `solid`,
          // borderColor: `red`,
          
       }}
      >
        <main>{children}</main>

      </div>

      {/* footer */}
      <footer
          style={{
            marginBottom: `1.5rem`,
            bottom: 0,
            position:`absolute`,
            display:`flex`,
            justifyContent: `center`,
            width: `100%`,
          }}
        >
          <div style={{ display: `flex` }}>
            <Link to="https://twitter.com/garethveale" target="_blank" style={{ textDecoration: `none` }}>
              <a style={{ padding: `0 4rem 0 4rem` }}>Twitter</a>
            </Link>
            <Link to="https://github.com/garethiv" target="_blank" style={{ textDecoration: `none` }}>
              <a style={{ padding: `0 4rem 0 4rem` }}>Github</a>
            </Link>
            <Link to="https://www.behance.net/garethveale" target="_blank" style={{ textDecoration: `none`}}>
              <a style={{ padding: `0 4rem 0 4rem` }}>Behance</a>
            </Link>
            <Link to="https://dribbble.com/garethveale" target="_blank" style={{ textDecoration: `none`}}>
              <a style={{ padding: `0 4rem 0 4rem` }}>Dribble</a>
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
