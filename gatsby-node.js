/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * I'm following this tutorial:
 * https://itnext.io/content-management-with-gatsby-netlify-and-contentful-70f03de41602
 */

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      // Resolve the path s to our template
      const blogPostTemplate = path.resolve("./src/templates/blogpost.js")
      // Then for each result we create a page.
      result.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
          path: `/blogpost/${edge.node.slug}`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
