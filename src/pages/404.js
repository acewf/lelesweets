import React from "react"
import SEO from "../components/seo"
import { graphql } from 'gatsby';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)


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
      homepage{
        title
        description
      }
    }
  }
`

export default NotFoundPage
