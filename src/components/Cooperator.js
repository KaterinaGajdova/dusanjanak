import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { IMGGrid, ALink } from "./atoms";

const Cooperator = ({ cooperatorData, img, otherImgs, active, setActive }) => {
  const handleClick = (name) => {
    active === name ? setActive(null) : setActive(name);
  };
  return (
    <DetailContainer>
      <Container onClick={() => handleClick(cooperatorData.imageTitle)}>
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
          {cooperatorData.website && (
            <ALink href={cooperatorData.website}>
              {cooperatorData.website}
            </ALink>
          )}
        </Text>
      </Container>
      {active === cooperatorData.imageTitle && (
        <>
          {cooperatorData.detail}
          <IMGGrid>
            {!!otherImgs.length &&
              otherImgs.map((item) => {
                console.log(item);
                return (
                  <GatsbyImage
                    key={img.gatsbyImageData?.images.fallback.src}
                    image={item.gatsbyImageData}
                    alt={cooperatorData.name}
                    style={{ maxHeight: 300 }}
                    height={300}
                    imgStyle={{
                      objectFit: "contain",
                    }}
                  />
                );
              })}
          </IMGGrid>
        </>
      )}
    </DetailContainer>
  );
};
export default Cooperator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 5px;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  text-align: right;
  margin-top: 30px;
  @media (min-width: 576px) {
    margin-top: 0;
    width: 50%;
  }
`;

const Text = styled.div`
  padding: 15px;
  text-align: center;
  @media (min-width: 576px) {
    width: 50%;
  }
`;

const DetailContainer = styled.div`
  border-bottom: 1px solid white;
`;
