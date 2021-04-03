import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Cz } from "../content/science/cooperation";
import SEO from "../components/seo";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";

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
              console.log(data);
              return (
                <>
                  <SEO title="Science" />

                  <Content>{content}</Content>
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
