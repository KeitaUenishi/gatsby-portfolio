import React from 'react'
import * as style from "../../styles/index.module.scss"
import { StaticImage } from 'gatsby-plugin-image'

const Plofile = () => {
  return (
    <div className={style.profile}>
      <div>
        <h2>uenishi</h2>
        <p>
          2021年5月からバックエンドエンジニアとしてデビュー。<br/>
          27歳までバンドマンで、エンジニア以前の職歴＆業務経験一切なし。<br/>
          今の現場では業務支援系Webアプリ開発を行っていて、主な開発言語はC#（ASP.NET MVC）、jQueryなど。<br/>
          最近はモダンフロントエンドの技術に興味があり、Reactをメキメキ勉強しています。
        </p>
      </div>
    </div>
  )
}

export default Plofile