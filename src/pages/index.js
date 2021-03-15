import React from "react";
import { graphql } from "gatsby";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import { GlobalStyle } from "../components/layout";

const IndexPage = (props) => {
  return (
    <StaticQuery
      query={graphql`
        {
          science: file(relativePath: { regex: "/science-main.jpg/" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          climbing: file(relativePath: { regex: "/climbing-main.jpg/" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      `}
      render={(data) => {
        return (
          <>
            <GlobalStyle />
            <Wrapper>
              <SEO title="webpage" />
              <HeadingWrapper>
                <Heading>
                  <span>DUŠAN</span>
                  <br />
                  <span>JANÁK</span>
                </Heading>
              </HeadingWrapper>
              <AlpinismScience>
                <MainLink to="/science-about/">
                  <Text>SCIENCE</Text>

                  <GatsbyImage
                    image={data.science.childImageSharp.gatsbyImageData}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Science part"
                    style={{ maxHeight: "100%" }}
                  />
                </MainLink>
                <MainLink to="/alpinism-about/">
                  <Text>ALPINISM</Text>

                  <GatsbyImage
                    image={data.climbing.childImageSharp.gatsbyImageData}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Alpinism part"
                    style={{ maxHeight: "100%" }}
                  />
                </MainLink>
              </AlpinismScience>
            </Wrapper>
          </>
        );
      }}
    />
  );
};

export default IndexPage;

const Text = styled.div`
  margin-bottom: 5px;
`;
const Wrapper = styled.div`
  height: 100%;
`;
const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  height: 200px;

  /* Landscape */
  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    height: 70px;
  }
`;
const Heading = styled.h1`
  color: white;
  margin: 0;
  text-align: center;
  line-height: 1;
  font-size: max(40px, 5vw);
  @media (min-width: 1024px) {
    font-size: 70px;
  }
  /* Landscape */
  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    font-size: 25px;
  }
`;
const AlpinismScience = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: calc(95% - 200px);
  }

  /* Landscape */
  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    height: calc(100% - 70px);
  }
`;

const MainLink = styled((props) => <Link {...props} />)`
  font-family: "Poiret One", cursive, serif;
  outline: none;
  text-decoration: none;
  text-align: center;
  color: white;
  transition: color 1s ease;
  margin: 10px 0;
  overflow: hidden;
  margin-bottom: 40px;
  filter: grayscale(1);
  &:hover,
  &:focus,
  &.active {
    filter: none;
    color: #f0002f;
    div {
      border-color: #f0002f;
    }
  }

  /* Landscape */
  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    margin-bottom: 10px;
  }

  /* Touch */
  @media only screen and (hover: none) and (pointer: coarse) {
    filter: none;
  }
`;
