
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
        <p>エンジニアの日常生活をお届けします</p>
        {props.data.allMarkdownRemark.edges.map((singleBlog, index) => ( 
            <div className={style.blogCard} key={index}>
              <div className={style.textContainer}>
                <h3>{singleBlog.node.frontmatter.title}</h3>
                <p>{singleBlog.node.frontmatter.excerpt}</p>
                <p>{singleBlog.node.frontmatter.date}</p>
                <Link to={`/blog${singleBlog.node.fields.slug}`}>Read More</Link>
              </div>
              <GatsbyImage 
                image={singleBlog.node.frontmatter.image.childImageSharp.gatsbyImageData} 
                alt="card-image" className={style.cardImg} />
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
            excerpt
            id
            image {
              childImageSharp {
                gatsbyImageData(
                  formats: AUTO, 
                  placeholder: BLURRED, 
                  quality: 90)
              }
            }
            title
          }
        }
      }
    }
  }
`