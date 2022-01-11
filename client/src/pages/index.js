import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Seo title="Home" />
      {/* shape layer */}
      {/* <div 
        className='shape-layer'
        style={{
          height: `80vh`,
          width: `100vw`,
          overflow: `hidden`,
          position: `absolute`,
          zIndex: `0.5`
        }}
      >
        <div
          className="triangle"
          style={{
            width: `0`,
            height: `0`,
            left: `35%`,
            top:`2%`,
            position:`absolute`,
            borderLeft: `12rem solid transparent`,
            borderRight: `12rem solid transparent`,
            borderBottom: `18em solid #4BB3FD`,
            transform: `rotate(20deg)`
          }}
        />
        <div
          className="circle"
          style={{
            backgroundColor: `#F1A208`,
            width: `20rem`,
            height: `20rem`,
            left: `20%`,
            top:`60%`,
            position:`absolute`,
            borderRadius:`50%`
          }}
        />
        <div
          className="square"
          style={{
            backgroundColor: `#38A700`,
            width: `18rem`,
            height: `18rem`,
            left: `68%`,
            top:`60%`,
            position:`absolute`,
            transform: `rotate(40deg)`
          }}
        />
      </div> */}

      {/* bottom layer */}
      {/* <div 
        className='bottom-layer' 
        style={{
          height: `100vh`,
          width: `100vw`,
          overflow: `hidden`,
          position: `absolute`,
          zIndex:`1`
      }}>
        <div 
          className='vertical'
          style={{ 
            background:`#707070`,
            width:`1px`,
            position: `absolute`,
            height:`100%`,
            left:`50%`,
            opacity: .3,
          }} 
        />
        <div 
          className='horizontal'
          style={{ 
            background:`#707070`,
            height:`1px`,
            position: `absolute`,
            width:`100%`,
            top:`45vh`,
            opacity: .3,
            transformOrigin: `0 50%` }} 
        /> */}
        {/* <ul 
          className='numbers' 
          style={{ 
            display: `flex`, 
            top: `12vh`, 
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
          </ul> */}
      {/* </div> */}

    {/* content */}
        <div style={{
          // position: `absolute`,
          // top: `55%`,
          // left: `50%`,
          // transform: `translate(-50%, -50%)`,
          zIndex: `2`,
          display: `flex`,
          justifyContent: `center`,
          alignItems:`center`,
          flexDirection: `row`,
          height:`90vh`
        }}>
          <div>
            {/* 1 */}
            {/* <h1 style={{
                color: `white`,
                fontSize: `7vw`,
                marginRight: `27rem`,
                textAlign:`left`,
                marginBlockStart:`0em`,
                marginBlockEnd:`1.25em`,
                lineHeight: `0`,
                WebkitTextStrokeWidth:`1px`,
                WebkitTextFillColor:`transparent`,
              }}>GARETH</h1> */}
            {/* 2 */}
            <h1 style={{
                color: `white`,
                fontSize: `8vw`,
                marginRight: `27rem`,
                textAlign:`left`,
                marginBlockEnd:`0em`,
                marginBlockStart:`0.7em`,
                lineHeight: `0.2`
              }}>GARETH</h1>
            <h1 style={{
                color: `white`,
                fontSize: `8vw`,
                marginRight: `27rem`,
                textAlign:`left`,
                marginBlockStart:`0em`,
                marginBlockEnd:`1.25em`,
                lineHeight: `0`,
                WebkitTextStrokeWidth:`1px`,
                WebkitTextFillColor:`transparent`,
              }}>GARETH</h1>
            {/* 3 */}
            {/* <h1 style={{
                color: `white`,
                fontSize: `7vw`,
                marginRight: `27rem`,
                textAlign:`left`,
                marginBlockStart:`0em`,
                lineHeight: `0`,
                WebkitTextStrokeWidth:`1px`,
                WebkitTextFillColor:`transparent`,
              }}>GARETH</h1> */}
            </div>


            <div>
              {/* 1 */}
              {/* <h1 style={{
                  color: `white`,
                  WebkitTextFillColor:`transparent`,
                  fontSize: `7vw`,
                  textAlign:`right`,
                  WebkitTextStrokeWidth:`1px`,
                  marginBlockStart:`0em`,
                  marginBlockEnd:`1.25em`,
                  lineHeight: `0`,
                }}>VEALE</h1> */}
              {/* 2 */}
              <h1 style={{
                  color: `white`,
                  fontSize: `8vw`,
                  textAlign:`right`,
                  marginBlockEnd:`0em`,
                  marginBlockStart:`0.7em`,
                  lineHeight: `0.2`
                }}>VEALE</h1>
              <h1 style={{
                  color: `white`,
                  WebkitTextFillColor:`transparent`,
                  fontSize: `8vw`,
                  textAlign:`right`,
                  WebkitTextStrokeWidth:`1px`,
                  marginBlockStart:`0em`,
                  marginBlockEnd:`1.25em`,
                  lineHeight: `0`,
                }}>VEALE</h1>
                {/* 3 */}
                {/* <h1 style={{
                  color: `white`,
                  WebkitTextFillColor:`transparent`,
                  fontSize: `7vw`,
                  textAlign:`right`,
                  WebkitTextStrokeWidth:`1px`,
                  marginBlockStart:`0em`,
                  lineHeight: `0`,
                }}>VEALE</h1> */}
            </div>
            
        </div>

        {/* <div style={{
          position: `absolute`,
          top: `57%`,
          left: `83%`,
          transform: `translate(-50%, -50%)`,
          zIndex: `2`,
          display: `flex`,
          // justifyContent: `space-between`,
          justifyContent: `center`,
          flexDirection: `row`
        }}>
          <div>
           <h1 style={{
                color: `white`,
                fontSize: `8vw`,
                marginRight: `27rem`,
                textAlign:`left`,
                marginBlockEnd:`0em`,
                marginBlockStart:`0.7em`,
                lineHeight: `0.2`
              }}>VEALE</h1>
            <h1 style={{
                color: `white`,
                fontSize: `8vw`,
                marginRight: `27rem`,
                textAlign:`left`,
                marginBlockStart:`0em`,
                marginBlockEnd:`1.25em`,
                lineHeight: `0`,
                WebkitTextStrokeWidth:`1px`,
                WebkitTextFillColor:`transparent`,
              }}>VEALE</h1>
            </div>
        </div> */}
  </Layout>
)

export default IndexPage
