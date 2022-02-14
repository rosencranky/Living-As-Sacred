const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWoman {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWoman.edges.map(edge => {
        createPage({
          path: `women/${edge.node.slug}`,
          component: path.resolve(`./src/templates/women.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })
      resolve()
    })
  })
}
