import React from "react"
import SEO from "../components/seo"
import Posts from "../components/Posts"

let varible = 'das';

const IndexPage = ({ pageContext: { data } }) => {
  const { info: { homepage }, allPosts } = data;
  return (
    <>
      <SEO title={`Home${varible}`} keywords={[`gatsby`, `application`, `react`]} />
      <h1>{homepage.title}</h1>
      <p>{homepage.description}</p>
      <Posts allPosts={allPosts} />
    </>
  )
}

export default IndexPage
