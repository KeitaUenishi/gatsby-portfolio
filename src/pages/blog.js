
import * as React from "react"
import { graphql, Link } from "gatsby"

const Blog = (props) => {
  return(
    <div>
      <h1>ブログページ</h1>
      {props.data.allMarkdownRemark.edges.map(
        (singleBlog, index) => 
          <div key={index}>
            <Link to={singleBlog.node.fields.slug}>
              <h2>{singleBlog.node.frontmatter.title}</h2>
            </Link>
            <p>{singleBlog.node.frontmatter.date}</p>
          </div>
      )}
    </div>
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
            excerpt
            id
            image
            title
          }
        }
      }
    }
  }
`