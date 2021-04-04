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
                src="../images/Fou.jpg"
                imgStyle={{
                  objectFit: "contain",
                  minWidth: 280,
                }}
                style={{ minWidth: 280 }}
                alt="About me"
                placeholder="blurred"
              />

              <Content>
                <div>{content}</div>
                <Link to="/alpinism-tilak-pdf">
                  <StaticImage
                    src="../images/logo-tilak.png"
                    style={{
                      maxWidth: 150,
                    }}
                    alt="tilak"
                    placeholder="blurred"
                  />
                </Link>
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
  margin-top: 1rem;
  max-height: 80vh;
  height: 80vh;
  @media (min-width: 1200px) {
    margin-top: 3rem;
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
  margin-top: 1rem;

  > div {
    font-size: 18px;
    max-width: 700px;
  }
  @media (min-width: 756px) {
    margin-top: 2rem;
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
