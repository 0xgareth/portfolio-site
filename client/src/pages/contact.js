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
        justifyContent: `center`,
        flexDirection: `column`,
        borderStyle: `solid`,
        borderColor: `blue`,
        height:`70vh`,
        width:`100%`,
        marginTop: `3rem`,
    }}>

      <p style={{ color:`white` }}>SAY HELLO</p>
      <p style={{ color:`white` }}>SAY HELLO</p>
      <p style={{ color:`white` }}>SAY HELLO</p>

      <p style={{ color:`white` }}>gareth@garethveale.dev</p>

    </div>

  </Layout>
)

export default Contact
