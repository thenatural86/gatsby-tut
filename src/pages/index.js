import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>Yolo World</h1>

      <ExampleButton>click er roo</ExampleButton>
    </Layout>
  )
}
