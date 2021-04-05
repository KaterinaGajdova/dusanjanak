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
  ALinkStyled,
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

      <Project>
        <p>
          <b>
            * Studie využívající sociologické klasiky k řešení aktuálních otázek
            sociologické teorie. Krok směrem k obecné teorii multimodální
            komunikace:
          </b>
        </p>
        Janák, D. 2020. &quot;Kritický realismus <i>revisited</i>: Příspěvek k
        sociologické koncepci subjektivity.&quot; <i>Sociální studia</i>, 17
        (1): 69-88. ISSN: 1803-6104 (on-line), ISSN: 1214-813X (print). <br />
        Dostupné{" "}
        <ALink href="https://journals.muni.cz/socialni_studia/article/download/14069/11802">
          zde
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * Několik let jsme se věnovali unikátním datům z dosud
            nezpracovaného sociologického výzkumu města Brna z roku 1947. Data z
            cca 20 000 dotazníků jsou výjimečná v evropském kontextu a nebyla
            zpracována kvůli komunistickému převratu v roce 1948, po kterém byla
            sociologie v zemích východního bloku prohlášena za buržoazní pavědu:
          </b>
        </p>
        Janák, D. 2019. "Brněnští dělníci v roce 1947: sociologický exkurz." Pp
        534 – 554. in Dušan Janák, Stanislav Kokoška a kol.{" "}
        <i>Průmyslové dělnictvo v českých zemích v letech 1938 – 1948.</i>{" "}
        Praha: Ústav pro soudobé dějiny AV ČR.
      </Project>

      <Project>
        <p>
          <b>
            * Syntéza toho, na co jsem za zhruba 15 let v oblasti výzkumu dějin
            sociologie a sociologické teorie přišel. Poslední část knihy je
            věnována náčrtu obecné sociologické teorie vystavěné "na ramenou
            obrů", která je pro mne vodítkem při výzkumu multimodální
            mezidruhové komunikace:
          </b>
        </p>
        Janák, D. 2018.
        <i>Klasická sociologie ve střední Evropě: Mezi centrem a periferií.</i>
        Praha: Sociologické nakladatelství. ISBN 978-80-7419-278-4.
      </Project>

      <Project>
        <p>
          <b>
            * Tenhle text věnovaný jednomu ze dvou československých prezidentů a
            sociologů v jedné osobě vznikal docela dlouho, a jsem s ním docela
            spokojený. Teoretická sonda do vztahu sociologie a politiky:
          </b>
        </p>
        Janák, D. 2014. „Problém národní identity v díle Edvarda Beneše.“
        <i>Sociologický časopis.</i> roč. 50 (2): 233-263. ISSN 0038-0288.{" "}
        <br />
        Dostupné{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2014/02/04.pdf">
          zde
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * Důkladně zpracované velké téma české meziválečné sociologie, její
            dělení na brněnskou a pražskou sociologickou školu:
          </b>
        </p>
        Janák, D. 2013. „Brněnská versus pražská sociologická škola: mýtus a
        skutečnost“. <i>Sociologický časopis.</i> 49 (3): 577-602. ISSN
        0038-028. <br />
        Dostupné{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2013/04/04.pdf">
          zde
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * Návrh typologie sociologické teorie, ze které jsem měl docela
            radost a její aplikace na kalsickou českou sociologii. Text jsem
            věnoval památce prof. Petruska, který se sociologické teorii v
            kontextu sociologických dějin věnoval v podstatě celoživotně a
            nezamýšleně ovlivnil i mé setrvání ve vědecké a nejen horolezecké
            dráze:
          </b>
        </p>
        Janák, D. 2013. „Počátky teoretické sociologie v českých zemích. Text
        věnovaný památce prof. M. Petruska.“
        <i>Sociológia- Slovak Sociological Review.</i> 45 (4): 339-364. ISSN
        0049-1225, ISSN 1336- 8613. <br />
        Dostupné{" "}
        <ALink href="https://www.sav.sk/journals/uploads/09030817Janak%20OK.pdf">
          zde
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * Moje první knížka vzniklá z disertace oceněné v soutěži o nejlepší
            doktorskou práci Fakulty sociálních studií Masarykovy univerzity:
          </b>
        </p>
        Janák, D. 2009. „Ohlédnutí za sociologií Inocence Arnošta Bláhy.“
        <i>Sociologický časopis</i> roč. 45, č. 5, s. 1081-1090, ISSN 0038-0288.{" "}
        <br />
        Dostupné{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2009/05/12.pdf">
          zde
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * Můj úplně první článek, zužitkoval jsem v něm studijní pobyt na
            Vídeňské univerzitě i svůj trvalý zájem o sociální filosofii a
            filosofii sociálních věd. Článek byl oceněn v soutěži o nejlepší
            doktorandskou stať{" "}
            <i>Sociologického časopisu / Czech Sociological Review</i>:
          </b>
        </p>
        Janák, D. 2006. „Sociální introspekce In. A. Bláhy a Wittgensteinův
        argument proti soukromému jazyku. Poznámky k introspektivnímu přístupu
        v sociálních vědách.” <i>Sociologický časopis</i>, Vol. 42 (No.4): 761 –
        782, ISSN:0038-0288. <br />
        Dostupné{" "}
        <ALink
          href="https://sreview.soc.cas.cz/pdfs/csr/2006/04/08.pdf"
          /*       target="_blank_" */
        >
          zde
        </ALink>
      </Project>
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

      <H4>výběr publikací metodologických:</H4>
      <Project>
        <p>
          <b>
            * K otázkám introspekce, námitkám vůči subjektivismu
            introspektivních postupů a objektivzačním strategiím v kvalitativním
            výzkumu:
          </b>
        </p>
        Stanoev M., Janák D. 2013. „Koncepce (sub)kulturního kapitálu a
        sebereflexivní metodologie při studiu subkultur.“ In: Miroslav Tížik
        (ed.): <i>Pierre Bourdieu ako inšpirácia pre sociologický výskum</i>. SÚ
        SAV, Bratislava, 2013. s.75-96. ISBN 978-80-85544-77-0.
      </Project>

      <Project>
        <p>
          <b>
            * Metodologická studie ke zpracování třičtvrtě století starých
            primárních sociologických dat:
          </b>
        </p>
        Janák, Dušan, Martin Stanoev a Petr Hušek. 2014. „Poválečný sociologický
        výzkum města Brna z roku 1947 a metodika jeho soudobého zpracování z
        pohledu historicko-sociologické analýzy průmyslového dělnictva před
        rokem 1948.“ <i>Data a výzkum – SDA Info</i> 127 (2): 143-163.
        <br />
        Dostupné{" "}
        <ALink href="http://dx.doi.org/10.13060/23362391.2014.127.2.157">
          zde
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * Velké téma sociálních věd: Co plyne z toho, že vědec je součástí
            předmětu, který zkoumá a má s ním vnitřní zkušenost? Lze ze
            subjektivních "dojmů" dospět k objektivnímu "poznání"? Upřímně
            řečeno, tento metodologický problém jsem nevyřešil, ale minimálně si
            ujasnil principiální problémy, na které sebereflexivní metodologie
            naráží. A také jsem přesněji uviděl limity tzv. objektivních postupů
            kvantifikujících metod. Z této prvotní reflexe těžím dosud, i při
            úvahách o multiomodální mezidruhové komunikaci:
          </b>
        </p>
        Janák, D. 2006. „Sociální introspekce In. A. Bláhy a Wittgensteinův
        argument proti soukromému jazyku. Poznámky k introspektivnímu přístupu v
        sociálních vědách.” <i>Sociologický časopis</i>, Vol. 42 (No.4): 761 –
        782, ISSN:0038-0288. DOI: 10.13060/00380288.2006.42.4.08.
        <br />
        Dostupné{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2006/04/08.pdf">
          zde
        </ALink>
        <p>Mírně upravená anglická verze:</p>
        Janák, D. 2010."Social Introspection Of I. A. Bláha and Wittgenstein’s’
        Argument Counter To Private Language. Anniversary Study On Introspection
        Approach In Social Sciences." <i>Qualitative Sociology Review</i>, roč.6
        č. 2, s. 51-72, ISSN 1733-8077.
        <br />
        Dostupné{" "}
        <ALink href="http://www.qualitativesociologyreview.org/ENG/Volume16/QSR_6_2_Janak.pdf">
          zde
        </ALink>
      </Project>

      <H4>aplikovaný výzkum:</H4>
      <b>
        tři knihy výzkumných týmů, které jsem vedl a které jsem i z větší části
        napsal
      </b>
      <Project>
        <p>
          <b>* Role jídla v re/konstrukci národní a regionální identity:</b>
        </p>
        Janák, D. a kolektiv. 2020.{" "}
        <i>
          Jídlo není jenom "něco k jídlu": Tradiční stravování a pokrmy jako
          součást regionální a národní identity ve vědomí a paměti současné
          společnosti.
        </i>{" "}
        Opava: Slezská univerzita. ISBN 978-80-7510-428-1
      </Project>

      <Project>
        <p>
          <b>
            * Nerovnosti a sociální inkluze ve vzdělávání je velké téma veřejné
            politiky i akademického výzkumu:
          </b>
        </p>
        Janák, D., M. Stanoev a kolektiv. 2015.{" "}
        <i>
          Rozšířit řečiště hlavního vzdělávacího proudu. Sociální inkluze žáků a
          transformace vzdělávacího systému v Krnově a v Sokolově.
        </i>{" "}
        foto: J. Štreit. Opava: Slezská univerzita. 978-80-7510-157-0.
      </Project>

      <Project>
        <p>
          <b>
            * Sociální exkluze v pohraničních regionech, sociálně vyloučené
            lokality a možnosti jejich socioekonomického rozvoje:
          </b>
        </p>
        Janák, D. – M. Pilát – J. Bezděk. 2014.{" "}
        <i>
          Rozdělování sociálních nerovností pod patronací státu. Situační
          analýza Osoblažska a možností jeho socioekonomického rozvoje.
        </i>{" "}
        (foto: J. Štreit) Opava: Slezská univerzita. ISBN: 978-80-7248-947-3.
      </Project>

      <H4>veřejná sociologie:</H4>

      <Project>
        <p>
          <b>
            * Romové jsou velké téma české společnosti. Tato kniha je pokusem o
            nestranný příspěvek do veřejné debaty, který bude přístupný i laické
            veřejnosti. Spolupráce s renomovaným českým fotografem prof.
            Jindřichem Štreitem. Myslím, že jsme tuto příležitost vyslovit se k
            velkému tématu plně nevyužili a bude třeba se k němu ještě jednou
            vrátit. Solidní pilotní studii však už máme:
          </b>
        </p>
        Janák, D., J. Štreit a kolektiv. 2017. Romové obrazem.{" "}
        <i>
          Příspěvek ke zkoumání sociálních reprezentací Romů v české
          společnosti.
        </i>{" "}
        Opava: Slezská univerzita. ISBN: 978-80-7510-266-9
      </Project>
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
        život není k dispozici zas až tak moc. Mohl bych klidně co tři roky
        vydat další knihu z dějin sociologie, každý rok napsat jeden až dva
        články, občas udělat nějakou výzkumnou zakázku a těšit se na důchod. Ne
        že by mne taková věda vyloženě nebavila, ale pokud mám to štěstí, že mám
        výzkumné téma, které samovolně přitahuje mou pozornost, přijde mi škoda
        času psát o tom, kde jsem to podstatné podle sebe už řekl. Alespoň po
        nějaký čas…
      </p>
      <p>
        Takže pokračuji pomalu, ale jistě. Od roku 2016, kdy jsem se tématu
        začal věnovat, jsem zrealizoval většinou ve volném čase několik
        zajímavých výzkumných aktivit: Výprava za zvířaty do Britské Kolumbie v
        roce 2017; výzkum tzv. komunikátorů se zvířaty v letech 2018 – 2019;
        měření s karatisty v roce 2019 nebo s rostlinami 2019 - 2020. Nerad
        prezentuji něco, co ještě není hotové.
      </p>
      <Project>
        <p>
          <b>
            * Prvním dokončeným výstupem, o kterém je možné se zmínit, je
            rukopis studie z výzkumu intuitivní mezidruhové komunikace
            realizovaný s komunikátory se zvířaty v letech 2018 – 2019. Rukopis
            je nyní v recenzním řízení časopisu <i>Journal of Ethnobiology</i>.
            Data z výzkumu jsou veřejně dostupná v Českém sociálněvědním datovém
            archivu Akademie věd:
          </b>
        </p>
        <p>
          {" "}
          Janák, D. 2021. “An Uncharted Language? A Content Analysis of the
          Materials Created by Animal Communicators Using an Animal Photograph”
          Journal of Ethnobiology (in review).{" "}
        </p>
        <p>
          Data jsou dostupná po registraci v Českém sociálněvědním datovém
          archivu Akademie věd:{" "}
          <ALink href=" http://archiv.soc.cas.cz">
            http://archiv.soc.cas.cz
          </ALink>
          ; email:{" "}
          <ALinkStyled href="mailto:archiv@soc.cas.cz">
            archiv@soc.cas.cz
          </ALinkStyled>
          . The research data title is Invisible language 2019: A sociological
          view on intra- and interspecies intuitive communication, DOI:
          10.14473/K0009.
        </p>
      </Project>
    </div>
  );
};

const Introduction = styled(Section)`
  min-width: 100%;
`;
