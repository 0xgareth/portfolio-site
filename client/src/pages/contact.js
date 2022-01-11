import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const words = ['HELLO', 'CIAO', 'SALUT', 'YO', 'NIHAO'];

const Contact = ({location}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setCurrentItemIndex((currentItemIndex + 1) % words.length),
      1000
    );
    return () => {
      clearInterval(id); // removes React warning when gets unmounted
    };
  }, [currentItemIndex]);

  return (
    <Layout location={location}>
      <Seo title="Contact" />
      
      <div 
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          flexDirection: `row`,
          height:`80vh`,
          width:`100%`,
      }}>

        {/* left column */}
        <div style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          flexDirection: `column`,
          marginTop: ``,
          paddingLeft: `5em`,
        }}>
          {/* 1 */}
          <h1 style={{ 
            color:`white`, 
            fontSize: `7vw`, 
            lineHeight:`0`, 
            WebkitTextFillColor:`transparent`, 
            WebkitTextStrokeWidth:`1px`,
            width:`45vw`
          }}>
              SAY HELLO
          </h1>

          {/* 2 */}
          <div>
            <h1 style={{ 
              color:`white`, 
              fontSize: `7vw`, 
              lineHeight:`0`,
              marginBlockEnd:`0.15em`,
              width:`45vw`
              }}>
                SAY {words[currentItemIndex]}
            </h1>
            <h1 style={{ 
              color:`white`, 
              fontSize: `7vw`, 
              lineHeight:`0`,
              WebkitTextFillColor:`transparent`, 
              WebkitTextStrokeWidth:`1px`,
              marginBlockStart:`0em`,
            }}>
              SAY {words[currentItemIndex]}
            </h1>
          </div>

          {/* 3 */}
          <h1 style={{ 
            color:`white`, 
            fontSize: `7vw`, 
            lineHeight:`0`, 
            WebkitTextFillColor:`transparent`, 
            WebkitTextStrokeWidth:`1px`,
            width:`45vw`
          }}>
            SAY HELLO
          </h1>
        </div>

        {/* right column */}
        <div style={{
          display: `flex`,
          justifyContent: `center`,
          flexDirection: `column`,
          alignItems:`flex-start`,
          marginTop: ``,
          paddingRight: `7em`,
        }}>
          <p style={{ fontFamily:'Montserrat-Light', color:`white`, fontSize: `2.5vw` }}>Get in touch for collaborations</p>
          <a href="mailto:gareth@garethveale.dev" style={{textDecoration:`None`}}><span style={{ fontFamily:'Montserrat-LightItalic', marginLeft: `2rem`, color:`white`, fontSize: `2.5vw`, marginTop: `1em` }}>gareth@garethveale.dev →</span></a>

          <p style={{ color:`white`, fontSize: `1vw`, marginTop: `5em` }}>animation placeholder</p>
          <p style={{ color:`white`, fontSize: `1vw`, marginTop: `1em` }}>animation placeholder</p>
        
        </div>

      </div>

    </Layout>

)}

export default Contact
