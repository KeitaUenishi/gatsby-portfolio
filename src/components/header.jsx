import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import cssVariables from "../css_variables.json"

const { variables } = cssVariables

const HeaderWapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #fff;
`

const Container = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 70px;
  & a {
    color: inherit;
    font-weight: 500;
  }
  & li {
    display: inline-block;
    margin: 0 0 0 6rem;
    @media (max-width: ${variables.BREAK_S}) {
      margin: 0 0 0 4rem;
    }
  }
`

export const Header = () => {
  return (
    <HeaderWapper>
      <Container>
        <FlexContainer>
          <Link to="/">Top</Link>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </FlexContainer>
      </Container>
    </HeaderWapper>
  )
}
