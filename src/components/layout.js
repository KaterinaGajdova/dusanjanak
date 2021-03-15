/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, location }) => {
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
    <>
      {/* <Heading>DUŠAN JANÁK</Heading> */}
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <Content>
        {children}
        {/* <footer></footer> */}
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: 14px;
`

const Heading = styled.h1`
  color: white;
  text-align: center;
  margin: 1rem 0;
`
