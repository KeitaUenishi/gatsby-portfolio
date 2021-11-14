import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as style from "../../styles/index.module.scss"


const Title = () => {
  return (
    <div>
      <StaticImage src="../../images/header.jpg" 
            alt="hero" 
            quality={90} 
            placeholder="blurred" 
            formats={["AUTO", "WEBP", "AVIF"]}
            className={style.heroImg}/>
      <div className={style.textContainer}>
        <h3>しがないプログラマーの趣味ブログ</h3>
      </div>  
    </div>
  )
}

export default Title
