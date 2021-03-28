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

export const ALink = styled.a`
  color: ${(props) => props.theme.white};
  font-weight: 600;
`;

export const Date = styled.span`
  font-weight: bold;
  font-family: Lato;
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

export const Content = styled.div`
  font-size: 16px;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 5% 20px;
  line-height: 1.5;
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
