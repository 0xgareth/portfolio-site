import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Posts = ({location}) => ( 
    <Layout location={location}>
        <Seo title="Posts" />
    </Layout>
)

export default Posts
