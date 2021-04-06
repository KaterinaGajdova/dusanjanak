import React from "react";
import styled from "styled-components";
import Video from "../components/Video";
import { Consumer } from "../layouts/Context";
import { H4 } from "../components/atoms";
import logo from "../images/radio-wave.png";
const IndexPage = (props) => {
  //TODO: english!
  return (
    <Consumer>
      {({ int }) => (
        <>
          <Grid>
            <Comment>
              <div>
                <H4>Prezentace Stoupa (2009)</H4>
                Dobový lezecký portrét od Petra Pavlíčka z doby, kdy jsem měl v
                lezení "tah na branku" a tak trochu váhal mezi lezením a vědou.
                Nakonec jsem zůstal u obojího.
              </div>
            </Comment>
            <Video
              videoSrcURL="https://player.vimeo.com/video/4500851"
              videoTitle="Prezentace Stoupa"
            />
          </Grid>
          <Grid reverse>
            <Comment>
              <div>
                <H4> Bílá růže (2011)</H4>
                Krátký film o legendární spárové cestě v Adršpachu.
              </div>
            </Comment>
            <Video
              videoSrcURL="https://www.youtube.com/embed/dm8aRjXfg1Q"
              videoTitle="Bílá růže"
            />
          </Grid>
          <Grid>
            <Comment>
              <div>
                <H4>Sandstone (2012)</H4>
                Dokumentární film o pískovcovém lezení oceněný na Mezinárodním
                horolezeckém filmovém festivalu v Teplicích nad Metují hlavní
                cenou - nejlepší dokument a cenou diváka.
              </div>
            </Comment>
            {int === "en" ? (
              <Video
                videoSrcURL="https://player.vimeo.com/video/105125679"
                videoTitle="Sandstone"
              />
            ) : (
              <Video
                videoSrcURL="https://player.vimeo.com/video/105630516"
                videoTitle="Sandstone"
              />
            )}
          </Grid>
          <Grid reverse>
            <Comment>
              <div>
                <H4>Padám vzhůru, Klenba Macochy (2019)</H4>
                Momentka ze života horolezce.
              </div>
            </Comment>
            <Video
              videoSrcURL="https://www.youtube.com/embed/FYsyRBHnA0U"
              videoTitle="Padám vzhůru, Klenba Macochy"
            />
          </Grid>
          <Grid>
            <Comment>
              <div>
                <H4>Matrix (2008)</H4>
                Spontánně vzniklý snímek ze studentských let o zimním lezení
                napěchovaný ostrou muzikou a spoustou piva.
              </div>
            </Comment>
            <Video
              videoSrcURL="https://www.youtube.com/embed/ciYJs5dGWP0"
              videoTitle="Matrix"
            />
          </Grid>
          <Grid reverse>
            <Comment>
              <div>
                <H4>Podcast Nadzemí (2019)</H4>
                Rozhovor o lezení.
              </div>
            </Comment>
            <Video
              videoSrcURL="https://www.youtube.com/embed/Opjrs61nwqk"
              videoTitle="Matrix"
            />
          </Grid>

          <Grid>
            <Comment>
              <div>
                <H4>
                  Rozhovor pro rádio Wave, Honnoldův výstup Freerider (2019)
                </H4>
                Komentář k neuvěřitelnému přelezu cesty Free Rider Alexem
                Honnoldem, kterou Stoupa s Jirkou Šrůtkem přelezl v roce 2006.
              </div>
            </Comment>
            <a
              href="https://wave.rozhlas.cz/honnolduv-vykon-je-neuveritelny-na-stene-nemyslite-na-nebezpeci-jinak-spadnete-7932688"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "1rem" }}
            >
              <img width="100%" height="100%" src={logo} />
            </a>
          </Grid>

          <Grid reverse>
            <Comment>
              <div>
                <H4>Rozhovory pro pořad Na Luftu (2013, 2014)</H4>
                Televizní pořad o sportech v přírodě.
              </div>
            </Comment>
            <div>
              <video controls width="100%">
                <source
                  src="https://light.polar.cz/videa/polar/porady/publikovano/2014/01/09/na_luftu_84_stoupa2_hq.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Grid>
          <Grid>
            <video controls width="100%">
              <source
                src="https://light.polar.cz/videa/polar/porady/publikovano/2013/09/12/na_luftu_68_JANAK4_ADR_hq.mp4"
                type="video/mp4"
              />
            </video>

            <video controls width="100%">
              <source
                src="https://light.polar.cz/videa/polar/porady/publikovano/2013/12/12/na_luftu_81_stoupa_hq.mp4"
                type="video/mp4"
              />
            </video>
          </Grid>
        </>
      )}
    </Consumer>
  );
};

export default IndexPage;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 5% 20px;
  line-height: 1.5;

  @media (min-width: 620px) {
    grid-template-columns: 1fr 1fr;
    > div:last-of-type {
      order: ${(props) => props.reverse && "-1"};
    }
  }
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
