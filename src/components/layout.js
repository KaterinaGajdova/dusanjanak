/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
/* import Header from "./header"; */
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
  const windowGlobal = typeof window !== "undefined" && window;

  const getClass = (urlIncludes) => {
    if (
      windowGlobal &&
      windowGlobal.location &&
      windowGlobal?.location?.href.includes(urlIncludes)
    ) {
      return "active";
    } else return "";
  };

  /*   const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); */
  const pathName = location?.pathname;
  const isAlpinism = pathName?.includes("alpinism");
  const isScience = pathName?.includes("science");
  return (
    <>
      <GlobalStyle />
      {/* <Heading>DUŠAN JANÁK</Heading> */}
      <HeaderWrapper>
        {isAlpinism ? (
          <>
            <StyledLink
              name="alpinism-about"
              className={getClass("alpinism-about")}
              to="/alpinism-about/"
            >
              ABOUT ME
            </StyledLink>
            <StyledLink
              name="alpinism-cv"
              className={getClass("alpinism-cv")}
              to="/"
            >
              CLIMBING CV
            </StyledLink>
            <StyledLink
              name="alpinism-climbs"
              className={getClass("alpinism-climbs")}
              to="/"
            >
              CLIMBS
            </StyledLink>
            <StyledLink
              name="alpinism-writings"
              className={getClass("alpinism-writings")}
              to="/"
            >
              WRITINGS
            </StyledLink>
            <StyledLink
              name="alpinism-partners"
              className={getClass("alpinism-partners")}
              to="/"
            >
              PARTNERS
            </StyledLink>
            <StyledLink
              name="alpinism-media"
              className={getClass("alpinism-media")}
              to="/"
            >
              AUDIO/VIDEO
            </StyledLink>
            <StyledLink
              name="alpinism-lectures"
              className={getClass("alpinism-lectures")}
              to="/"
            >
              LECTURES
            </StyledLink>
          </>
        ) : isScience ? (
          <>
            <StyledLink
              name="science-about"
              className={getClass("science-about")}
              to="/science-about/"
            >
              ABOUT ME
            </StyledLink>
            <StyledLink
              name="science-cv"
              className={getClass("science-cv")}
              to="/science-cv"
            >
              ACADEMIC CV
            </StyledLink>
            <StyledLink
              name="science-research"
              className={getClass("science-research")}
              to="/"
            >
              RESEARCH
            </StyledLink>
            <StyledLink
              name="science-publications"
              className={getClass("science-publications")}
              to="/"
            >
              PUBLICATIONS
            </StyledLink>
            <StyledLink
              name="science-cooperation"
              className={getClass("science-cooperation")}
              to="/"
            >
              COOPERATION
            </StyledLink>
            <StyledLink
              name="science-media"
              className={getClass("science-media")}
              to="/"
            >
              AUDIO/VIDEO
            </StyledLink>
            <StyledLink
              name="science-lectures"
              className={getClass("science-lectures")}
              to="/"
            >
              LECTURES
            </StyledLink>
          </>
        ) : (
          <StyledLink to="/">Go back</StyledLink>
        )}
      </HeaderWrapper>
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

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;

  @media (min-width: 960px) {
    flex-direction: row;
    padding: 20px 0;
    max-width: 960px;
    margin: auto;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  outline: none;
  padding: 0.3rem 0.5rem;
  text-decoration: none;
  text-align: center;
  align-items: center;
  display: flex;
  color: #d8d8d8;
  font-size: 16px;
  transition: color 1s ease;
  position: relative;
  font-variant: small-caps;
  font-family: "Poiret One", cursive;

  &:hover,
  &:focus,
  &.active {
    color: #f0002f;
    div {
      border-color: #f0002f;
    }
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 0.5px dashed transparent;
    transition: all 0.6s ease;
    border-radius: 2px;
  }

  &:after {
    bottom: 0;
    right: 0;
  }
  &:before {
    top: 0;
    left: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    height: 100%;
  }
  &:hover:before {
    border-bottom-color: #f0002f;
    border-right-color: #f0002f;
  }

  &:hover:after {
    border-top-color: #f0002f;
    border-left-color: #f0002f;
  }

  @media (min-width: 960px) {
    padding: 0.5rem 1rem;
    font-size: 18px;
    line-height: 1;
  }
`;
