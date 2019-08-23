import * as React from "react"
import { ReactElement } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Node = {
  node: {
    id: number;
    title: string;
    slug: string;
    body: {
      body: string;
    };
    image: {
      file: {
        url: string;
      };
    };
    tags: string[];
  };
}
type BlogPostsData = {
  data: {
    allContentfulBlogPost: {
      edges: Node[];
    };
  };
}

const BlogPosts = ({ data }: BlogPostsData): ReactElement => {
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all blogposts!"}</h1>
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPosts

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            file {
              url
            }
          }
          tags
        }
      }
    }
  }
`
