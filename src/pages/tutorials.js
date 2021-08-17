import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql, useStaticQuery, Link } from "gatsby"

const Tutorials = (props) => {
    const {allContentfulTutorial: { edges }} = useStaticQuery(graphql`
    query {
      allContentfulTutorial {
        edges {
          node {
            id
            slug
            title
            publishedDate(formatString: "M/DD/YYYY")
          }
        }
      }
    }`)
    return (
        <Layout>
            <Head page="Tutorials" />
            <h1>Here's my most recent Tutorials</h1>
            {
                edges.map(({ node }) => (
                    <article key={node.id}>
                        <h2><Link to={`/tutorials/${node.slug}`}>{node.title}</Link></h2>
                        <p>Published on: {node.publishedDate}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export default Tutorials