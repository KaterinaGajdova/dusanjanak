import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Cz } from "../content/science/aboutme";
import SEO from "../components/seo";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";

const IndexPage = (props) => {
  return (
    <StaticQuery
      query={graphql`
        {
          aboutme: file(relativePath: { regex: "/science-about.jpg/" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      `}
      render={(data) => {
        return (
          <Consumer>
            {({ int }) => {
              const content = int === "en" ? <Cz /> : <Cz />;

              return (
                <>
                  <SEO title="Science" />

                  <AboutMe>
                    <GatsbyImage
                      image={data.aboutme.childImageSharp.gatsbyImageData}
                      imgStyle={{
                        objectFit: "cover",
                        objectPosition: "75% 45%",
                      }}
                      alt="About me"
                    />
                    <Content>
                      <div>{content}</div>
                    </Content>
                  </AboutMe>
                </>
              );
            }}
          </Consumer>
        );
      }}
    />
  );
};

export default IndexPage;

const AboutMe = styled.div`
  display: grid;
  margin-top: 3rem;
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-top: 2rem;

  > div {
    text-align: justify;
    font-size: 18px;
    max-width: 500px;
  }

  @media (min-width: 756px) {
    margin-top: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
    > div {
      padding: 0 2rem;
      max-width: 700px;
    }
  }
  @media (min-width: 1600px) {
    > div {
      font-size: calc(17px + 0.2vw);
      max-width: 40vw;
    }
  }

  @media (min-width: 2000px) {
    > div {
      font-size: calc(18px + 0.2vw);
      max-width: 40vw;
    }
  }
`;
