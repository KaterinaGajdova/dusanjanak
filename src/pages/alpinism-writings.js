import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import { Cz, En } from "../content/alpinism/writings";
import { StaticImage } from "gatsby-plugin-image";
import { Consumer } from "../layouts/Context";
import { Content, IMGGrid } from "../components/atoms";

const IndexPage = (props) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <En /> : <Cz />;

        return (
          <Content>
            <SEO title="Climbing" />
            {content}
            <IMGGrid noborder>
              <StaticImage
                src="../images/titlepage-montana.jpg"
                alt="Kyrgyzstán"
                placeholder="blurred"
                style={{ maxHeight: 300 }}
                height={300}
              />
              <StaticImage
                src="../images/titlepage-jamesak.jpg"
                alt="Kyrgyzstán"
                placeholder="blurred"
                style={{ maxHeight: 300 }}
                height={300}
              />
              <StaticImage
                src="../images/titlepage-horolezec.jpg"
                alt="Kyrgyzstán"
                placeholder="blurred"
                style={{ maxHeight: 300 }}
                height={300}
              />
            </IMGGrid>
          </Content>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
