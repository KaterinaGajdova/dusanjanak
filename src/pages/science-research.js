import React, { useState } from "react";
import styled from "styled-components";
import { Content } from "../components/atoms";
import {
  IntroductionCz,
  researchTopicsCz,
  HistorySociologyCz,
  AppliedResearchCz,
  CommunicationCz,
} from "../content/science/research";
import SEO from "../components/seo";

const topicsCz = {
  historySociology: <HistorySociologyCz />,
  appliedResearch: <AppliedResearchCz />,
  communication: <CommunicationCz />,
};

const IndexPage = (props) => {
  const [active, setActive] = useState("historySociology");
  return (
    <>
      <SEO title="Science" />
      <Content>
        <IntroductionCz />

        <Research>
          <Grid>
            <GridItem
              onClick={() => setActive("historySociology")}
              active={active === "historySociology"}
            >
              {researchTopicsCz.historySociology}
            </GridItem>
            <GridItem
              onClick={() => setActive("appliedResearch")}
              active={active === "appliedResearch"}
            >
              {researchTopicsCz.appliedResearch}
            </GridItem>
            <GridItem
              onClick={() => setActive("communication")}
              active={active === "communication"}
            >
              {researchTopicsCz.communication}
            </GridItem>
          </Grid>
          <ContentTopic>{topicsCz[active]}</ContentTopic>
        </Research>
      </Content>
    </>
  );
};

export default IndexPage;

const Research = styled.div`
  margin-top: 3rem;
`;

const ContentTopic = styled.div`
  /*   margin-top: 3rem; */
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  /*   border-bottom: 1px solid ${(props) => props.theme.red}; */
  min-height: 98px;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const GridItem = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  font-family: "Open Sans Condensed", cursive, serif;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-bottom: 1px solid transparent;
  border-bottom-color: ${(props) =>
    props.active ? props.theme.red : "transparent"};
  transition: all 1s;
`;
