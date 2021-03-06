import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div >
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main style={{
          margin: `0 auto`,
          maxWidth: 1000,
          minHeight: `75vh`,
        }}>
          {children}
        </main>
      <footer style={{margin: `1rem`}}>
        <p>Developed by Marjoree E. F. © {new Date().getFullYear()}, Built with
          {` `}<a href="https://www.gatsbyjs.com">Gatsby</a></p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
