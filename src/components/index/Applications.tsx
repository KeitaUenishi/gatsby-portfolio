import React from 'react'
import styled from 'styled-components'

import { LinkCard } from '../card/LinkCard'

const AppIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AppIndexTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 24px;
`

const AppIndex = styled.div`
  margin-top: 15px;
`

const Applications = () => {
  return (
    <AppIndexWrapper>
      <AppIndexTitle>
        個人開発アプリ
      </AppIndexTitle>
      <AppIndex>
        <LinkCard url="https://jolly-ramanujan-636c00.netlify.app/" title="モンスター占い" description="今日の運勢をモンスターで占います！"/>
      </AppIndex>
    </AppIndexWrapper>
  )
}

export default Applications
