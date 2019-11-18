import React from "react"
import { graphql } from 'gatsby';
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core';
import SEO from "../components/seo"
import Posts from "../components/Posts"

let varible = 'das';

const Wrapper = styled.div`
  max-width:960px;
  margin:auto;
  overflow:hidden;
`;

const IndexPage = ({ data }) => {
  const { infoJson: { homepage }, allPostsJson: { nodes } } = data;

  console.log(homepage.description)
  return (
    <>
      <SEO title={`Home${varible}`} keywords={[`gatsby`, `application`, `react`]} />
      <Wrapper>
        <Typography variant="h3" align="center" component="h1">
          {homepage.title}
        </Typography>
        <Typography align="center">
          {homepage.description}
        </Typography>
        <Posts allPosts={nodes} />
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPostsJson(limit: 100) {
      nodes {
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
  }
`

export default IndexPage
