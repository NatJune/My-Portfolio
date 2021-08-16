import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql, useStaticQuery, Link } from "gatsby"

const Blog = (props) => {
    const {allMarkdownRemark: { edges }} = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "M/DD/YYYY")
              }
              timeToRead
              excerpt(pruneLength: 25)
              id
              fields {
                slug
              }
            }
          }
        }
      }      
    `)
    return (
        <Layout>
            <Head page="Blog" />
            <h1>Here's my most recent posts</h1>
            {
                edges.map(({ node }) => (
                    <article key={node.id}>
                        <h2><Link to={`/blog/${node.fields.slug}`}>{node.frontmatter.title}</Link></h2>
                        <p>Published on: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export default Blog