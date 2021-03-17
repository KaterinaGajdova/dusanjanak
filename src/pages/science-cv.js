import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts";
import { Cz } from "../content/science/cv";
import SEO from "../components/seo";

const IndexPage = (props) => {
  return (
    <>
      <SEO title="Science" />
      <Cz />
    </>
  );
};

export default IndexPage;
