import React from "react";
import styled from "styled-components";
import {
  H4,
  Red,
  Date,
  Content,
  Section,
  Project,
  Name,
  ALink,
} from "../../components/atoms";

export const Cz = () => {
  return (
    <>
      <Introduction>
        <p>
          Ocenění nejsou to, proč lezu. Na stranu druhou mě stejně jako většinu
          lidí potěší poplácání po ramenou nebo blahopřání k úspěchu. V letech
          2005 a 2006 jsem také objel pár závodů světového poháru v ledovém
          lezení a účastnil se závodů v ČR a na Slovensku, abych zjistil, že
          stres z pohledu desítek diváků mi svazuje ruce a povzbuzování mne ruší
          při lezení, takže na závodech lezu pod své možnosti. I když mne úspěch
          těší, nejsem závodní typ. Daleko líp je mi v přírodě. I v této oblasti
          svobodné aktivity se udělují ceny, i když vyhodnotit, který výkon je
          nejlepší, je často podobné tomu rozhodnout, jestli je lepší kubistický
          nebo impresionistický obraz. Vlastně je to podobné jako ve vědě. To,
          co ocení jiní, není vždy to, čeho si nejvíc váží sám oceněný.
        </p>
        <p>
          V České republice má zhruba půl století dlouhou tradici soutěž o
          Výstupy roku. Každoročně se v ní vyhlašují nejlepší výstupy českých
          horolezců přibližně v šesti různých kategoriích (skály, nejvyšší
          velehory, ledy apod.). Ocenění Horolezec roku je daleko mladší
          iniciativou společnosti Alpy v částečné koordinaci s Českým
          horolezeckým svazem. Ve Výstupech roku se oceňují jednotlivé výkony,
          Horolezec roku je cena pro určité horolezce za uplynulou sezonu.
        </p>
      </Introduction>
      <Main>
        <Section>
          <H4>Výstupy roku</H4>
          <p>
            V soutěži o výstup roku lze získat Výstup roku* (s hvězdičkou) za
            přelomový výkon ve světovém měřítku, Výstup roku za výkon
            srovnatelný se světovou špičkou a Čestné uznání za výkon vynikající
            v českém kontextu.
          </p>
          IN PROGRESS...
        </Section>
        <Section>
          <H4>Horolezec roku</H4>
          <Project>
            <Date>2015</Date> <Red>3. místo</Red> Jan Zbranek a Dušan Janák
            <br />
            (za volné přelezení cesty Bellavista, Cima Ovest di Lavaredo (8c))
          </Project>
          <Project>
            <Date>2011</Date> <Red>2. místo</Red> Dušan Janák
            <br />
            (za Tatranský double na Ganek ve Vysokých Tatrách s Pavlem Vrtíkem a
            přelez Erectissimy v Dolommitech s Miro Peťom)
          </Project>
          <Project>
            <Date>2010</Date> <Red>3. místo</Red> Dušan Janák a Pavel Vrtík
            <br />
            (za přelez cesty Vol de Nuit – Francie, oblast Mont Blanc, Mont
            Blanc du Tacul (4248 m n.m.)
          </Project>
        </Section>
        <Section>
          <H4>Závody</H4>
          <Project>
            <Date>2006</Date> <br />
            <Red>3. místo</Red> Mistrovství České republiky v ledovém lezení{" "}
            <br />
            <Red>12. místo</Red> Ice World Cup v Tanvaldu
          </Project>
          <Project>
            <Date>2005</Date> <br />
            <Red>1. místo</Red> Mistrovství České republiky v ledovém lezení
          </Project>
        </Section>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Introduction = styled(Section)`
  min-width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;
