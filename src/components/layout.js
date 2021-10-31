import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/all.scss"

const Layout = (props) => {
  return(
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout