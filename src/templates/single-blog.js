import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import cssVariable from "../css_variables.json"

const { variables } = cssVariable

const Hero = styled.div`
  text-align: center;
`

const Wrapper = styled.div`
  padding: 5rem 0 10rem;
  & .container {
    ${variables.container}
  }
  @media (max-width: ${variables.BREAK_S}) {
    padding: 2rem 0 10rem;
  }
`

const singleBlog = props => {
  const { title, excerpt, date } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Hero />
      <Wrapper>
        <div className="container">
          <h1>{title}</h1>
          <p>{date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default singleBlog

export const query = graphql`
  query SingleBlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        id
        title
      }
      html
    }
  }
`
