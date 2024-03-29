import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
  .heroImg {
    min-height: 350px;
    max-width: 1200px;
    margin: auto;
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(128, 128, 128, 0.8);
  padding: 0rem 2rem 1rem;
  border-radius: 5px;
  @media(max-width: $break-s) {
    width: 80%;
    padding: 1.5rem 1rem 3rem;
  }
  h1 {
    font-size: 5rem;
  }
`

export const Title = () => {
  return (
    <Wrapper>
      <StaticImage src="../../images/common/header.jpg" 
            alt="hero" 
            quality={90} 
            placeholder="blurred" 
            formats={["auto", "webp", "avif"]}
            className="heroImg"/>
      <TextContainer>
        <h3>大阪に生息するプログラマーのブログ</h3>
      </TextContainer>
    </Wrapper>
  )
}