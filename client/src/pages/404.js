import * as React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div>
    <Seo title="404: Not found" />
    <div className="not-found-wrapper">
      <h1 className="not-found-header">"PAGE NOT FOUND"</h1>
      <p className="not-found-text">You just hit a page that doesn&#39;t exist...</p>
      <Link to="/" className="not-found-link">← GO HOME</Link>
    </div> 
  </div>
)

export default NotFoundPage
