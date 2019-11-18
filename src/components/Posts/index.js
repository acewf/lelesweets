import React, { useState } from "react"
import PropTypes from "prop-types";
import styled from '@emotion/styled'
import { Grid } from '@material-ui/core';
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
    <Grid container justify="center" spacing={3}>
      <StyledUl>
        {allPosts && allPosts.map((post) => {
          return (
            <Post key={post.shortcode} post={post}>{post.shortcode}</Post>
          );
        })}
      </StyledUl>
    </Grid>
  );
}

Posts.propTypes = {
  post: PropTypes.array,
}

export default Posts;