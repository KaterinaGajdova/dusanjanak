import React from "react";
import { graphql } from "gatsby";
import { cooperatorsEn, cooperatorsCz } from "../content/science/cooperation";
import SEO from "../components/seo";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";
import Cooperator from "../components/Cooperator";

const IndexPage = ({ data }) => {
  const images = data.allImageSharp.nodes;
  return (
    <Consumer>
      {({ int }) => {
        const cooperatorsData = int === "en" ? cooperatorsEn : cooperatorsCz;
        console.log(images);
        return (
          <Content>
            <SEO title="Science" />
            {cooperatorsData.map((item) => (
              <Cooperator
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
    allImageSharp(filter: { fluid: { src: { regex: "/cooperators/" } } }) {
      nodes {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
