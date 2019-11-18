const _ = require(`lodash`)
const path = require(`path`)
const slug = require(`slug`);

const querys = {
  postPage: async (graphql) => {
    return await graphql(`
      query {
        allPostsJson(limit: 100) {
          nodes {
            id
          }
        }
      }
    `)
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  GraphQl = graphql;

  const { data } = await querys['postPage'](graphql);
  const postTemplate = path.resolve(`src/templates/post-page.js`);
  const { allPostsJson } = data;

  _.each(allPostsJson.nodes, ({ id }) => {
    createPage({
      path: `/${slug(id)}/`,
      component: postTemplate,
      context: {
        postID: id
      },
    })
  })
}