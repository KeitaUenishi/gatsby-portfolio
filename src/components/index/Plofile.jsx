import React from 'react'
import styled from 'styled-components'

const ProfileWrapper = styled.div`
  padding: 10rem 0;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-column-gap: 5rem;
  grid-auto-flow: dense;
  @media(max-width: $break-s){
    padding: 5rem 0;
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
  }
  p {
    margin-bottom: 0;
  }
`

export const Plofile = () => {
  return (
    <ProfileWrapper>
      <div>
        <h2>uenishi</h2>
        <p>
          2021年5月からバックエンドエンジニアとしてデビュー。<br/>
          27歳までバンドマンで、エンジニア以前の職歴＆業務経験一切なし。<br/>
          今の現場では業務支援系Webアプリ開発を行っていて、主な開発言語はC#（ASP.NET MVC）、jQueryなど。<br/>
          最近はモダンフロントエンドの技術に興味があり、Reactをメキメキ勉強しています。
        </p>
      </div>
    </ProfileWrapper>
  )
}