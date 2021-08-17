
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const TutorialPost = ({ data: { contentfulTutorial }}) => {
  return (
    <Layout>
        <Head page={contentfulTutorial.title}/>
        <h1>{contentfulTutorial.title}</h1>
        { renderRichText(contentfulTutorial.body) }
    </Layout>
  )
}

export const query = graphql`
query ($slug: String!) {
  contentfulTutorial(slug: {eq: $slug }) {
    title
    publishedDate(formatString: "M/DD/YYYY")
    body {
      raw
    }
  }
}
`


export default TutorialPost