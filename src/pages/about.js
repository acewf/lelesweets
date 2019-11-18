import React from "react"
import { graphql } from 'gatsby';
import SEO from "../components/seo"

const AboutPage = ({ data: { infoJson } }) => {
  const { logoTitle, biography } = infoJson;
  return (
    <>
      <SEO title={`About`} keywords={[`gatsby`, `application`, `react`]} />
      <h1>{logoTitle}</h1>
      <p>{biography}.</p>
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
  }
`

export default AboutPage
