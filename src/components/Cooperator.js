import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { H4 } from "./atoms";

const Cooperator = ({ cooperatorData, img }) => {
  return (
    <Container>
      <ImgContainer>
        {img && (
          <GatsbyImage
            image={img}
            imgStyle={{
              objectFit: "contain",
            }}
            alt={cooperatorData.name}
            placeholder="blurred"
          />
        )}
      </ImgContainer>
      <Text>
        <h4> {cooperatorData.name}</h4>
        <div> {cooperatorData.description}</div>
      </Text>
    </Container>
  );
};
export default Cooperator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid white;
  margin-top: 5px;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  text-align: right;
  margin-top: 30px;
  @media (min-width: 576px) {
    margin-top: 0;
  }
`;

const Text = styled.div`
  width: 50%;
  padding: 15px;
  text-align: center;
`;
