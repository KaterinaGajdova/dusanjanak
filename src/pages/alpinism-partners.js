import React from "react";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Content } from "../components/atoms";
import styled from "styled-components";
import { cz, en } from "../content/alpinism/partners";
import { Consumer } from "../layouts/Context";

const IndexPage = (props) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? en : cz;

        return (
          <Content>
            <SEO title="Climbing" />

            <p>{content.general}</p>
            <Wrapper>
              <div>
                <p>
                  <b>Singing Rock - </b> {content.singingrock}
                </p>
                <Partner>
                  <a
                    href="https://singingrock.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../images/logo-singingrock.jpg"
                      alt="singing rock"
                      placeholder="blurred"
                    />
                    <div className="middle">
                      <div className="text">https://singingrock.cz</div>
                    </div>
                  </a>
                </Partner>
              </div>

              <div>
                <p>
                  <b>Tilak - </b> {content.tilak}
                </p>{" "}
                <Partner>
                  <a
                    href="https://tilak.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../images/logo-tilak.png"
                      style={{
                        width: "100%",
                      }}
                      alt="tilak"
                      placeholder="blurred"
                    />
                    <div className="middle">
                      <div className="text">https://tilak.cz</div>
                    </div>
                  </a>
                </Partner>
              </div>

              <div>
                <p>
                  <b>Triop - </b> {content.triop}
                </p>
                <Partner>
                  <a
                    href="https://triop.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../images/logo-triop.jpg"
                      alt="triop"
                      placeholder="blurred"
                    />
                    <div className="middle">
                      <div className="text">https://triop.cz</div>
                    </div>
                  </a>
                </Partner>
              </div>

              <div>
                <p>
                  <b>Český horolezecký svaz - </b> {content.chs}
                </p>
                <Partner>
                  <a
                    href="https://www.horosvaz.cz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../images/logo-chs.png"
                      alt="chs"
                      imgStyle={{
                        objectFit: "contain",
                        height: "90%",
                        padding: "10px 0",
                        background: "white",
                      }}
                      style={{
                        width: "100%",
                        background: "white",
                        height: "100%",
                      }}
                      placeholder="blurred"
                    />
                    <div className="middle">
                      <div className="text">https://www.horosvaz.cz</div>
                    </div>
                  </a>
                </Partner>
              </div>
            </Wrapper>
          </Content>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  margin: 50px auto 10px;
  max-width: 500px;

  @media (min-width: 970px) {
    grid-template-columns: 1fr 1fr;
    max-width: initial;
  }
`;

const Partner = styled.div`
  position: relative;

  &:hover {
    img {
      opacity: 0.13 !important;
    }
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  &:hover .middle {
    opacity: 1;
  }

  .text {
    color: white;
    font-size: 20px;
    opacity: 1;
  }

  @media (min-width: 970px) {
    grid-template-columns: 1fr 1fr;
  }
`;
