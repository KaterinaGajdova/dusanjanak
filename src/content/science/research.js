import React from "react";
import styled from "styled-components";

import {
  H4,
  Section,
  Project,
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
        se stručným popisem (plný seznam publikací a přehled projektů viz CV a
        publikační činnost):
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
            radost a její aplikace na klasickou českou sociologii. Text jsem
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

// english

export const researchTopicsEn = {
  historySociology: `1.	History of sociology and sociological theory`,
  appliedResearch: "2. Applied research and public sociology",
  communication: "3. Multimodal interspecies and intraspecific communication",
};

export const IntroductionEn = () => {
  return (
    <>
      <Introduction>
        <div>
        I divided this section into three subgroups according to my main research topics:
          <ol>
            <li>{researchTopicsEn.historySociology}</li>
            <li>{researchTopicsEn.appliedResearch}</li>
            <li>{researchTopicsEn.communication}</li>
          </ol>
        </div>
        <div>
        In them, I briefly present the main thing that I managed to find out for myself or with a team of co-workers. An overview of supported research projects that I have participated in either as a leader or as a team member can be found in my CV and a list of major publications in the publications section.
        </div>
      </Introduction>
    </>
  );
};

export const HistorySociologyEn = () => {
  return (
    <div>
      <p>
      The history of sociology can be done in three different ways. Either as a history of scientific institutions (in the broadest sense), or as a history of ideas, or as a sociological theory. While hundred-year-old empirical research is largely sociological archaism, theoretical solutions and methodological considerations of the classics can often be successfully used to address current theoretical issues in sociology.
      </p>
      <p>
      In my first book in this field (Janák 2009), I focused on the work of one of the founders of Czech sociology, I. A. Bláha, and I was already asking myself a question about the use of classical sociology in contemporary discussions. I gradually expanded my interest to the history of Czech sociology and sociology in Central Europe. A book from 2018 (Janák 2018) is a certain synthesis of my research in the field of the history of sociology and theoretical sociology.
      </p>
      <p>
      I select some of the works that I consider to be the most interesting in this area, with a brief description. A complete list of publications and an overview of projects, see CV and publishing activities:
      </p>

      <Project>
        <p>
          <b>
            * Studies using sociological classics to address current issues of sociological theory. A step towards a general theory of multimodal communication:
          </b>
        </p>
        Janák, D. 2020. &quot;Kritický realismus <i>revisited</i>: Příspěvek k
        sociologické koncepci subjektivity.&quot; <i>Sociální studia</i>, 17
        (1): 69-88. ISSN: 1803-6104 (on-line), ISSN: 1214-813X (print). <br />
        Available{" "}
        <ALink href="https://journals.muni.cz/socialni_studia/article/download/14069/11802">
          here
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * For several years we focused on unique data from the as yet unprocessed sociological research of the city of Brno from 1947. Data from about 20,000 questionnaires are exceptional in the European context and were not processed due to the communist coup in 1948, after which sociology in the Eastern bloc countries was declared bourgeois paved:
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
            * Synthesis of what I have come up with in about 15 years in the field of research into the history of sociology and sociological theory. The last part of the book is devoted to an outline of a general sociological theory built "on the shoulders of giants", which is a guide for me in the research of multimodal interspecies communication:
          </b>
        </p>
        Janák, D. 2018.
        <i>Klasická sociologie ve střední Evropě: Mezi centrem a periferií.</i>
        Praha: Sociologické nakladatelství. ISBN 978-80-7419-278-4.
      </Project>

      <Project>
        <p>
          <b>
            * This text dedicated to one of the two Czechoslovak presidents and sociologists in one person was created for quite a long time, and I am quite satisfied with it. Theoretical probe into the relationship between sociology and politics:
          </b>
        </p>
        Janák, D. 2014. „Problém národní identity v díle Edvarda Beneše.“
        <i>Sociologický časopis.</i> roč. 50 (2): 233-263. ISSN 0038-0288.{" "}
        <br />
        Available{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2014/02/04.pdf">
          here
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * Thoroughly elaborated big topic of Czech interwar sociology, its division into Brno and Prague sociological school:
          </b>
        </p>
        Janák, D. 2013. „Brněnská versus pražská sociologická škola: mýtus a
        skutečnost“. <i>Sociologický časopis.</i> 49 (3): 577-602. ISSN
        0038-028. <br />
        Available{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2013/04/04.pdf">
          here
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * Design of a typology of sociological theory, which I was quite happy about and its application to clasical Czech sociology. I dedicated the text to the memory of prof. Petruska, who devoted himself to sociological theory in the context of sociological history essentially throughout his life and unintentionally influenced my stay in the scientific and not only climbing career:
          </b>
        </p>
        Janák, D. 2013. „Počátky teoretické sociologie v českých zemích. Text
        věnovaný památce prof. M. Petruska.“
        <i>Sociológia- Slovak Sociological Review.</i> 45 (4): 339-364. ISSN
        0049-1225, ISSN 1336- 8613. <br />
        Available{" "}
        <ALink href="https://www.sav.sk/journals/uploads/09030817Janak%20OK.pdf">
          here
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * My first book resulting from a dissertation awarded in the competition for the best doctoral thesis of the Faculty of Social Studies of Masaryk University:
          </b>
        </p>
        Janák, D. 2009. „Ohlédnutí za sociologií Inocence Arnošta Bláhy.“
        <i>Sociologický časopis</i> roč. 45, č. 5, s. 1081-1090, ISSN 0038-0288.{" "}
        <br />
        Available{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2009/05/12.pdf">
          here
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * My very first article, I took advantage of my study stay at the University of Vienna and my permanent interest in social philosophy and the philosophy of social sciences. The article was awarded in the competition for the best doctoral article of the Sociological Journal / Czech Sociological Review:{" "}
            <i>Sociologického časopisu / Czech Sociological Review</i>:
          </b>
        </p>
        Janák, D. 2006. „Sociální introspekce In. A. Bláhy a Wittgensteinův
        argument proti soukromému jazyku. Poznámky k introspektivnímu přístupu
        v sociálních vědách.” <i>Sociologický časopis</i>, Vol. 42 (No.4): 761 –
        782, ISSN:0038-0288. <br />
        Available{" "}
        <ALink
          href="https://sreview.soc.cas.cz/pdfs/csr/2006/04/08.pdf"
          /*       target="_blank_" */
        >
          here
        </ALink>
      </Project>
    </div>
  );
};

export const AppliedResearchEn = () => {
  return (
    <div>
      <p>
      It is great to do sociology for the sociology itself and the joy of knowledge, but if one can contribute to solving a practical problem in this way, it will increase the joy even more. At the same time, applied research is an ideal way to master the methodological craft of empirical research. Thanks to the research orders, I had the opportunity to try different types of observations, interviews, focus groups, questionnaire surveys and document analyzes in various combinations and variations, as well as different ways of sample construction or data analysis. Valuable experience includes the opportunity to get into a variety of environments where one would hardly visit otherwise: for example, minority groups, volunteers in helping professions, socially excluded localities, public administration practices, regional business and political elites, or to be on the jury of the regional culinary competition for the best potato pancake (sejkoru).
      </p>
      <p>
      One of the most interesting methodological experiences from applied research is the cooperation with the renowned Czech photographer prof. Jindřich Štreit, which led me to think about the possibilities of using art and especially painting for scientific work and also led me to the field of so-called public sociology, i.e sociology intended for the general public (more about cooperation here, in the cooperation section).
      </p>
      <p>
      The downside of applied research is that in the cycle of research contracts there is no time to think carefully about the issue, the collected data are often not fully extracted and analyzes do not have a theoretical tightening, because they are not needed for immediate practice. On the one hand, research is diverse, on the other hand, is usually not worked on one topic systematically. Between 2013 and 2017, I led the Center for Empirical Research at the Faculty of Public Policy of the Silesian University in Opava, where we sought academic overlap of research contracts and prepared books or professional articles from the larger ones beyond the requirements of the client.
      </p>

      <H4>selection of methodological publications:</H4>
      <Project>
        <p>
          <b>
            * On issues of introspection, objections to the subjectivism of introspective procedures and objectification strategies in qualitative research:
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
            * Methodological study for the processing of three-quarters of a century old primary sociological data:
          </b>
        </p>
        Janák, Dušan, Martin Stanoev a Petr Hušek. 2014. „Poválečný sociologický
        výzkum města Brna z roku 1947 a metodika jeho soudobého zpracování z
        pohledu historicko-sociologické analýzy průmyslového dělnictva před
        rokem 1948.“ <i>Data a výzkum – SDA Info</i> 127 (2): 143-163.
        <br />
        Available{" "}
        <ALink href="http://dx.doi.org/10.13060/23362391.2014.127.2.157">
          here
        </ALink>
      </Project>

      <Project>
        <p>
          <b>
            * The great topic of the social sciences: What follows from the fact that the scientist is part of the subject he is researching and has internal experience with? Is it possible to arrive at objective "knowledge" from subjective "impressions"? Frankly, I did not solve this methodological problem, but at least clarified the fundamental problems that self-reflexive methodologies encounter. And I also saw more precisely the limits of the so-called objective procedures of quantifying methods. I still benefit from this initial reflection, even when considering multiomodal interspecies communication:
          </b>
        </p>
        Janák, D. 2006. „Sociální introspekce In. A. Bláhy a Wittgensteinův
        argument proti soukromému jazyku. Poznámky k introspektivnímu přístupu v
        sociálních vědách.” <i>Sociologický časopis</i>, Vol. 42 (No.4): 761 –
        782, ISSN:0038-0288. DOI: 10.13060/00380288.2006.42.4.08.
        <br />
        Available{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2006/04/08.pdf">
          here
        </ALink>
        <p>Slightly modified English version:</p>
        Janák, D. 2010."Social Introspection Of I. A. Bláha and Wittgenstein’s’
        Argument Counter To Private Language. Anniversary Study On Introspection
        Approach In Social Sciences." <i>Qualitative Sociology Review</i>, roč.6
        č. 2, s. 51-72, ISSN 1733-8077.
        <br />
        Available{" "}
        <ALink href="http://www.qualitativesociologyreview.org/ENG/Volume16/QSR_6_2_Janak.pdf">
          here
        </ALink>
      </Project>

      <H4>applied research:</H4>
      <b>
      three books by research teams that I led and that I wrote for the most part
      </b>
      <Project>
        <p>
          <b>* The role of food in the re / construction of national and regional identity:</b>
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
            * Inequalities and social inclusion in education is a major topic of public policy and academic research:
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
            * Social exclusion in border regions, socially excluded localities and possibilities of their socio-economic development:
          </b>
        </p>
        Janák, D. – M. Pilát – J. Bezděk. 2014.{" "}
        <i>
          Rozdělování sociálních nerovností pod patronací státu. Situační
          analýza Osoblažska a možností jeho socioekonomického rozvoje.
        </i>{" "}
        (foto: J. Štreit) Opava: Slezská univerzita. ISBN: 978-80-7248-947-3.
      </Project>

      <H4>public sociology:</H4>

      <Project>
        <p>
          <b>
            * The Roma are a big topic in Czech society. This book is an attempt to make an impartial contribution to the public debate, which will be accessible to the general public. Cooperation with renowned Czech photographer prof. Jindřich Štreit. I do not think we have taken full advantage of this opportunity to speak on a big topic and we will need to return to it once again. However, we already have a solid pilot study:
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
export const CommunicationEn = () => {
  return (
    <div>
      <p>
      How come some dogs know their master is coming home? How do some animals feel the impending tsunami? How is it possible to make friendly contacts with wild grizzly bears? What made it possible to domesticate different species of animals? Can karate players catch a blindfolded alien attack? How do I know that my dog is happy or that our cat really likes me? Why do many houseplants grow their flowers the way my grandmother did? How do flocks of birds coordinate sudden changes of direction? Do talking parrots speak, or do they just make sounds whose meaning they do not fully understand? Can a rabbit be ashamed? ...
      </p>
      <p>
      These fun, interesting and basically simple questions can only be answered if a number of relatively complex theoretical problems are solved and complex measurements are implemented. However, I feel that it is worth it and I have taken care of the research program in the coming years.
      </p>
      <p>
      As with all "high risk - high gain" scientific topics, it takes time for research to bear fruit. Besides because risky topics need to be done often as a leisure activity because there is not much space for uncertainty in academic reporting and business. You need to have a lot of "sparrows in your hand" before scientists can afford to try hunting "pigeons on the roof". This is quite understandable from the employer's point of view, a bit frustrating from the scientist's point of view, because time in this world in one human life is not so much available. I could easily publish another book on the history of sociology every three years, write one or two articles each year, do some research work from time to time, and look forward to retirement. Not that I don't really enjoy such science, but if I'm lucky enough to have a research topic that spontaneously attracts my attention, it's a shame to write about where I've already said the essentials. At least for a while…
      </p>
      <p>
      So I proceed slowly but surely. Since 2016, when I started working on the topic, I have carried out several interesting research activities in my free time: An expedition for animals to British Columbia in 2017; research of so-called communicators with animals in the years 2018 - 2019; measurement with karatekas in 2019 or with plants 2019 - 2020. I do not like to present something that is not finished yet.
      </p>
      <Project>
        <p>
          <b>
            * The first completed output that can be mentioned is the manuscript of a study from the research of intuitive interspecies communication carried out with animal communicators in the years 2018 - 2019. The manuscript is now under review by the Journal of Ethnobiology. Data from the research are publicly available in the Czech Social Science Data Archive of the Academy of Sciences:
          </b>
        </p>
        <p>
          {" "}
          Janák, D. 2021. “An Uncharted Language? A Content Analysis of the
          Materials Created by Animal Communicators Using an Animal Photograph”
          Journal of Ethnobiology (in review).{" "}
        </p>
        <p>
        The data are available after registration in the Czech Social Science Data Archive of the Academy of Sciences: {" "}
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
