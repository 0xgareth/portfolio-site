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
        height:`80vh`,
        flexDirection:`column`,
        marginBottom: `2rem`,
        marginTop:`2rem`
    }}>    
      
      <div
          className="circle"
          style={{
            backgroundColor: `#38A700`,
            width: `13rem`,
            height: `13rem`,
            left: `65%`,
            top:`22%`,
            position:`absolute`,
            borderRadius:`50%`,
            zIndex: `5`,
            display:`flex`,
            justifyContent:`center`,
            alignItems:`center`,
            textAlign:`center`
          }}
      ><p 
        style={{
          color:`white`, 
          fontFamily:`Montserrat-Light`,
          position:`absolute`, 
          margin:`0`, 
          fontSize:`1.2vw`,
          transform: `rotate(10deg)`,
        }}>PROJECTS<br></br>ON GITHUB</p></div>

      {/* top */}
      <div 
        style={{
          display: `flex`,
          flexDirection:`column`,
          justifyContet: `center`,
        }}>
        <h1 style={{
          color: `white`,
          fontSize: `7vw`,
          marginBlockEnd:`0em`,
          marginBlockStart:`0em`,
          padding: `2rem 0 0 8rem`
        }}>
          FULL STACK
        </h1>
        <div style={{display: `flex`, flexDirection:`row`}}>
          <h1 style={{
            color: `white`,
            fontSize: `7vw`,
            marginBlockEnd:`0em`,
            marginBlockStart:`0em`,
            paddingLeft: `8rem`
          }}>
            DEVELOPER
          </h1>    
        </div>
      </div>

      {/* bottom */}
      <div 
        style={{
          display: `flex`,
          flexDirection:`row`,
          justifyContent:`space-between`,
        }}>

        {/* left */}
        <div 
          style={{
            display: `flex`,
            flexDirection:`column`,
            width:`40%`
          }}>

          <p 
            style={{
              fontFamily:`Montserrat-Light`,
              color: `white`,
              padding: `5rem 0 0 6.5rem`,
              fontSize:`1.5vw`,
              lineHeight:`0`,
              fontStyle:`regular`,
              fontWeight:`500`
          }}>
            A BIT ABOUT MYSELF, </p>
            <p 
            style={{
              fontFamily:`Montserrat-Light`,
              color: `white`,
              padding: `2rem 0 0 6.5rem`,
              fontSize:`0.9vw`,
              marginTop: `0`,
              lineHeight:`0`,
          }}>
            and what I do.</p>

          <p 
            style={{
              color: `white`,
              padding: `3rem 0 0 6.5rem`,
              marginTop:`1rem`
          }}>
            I'm Gareth - full stack developer (and occasional designer). My passions 
            centre around engineering, design, and the 
            creative experience of technology. </p>
          <p 
            style={{
              color: `white`,
              padding: `3rem 0 0 6.5rem`
          }}>
            I have industry experience in Python
            back-end engineering and full-stack
            web development. I'm constantly building
            projects to teach myself new skills. I'm currently
            learning web3, blockchain, web 
            animation, and ui/ux design.</p>

        </div>

        {/* right */}
        <div 
          style={{
            display: `flex`,
            flexDirection:`row`,
            marginTop: `3.5rem`,
            width:`60%`,
            paddingLeft:`0rem`,
            justifyContent:`center`,
          }}>

          <div 
          style={{
            display: `flex`,
            }}>
            <div
              className="circle"
              style={{
                marginTop: `2.5rem`,
                marginRight: `8rem`,
                width: `22rem`,
                height: `22rem`,
                borderRadius:`50%`,
                borderColor: `#2F2F2F`,
                borderStyle: `solid`,
                borderWidth: `1px`,
                display:`flex`,
                justifyContent:`center`,
                alignItems:`center`,
                textAlign:`center`
              }}
            >
              <p 
                style={{
                  fontFamily:`Montserrat-Light`,
                  color:`white`, 
                  position:`absolute`, 
                  margin:`0`, 
                  fontSize:`1.15vw`,
                  fontStyle:`regular`,
                  fontWeight:`500`}}
              >
                    fullstack development<br></br>
                    backend engineering<br></br>
                    web3<br></br>
                    web animation<br></br>
                    ui / ux design<br></br>
              </p>
            </div>
          </div>
          
          <StaticImage
            src="../images/about.jpg"
            width={400}
            height={550}
            quality={90}
            formats={["auto", "webp", "avif"]}
            alt="About image"
            style={{ marginBottom: `1.45rem` }}
          />

        </div>

      </div>

    </div>

  </Layout>
)

export default About
