import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const About = ({location}) => (
  <Layout location={location}>
    <Seo title="About" />

    <div className='about-wrapper'>
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
            I'm Gareth - full stack developer exploring web3 
            and blockchain. I have experience in building large scale, low latency, 
            Python backend systems in the financial services industry, and 
            fullstack web applications using modern frameworks. Check out 
            some of my projects on my Github.
          </p>
          <p className='about-body-text-2'>
            My passions centre around engineering, 
            design, and the creative experience of technology.
            I'm always building projects to teach myself new skills. 
            I'm currently teaching myself web3, blockchain, and web 
            animation.
          </p>
        </div>

        {/* right */}
      </div>
    </div>

  </Layout>
)

export default About
