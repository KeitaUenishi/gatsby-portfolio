
import * as React from "react"
import { graphql, Link } from "gatsby"
import * as style from "../../styles/blog.module.scss"

const Blog = (props) => {
  return(
    <div className={style.wrapper}>
      <div className={style.container}>
      {props.props.data.allMarkdownRemark.edges.map((singleBlog, index) => (
            <div className={style.blogCard} key={index}>
              <div className={style.textContainer}>
                <Link to={singleBlog.node.fields.slug}>{singleBlog.node.frontmatter.title}</Link>
                <p>{singleBlog.node.frontmatter.date}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Blog