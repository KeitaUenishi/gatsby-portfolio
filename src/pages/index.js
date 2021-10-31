import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JSLogo from "../images/javascript.svg"
import ReactLogo from "../images/react.svg"
import GatsbyLogo from "../images/gatsby.svg"
import NextLogo from "../images/next.svg"
import * as style from "../styles/index.module.scss"

const Index = () => {
  return(
    <Layout>
      <SEO title="uenishi" description="uenishi keitaのポートフォリオサイトです" />
      <div className={style.hero}>
        <StaticImage src="../images/index-hero.jpg" 
          alt="hero" 
          quality={90} 
          placeholder="blurred" 
          formats={["AUTO", "WEBP", "AVIF"]}
          className={style.heroImg}/>
        <div className={style.textContainer}>
          <h1>I'm uenishi!</h1>
          <h3>Developer!</h3>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h2>JavaScript Nerd</h2>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa</p>
          </div>
          <StaticImage src="../images/profile.jpg" alt="profile" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]}/>
        </div>
        <div className={style.skills}>
          <h2>Skills</h2>
          <div className={style.skillsContainer}>
            <div>
              <img src={JSLogo} alt="javascript"/>
              <span>JavaScript / 1 years</span>
            </div>
            <div>
              <img src={ReactLogo} alt="react"/>
              <span>JavaScript / 1 years</span>
            </div>
            <div>
              <img src={GatsbyLogo} alt="gatsby"/>
              <span>JavaScript / 1 years</span>
            </div>
            <div>
              <img src={NextLogo} alt="next"/>
              <span>JavaScript / 1 years</span>
            </div>
          </div>
        </div>
        <div className={style.ctaButton}>
          <Link to="/contact">Make It Happen!</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index