import React from "react";
import { Content } from "../components/atoms";
import { Cz, En } from "../content/science/cv";
import SEO from "../components/seo";
import { Consumer } from "../layouts/Context";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <En /> : <Cz />;
        return (
          <>
            <SEO title="Science" />
            <Content>{content}</Content>
          </>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
