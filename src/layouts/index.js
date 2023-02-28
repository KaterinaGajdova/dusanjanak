import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { IntProvider, Consumer } from "./Context";
import { cz, en } from "../content/general";
import styled, {
  ThemeProvider,
  createGlobalStyle,
  keyframes,
} from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet"');

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;

  }

  * {
    box-sizing: border-box;
    font-size: 16px;
    @media (min-width: 1600px) {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
    font-family: "Open Sans Condensed", sans-serif;
    color: #d8d8d8;
    background: #33302b;
    line-height: 1.2;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans Condensed', cursive, serif;
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

  const mainTheme = {
    fontBodySize: "14px",
    white: "white",
    lightGrey: " #b8b8b8",
    red: "#f0002f",
    fontHeading: "Open Sans Condensed",
    background: "#33302b",
  };

  const FlagEN = () => (
    <Consumer>
      {({ changeToEn, int }) => {
        const isActive = int === "en";
        return (
          <Lang onClick={() => changeToEn()} active={isActive}>
            En
          </Lang>
        );
      }}
    </Consumer>
  );

  const FlagCZ = () => (
    <Consumer>
      {({ changeToCz, int }) => {
        const isActive = int === "cz";
        return (
          <Lang onClick={() => changeToCz()} active={isActive}>
            Cz
          </Lang>
        );
      }}
    </Consumer>
  );

  const pathName = location?.pathname;
  const isAlpinism = pathName?.includes("alpinism");
  const isScience = pathName?.includes("science");
  const myRef = React.useRef(null);
  return (
    <IntProvider>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        {location?.pathname === "/" ? (
          <>
            <LanguageSwitcher>
              <FlagCZ /> <FlagEN />
            </LanguageSwitcher>
            {children}
          </>
        ) : (
          <>
            <LanguageSwitcher>
              <FlagCZ /> <FlagEN />
            </LanguageSwitcher>

            <HeaderWrapper ref={myRef}>
              <Consumer>
                {({ int }) => {
                  const content = int === "en" ? en : cz;

                  return isAlpinism ? (
                    <>
                      <StyledLink to="/"> {content.menu.home}</StyledLink>
                      <StyledLink
                        name="alpinism-about"
                        className={getClass("alpinism-about")}
                        to="/alpinism-about"
                      >
                        {content.menu.about}
                      </StyledLink>
                      {/*        <StyledLink
                        name="alpinism-cv"
                        className={getClass("alpinism-cv")}
                        to="/alpinism-cv"
                      >
                        {content.menu.climbingCv}
                      </StyledLink> */}
                      <StyledLink
                        name="alpinism-climbs"
                        className={getClass("alpinism-climbs")}
                        to="/alpinism-climbs"
                      >
                        {content.menu.climbs}
                      </StyledLink>
                      <StyledLink
                        name="alpinism-awards"
                        className={getClass("alpinism-awards")}
                        to="/alpinism-awards"
                      >
                        {content.menu.awards}
                      </StyledLink>
                      <StyledLink
                        name="alpinism-media"
                        className={getClass("alpinism-media")}
                        to="/alpinism-media"
                      >
                        {content.menu.audVid}
                      </StyledLink>
                      <StyledLink
                        name="alpinism-photo"
                        className={getClass("alpinism-photo")}
                        to="/alpinism-photo"
                      >
                        {content.menu.photo}
                      </StyledLink>
                      <StyledLink
                        name="alpinism-writings"
                        className={getClass("alpinism-writings")}
                        to="/alpinism-writings"
                      >
                        {content.menu.writings}
                      </StyledLink>
                      <StyledLink
                        name="alpinism-climbing-partners"
                        className={getClass("alpinism-climbing-partners")}
                        to="/alpinism-climbing-partners"
                      >
                        {content.menu.climbingPartners}
                      </StyledLink>
                      <StyledLink
                        name="alpinism-clartners"
                        className={getClass("alpinism-partners")}
                        to="/alpinism-partners"
                      >
                        {content.menu.partners}
                      </StyledLink>
                      <StyledLink
                        name="alpinism-lectures"
                        className={getClass("alpinism-lectures")}
                        to="/alpinism-lectures"
                      >
                        {content.menu.lectures}
                      </StyledLink>
                      <StyledLink
                        name="alpinism-contact"
                        className={getClass("alpinism-contact")}
                        to="/alpinism-contact"
                      >
                        {content.menu.contact}
                      </StyledLink>
                    </>
                  ) : isScience ? (
                    <>
                      <StyledLink to="/">HOME</StyledLink>
                      <StyledLink
                        name="science-about"
                        className={getClass("science-about")}
                        to="/science-about"
                      >
                        {content.menu.about}
                      </StyledLink>
                      <StyledLink
                        name="science-research"
                        className={getClass("science-research")}
                        to="/science-research"
                      >
                        {content.menu.research}
                      </StyledLink>
                      <StyledLink
                        name="science-cooperation"
                        className={getClass("science-cooperation")}
                        to="/science-cooperation"
                      >
                        {content.menu.cooperation}
                      </StyledLink>
                      <StyledLink
                        name="science-cv"
                        className={getClass("science-cv")}
                        to="/science-cv"
                      >
                        {content.menu.academicCv}
                      </StyledLink>
                      <StyledLink
                        name="science-publications"
                        className={getClass("science-publications")}
                        to="/science-publications"
                      >
                        {content.menu.publication}
                      </StyledLink>
                      {/* <StyledLink
                        name="science-media"
                        className={getClass("science-media")}
                        to="/science-media"
                      >
                        {content.menu.audVid}
                      </StyledLink> */}
                      <StyledLink
                        name="science-lectures"
                        className={getClass("science-lectures")}
                        to="/science-lectures"
                      >
                        {content.menu.lectures}
                      </StyledLink>
                      <StyledLink
                        name="science-awards"
                        className={getClass("science-awards")}
                        to="/science-awards"
                      >
                        {content.menu.awards}
                      </StyledLink>
                      <StyledLink
                        name="science-contact"
                        className={getClass("science-contact")}
                        to="/science-contact"
                      >
                        {content.menu.contact}
                      </StyledLink>
                    </>
                  ) : (
                    <span />
                  );
                }}
              </Consumer>
            </HeaderWrapper>
            <Content>{children}</Content>
            <Up
              onClick={() =>
                myRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <StaticImage
                src="../images/arrow-up.png"
                alt="arrow-up"
                style={{ maxHeight: 50 }}
                height={50}
              />
            </Up>
          </>
        )}
      </ThemeProvider>
    </IntProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  @media (min-width: 960px) {
    flex-direction: row;
    padding: 30px 0 20px;
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  outline: none;
  padding: 0.3rem 0.35rem;
  text-decoration: none;
  text-align: center;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.white};
  font-size: 16px;
  transition: color 1s ease;
  position: relative;
  font-variant: small-caps;
  font-family: ${(props) => props.theme.fontHeading};
  text-transform: uppercase;

  &:hover,
  &:focus,
  &.active {
    color: ${(props) => props.theme.lightGrey};
    div {
      border-color: ${(props) => props.theme.lightGrey};
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
    border-bottom-color: ${(props) => props.theme.lightGrey};
    border-right-color: ${(props) => props.theme.lightGrey};
  }

  &:hover:after {
    border-top-color: ${(props) => props.theme.lightGrey};
    border-left-color: ${(props) => props.theme.lightGrey};
  }

  @media (min-width: 960px) {
    line-height: 1;
    font-size: 14px;
    &:first-of-type {
      margin-right: 2rem;
    }
  }

  @media (min-width: 1200px) {
    padding: 0.3rem 0.7rem;
    font-size: 16px;
    &:first-of-type {
      margin-right: 3rem;
    }
  }

  @media (min-width: 1600px) {
    padding: 0.3rem 1rem;
    font-size: 18px;
  }
`;

const LanguageSwitcher = styled.div`
  position: absolute;
  display: flex;
  margin-left: 10px;
  margin-top: 10px;

  @media (min-width: 576px) {
    margin-left: 2rem;
  }
`;

const Lang = styled.div`
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  padding: 3px;
  height: max-content;
  font-size: ${(props) => (props.active ? "1.15rem" : "1rem")};
  color: ${(props) => props.active && props.theme.white};
`;

const upjump = keyframes`
        0%   { transform: scale(1,1)    translateY(0); }
        30%  { transform: scale(1,1)    translateY(-7px); }
        50%  { transform: scale(1,1)    translateY(0); }
        77%  { transform: scale(1,1)    translateY(-5px); }
        100% { transform: scale(1,1)    translateY(0); }
`;

const Up = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 3;
  padding: 20px;

  img {
    opacity: 0.7;
  }
  &:hover {
    animation: ${upjump} 1s linear forwards;
    img {
      opacity: 1;
    }
  }
`;
