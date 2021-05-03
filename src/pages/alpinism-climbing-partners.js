import React from "react";
import { graphql } from "gatsby";
import {
  climbingPartnersCz,
  Cz1,
  Cz2,
  climbingPartnersFCz,
  climbingPartnersEn,
  En1,
  En2,
  climbingPartnersFEn,
} from "../content/alpinism/climbingPartners";
import SEO from "../components/seo";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";
import ClimbingPartner from "../components/ClimbingPartner";

const IndexPage = ({ data }) => {
  const images = data.allImageSharp.nodes;
  return (
    <Consumer>
      {({ int }) => {
        const parntnersData =
          int === "en" ? climbingPartnersEn : climbingPartnersCz;
        const parntnersFData =
          int === "en" ? climbingPartnersFEn : climbingPartnersFCz;
        const general1 = int === "en" ? <En1 /> : <Cz1 />;
        const general2 = int === "en" ? <En2 /> : <Cz2 />;

        return (
          <Content>
            <SEO title="Climbing" />
            {general1}
            {parntnersData.map((item) => (
              <ClimbingPartner
                cooperatorData={item}
                img={
                  images.find((img) =>
                    img.gatsbyImageData.images.fallback.src.includes(
                      item.imageTitle
                    )
                  )?.gatsbyImageData
                }
              />
            ))}
            <br />
            <br />
            {general2}

            {parntnersFData.map((item) => (
              <ClimbingPartner
                cooperatorData={item}
                img={
                  images.find((img) =>
                    img.gatsbyImageData.images.fallback.src.includes(
                      item.imageTitle
                    )
                  )?.gatsbyImageData
                }
              />
            ))}
          </Content>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allImageSharp(filter: { fluid: { src: { regex: "/c-partners/" } } }) {
      nodes {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
