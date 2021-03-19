import styled from "styled-components";

export const H4 = styled.h4`
  padding-bottom: 5px;
  font-size: 18px;
  border-bottom: 1px dashed ${(props) => props.theme.red}; ;
`;

export const Red = styled.span`
  color: ${(props) => props.theme.red};
  font-size: ${(props) => props.big && "16px"};
`;

export const Date = styled.span`
  font-weight: bold;
  font-family: Lato;
`;

export const Content = styled.div`
  font-size: 15px;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 5%;
  line-height: 1.5;
  @media (min-width: 756px) {
    padding: 50px 0 0;
  }
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
  font-family: Georgia, "Times New Roman", Times, serif;
  text-transform: uppercase;
  text-decoration: underline;
`;
