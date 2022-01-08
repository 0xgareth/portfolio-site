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
        borderStyle: `solid`,
        borderColor: `blue`,
        height:`80vh`,
        flexDirection:`column`,
        marginBottom: `2rem`,
    }}>    
      
      {/* top */}
      <div 
        style={{
          display: `flex`,
          flexDirection:`column`,
          justifyContet: `center`,
          borderStyle: `solid`,
          borderColor: `green`,
          height: `50%`
        }}>
        <h1 style={{
          color: `white`,
          fontSize: `10vw`,
          marginBlockEnd:`0em`,
          marginBlockStart:`0em`,
          padding: `2rem 0 0 4rem`
        }}>
          DEVELOPER
        </h1>
        <div 
          className='horizontal'
          style={{ 
            background:`#707070`,
            height:`1px`,
            marginLeft: `4rem`,
            width:`66%`,
            opacity: .3,
            transformOrigin: `0 50%` }} 
        />
        <div style={{display: `flex`, flexDirection:`row`}}>
          <h1 style={{
            color: `white`,
            fontSize: `10vw`,
            marginBlockEnd:`0em`,
            marginBlockStart:`0em`,
            paddingLeft: `4rem`
          }}>
            DESIGNER
          </h1>
          <div style={{ 
            margin: `2rem 0 0 2rem`, width: `6rem`, height: `4rem`, backgroundColor: `#F1A208`, borderRadius: `50%`,
            alignItems: `center`, justifyContent: `center`,
            }}> 
            AND
            <p style={{color: `white`, fontSize:`1.5vw`, paddingLeft: `2rem`}}>AND</p>
          </div>
          
        </div>
      </div>











      {/* bottom */}
      <div 
        style={{
          display: `flex`,
          flexDirection:`row`,
          borderStyle: `solid`,
          borderColor: `yellow`,
          height: `50%`
        }}>

        <div 
          style={{
            display: `flex`,
            borderStyle: `solid`,
            borderColor: `pink`,
            width:`50%`
          }}>
          
        </div>

        <div 
          style={{
            display: `flex`,
            borderStyle: `solid`,
            borderColor: `white`,
            width:`50%`
          }}>
          
        </div>

      </div>
    </div>

  </Layout>
)

export default About
