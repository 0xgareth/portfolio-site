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
        height:`80vh`,
        width:`100%`,
        marginTop: `0rem`,
    }}>    
      <div style={{
          borderStyle: `solid`,
          borderColor: `yellow`,
          width:`50%`,
          display: `flex`,
          flexDirection:`column`,
          paddingLeft: `3em`,
          paddingRight: `2.5em`
      }}>
         
          <p style={{ 
            color:`white`,
            fontSize: `2vw`,
            lineHeight: `1.5em`,
            marginBlockStart:`0`,
            fontFamily: `Montserrat`
          }}>
            My passions centre around engineering, design, 
            and the creative experience of technology.
          </p>
      </div>

      <div className="imageContainer" 
        style={{
          width:`40%`,
          height:`80%`,
          borderStyle: `solid`,
          borderColor: `pink`,
      }}>
        <StaticImage
          src="../images/about.jpg"
          layout="constrained"
          width={1200}
          height={800}
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
    </div>

  </Layout>
)

export default About
