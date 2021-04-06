import React from "react";
import { Cz, En } from "../content/science/publications";
import SEO from "../components/seo";
import { Consumer } from "../layouts/Context";
import { Content } from "../components/atoms";

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
