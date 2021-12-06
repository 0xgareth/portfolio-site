import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      {/* bottom layer */}
      <div 
        className='bottom-layer' 
        style={{
          height: `100vh`,
          width: `100vw`,
          position: `absolute`,
          top: 0,
          left: 0
      }}>
        <div 
          className='vertical'
          style={{ 
            background:`#707070`,
            width:`1px`,
            position: `absolute`,
            height:`100%`,
            left:`50%`,
            opacity: .3 }} 
        />
        <div 
          className='horizontal'
          style={{ 
            background:`#707070`,
            height:`1px`,
            position: `absolute`,
            width:`100%`,
            top:`60vh`,
            opacity: .3,
            transformOrigin: `0 50%` }} 
        />
        <ul 
          className='numbers' 
          style={{ 
            display: `flex`, 
            top: `33vh`, 
            width: `100%`, 
            position:`absolute`, 
            justifyContent: `space-between`,
            listStyle: `none`
          }}>
            <li style={{ color:`#707070`, opacity: .3 }}>01</li>
            <li style={{ color:`#707070`, opacity: .3 }}>02</li>
            <li style={{ color:`#707070`, opacity: .3 }}>03</li>
            <li style={{ color:`#707070`, opacity: .3 }}>04</li>
            <li style={{ color:`#707070`, opacity: .3 }}>05</li>
            <li style={{ color:`#707070`, opacity: .3 }}>06</li>
            <li style={{ color:`#707070`, opacity: .3 }}>07</li>
            <li style={{ color:`#707070`, opacity: .3 }}>08</li>
            <li style={{ color:`#707070`, opacity: .3 }}>09</li>
            <li style={{ color:`#707070`, opacity: .3 }}>10</li>
          </ul>
      </div>
    {/* top layer */}
    {/* <div 
        className='top-layer' 
        style={{
          height: `100vh`,
          width: `100vw`,
          position: `absolute`,
          top: 0,
          left: 0,
          zIndex: -1
      }}>
      <div 
        className='circle-container'
        style={{
          width:`25vw`,
          height:`25vh`,
          top: `50%`,
          left: `50%`,
          position: `absolute`
        }}
      >
        <div 
          className='circle' 
          style={{ 
            border: `1px solid #707070`, 
            borderRadius: `50%`, 
            width: `100%`,
            height: `100%`,
            opacity: .1,
            transform: `scaleX(1) scaleY(1)`
          }} />
      </div>
    </div> */}

    {/* content */}
    <div style={{ 
      display: `flex`, 
      flexDirection: `column`, 
      justifyContent: `center`, 
      // borderStyle: `solid`,
      // borderColor: `green`,
      marginTop: `8rem`,
    }}>
        {/* image and title */}
          <StaticImage
            src="../images/home.png"
            width={1000}
            height={700}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="home image"
            style={{ 
              marginBottom: 0,
            }}
          />
          <div style={{
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
            zIndex: `2`,
            display: `flex`,
            justifyContent: `space-between`,
            flexDirection: `row`
          }}>
            <h1 style={{
                color: `white`,
                fontSize: `7vw`,
                paddingRight: `25rem`,
                textAlign:`left`
              }}>Gareth</h1>
            <h1 style={{
                color: `white`,
                fontSize: `7vw`,
                textAlign:`right`
              }}>Veale</h1>
          </div>

        {/* social links */}
        <footer
            style={{
              marginTop: `1rem`, display: `flex`, justifyContent: `space-between`
            }}
          >
            <div style={{ display: `flex` }}>
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `flex-end` }}>
              <p style={{ color: `white`, }}>Full stack development</p>
              <p style={{ color: `white`,  paddingTop:`0.1rem` }}>Visual and web design</p>
              <p style={{ color: `white`,  paddingTop:`0.1rem` }}>Animation</p>            
            </div>
        </footer>
    </div>
  </Layout>
)

export default IndexPage
