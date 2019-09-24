import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import Post from "./post"


const StyledUl = styled.ul`
  list-style: none;
  margin-block-start:unset;
  margin-block-end:unset;
  padding-inline-start:unset;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Posts = ({ allPosts }) => {
  return (
    <StyledUl>
      {allPosts && allPosts.map((post) => {
        return (
          <Post key={post.shortcode} post={post}>{post.shortcode}</Post>
        );
      })}
    </StyledUl>
  );
}

Posts.propTypes = {
  post: PropTypes.array,
}

export default Posts;