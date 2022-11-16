import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"

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

const TagButton = styled.div`
  a {
    padding: 5px;
    margin: 5px;
    text-align: center;
    display: inline-block;
    background-color: #ebebeb;
    border-radius: 10px;
    color: #696969;
    &:hover {
      opacity: 0.8;
    }
  }
`

const singleBlog = (props: any) => {
  const { title, excerpt, date, tags } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <Hero />
      <Wrapper>
        <div className="container">
          <h1>{title}</h1>
          <p>{date}</p>
          <TagButton>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, idx) => {
                return (
                  <Link key={idx} to={`/tags/${tag}`} itemProp="url">
                    {tag}
                  </Link>
                )
              })}
          </TagButton>
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
  query SingleBlog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        id
        title
        tags
      }
      html
    }
  }
`
