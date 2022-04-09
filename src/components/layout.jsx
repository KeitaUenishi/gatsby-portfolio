import React from "react"
import { Header } from "./header"
import Footer from "./footer"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    font-display: swap;
    color: #333;
    margin: 0;
    padding: 0;
    border: 0;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 500;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
