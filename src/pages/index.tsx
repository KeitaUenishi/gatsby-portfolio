import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import styled from "styled-components"

import cssVariables from "../css_variables.json"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import { Title } from "../components/index/Title"
import { Blog } from "../components/index/Blog"
import { SideBar } from "../components/SideBar"

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

const AppIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AppIndexTitle = styled.h2`
  font-size: 2.5rem;
`

const AppIndex = styled.div`
  margin-top: 15px;
`

const CardStyle = styled.div`
  height: 140px;
  padding-bottom: 0;
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
      <Wrapper>
        <Container>
          <Blog {...data} />
        </Container>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
      </Wrapper>
      <AppIndexWrapper>
        <AppIndexTitle>
          個人開発アプリ
        </AppIndexTitle>
        <AppIndex>
          <div className="iframely-embed">
            <CardStyle className="iframely-responsive">
              <a href="https://jolly-ramanujan-636c00.netlify.app/" data-iframely-url="//iframely.net/L3Ui6VW"></a>
            </CardStyle>
          </div>
        </AppIndex>
      </AppIndexWrapper>
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
