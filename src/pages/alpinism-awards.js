import React from "react";
import { Cz, En } from "../content/alpinism/awards";
import SEO from "../components/seo";
import { ContentWide } from "../components/atoms";
import { Consumer } from "../layouts/Context";

const IndexPage = (props) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? <En /> : <Cz />;

        return (
          <>
            <SEO title="Climbing" />

            <ContentWide>{content}</ContentWide>
          </>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;
