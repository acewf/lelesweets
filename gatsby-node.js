const _ = require(`lodash`)
const path = require(`path`)
const slug = require(`slug`)
const slash = require(`slash`)
const querys = require('./querys');

let GraphQl;
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  GraphQl = graphql;

  const data = await querys['/'](graphql);
  const postTemplate = path.resolve(`src/templates/post-page.js`);
  _.each(data.allPosts, edge => {
    const edgeData = {
      info: data.info,
      site: data.site,
      post: edge
    }
    createPage({
      path: `/${slug(edge.id)}/`,
      component: postTemplate,
      context: {
        data: edgeData
      },
    })
  })
}

exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage, createRedirect }
}) => {
  deletePage(page);
  let data;
  if (querys[page.path]) {
    data = await querys[page.path](GraphQl);
  }

  createPage({
    ...page,
    context: {
      data
    }
  });
}