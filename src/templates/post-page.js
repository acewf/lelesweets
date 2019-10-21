import React from "react"
import * as PropTypes from "prop-types"
// import PostDetail from "../components/Post"
import styled from '@emotion/styled'
import Img from "gatsby-image"


const MediaCover = styled.div`
  width:50%;
`;

const PostTemplate = ({ pageContext: { data } }) => {
  const { post } = data;
  const { img } = post;
  console.log('Data:', data);
  return (
    <div>
      <MediaCover>
        <Img fluid={img} />
      </MediaCover>
    </div>
  )
}
export default PostTemplate;