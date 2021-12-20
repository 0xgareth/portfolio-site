import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = ({location}) => (
  <Layout location={location}>
    <Seo title="Work" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Work
