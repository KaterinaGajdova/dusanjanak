import React from "react";
import { Cz } from "../content/science/awards";
import SEO from "../components/seo";
import { Content } from "../components/atoms";

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
