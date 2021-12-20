import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({location}) => (
  <Layout location={location}>
    <Seo title="About" />

    <StaticImage
      src="../images/about.jpg"
      width={800}
      height={1000}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="home image"
      style={{ 
        marginBottom: 0,
      }}
    />

    

  </Layout>
)

export default About
