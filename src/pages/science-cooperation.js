import React, { useState } from "react";
import { graphql } from "gatsby";
import { cooperatorsEn, cooperatorsCz } from "../content/science/cooperation";
import SEO from "../components/seo";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";
import Cooperator from "../components/Cooperator";

const IndexPage = ({ data }) => {
  const images = data.allImageSharp.nodes;
  const [active, setActive] = useState(null);
  return (
    <Consumer>
      {({ int }) => {
        const cooperatorsData = int === "en" ? cooperatorsEn : cooperatorsCz;
        return (
          <Content>
            <SEO title="Science" />
            {cooperatorsData.map((item) => (
              <Cooperator
                active={active}
                setActive={setActive}
                cooperatorData={item}
                img={
                  images.find((img) =>
                    img.gatsbyImageData.images.fallback.src.includes(
                      `${item.imageTitle}_1`
                    )
                  )?.gatsbyImageData
                }
                otherImgs={images.filter((img) => {
                  const { src } = img.gatsbyImageData.images.fallback;
                  return (
                    src.includes(item.imageTitle) &&
                    !src.includes(`${item.imageTitle}_1`)
                  );
                })}
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
