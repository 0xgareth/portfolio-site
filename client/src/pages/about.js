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
        // borderStyle: `solid`,
        // borderColor: `blue`,
        height:`75vh`,
        width:`100%`,
        marginTop: `3rem`,
    }}>
      <div className="imageContainer" 
        style={{
          width:`50%`,
          height:`100%`,
          // borderStyle: `solid`,
          // borderColor: `pink`,
      }}>
        <StaticImage
          src="../images/about.jpg"
          layout="constrained"
          width={1200}
          height={1200}
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
          // borderStyle: `solid`,
          // borderColor: `yellow`,
          width:`50%`,
          display: `flex`,
          flexDirection:`column`,
          paddingLeft: `3em`,
          paddingRight: `2.5em`
      }}>
          <h2 style={{ 
            color:`white`, 
            fontSize: `6vw`,
            lineHeight: `0`,
            marginBlockStart:`0.8em`,
            marginBlockEnd:`0.5em`,
          }}>
            Gareth.
          </h2>

          <h2
          style={{ 
            color:`white`,
            fontSize: `3vw`,
            lineHeight: `0`,
            marginBlockStart:`1em`,
            marginBlockEnd:`0.5em`,
            }}>
              a bit about myself
          </h2>

          {/* <h2
          style={{ 
            color:`white`,
            fontSize: `3vw`,
            lineHeight: `0`,
            marginBlockStart:`1em`,
            marginBlockEnd:`0.5em`,
            }}>
              Just about what I do
          </h2> */}

          <p style={{ 
            color:`white`,
            fontSize: `1.5vw`,
            lineHeight: `1.2em`,
            marginBlockStart:`2.5em`,
          }}>
            I’m Gareth - full stack developer, and UX
            designer. My professional experience and interests 
            are comprised of back-end engineering, freelance 
            web development and animation, design, and 
            creative direction.
          </p>
          
          <p style={{ 
            color:`white`,
            fontSize: `1.5vw`,
            lineHeight: `1.2em`,
            marginBlockStart:`2.5em`,
          }}>
            My passions centre around engineering, design, 
            and the creative experience of technology.
          </p>
      </div>


    </div>

  </Layout>
)

export default About
