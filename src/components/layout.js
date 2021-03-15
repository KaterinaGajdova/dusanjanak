/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family==Open+Sans|Poiret+One&display=swap" rel="stylesheet"');

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;

  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #d8d8d8;
    background: black;
    line-height: 1.2;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poiret One', cursive, serif;
  }


  ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      {/* <Heading>DUŠAN JANÁK</Heading> */}
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <Content>
        {children}
        {/* <footer></footer> */}
      </Content>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: 14px;
`;

const Heading = styled.h1`
  color: white;
  text-align: center;
  margin: 1rem 0;
`;
