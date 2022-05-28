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

export const Profile = () => {
  return (
    <ProfileWrapper>
      <div className='container'>
        <h2>Profile</h2>
        <div className='textArea'>
          <h3>Uenishi</h3>
          <p>
            2021年5月からバックエンドエンジニアとしてデビュー。<br/>
            27歳までバンドマンで、エンジニア以前の職歴なし＆IT業界の業務経験一切なし。<br/>
            現在は業務系Webアプリ開発をメインで行っていて、主な開発言語はC#（ASP.NET MVC）<br/>
            Gatsby.jsで構築されたオウンドメディアなども開発しています。<br/>
            いろんな言語を触りつつ、基礎固め中の2年目突入エンジニア。React書くのが結構好き。
          </p>
        </div>
      </div>
    </ProfileWrapper>
  )
}