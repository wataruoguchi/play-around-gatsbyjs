import * as React from "react"
import { ReactElement } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }: BlogPostData): ReactElement => {
  const { title, body, image, tags } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="body-text">
          <div
            dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
          />
        </div>
        <div>
          <Link to="/blogposts">View more posts</Link>
        </div>
        <div>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`

interface BlogPostData {
  data: {
    contentfulBlogPost: {
      title: string;
      slug: string;
      body: {
        childMarkdownRemark: {
          html: string;
        };
      };
      image: {
        file: {
          url: string;
        };
      };
      tags: string[];
    };
  };
}
