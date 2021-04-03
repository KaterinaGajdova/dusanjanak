import React from "react";
import { Cz } from "../content/alpinism/awards";
import SEO from "../components/seo";
import { ContentWide } from "../components/atoms";

const IndexPage = (props) => {
  return (
    <>
      <SEO title="Climbing" />
      <ContentWide>
        <Cz />
      </ContentWide>
    </>
  );
};

export default IndexPage;
