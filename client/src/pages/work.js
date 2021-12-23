import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = ({location}) => (
  <Layout location={location}>
    <Seo title="Work" />

    <div 
      style={{
        display: `flex`,
        justifyContent: `flex-start`,
        borderStyle: `solid`,
        borderColor: `blue`,
        height:`70vh`,
        width:`100%`,
        marginTop: `3rem`,
    }}>

      <p style={{ color:`white` }}>01. Gareth Veale</p>

    </div>
  </Layout>
)

export default Work
