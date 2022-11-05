import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import cssVariables from "../../css_variables.json"

import { Pagination } from "../Pagination"

const { variables } = cssVariables

const Wrapper = styled.div`
  padding: 5rem 0 10rem;
  margin: auto;
  .container {
    ${variables.container}
    h2 {
      ${variables.headTitle}
    }
  }
  .active {
    opacity: 1;
    transition: 1s;
    transform: translateY(0);
  }
`
const BlogCard = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  color: inherit;
  margin-top: 5rem;
  opacity: 0;
  transform: translateY(-100px);
  @media(max-width: ${variables.BREAK_S}) {
    grid-template-columns: 1fr;
  }
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

export const Blog = (props: any) => {

  const pageItems = props.allMarkdownRemark.edges;
  const [displayItems, setDisplayItems] = useState([])
  const maxContents = 5;

  const handlePaginate = (page: number) => {
    setDisplayItems(pageItems.slice((page - 1) * maxContents, page * maxContents));

    removeActive();
  }
  
  const removeActive = () => {
    const targets = document.querySelectorAll('.blog-card')
    targets.forEach(entry => {
      if (entry) {
        entry.classList.remove('active')
      }
    })
  }
  
  useEffect(() => {
    setDisplayItems(pageItems.slice(0, maxContents))
  }, [])
  
  useEffect(() => {
    const targets = document.querySelectorAll('.blog-card')

    const options = {
      threshold: 0
    }
    const observer = new IntersectionObserver(actionElements, options)
    targets.forEach(target => {
      observer.observe(target)
    })

    function actionElements(entries: IntersectionObserverEntry[]){
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }
  },[displayItems])

  return(
    <Wrapper>
      <div className="container">
      <h2>Blog</h2>
        {displayItems.map((singleBlog: any, index) => (
            <BlogCard key={index} className='blog-card'>
              <TextContainer to={singleBlog.node.fields.slug}>
                <p>{singleBlog.node.frontmatter.date}</p>
                <div>{singleBlog.node.frontmatter.title}</div>
              </TextContainer>
            </BlogCard>
          )
        )}
      </div>
      <Pagination sum={pageItems.length} per={5} onChange={e => handlePaginate(e.page)} />
    </Wrapper>
  )
}