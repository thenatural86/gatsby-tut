import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      Yolo world!
      <div>
        <Link to="/blog"> blog page</Link>
      </div>
      <div>
        <a target="_blank" href="https://www.gatsbyjs.com">
          gatsby docs
        </a>
      </div>
    </div>
  )
}
