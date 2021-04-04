import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";

const IndexPage = (props) => {
  return (
    <>
      <SEO title="Climbing" />
      <Pdf>
        <embed src="tilak_katalog.pdf" width="100%" height="100%" />
      </Pdf>
    </>
  );
};

export default IndexPage;

const Pdf = styled.div`
  height: 90vh;
`;
