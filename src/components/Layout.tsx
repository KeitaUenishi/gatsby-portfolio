import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

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
