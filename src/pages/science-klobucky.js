import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { cooperatorsEn, cooperatorsCz } from "../content/science/cooperation";
import SEO from "../components/seo";
import { Consumer } from "../layouts/Context";
import { Content, ALink } from "../components/atoms";

const IndexPage = () => {
  return (
    <Consumer>
      {({ int }) => {
        const cooperatorsData = int === "en" ? cooperatorsEn : cooperatorsCz;
        const klobucky = cooperatorsData.find(
          (i) => i.imageTitle === "klobucky"
        );
        return (
          <>
            <Content>
              <SEO title="Science" />
              <Back onClick={() => navigate(`/science-cooperation`)}>
                « {int === "en" ? "Back" : "Zpět"}
              </Back>

              <Container>
                <ImgContainer>
                  <StaticImage
                    src="../images/cooperators_klobucky_1.jpg"
                    alt="klobucky"
                    style={{ maxHeight: 400 }}
                    height={400}
                  />
                </ImgContainer>
                <Text>
                  <h4> {klobucky.name}</h4>
                  <div> {klobucky.description}</div>
                  {klobucky.website && (
                    <ALink href={klobucky.website}>{klobucky.website}</ALink>
                  )}
                </Text>
              </Container>

              {klobucky.detail}
            </Content>
          </>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const Back = styled.div`
  font-size: 18px;
  cursor: pointer;
  @media (min-width: 1600px) {
    font-size: 20px;
  }
`;

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
