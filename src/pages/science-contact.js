import React from "react";
import SEO from "../components/seo";
import { Content } from "../components/atoms";
import { Consumer } from "../layouts/Context";
import styled from "styled-components";

const IndexPage = () => {
  return (
    <Consumer>
      {() => {
        return (
          <>
            <SEO title="Science" />
            <Content>
              <div>
                <Mail href="mailto:dusan.janak@uniba.sk">
                  dusan.janak@uniba.sk
                </Mail>
              </div>
              <div>
                <Mail href="mailto:dusan.janak@mendelu.cz">
                  dusan.janak@mendelu.cz
                </Mail>
              </div>
            </Content>
          </>
        );
      }}
    </Consumer>
  );
};
export default IndexPage;

const Mail = styled.a`
  color: white;
  text-decoration: none;
  &:hover,
  &:focus,
  &.active {
    color: ${(props) => props.theme.lightGrey};
  }
`;
