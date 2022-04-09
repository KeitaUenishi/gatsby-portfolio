import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import cssVariables from "../../css_variables.json"

const { variables } = cssVariables

const Wrapper = styled.div`
  padding: 2rem 0 10rem;
  .container {
    ${variables.container}
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

const TextContainer = styled.div`
  padding: 0 2rem 0.8rem;
  @media(max-width: $break-s){
    padding: 2rem 0.5rem;
  }
  a {
    margin-top: 5px;
    font-size: 2.4rem;
    &:hover {
      opacity: 0.8;
    }
    @media(max-width: $break-s){
      font-size: 2rem;
    }
  }
`

export const Blog = (props) => {
  return(
    <Wrapper>
      <div className="container">
      {props.data.allMarkdownRemark.edges.map((singleBlog, index) => (
            <BlogCard key={index}>
              <TextContainer>
                <Link to={singleBlog.node.fields.slug}>{singleBlog.node.frontmatter.title}</Link>
                <p>{singleBlog.node.frontmatter.date}</p>
              </TextContainer>
            </BlogCard>
          )
        )}
      </div>
    </Wrapper>
  )
}