import React from "react"
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

const IndexPage = ({ pageContext: { data } }) => {
  const { info: { homepage }, allPosts } = data;
  return (
    <>
      <SEO title={`Home${varible}`} keywords={[`gatsby`, `application`, `react`]} />
      <Wrapper>
        <Typography variant="h3" align="center" component="h1">
          {homepage.title}
        </Typography>
        <Typography align="center" component="paragraph">
          {homepage.description}
        </Typography>
        <Posts allPosts={allPosts} />
      </Wrapper>
    </>
  )
}

export default IndexPage
