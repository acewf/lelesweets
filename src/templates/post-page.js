import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import { Card } from '@material-ui/core';
import styled from '@emotion/styled'
import Img from "gatsby-image"
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs } from '@material-ui/core';


const MediaCover = styled.div`
  width:300px;
  margin:20px;
`;

const PostTemplate = ({ data }) => {
  const { postsJson: { display_url: { childImageSharp } } } = data;
  //const { img } = post;
  console.log('postID:', data);
  return (
    <>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link to="/">Products</Link>
        <Typography color="textPrimary">Cake X</Typography>
      </Breadcrumbs>
      <div>
        <MediaCover>
          <Card>
            <Img fluid={childImageSharp.fluid} />
          </Card>
        </MediaCover>
      </div>
    </>
  )
}



export const query = graphql`
  query($postID: String) {
    site {
      siteMetadata {
        title
      }
    }
    postsJson(id: {eq: $postID}) {
      id
      display_url{
        childImageSharp{
          fluid(maxWidth: 300){
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

export default PostTemplate;