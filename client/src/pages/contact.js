import * as React from "react"
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
        <p style={{ fontFamily:'Montserrat-Light', color:`white`, fontSize: `2.5vw` }}>Get in touch for collaborations</p>
        <a href="mailto:gareth@garethveale.dev" style={{ fontFamily:'Montserrat-Light', marginLeft: `2rem`, textDecoration: `None`, color:`white`, fontSize: `2.5vw`, marginTop: `1em` }}>gareth@garethveale.dev →</a>


        <p style={{ color:`white`, fontSize: `1vw`, marginTop: `5em` }}>animation placeholder</p>
        <p style={{ color:`white`, fontSize: `1vw`, marginTop: `1em` }}>animation placeholder</p>

        
      </div>

    </div>

  </Layout>
)

export default Contact
