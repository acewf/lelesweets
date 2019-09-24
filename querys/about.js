
const QueryHomePage = async (graphql) => {
  const queryResult = await graphql(`
    query {
      site {
        siteMetadata {
          title
        }
      }
      infoJson{
        email
        logoTitle
        logoHeader{
          publicURL
        }
        about{
          title
          description
        }
      }
      dataJson{
        biography
        followers{
          count
        }
      }
    }`);
  const { data } = queryResult;

  if (typeof data === 'undefined') {
    throw Error(JSON.stringify(queryResult));
  }

  const normalizeData = {
    info: {
      logoTitle: data.infoJson.logoTitle,
      logoHeader: data.infoJson.logoHeader.publicURL,
      email: data.infoJson.email,
      biography: data.dataJson.biography,
      followers: data.dataJson.followers.count,
    },
    site: data.site
  }

  return normalizeData;
};

module.exports = QueryHomePage;
