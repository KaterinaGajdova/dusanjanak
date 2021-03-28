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

export const researchTopicsCz = {
  historySociology: `Dějiny sociologie a sociologická teorie`,
  appliedResearch: "Aplikované výzkumy a veřejná sociologie",
  communication: "Multimodální mezidruhová a vnitrodruhová komunikace",
};

export const IntroductionCz = () => {
  return (
    <>
      <Introduction>
        <div>
          Tuto sekci jsem rozdělil do třech podskupin podle mých hlavních
          výzkumných témat:
          <ol>
            <li>{researchTopicsCz.historySociology}</li>
            <li>{researchTopicsCz.appliedResearch}</li>
            <li>{researchTopicsCz.communication}</li>
          </ol>
        </div>
        <div>
          V nich představuji ve stručnosti to hlavní, co se mně samotnému nebo s
          týmem spolupracovníků podařilo zjistit. Přehled podpořených výzkumných
          projektů, kterých jsem se účastnil buď jako vedoucí nebo člen týmu,
          lze nalézt v mém CV a seznam hlavních publikací v sekci publikace.
        </div>
      </Introduction>
    </>
  );
};

export const HistorySociologyCz = () => {
  return (
    <div>
      <p>
        Dějiny sociologie lze dělat v zásadě třemi různými způsoby. Buď jako
        historii vědeckých institucí (v širokém slova smyslu), nebo jako dějiny
        idejí, nebo jako sociologickou teorii. Zatímco sto let staré empirické
        výzkumy jsou do značné míry už sociologickým archaismem, teoretická
        řešení a metodologické úvahy klasiků lze často úspěšně využít při řešení
        aktuálních teoretických otázek sociologie.
      </p>
      <p>
        Ve své první knize v této oblasti (Janák 2009) jsem se věnoval dílu
        jednoho ze zakladatelů české sociologie I. A. Bláhovi a již zde jsem si
        kladl otázku po využití klasické sociologie v soudobých diskusích. Svůj
        zájem jsem postupně rozšiřoval na dějiny české sociologie a sociologie
        ve střední Evropě. Určitou syntézou mého bádání v oblasti dějin
        sociologie a teoretické sociologie je kniha z roku 2018 (Janák 2018)
      </p>
      <p>
        Vybírám některé práce, které v této oblasti považuji za nejzajímavější,
        se stručným popisem, úplný seznam publikací a přehled projektů viz CV a
        publikační činnost:
      </p>
      IN PROGRESS
    </div>
  );
};

export const AppliedResearchCz = () => {
  return (
    <div>
      <p>
        Dělat sociologii pro samotnou sociologii a radost z poznání je skvělé,
        ale když se podaří touto cestou přispět k řešení nějakého praktického
        problému, tak to radost ještě zvýší. Aplikovaný výzkum je zároveň
        ideálním způsobem, jak si osvojit metodologické řemeslo empirického
        výzkumu. Díky výzkumným zakázkám jsem měl možnost si vyzkoušet různé
        typy pozorování, rozhovorů, ohniskových skupin, dotazníkových šetření a
        analýz dokumentů v různých kombinacích a variacích, stejně jako rozličné
        způsoby konstrukce vzorku či analýzy dat. Mezi cenné zkušenosti patří
        možnost dostat se do různorodých prostředí, kam by jinak člověk jen
        stěží zavítal: např. do prostředí menšinových skupin, mezi dobrovolníky
        v pomáhajících profesích, do sociálně vyloučených lokalit, nahlédnou do
        praxe veřejné správy, mezi regionální podnikatelské i politické elity
        nebo se ocitnout v porotě regionální kulinární soutěže o nejlepší
        bramborovou placku (sejkoru).
      </p>
      <p>
        Mezi nejzajímavější metodologické zkušenosti z aplikovaného výzkumu
        patří spolupráce s renomovaným českým fotografem prof. Jindřichem
        Štreitem, která mne přivedla k promyšlení možností využití umění a
        zvláště obrazu k vědecké práci a přivedla i na pole tzv. veřejné
        sociologie, tj. sociologie určené pro širší veřejnost (více o spolupráci
        zde, v sekci spolupráce).
      </p>
      <p>
        Odvrácenou stránkou aplikovaného výzkumu je, že v koloběhu výzkumných
        zakázek není čas na důsledné promýšlení problematiky, sebraná data se
        nezřídka plně nevytěží a analýzy nemají teoretické dotažení, protože pro
        bezprostřední praxi nejsou potřeba. Výzkumy jsou na jednu stranu
        různorodé, na stranu druhou se většinou nepracuje na jednom tématu
        soustavně. Mezi lety 2013 a 2017 jsem vedl Centrum empirických výzkumů
        na Fakultě veřejných politik Slezské univerzity v Opavě, kde jsme se
        snažili o akademický přesah výzkumných zakázek a z těch větších jsme
        připravili knihy nebo odborné články nad rámec požadavků zadavatele.
      </p>
      IN PROGRESS
    </div>
  );
};
export const CommunicationCz = () => {
  return (
    <div>
      <p>
        Jak to, že někteří psi poznají, že se jejich pán vrací domů? Jak některá
        zvířata vycítí blížící se tsunami? Jak je možné navázat přátelské styky
        s divokými medvědy grizzly? Co umožnilo domestikaci různých druhů
        zvířat? Dokáží karatisté zachytit cizí útok se zavázanýma očima? Jak
        poznám, že se můj pes raduje nebo že mě má naše kočka opravdu ráda? Proč
        řada pěstitelů pokojových rostlin na své kytky mluví tak, jak to dělala
        moje babička? Jak hejna ptáků koordinují náhlé změny směru? Mluví
        mluvící papoušci, nebo jen vydávají zvuky, jejichž významu zhola
        nerozumí? Může se králík stydět?...
      </p>
      <p>
        Tyto zábavné, zajímavé a v podstatě jednoduché otázky lze zodpovědět jen
        za předpokladu vyřešení řady poměrně složitých teoretických problémů a
        realizace náročných měření. Nicméně mám pocit, že to stojí za to a
        nejbližší roky mám o výzkumný program postaráno.
      </p>
      <p>
        Jako u všech "high risk – high gain" vědeckých témat, i v tomto trvá,
        než výzkum začne nést své ovoce. Mj. proto, že riskantní témata je nutné
        dělat často jako volnočasovou aktivitu protože v akademickém vykazování
        a podnikání není pro nejistotu mnoho prostoru. Je třeba mít hodně
        "vrabců v hrsti", než si vědci mohou dovolit zkusit lovit "holuby na
        střeše". To je z pohledu zaměstnavatele docela pochopitelné, z pohledu
        vědce trochu frustrující, protože času na tomto světě za jeden lidský
        život není k dispozici zas až tak moc. Takže pokračuji pomalu, ale
        jistě. Od roku 2016, kdy jsem se tématu začal věnovat, jsem zrealizoval
        většinou ve volném čase několik zajímavých aktivit.{" "}
      </p>
      IN PROGRESS
    </div>
  );
};

const Introduction = styled(Section)`
  min-width: 100%;
`;
