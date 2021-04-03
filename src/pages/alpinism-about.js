import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts";
import SEO from "../components/seo";
import { Cz, En } from "../content/alpinism/aboutme";
import { StaticImage } from "gatsby-plugin-image";
import { Consumer } from "../layouts/Context";
const IndexPage = (props) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <En /> : <Cz />;

        return (
          <>
            <SEO title="Climbing" />

            <AboutMe>
              <StaticImage
                src="../images/marmolada2.jpg"
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
    font-size: 18px;
    max-width: 700px;
  }
  @media (min-width: 756px) {
    > div {
      font-size: 20px;
    }
  }
  @media (min-width: 1200px) {
    margin-top: 0;
    > div {
      padding: 0 2rem;
    }
  }
  @media (min-width: 1600px) {
    > div {
      font-size: calc(18px + 0.2vw);
      max-width: 40vw;
    }
  }
`;
