import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import * as style from "../styles/index.module.scss"
import Title from "../components/index/Title"
import Plofile from "../components/index/Plofile"
import Skill from "../components/index/Skill"
import Blog from "../components/index/Blog"

const Index = (props) => {
  return(
    <Layout>
      <SEO title="uenishi" description="uenishi keitaのポートフォリオサイトです" />
      <div className={style.hero}>
        <Title />
      </div>
      <div className={style.container}>
        <Plofile/>
        <Blog props={props}/>
        <div className={style.ctaButton}>
          <Link to="/contact">ご連絡はこちら</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index

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