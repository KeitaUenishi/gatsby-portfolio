import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import * as style from "../styles/contact.module.scss"
import cssVariables from "../css_variables.json"

const variables = cssVariables.variables;

const Wrapper = styled.div`
  padding: 7rem 0 10rem;
`

const Container = styled.div`
  ${variables.container}
  .input[type=text], input[type=email], textarea {
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    padding: 0.4rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    border: solid 1px grey;
    border-radius: 5px;
  }
  .label {
    font-size: 1.4rem;
  }
  .button {
    width: 100%;
    border: none;
    color: white;
    padding: 0.5rem 2rem;
    font-size: 1.6rem;
    color: #fff;
    background-color: $primary-color;
    transition-duration: 0.4s;
    border-radius: 5px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  *:focus {
    outline: none;
  }
`

const Contact = () => {
  return(
    <Layout>
      <SEO title="コンタクト" description="これはコンタクトページです"/>
      <Wrapper>
        <Container>
          <h1>Contact</h1>
          <p>お気軽にご相談ください</p>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="form-name" value="contact"/>
            <label htmlFor="name">お名前</label>
              <input type="text" name="name" id="name" required/>
            <label htmlFor="email">メールアドレス</label>
              <input type="email" name="email" id="email" required/>
            <label htmlFor="textarea">ご用件</label>
              <textarea name="message" rows="10" id="textarea" required></textarea>
            <button type="submit">送信</button>
          </form>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default Contact