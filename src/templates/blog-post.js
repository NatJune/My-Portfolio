
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from "gatsby"

const BlogPost = ({ data: { markdownRemark }}) => {
  return (
    <Layout>
        <Head page={markdownRemark.frontmatter.title}/>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p>Published on {markdownRemark.frontmatter.date} - Time to read: {markdownRemark.timeToRead } min(s)</p>
        <div dangerouslySetInnerHTML={{__html: markdownRemark.html }}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "M/DD/YYYY")
        title
      }
      timeToRead
    }
  }
`


export default BlogPost