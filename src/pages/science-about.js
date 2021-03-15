import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Science" />
    </Layout>
  );
};

export default IndexPage;
