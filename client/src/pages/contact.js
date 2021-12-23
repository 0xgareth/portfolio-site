import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({location}) => (
  <Layout location={location}>
    <Seo title="Contact" />
    
    <div 
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        flexDirection: `row`,
        // borderStyle: `solid`,
        // borderColor: `blue`,
        height:`80vh`,
        width:`100%`,
    }}>

      {/* left column */}
      <div style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `column`,
        marginTop: ``,
        paddingLeft: `5em`,
        // borderStyle: `solid`,
        // borderColor: `pink`,
      }}>

        <h1 style={{ 
          color:`white`, 
          fontSize: `7vw`, 
          lineHeight:`0`, 
          WebkitTextFillColor:`transparent`, 
          WebkitTextStrokeWidth:`1px` 
        }}>
            SAY HELLO
          </h1>

        <h1 style={{ 
          color:`white`, 
          fontSize: `7vw`, 
          lineHeight:`0`,
          marginBlockEnd:`0.15em`
        }}>
          SAY HELLO
        </h1>
        <h1 style={{ 
          color:`white`, 
          fontSize: `7vw`, 
          lineHeight:`0`,
          WebkitTextFillColor:`transparent`, 
          WebkitTextStrokeWidth:`1px`,
          marginBlockStart:`0em`,
        }}>
          SAY HELLO
        </h1>

        <h1 style={{ 
          color:`white`, 
          fontSize: `7vw`, 
          lineHeight:`0`, 
          WebkitTextFillColor:`transparent`, 
          WebkitTextStrokeWidth:`1px` 
        }}>
          SAY HELLO
        </h1>
      </div>

      {/* right column */}
      <div style={{
        display: `flex`,
        justifyContent: `center`,
        flexDirection: `column`,
        alignItems:`flex-start`,
        marginTop: ``,
        paddingRight: `7em`,
      }}>
        <p style={{ color:`white`, fontSize: `3vw` }}>Get in touch for collaborations</p>
        <p style={{ color:`#CC2936`, fontSize: `3vw`, marginTop: `1em` }}>gareth@garethveale.dev →</p>


        <p style={{ color:`white`, fontSize: `1vw`, marginTop: `5em` }}>animation placeholder</p>
        <p style={{ color:`white`, fontSize: `1vw`, marginTop: `1em` }}>animation placeholder</p>

        
      </div>

    </div>

  </Layout>
)

export default Contact
