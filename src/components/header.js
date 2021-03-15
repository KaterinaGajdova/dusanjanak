import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

const windowGlobal = typeof window !== "undefined" && window

const getClass = urlIncludes => {
  if (
    windowGlobal &&
    windowGlobal.location &&
    windowGlobal?.location?.href.includes(urlIncludes)
  ) {
    return "active"
  } else return ""
}

const MenuScience = () => {
  const [opened, setOpened] = useState("")
  return (
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
  )
}

const MenuAlpinism = () => {
  const [opened, setOpened] = useState("")

  return (
    <>
      <StyledLink
        name="alpinism-about"
        className={getClass("alpinism-about")}
        to="/alpinism-about/"
      >
        ABOUT ME
      </StyledLink>
      <StyledLink name="alpinism-cv" className={getClass("alpinism-cv")} to="/">
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
  )
}

const Header = ({ location }) => {
  const pathName = location?.pathname
  const isAlpinism = pathName?.includes("alpinism")
  const isScience = pathName?.includes("science")

  return (
    <HeaderWrapper>
      {isAlpinism ? (
        <MenuAlpinism />
      ) : isScience ? (
        <MenuScience />
      ) : (
        <StyledLink to="/">Go back</StyledLink>
      )}
    </HeaderWrapper>
  )
}
//#F0002F

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;

  @media (min-width: 756px) {
    flex-direction: row;
    padding: 20px 0;
    max-width: 960px;
    margin: auto;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  outline: none;
  padding: 0.3rem 0.5rem;
  text-decoration: none;
  text-align: center;
  color: #d8d8d8;
  font-size: 16px;
  transition: color 1s ease;
  position: relative;

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

  @media (min-width: 900px) {
    padding: 0.5rem 1rem;
    font-size: 18px;
  }
`

export default Header
