import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Seo title="Home" />

      <div className='index-wrapper'>
        <div>
          <h1 className="index-header-left">GARETH</h1>
          <h1 className="index-header-left-layer2">GARETH</h1>
        </div>

        <div>
          <h1 className="index-header-right">VEALE</h1>
          <h1 className="index-header-right-layer2">VEALE</h1>
        </div>  
      </div>
  </Layout>
)

export default IndexPage
