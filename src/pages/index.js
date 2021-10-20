import * as React from "react"
import { Link } from "gatsby"
import * as style from "../styles/index.module.css"

const Index = () => {
  return(
    <div>
      <h1 className={style.h1Text}>こんにちは</h1>
      <Link to="/contact">Contactページに移動</Link>
    </div>
  )
}

export default Index