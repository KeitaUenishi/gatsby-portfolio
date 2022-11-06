import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Blog } from "../components/index/Blog"
import { Seo } from "../components/seo"

const Wrapper = styled.div`
  margin: 5rem auto 5rem;
  h1 {
    text-align: center;
  }
`

type Props = {
  data: any,
  pageContext: { tag: string},
}

const tags: React.FC<Props> = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.nodes
  const { tag } = pageContext

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title={`タグ: "${tag}" (0記事)`} />
        <Wrapper>
          <p>該当するタグの投稿記事がありません。</p>
        </Wrapper>
      </Layout>
    )
  }

  const tagHeader = `タグ: "${tag}" (${totalCount}記事)`
  return (
    <Layout>
      <Seo title={tagHeader} />
      <Wrapper>
        <h1>{tagHeader}</h1>
        <Blog {...data} />
      </Wrapper>
    </Layout>
  )
}

export default tags

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          tags
        }
      }
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            id
            title
            tags
          }
        }
      }
    }
  }
`
