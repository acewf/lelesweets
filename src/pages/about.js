import React from "react"
import SEO from "../components/seo"

const AboutPage = ({ pageContext: { data: { info } } }) => {
  const { logoTitle, biography } = info;
  return (
    <>
      <SEO title={`About`} keywords={[`gatsby`, `application`, `react`]} />
      <h1>{logoTitle}</h1>
      <p>{biography}.</p>
    </>
  )
}

export default AboutPage
