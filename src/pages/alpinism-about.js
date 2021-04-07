import React from "react";
import styled from "styled-components";
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
                src="../images/Fou.jpg"
                imgStyle={{
                  objectFit: "contain",
                  minWidth: 280,
                  maxWidth: "40vw",
                }}
                style={{
                  maxHeight: "80vh",
                  maxWidth: "40vw",
                  minWidth: 280,
                  marginLeft: 20,
                }}
                alt="About me"
                placeholder="blurred"
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  max-height: 80vh;
  height: 80vh;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 3rem;
  }
  @media (min-width: 1200px) {
    margin-top: 3rem;
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
  margin-top: 1rem;

  > div {
    font-size: 18px;
    max-width: 500px;
    text-align: justify;
  }
  @media (min-width: 756px) {
    margin-top: 2rem;
    padding: 0 30px;
  }

  @media (min-width: 1200px) {
    > div {
      max-width: 700px;
    }
  }

  @media (min-width: 1600px) {
    > div {
      font-size: calc(17px + 0.2vw);
    }
  }

  @media (min-width: 2000px) {
    > div {
      font-size: calc(18px + 0.2vw);
    }
  }
`;
