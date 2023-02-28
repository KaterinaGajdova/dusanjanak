import React from "react";
import { Consumer } from "../layouts/Context";
import SEO from "../components/seo";
import styled from "styled-components";
import { Content } from "../components/atoms";

const Climbs = () => {
  return (
    <Consumer>
      {() => {
        return (
          <>
            <SEO title="Climbing" />{" "}
            <Content>
              <div>
                <Mail href="mailto:stoupa007@centrum.cz">
                  stoupa007@centrum.cz
                </Mail>
              </div>{" "}
            </Content>
          </>
        );
      }}
    </Consumer>
  );
};

export default Climbs;

const Mail = styled.a`
  color: white;
  text-decoration: none;
  &:hover,
  &:focus,
  &.active {
    color: ${(props) => props.theme.lightGrey};
  }
`;
