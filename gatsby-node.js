const path = require('path');

module.exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const markdownSlugs = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const contentfulSlugs = await graphql(`
        query {
            allcontentfulTutorial {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    markdownSlugs.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.fields.slug}`,
            component: `${__dirname}/src/templates/blog-post.js`,
            context: {
                slug: node.fields.slug
            }
        })
    })

    contentfulSlugs.data.allcontentfulTutorial.edges.forEach(({ node }) => {
        createPage({
            path: `/tutorials/${node.slug}`,
            component: `${__dirname}/src/templates/tutorial-post.js`,
            context: {
                slug: node.slug
            }
        })
    })
}