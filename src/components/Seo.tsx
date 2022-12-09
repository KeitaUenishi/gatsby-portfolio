import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql, PageProps } from "gatsby"

type Props = {
  title?: string
  description?: string
}

export const Seo: React.FC<Props> = ({title, description }) => {
  const { pathname } = useLocation()
  const { site, siteImage } = useStaticQuery(query)
  const { defaultTitle, defaultDescription, defaultImage, siteUrl } =
    site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${siteImage.childImageSharp.fluid.src}`,
    url: `${siteUrl}${pathname}`,
    canonical: `${siteUrl}${pathname}`,
    linkImage: `${siteUrl}${siteImage.childImageSharp.fluid.src}`,
  }
  return (
    <Helmet>
      <html lang="ja" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="description" content={description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.canonical} />

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <script type="text/javascript" src="https://cdn.iframe.ly/embed.js"></script>
    </Helmet>
  )
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
        defaultImage
        siteUrl
      }
    }
    siteImage: file(relativePath: { eq: "common/header.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
