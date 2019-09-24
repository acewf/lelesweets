
const normaliseItem = ({ node }) => {
  const { id, likes, shortcode, dimensions,
    type, display_url: { childImageSharp: fluid } } = node;

  return {
    id, likes, shortcode,
    dimensions, type,
    img: fluid.fluid
  }

}

const QueryHomePage = async (graphql, locale) => {
  const queryResult = await graphql(`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allPostsJson(limit: 100) {
        edges {
          node {
            id
            display_url{
              childImageSharp{
                fluid{
                  src
                  srcSet
                  sizes
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  base64
                }
              }
            }
            likes
            shortcode
            dimensions{
              height
              width
            }
            type
          }
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
        homepage{
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
      about: data.infoJson.about,
      homepage: data.infoJson.homepage,
      email: data.infoJson.email,
      biography: data.dataJson.biography,
      followers: data.dataJson.followers.count,
    },
    site: data.site,
    allPosts: data.allPostsJson.edges.map(normaliseItem)
  }

  return normalizeData;
};

module.exports = QueryHomePage;
