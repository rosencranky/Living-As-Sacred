/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const createWomen = require(`./gatsby/createWomen`)
const createWomenPt = require(`./gatsby/createWomenPt`)

exports.createPages = async ({ actions, graphql }) => {
  await createWomen({ actions, graphql })
  await createWomenPt({ actions, graphql })
}
