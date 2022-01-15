import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import { IconContext } from "@react-icons/all-files";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

const Layout = ({ children, location }) => {
  return (
    <>
      <Header location={location} />
      
        <main>{children}</main>

      {/* socials */}
      <div 
        style={{
          position: `absolute`,
          left:`0`,
          bottom:`0`,
          display:`flex`,
          flexDirection:`column`,
          alignItems:`center`,
          zIndex:`5`,
          padding:`1rem`,
        }}
      >

        <IconContext.Provider value={{ color: "white" }}>
          <div>
            <FaTwitter className='fa' size={30} />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white" }}>
          <div>
            <FaGithubAlt className='fa' size={30} />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white" }}>
          <div>
            <FaEnvelope className='fa' size={30} />
          </div>
        </IconContext.Provider>
        
      </div>

      {/* footer */}
      {/* <footer
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

            <div style={{padding:`0 4rem 0 4rem`}}>
              <a href="https://twitter.com/gareth_was_here" target="_blank" style={{textDecoration:`None`}}>
                <span className="footerItem" style={{ padding: ``, fontSize: `0.9vw`, fontFamily:`Montserrat-Light` }}>Twitter</span>
              </a>
            </div>

            <div style={{padding:`0 4rem 0 4rem`}}>
              <a href="https://github.com/garethiv" target="_blank" style={{textDecoration:`None`}}>
                <span className="footerItem" style={{ padding: ``, fontSize: `0.9vw`, fontFamily:`Montserrat-Light` }}>Github</span>
              </a>
            </div>
          </div>
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
