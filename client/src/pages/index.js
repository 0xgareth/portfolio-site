import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Seo title="Home" />

      <div className='index-wrapper'>
        <div>
          <h1 style={{
              color: `white`,
              fontSize: `8vw`,
              marginRight: `15rem`,
              textAlign:`left`,
              marginBlockEnd:`0em`,
              marginBlockStart:`0.7em`,
              lineHeight: `0.2`
            }}>GARETH</h1>
          <h1 style={{
              color: `white`,
              fontSize: `8vw`,
              marginRight: `15rem`,
              textAlign:`left`,
              marginBlockStart:`0em`,
              marginBlockEnd:`1.25em`,
              lineHeight: `0`,
              WebkitTextStrokeWidth:`1px`,
              WebkitTextFillColor:`transparent`,
            }}>GARETH</h1>
          </div>

          <div>
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
          </div>
          
      </div>
  </Layout>
)

export default IndexPage
