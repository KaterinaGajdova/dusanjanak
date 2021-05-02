import React from "react";
import { GatsbyLink } from "../../components/atoms";
import { H4 } from "../../components/atoms";
import logo from "../../images/radio-wave.png";
import styled from "styled-components";
import YoutubeVideo from "../../components/YoutubeVideo";

export const Cz = () => {
  return (
    <>
      <Grid>
        <Comment>
          <div>
            <H4>Padám vzhůru, Klenba Macochy (2019)</H4>
            Momentka ze života horolezce.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://www.youtube.com/embed/FYsyRBHnA0U"
          videoTitle="Padám vzhůru, Klenba Macochy"
        />
      </Grid>

      <Grid reverse>
        <Comment>
          <div>
            <H4>Sandstone (2012)</H4>
            Dokumentární film o pískovcovém lezení oceněný na Mezinárodním
            horolezeckém filmovém festivalu v Teplicích nad Metují hlavní cenou
            - nejlepší dokument a cenou diváka.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://player.vimeo.com/video/105630516"
          videoTitle="Sandstone"
        />
      </Grid>

      <Grid>
        <Comment>
          <div>
            <H4> Bílá růže (2011)</H4>
            Krátký film o legendární spárové cestě v Adršpachu.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://www.youtube.com/embed/dm8aRjXfg1Q"
          videoTitle="Bílá růže"
        />
      </Grid>

      <Grid reverse>
        <Comment>
          <div>
            <H4>Matrix (2008)</H4>
            Spontánně vzniklý snímek ze studentských let o zimním lezení
            napěchovaný ostrou muzikou a spoustou piva.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://www.youtube.com/embed/ciYJs5dGWP0"
          videoTitle="Matrix"
        />
      </Grid>

      <Grid>
        <Comment>
          <div>
            <H4>Prezentace Stoupa (2009)</H4>
            Dobový lezecký portrét od Petra Pavlíčka z doby, kdy jsem měl v
            lezení "tah na branku" a tak trochu váhal mezi lezením a vědou.
            Nakonec jsem zůstal u obojího.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://player.vimeo.com/video/4500851"
          videoTitle="Prezentace Stoupa"
        />
      </Grid>
      <Grid reverse>
        <Comment>
          <div>
            <H4>Podcast Nadzemí (2019)</H4>
            Rozhovor o lezení.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://www.youtube.com/embed/Opjrs61nwqk"
          videoTitle="Matrix"
        />
      </Grid>

      <Grid>
        <Comment>
          <div>
            <H4>Rozhovor pro rádio Wave, Honnoldův výstup Freerider (2019)</H4>
            Komentář k neuvěřitelnému přelezu cesty Free Rider Alexem Honnoldem,
            kterou Stoupa s Jirkou Šrůtkem přelezl v roce 2006.
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
  );
};

export const En = () => {
  return (
    <>
      <Grid>
        <Comment>
          <div>
            <H4>Falling Up, Vault of Macocha</H4>A moment from the life of a
            climber.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://www.youtube.com/embed/FYsyRBHnA0U"
          videoTitle="Falling Up, Vault of Macocha"
        />
      </Grid>

      <Grid reverse>
        <Comment>
          <div>
            <H4>Sandstone (2012)</H4>
            Documentary film about sandstone climbing awarded the main prize at
            the International Mountaineering Film Festival in Teplice nad Metují
            - the best documentary and the viewer&#39;s prize.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://player.vimeo.com/video/105125679"
          videoTitle="Sandstone"
        />
      </Grid>

      <Grid>
        <Comment>
          <div>
            <H4> Bílá růže (White Rose) (2011)</H4>A short film about the
            legendary crack climbing route in Adršpach.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://www.youtube.com/embed/dm8aRjXfg1Q"
          videoTitle="Bílá růže"
        />
      </Grid>

      <Grid reverse>
        <Comment>
          <div>
            <H4>Matrix (2008)</H4>A spontaneously created film from the student
            years about winter climbing packed with sharp music and lots of
            beer.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://www.youtube.com/embed/ciYJs5dGWP0"
          videoTitle="Matrix"
        />
      </Grid>

      <Grid>
        <Comment>
          <div>
            <H4>Stoupa presentation (2009)</H4>A period climbing portrait by
            Petr Pavlíček from the time when I had a &quot;move to the
            goal&quot; in climbing and was a bit hesitant between climbing and
            science. In the end, I stayed with both.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://player.vimeo.com/video/4500851"
          videoTitle="Stoupa presentation"
        />
      </Grid>
      <Grid reverse>
        <Comment>
          <div>
            <H4>Podcast Nadzemí (2019)</H4>
            Interview about climbing.
          </div>
        </Comment>
        <YoutubeVideo
          videoSrcURL="https://www.youtube.com/embed/Opjrs61nwqk"
          videoTitle="Nadzemí"
        />
      </Grid>

      <Grid>
        <Comment>
          <div>
            <H4>
              Interview for Wave Radio, Honnold&#39;s Freerider Output (2019)
            </H4>
            Interview for Wave Radio, Honnold&#39;s Freerider Output
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
            <H4>Interviews for the show Na Luftu (2013, 2014)</H4>A TV show
            about outdoor sports.
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
  );
};

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
