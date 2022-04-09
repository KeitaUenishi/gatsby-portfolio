import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title } from "../components/index/Title"
import { Plofile } from "../components/index/Plofile"
import { Blog } from "../components/index/Blog"
import styled from "styled-components"
import cssVariables from "../css_variables.json"

const variables = cssVariables.variables

const Hero = styled.div`
  text-align: center;
  position: relative;
  min-height: 350px;
`

const Container = styled.div`
  ${variables.container}
`

const CtaButton = styled.div`
  padding: 0 0 10rem;
  text-align: center;
  a {
    display: inline-block;
    margin: 10rem 0;
    padding: 1.3rem 6rem;
    background-color: $primary-color;
    border-radius: 25px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
`

const Index = props => {
  return (
    <Layout>
      <SEO
        title="uenishi"
        description="uenishi keitaのポートフォリオサイトです"
      />
      <Hero>
        <Title />
      </Hero>
      <Container>
        <Plofile />
        <Blog {...props} />
        <CtaButton>
          <Link to="/contact">ご連絡はこちら</Link>
        </CtaButton>
      </Container>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: frontmatter___id, order: DESC }) {
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
