import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import { motion } from "framer-motion"

const Posts = ({ data }) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    React.useEffect(()  => {
        document.body.style.backgroundColor = "white";
    
        return () => {
            document.body.style.backgroundColor = "#030303";
        };
    });

    require('../components/posts.css')

    return (
        <div className="global-wrapper">
          <Seo title="Posts" />
          <motion.main
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{
                  type: "spring",
                  mass: 0.35,
                  stiffness: 75,
                  duration: 0.3,
                  ease:"easeOut"
              }}
          >

          <Link to="/" className='posts-home-button'>← home</Link>

          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                  <li key={post.fields.slug}>
                    <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                    >
                      <header className="post-list-header">
                        <h2 className="posts-h2">
                            <Link className="post-list-link" to={post.fields.slug} itemProp="url">
                              <span style={{color:`#0FA3B1`}} className="posts-h2" itemProp="headline">{title}</span>
                            </Link>
                        </h2>
                        <small className="post-list-small">{post.frontmatter.date} • {post.frontmatter.minread} min read ☕</small>
                      </header>

                      <section>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                            className="post-list-description"
                        />
                      </section>
                    </article>
                  </li>
                  )
                })}
            </ol>

            {/* <Footer /> */}
            </motion.main>
        </div>
    )
}

export default Posts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          minread
        }
      }
    }
  }
`