import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const ClimbingPartner = ({ cooperatorData, img }) => {
  return (
    <Container>
      {img && (
        <ImgContainer>
          <GatsbyImage
            image={img}
            imgStyle={{
              objectFit: "contain",
            }}
            alt={cooperatorData.name}
            placeholder="blurred"
          />
        </ImgContainer>
      )}
      <Text>
        <h4> {cooperatorData.name}</h4>
        <div> {cooperatorData.description}</div>
      </Text>
    </Container>
  );
};
export default ClimbingPartner;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid white;
  margin-top: 5px;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const ImgContainer = styled.div`
  text-align: right;
  margin: 15px;
  @media (min-width: 576px) {
    margin: 0;
    width: 50%;
  }
`;

const Text = styled.div`
  padding: 0 15px 25px;
  text-align: center;
  @media (min-width: 576px) {
    width: 50%;
  }
`;
