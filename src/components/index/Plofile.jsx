import React from 'react'
import styled from 'styled-components'
import cssVariables from "../../css_variables.json"

const { variables } = cssVariables

const ProfileWrapper = styled.div`
  padding: 10rem 0;
  grid-column-gap: 5rem;
  grid-auto-flow: dense;
  .container {
    ${variables.container}
  }
  .textArea {
    margin-top: 10px;
  }
  @media(max-width: ${variables.BREAK_S}){
    padding: 5rem 0;
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
  }
  p {
    margin-bottom: 0;
  }
  h2 {
    ${variables.headTitle}
  }
`

export const Plofile = () => {
  return (
    <ProfileWrapper>
      <div className='container'>
        <h2>Profile</h2>
        <div className='textArea'>
          <h3>Uenishi</h3>
          <p>
            2021年5月からバックエンドエンジニアとしてデビュー。<br/>
            27歳までバンドマンで、エンジニア以前の職歴＆業務経験一切なし。<br/>
            今の現場では業務支援系Webアプリ開発を行っていて、主な開発言語はC#（ASP.NET MVC）、jQueryなど。<br/>
            最近はモダンフロントエンドの技術に興味があり、Reactをメキメキ勉強しています。
          </p>
        </div>
      </div>
    </ProfileWrapper>
  )
}