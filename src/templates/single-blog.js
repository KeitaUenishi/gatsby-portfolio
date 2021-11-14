import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import * as style from "../styles/singleBlog.module.scss"
import SEO from "../components/seo";

const singleBlog = (props) => {
  return(
    <Layout>
      <SEO 
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.excerpt}/>
      <div className={style.hero}/>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html:props.data.markdownRemark.html }}></div>
        </div>
      </div>
    </Layout>
  )
}

export default singleBlog

export const query = graphql`
  query SingleBlogQuery ($slug: String!) {
    markdownRemark (fields: { slug:{ eq:$slug} }){
      frontmatter {
        date
        id
        title
      }
      html
    }
  }`