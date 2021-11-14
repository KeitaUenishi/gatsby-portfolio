
import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/blog.module.scss"
import SEO from "../components/seo"

const Blog = (props) => {
  return(
    <Layout>
      <SEO title="ブログ" description="これはブログページです"/>
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>Blog</h1>
        {props.data.allMarkdownRemark.edges.map((singleBlog, index) => ( 
            <div className={style.blogCard} key={index}>
              <div className={style.textContainer}>
                <Link to={`/blog${singleBlog.node.fields.slug}`}>{singleBlog.node.frontmatter.title}</Link>
                <p>{singleBlog.node.frontmatter.date}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            id
            title
          }
        }
      }
    }
  }
`