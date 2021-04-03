import React from "react";
import { Cz, img1cz, img2cz } from "../content/science/lectures";
import SEO from "../components/seo";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <Cz /> : <Cz />;
        const img1Title = int === "en" ? img1cz : img1cz;
        const img2Title = int === "en" ? img2cz : img2cz;
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
                    {img1Title}
                  </div>
                  <div>
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
                    {img2Title}
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
