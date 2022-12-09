import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 200px;
  padding: 1.2em 0.8em;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 10px;
  border: 0.5px solid #e9eaea;
  border-radius: 20px;
  color: #333;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    box-shadow: 0px 0px 5px 5px #9ac1f5;
  }
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 0.5em;
`
const Description = styled.div`
  font-size: 16px;
  p {
    margin: 0;
  }
`

type Props = {
  url: string;
  title: string;
  description: string;
}

export const LinkCard: React.FC<Props> = ({ url, title, description }) => {
  return (
    <Wrapper to={url}>
      <Title>
        {title}
      </Title>
      <Description>
        <p>{description}</p>
      </Description>
    </Wrapper>
  )
}
