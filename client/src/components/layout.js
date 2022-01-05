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

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  console.log(location)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} location={location} />
      
        <main>{children}</main>

      {/* footer */}
      <footer
          style={{
            marginBottom: `1rem`,
            bottom: 0,
            position:`fixed`,
            display:`flex`,
            justifyContent: `center`,
            width: `100%`,
            // borderStyle: `solid`,
            // borderColor: `red`,
            zIndex: `4`
          }}
        >
          <div style={{ display: `flex` }}>
            <Link to="https://twitter.com/gareth_was_here" target="_blank" style={{ textDecoration: `none`, padding: `0 4rem 0 4rem` }}>
              {/* <a style={{ padding: `0 4rem 0 4rem` }}> */}
                Twitter
                {/* </a> */}
            </Link>
            <Link to="https://github.com/garethiv" target="_blank" style={{ textDecoration: `none`, padding: `0 4rem 0 4rem` }}>
              {/* <a style={{ padding: `0 4rem 0 4rem` }}> */}
                Github
                {/* </a> */}
            </Link>
            <Link to="https://www.behance.net/garethveale" target="_blank" style={{ textDecoration: `none`, padding: `0 4rem 0 4rem`}}>
              {/* <a style={{ padding: `0 4rem 0 4rem` }}> */}
                Behance
                {/* </a> */}
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
