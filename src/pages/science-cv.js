import React from "react";
import { Content } from "../components/atoms";
import { Cz } from "../content/science/cv";
import SEO from "../components/seo";

const IndexPage = (props) => {
  return (
    <>
      <SEO title="Science" />
      <Content>
        <Cz />
      </Content>
    </>
  );
};

export default IndexPage;
