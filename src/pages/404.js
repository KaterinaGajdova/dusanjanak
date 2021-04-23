import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <MissingWrapper>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/"> Try your luck here</Link>
  </MissingWrapper>
);

export default NotFoundPage;

const MissingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
