import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Success = () => {
  return (
    <Layout>
      <SEO title="ありがとうございます" description="これはサクセスページです"/>
      <div style={{textAline: "center", height: "70vh"}}>
        <h1>ご連絡ありがとうございます！</h1>
        <p>送信が完了しました。</p>
      </div>
    </Layout>
  )
}
