import React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

import { GlobalStyle } from "../styles/GlobalStyle"

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
