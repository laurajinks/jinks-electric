import React from "react"
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Services />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
 
  }
`
