import React from "react"
import Layout from "../components/layout"
import Header from "../example/Header"
import HeaderStatic from "../example/HeaderStatic"

const examples = () => {
  return (
    <Layout>
      <h1>Examples page</h1>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

export default examples