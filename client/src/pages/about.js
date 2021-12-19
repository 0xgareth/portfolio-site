import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About" />

    <Link to="/" style={{ textDecoration: `none` }}>
      <a style={{ padding: `0 4rem 0 4rem` }}>HOME</a>
    </Link>

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
