import React from "react";
import { Cz, En } from "../content/alpinism/lectures";
import SEO from "../components/seo";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <En /> : <Cz />;

        return (
          <>
            <SEO title="Science" />

            <Content>
              {content}

              <LecturesImg>
                <StaticImage
                  src="../images/mhff_2019_1.jpg"
                  alt="mhff_2019"
                  placeholder="blurred"
                />

                <StaticImage
                  src="../images/mhff_2019_2.jpg"
                  alt="mhff_2019"
                  placeholder="blurred"
                />

                <StaticImage
                  src="../images/mhff_2019_3.jpg"
                  alt="mhff_2019"
                  placeholder="blurred"
                />
                <StaticImage
                  src="../images/mhff_2019_4.jpg"
                  alt="mhff_2019"
                  placeholder="blurred"
                />
              </LecturesImg>
            </Content>
          </>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const LecturesImg = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  @media (min-width: 720px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
