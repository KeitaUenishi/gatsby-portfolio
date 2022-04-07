import React from "react"
import { Link } from "gatsby"
import github from "../images/icon-sns/github.svg"
import twitter from "../images/icon-sns/twitter.svg"
import styled from "styled-components"

import { AppConst } from "../../utils/appConst"

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(71, 71, 71);
  height: 250px;
`

const InsideContainer = styled.div`
  a {
    margin: 0 3rem;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
    @media (max-width: ${AppConst.BREAK_S}) {
      margin: 0 1.5rem;
    }
  }
  img {
    width: 4rem;
    height: 4rem;
  }
  hr {
    margin: 2rem auto;
  }
  p {
    color: #fff;
    font-size: 1.4rem;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <InsideContainer>
        <a href="https://github.com/KeitaUenishi">
          <img src={github} alt="logo" />
        </a>
        <a href="https://twitter.com/uk092908">
          <img src={twitter} alt="logo" />
        </a>
        <hr />
        <Link to="/contact">Contact</Link>
        <p>©{new Date().getFullYear()} uenishi keita</p>
      </InsideContainer>
    </FooterWrapper>
  )
}

export default Footer
