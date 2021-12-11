import * as React from "react"
import { Link } from "gatsby"
import github from "../images/github.svg"
import twitter from "../images/twitter.svg"
import * as style from "../styles/common.module.scss"

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href="https://github.com/KeitaUenishi">
          <img src={github} alt="logo"/>
        </a>
        <a href="https://twitter.com/uk092908">
          <img src={twitter} alt="logo"/>
        </a>
        <hr/>
        <Link to="/contact">Contact</Link>
        <p>©{new Date().getFullYear()} uenishi keita</p>
      </div>
    </footer>
  )
}

export default Footer