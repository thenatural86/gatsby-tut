import React from "react"
import Layout from "../components/layout"
import Header from "../example/Header"
import HeaderStatic from "../example/HeaderStatic"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <h1>Examples page</h1>
      <Header />
      <HeaderStatic />
      <h5>author : {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default examples
