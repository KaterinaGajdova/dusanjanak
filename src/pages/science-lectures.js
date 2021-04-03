import React from "react";
import { graphql } from "gatsby";
import { Cz } from "../content/science/lectures";
import SEO from "../components/seo";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <Cz /> : <Cz />;
        return (
          <>
            <SEO title="Science" />

            <Content>
              <Lectures>
                <LecturesImg>
                  {" "}
                  <div>
                    <StaticImage
                      src="../images/lectures-1.jpg"
                      imgStyle={{
                        objectFit: "cover",
                        objectPosition: "50% 25%",
                      }}
                      alt=""
                      placeholder="blurred"
                    />
                    APLIKOVANÝ VÝZKUM - někdy je třeba představit účel a
                    výsledky výzkumu samotným respondentům, kterých se týká - v
                    tomto případě zástupcům Ukrajinské menšiny v České republice
                  </div>
                  <div>
                    {" "}
                    <StaticImage
                      src="../images/lectures-2.jpg"
                      imgStyle={{
                        objectFit: "cover",
                        objectPosition: "25% 95%",
                      }}
                      style={{ minWidth: "50%" }}
                      alt=""
                      placeholder="blurred"
                    />
                    S Jindřichem Štreitem na vernisáži výstavy z výzkumu menšin
                    v ČR.
                  </div>
                </LecturesImg>

                {content}
              </Lectures>
            </Content>
          </>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const Lectures = styled.div`
  display: grid;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 2fr;
  }
`;
const LecturesImg = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  > div {
    margin-bottom: 5px;
  }

  @media (min-width: 576px) {
    margin-right: 2rem;
    order: 0;
    max-height: initial;
  }
`;
