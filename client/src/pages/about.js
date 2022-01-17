import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const About = ({location}) => (
  <Layout location={location}>
    <Seo title="About" />

    <div className='about-wrapper'>   

      {/* projects button */}
      <a style={{ textDecoration:`None` }} href="https://github.com/gareth-was-here" target="_blank" rel="noopener noreferrer">  
        <div className="circle">
          <p>PROJECTS<br></br>ON GITHUB</p>
        </div>
      </a>

      {/* top */}
      <div className='about-top-div'>
        <h1 className='about-header-text-top'>
          FULL STACK
        </h1>
        <h1 className='about-header-text-bottom'>
          DEVELOPER
        </h1>
      </div>

      {/* bottom */}
      <div className='about-bottom-div'>

        {/* left */}
        <div className='about-bottom-div-left'>
          <p className='about-text-header1'>A BIT ABOUT MYSELF, </p>
          <p className='about-text-header2'>and what I do.</p>

          <p className='about-body-text-1'>
            I'm Gareth - full stack developer (and occasional designer). My passions 
            centre around engineering, design, and the 
            creative experience of technology.
          </p>
          <p className='about-body-text-2'>
            I have industry experience in Python
            back-end engineering and full-stack
            web development. I'm always building
            projects to teach myself new skills. I'm currently
            learning web3, blockchain, and web 
            animation.
          </p>
        </div>

        {/* right */}
        <div className='about-bottom-div-right'>
          <div className='skill-circle'>
            <p className='skill-circle-text'>
              fullstack development<br></br>
              backend engineering<br></br>
              web3<br></br>
              web animation<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default About
