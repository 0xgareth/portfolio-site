import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({location}) => (
  <Layout location={location}>
    <Seo title="About" />

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
      <div className="imageContainer" 
        style={{
          width:`50%`,
          height:`100%`,
          borderStyle: `solid`,
          borderColor: `pink`,
      }}>
        <StaticImage
          src="../images/about.jpg"
          layout="constrained"
          width={1200}
          height={1000}
          quality={90}
          formats={["auto", "webp", "avif"]}
          alt="home image"
          style={{ 
            marginBottom: 0,
            height: `100%`,
            width: `100%`,
            objectFit: `cover`
          }}
          transformOptions={{fit: "cover"}}
        />
      </div>
      
      <div style={{
          borderStyle: `solid`,
          borderColor: `yellow`,
          width:`50%`
      }}>
          <p>Gareth.</p>
      </div>


    </div>

  </Layout>
)

export default About
