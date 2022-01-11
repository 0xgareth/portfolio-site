import * as React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div>
    <Seo title="404: Not found" />
    <div
      style={{
        display:`flex`,
        justifyContent:`center`,
        alignItems:`center`,
        flexDirection:`column`,
        marginTop:`25%`,
        zIndex:`5`,
      }}
    >
      <h1 
        style={{
        color:`white`
      }}>"PAGE NOT FOUND"</h1>
      <p
      style={{
        color:`white`
      }}>You just hit a page that doesn&#39;t exist...</p>
      <Link to="/" style={{textDecoration: `none`,fontSize: `1vw`,fontFamily:`Montserrat`, marginTop:`2rem`}}>← GO HOME</Link>
    </div> 
  </div>
)

export default NotFoundPage
