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
      
      <div className="contact-wrapper">

        {/* left column */}
        <div className="contact-left-col">

          <h1 className="contact-header1">SAY HELLO</h1>

          <div>
            <h1 className="contact-header2">SAY {words[currentItemIndex]}</h1>
            <h1 className="contact-header2-layer2">SAY {words[currentItemIndex]}</h1>
          </div>

          <h1 className="contact-header3">SAY HELLO</h1>
        </div>

        {/* right column */}
        <div className="contact-right-col">
          <p className="contact-text">Get in touch for collaborations</p>
          <a href="mailto:gareth@garethv.xyz"><span className="contact-link">gareth@garethv.xyz →</span></a>        
        </div>

      </div>

    </Layout>

)}

export default Contact
