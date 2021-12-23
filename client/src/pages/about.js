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
          <p style={{ color:`white` }}>Gareth.</p>

          <p style={{ color:`white` }}>a bit about myself</p>

          <p style={{ color:`white` }}>
            I’m Gareth - full stack developer, and experience
            designer. My professional experience and interests 
            consist of Python back-end engineering, freelance 
            web development and animation, design, and 
            creative direction.
          </p>
          
          <p style={{ color:`white` }}>
            My passions centre around engineering, design, 
            and the creative experience of technology.
          </p>
      </div>


    </div>

  </Layout>
)

export default About
