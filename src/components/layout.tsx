import React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

import { GlobalStyle } from "../styles/GlobalStyle"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
