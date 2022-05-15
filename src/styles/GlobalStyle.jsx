import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 65%;
  }
  body {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    font-display: swap;
    color: #333;
    margin: 0;
    padding: 0;
    border: 0;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 500;
    margin: 0;
  }
  a {
    text-decoration: none;
    word-wrap:break-word;
  }
  blockquote {
    border-left: 5px solid #ddd;
    color: #777;
    padding: 1em;
    padding-right: 0;
    margin: 1.5em 0;
  }
  table {
    display: block;
    overflow: auto;
    margin: 1.5em 0;
    border-left: 1px solid #ddd;
    border-collapse: collapse;
  }
  th {
    font-weight: bold;
    background-color: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 8px 10px;
    min-width: 50px;
  } 
  td {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 8px 10px;
    max-width: 600px;
    min-width: 50px;
  }
`