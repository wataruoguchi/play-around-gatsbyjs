import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`,`react`, `application`]}/>
    <div className="home">
      <h1>Hello There</h1>
      <p>Welcome to my blog.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/blogposts/">View all posts</Link>
    </div>
  </Layout>
)

export default IndexPage
