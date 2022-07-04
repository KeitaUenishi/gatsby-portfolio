const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

  const result = await graphql(`
    query {
      slugs: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      tags: allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  result.data.slugs.edges.forEach(({ node }) => {
    createPage({
      path: `${node.fields.slug}`,
      component: path.resolve(`./src/templates/single-blog.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.tags.group.forEach(data => {
    createPage({
      path: `/tags/${data.tag}`,
      component: tagTemplate,
      context: {
        tag: data.tag,
      },
    })
  })
}
