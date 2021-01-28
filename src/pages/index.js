import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
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
