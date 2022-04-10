import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import cssVariables from "../../css_variables.json"

const { variables } = cssVariables

const Wrapper = styled.div`
  padding: 2rem 0 10rem;
  max-width: 960px;
  margin: auto;
  .container {
    ${variables.container}
    h2 {
      ${variables.headTitle}
    }
  }
`
const BlogCard = styled.div`
  display: grid;
  align-items: center;
  color: inherit;
  margin-top: 5rem;
  @media(max-width: ${variables.BREAK_S}) {
    grid-template-columns: 1fr;
`

const TextContainer = styled(Link)`
  padding: 10px 20px 10px;
  text-decoration: none;
  color: inherit;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 6px;
  border: 1px solid #c0c0c0;
  border-radius: 15px;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    box-shadow: rgb(0 0 0 / 16%) 10px 10px 16px;
  }
  @media(max-width: ${variables.BREAK_S}){
    padding: 2rem 0.5rem;
  }
  div {
    margin-top: 5px;
    font-size: 2.4rem;
    margin-bottom: 5px;
    @media(max-width: ${variables.BREAK_S}){
      font-size: 1.4rem;
    }
  }
`

export const Blog = (props) => {
  return(
    <Wrapper>
      <div className="container">
      <h2>Blog</h2>
      {props.data.allMarkdownRemark.edges.map((singleBlog, index) => (
            <BlogCard key={index}>
              <TextContainer to={singleBlog.node.fields.slug}>
                <p>{singleBlog.node.frontmatter.date}</p>
                <div>{singleBlog.node.frontmatter.title}</div>
              </TextContainer>
            </BlogCard>
          )
        )}
      </div>
    </Wrapper>
  )
}