import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const H4 = styled.h4`
  padding-bottom: 5px;
  font-size: 18px;
  border-bottom: 1px dashed ${(props) => props.theme.darkgrey};
  font-weight: 700;
`;

export const Grey = styled.span`
  color: darkgrey;
`;

export const ALinkStyled = styled.a`
  color: ${(props) => props.theme.white};
  font-weight: 500;
`;

export const ALink = ({ href, children }) => (
  <ALinkStyled href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </ALinkStyled>
);

export const GatsbyLink = ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
);
export const Date = styled.span`
  font-weight: bold;
  font-family: "Open Sans Condensed";
`;

export const Section = styled.section`
  max-width: 700px;
  padding: 10px 0;
  @media (min-width: 756px) {
    padding: 10px 20px;
  }
  /* background: ${(props) => props.grey && "#1A1A1A"}; */
`;

export const Project = styled.div`
  margin-top: 20px;
`;

export const Name = styled.div`
  font-family: "Open Sans Condensed", "Times New Roman", Times, serif;
  text-transform: uppercase;
  text-decoration: underline;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 5% 20px;
  line-height: 1.5;
  text-align: justify;
  @media (min-width: 756px) {
    padding: 50px 3%;
  }
  @media (min-width: 1024px) {
    padding: 50px 0;
  }
`;

export const ContentWide = styled(Content)`
  @media (min-width: 1024px) {
    max-width: 1460px;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  font-weight: 500;
`;

export const IMGGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
  padding-bottom: 15px;
  border-bottom: ${(props) => !props.noborder && "1px solid white"};
`;
