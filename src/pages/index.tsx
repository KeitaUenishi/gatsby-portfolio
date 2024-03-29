import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import styled from "styled-components"

import cssVariables from "../css_variables.json"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import { Title } from "../components/index/Title"
import { Blog } from "../components/index/Blog"
import { SideBar } from "../components/SideBar"
import Applications from "../components/index/Applications"

const { variables } = cssVariables

const Hero = styled.div`
  text-align: center;
  position: relative;
  min-height: 350px;
`

const Wrapper = styled.div`
  display: flex;
  max-width: 1240px;
  margin: auto;
  @media (max-width: ${variables.BREAK_TB}) {
    flex-direction: column;
    align-items: center;
  }
`

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin-right: auto;
  padding-right: 30px;
`

const SideBarContainer = styled.div`
  max-width: 350px;
  @media (max-width: ${variables.BREAK_TB}) {
    max-width: 960px;
  }
`

const CtaButton = styled.div`
  padding: 0 0 10rem;
  text-align: center;
  a {
    display: inline-block;
    margin: 10rem 0;
    padding: 1.3rem 6rem;
    background-color: ${variables.PRIMARY_COLOR};
    border-radius: 25px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
`

const TransferLinkContainer = styled.div`
  text-align: center;
  margin: 24px 0;
  & a {
    font-size: 2rem;
  }
`

type Props = {
  data: PageProps<GatsbyTypes.BlogQuery>
}

const Index: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Uenishi"
        description="Uenishi Keitaのポートフォリオサイトです"
      />
      <Hero>
        <Title />
      </Hero>
      <TransferLinkContainer>
        <a href="https://www.uenishi.blog/">移転しました</a>
      </TransferLinkContainer>
      <Wrapper>
        <Container>
          <Blog {...data} />
        </Container>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
      </Wrapper>
      <Applications />
      <CtaButton>
        <Link to="/contact">ご連絡はこちら</Link>
      </CtaButton>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Blog {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
