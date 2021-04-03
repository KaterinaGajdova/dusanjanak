import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

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

const Header = ({ location }) => {
  const pathName = location?.pathname;
  const isAlpinism = pathName?.includes("alpinism");
  const isScience = pathName?.includes("science");

  return (
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
        <span>fhfgh</span>
      )}
    </HeaderWrapper>
  );
};

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
  font-family: "Open Sans Condensed", cursive;

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

export default Header;
