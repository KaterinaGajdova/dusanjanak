import React from "react";
import { ALink } from "../../components/atoms";

/* pokud chcete přidat dalšího spolupracovníka, tak:
  - zkopírovat objekt {} a přidat na konec (do angličtiny i češtiny)
  - prepsat jmeno a popisek (pripadne webovou stranku) za to, co chceme
  - do images slozky nahrat fotku - jeji nazev musi byt ve formtu na `cooperators_{jmeno}_{cislofotky}.jpg` - napriklad: cooperators_streit_1.jpg
  - do imageTitle pak dat jmeno
  - do  detail pripadnej dalsi popis - idealne zkopirovat od nekoho jinyho a jen preprsat text, popr. pridat / odebrat odstavec*/

export const cooperatorsCz = [
  {
    imageTitle: "streit",
    name: "prof. Mgr. JINDŘICH ŠTREIT Dr.h.c.",
    description:
      "Nepřehlédnutelná postava české fotografie, renomovaný fotograf s desítkami publikací i výstavami po celém světě.",
    website: "https://cs.wikipedia.org/wiki/Jindřich_Štreit",
    detail1: (
      <>
        <p>
          Spolupráce s Jindřichem Štreitem patří k nejzajímavějším spoluprací
          vzniklým z aplikovaného výzkumu. Jednak po metodologické stránce
          (propojení vědy a umění) a jednak díky možnosti nahlédnout "pod
          pokličku" vznikání neobyčejně zajímavých fotografických děl.
        </p>
        <p>
          Štreitova tvorba se pohybuje na pomezí umělecké a dokumentární
          fotografie a spojení takovéto fotografie a sociologického terénního
          výzkumu umožňuje zaujmout netradiční perspektivu a rozšířit poznatky
          získané standardními metodami. Díky spolupráci s Jindřichem Štreitem
          jsem si promyslel možnosti myšlení obrazem, využití uměleckého díla
          pro vědecké účely a vyzkoušel nové formy prezentace výsledků vědeckého
          výzkumu širší veřejnosti (nejen vědecké publikace [Janák, Pilát,
          Bezděk 2014, Janák, Stanoev a kol.2015], ale také výstavy a kritické
          katalogy k nim [Štreit, Pavelčíková, Janák 2015, Kolář, Janák 2019;
          Hlavienka, Kolář, Janák 2020]).{" "}
        </p>
      </>
    ),
    detail2: (
      <>
        <p>
          Na základě těchto zkušeností jsme se pustili i do zajímavého projektu
          "Romové obrazem", který je pokusem z aplikovaného výzkumu přejít na
          pole tzv. veřejné sociologie, tj. sociologie určené pro širší
          veřejnost. Romové jsou velké téma české společnosti a doufám, že po
          pilotní publikaci (Janák, Štreit a kol. 2017) a sérii výstav tohle
          náročné téma s Jindřichem Štreitem dotáhneme do uspokojivého konce.{" "}
        </p>
        <p>
          O Jindřichu Štreitovi se můžete dozvědět víc{" "}
          <ALink href="https://cs.wikipedia.org/wiki/Jindřich_Štreit">
            zde
          </ALink>
        </p>
      </>
    ),
  },
  {
    imageTitle: "klobucky",
    name: "dr. ROBERT KLOBUCKÝ",
    description:
      "Slovenský sociolog a někdejší ředitel sociologického ústavu Akademie věd SR, se kterým máme společný zájem o klasickou sociologii.",
    detail: (
      <>
        <p>
          <b>dr. Robert Klobucký a Sociologický ústav Akademie věd SR</b>
        </p>
        <p>
          S Robertem jsme začali spolupracovat díky mým studijním pobytům na
          Sociologickém ústavu AV SR ještě za doktorského studia. Jeho zájem o
          dějiny sociologie na Slovensku a můj o dějiny oboru v českých zemích
          postupně rozšiřovaný na střední Evropu se dobře doplňovaly a vedly k
          několika komparativním publikacím (Janák, Klobucký …, …), společným
          konferenčním příspěvkům, mému pozdějšímu působení na SÚ SAV a
          Robertovým přednáškám na Fakultě veřejných politik Slezské univerzity
          v Opavě.
        </p>
        <p>
          Základní informace o Robertově činnosti lze najít{" "}
          <ALink href="https://www.sav.sk/?lang=sk&doc=user-org-user&user_no=3167">
            na stánkách Slovenské akademie věd
          </ALink>
        </p>
      </>
    ),
  },
  {
    imageTitle: "halasz",
    name: "prof. IVAN HALÁSZ ",
    description:
      "Maďarský historik a právník, vedoucí asi největší katedry ústavního práva v Evropě.",
    detail: (
      <>
        <p>
          S Ivanem jsme sice autorsky spolupracoval jen na jedné knize (Janák a
          kol. 2014), ale bez jeho pomoci bych se při výzkumu dějin Maďarské
          sociologie jen těžko dostával přes jazykovou bariéru a k řadě cenných
          kontaktů v maďarském akademickém prostředí. Ivan na základě naší
          spolupráce hostuje od roku 2010 na Slezské univerzitě, kde vedl v
          letech 2015 - 2021 jako šéfredaktor časopis Central European Papers.
          Na Ivanově pracovišti v Budapešti na Univerzitě veřejných služeb jsem
          v akademickém roce 2015/2016 přednášel pregraduálním i postgraduálním
          studentům a dokončoval část svého výzkumu o počátcích sociologie v
          Maďarsku.
        </p>
        <p>
          Základní informace o Ivanově činnosti lze najít{" "}
          <ALink href="https://jog.tk.hu/en/researcher/halasz-ivan">
            na stránkách Maďarské akademie věd
          </ALink>
        </p>
      </>
    ),
  },
  {
    imageTitle: "bittner",
    name: "dr. DAVID BITTNER",
    description:
      "Biolog, milovník medvědů grizzly a expert na interakce s nimi.",
    website: "https://davidbittner.ch/",
    detail: (
      <>
        <p>
          Spolupráce s Davidem Bittnerem započala až v důsledku posunu mého
          zájmu k mezidruhové komunikaci. Při pilotní studijní cestě za divokými
          zvířaty do Britské Kolumbie v roce 2017 mne na Davida upozornil prof.
          Tom Reimchen (University of Victoria, BC) jako na jednoho z mála lidí
          na světě, kteří jsou schopni navázat přátelské vztahy s grizzly
          medvědy. V roce 2018 jsme se s Davidem setkali poprvé, ale teprve v
          roce 2021 to vypadá, že pokud covidová situace neznemožní cestování,
          otevírá se šance na pilotní data pro výzkum multimodální komunikace z
          Davidovy výpravy na Aljašky.
        </p>
        <p>
          David má dobře zpracované{" "}
          <ALink href="https://davidbittner.ch/">webové stránky</ALink> , kde se
          můžete dozvědět víc o jeho výpravách na Aljašku i jinam.
        </p>
      </>
    ),
  },
];

export const cooperatorsEn = [
  {
    imageTitle: "streit",
    name: "prof. Mgr. JINDŘICH ŠTREIT Dr.h.c.",
    description:
      "An unmissable figure in Czech photography, a renowned photographer with dozens of publications and exhibitions around the world.",
    website: "https://cs.wikipedia.org/wiki/Jindřich_Štreit",
    detail1: (
      <>
        <p>
        The collaboration with Jindřich Štreit is one of the most interesting collaborations arising from applied research. On the one hand, from the methodological point of view (connection of science and art) and on the other hand, thanks to the possibility to see "under the hood" the creation of extremely interesting photographic works.
        </p>
        <p>
        Štreit's work moves on the border between art and documentary photography, and the combination of such photography and sociological field research makes it possible to take an unconventional perspective and expand the knowledge gained by standard methods. Thanks to the collaboration with Jindřich Štreit, I thought about the possibilities of thinking by painting, using a work of art for scientific purposes and tried new forms of presenting the results of scientific research to the general public (not only scientific publications [Janák, Pilát, Bezděk 2014, Janák, Stanoev et al. also exhibitions and critical catalogs for them [Štreit, Pavelčíková, Janák 2015, Kolář, Janák 2019; Hlavienka, Kolář, Janák 2020]).{" "}
        </p>
      </>
    ),
    detail2: (
      <>
        <p>
        Based on this experience, we embarked on an interesting project "Roma Image", which is an attempt to move from applied research to the field of so-called public sociology, i.e sociology intended for the general public. The Roma are a big topic of Czech society, and I hope that after a pilot publication (Janák, Štreit et al. 2017) and a series of exhibitions, we will bring this challenging topic to a satisfactory end with Jindřich Štreit.{" "}
        </p>
        <p>
        You can learn more about Jindřich Štreit here{" "}
          <ALink href="https://cs.wikipedia.org/wiki/Jindřich_Štreit">
            here
          </ALink>
        </p>
      </>
    ),
  },
  {
    imageTitle: "klobucky",
    name: "dr. ROBERT KLOBUCKÝ",
    description:
      "Slovak sociologist and former director of the Institute of Sociology of the Academy of Sciences of the Slovak Republic, with whom we have a common interest in classical sociology.",
    detail: (
      <>
        <p>
          <b>dr. Robert Klobucký and the Institute of Sociology of the Academy of Sciences of the Slovak Republic</b>
        </p>
        <p>
        Robert and I started cooperating thanks to my study stays at the Institute of Sociology of the Academy of Sciences of the Slovak Republic during my doctoral studies. His interest in the history of sociology in Slovakia and mine in the history of the field in the Czech lands gradually expanded to Central Europe complemented each other well and led to several comparative publications (Janák, Klobucký…,…), joint conference papers, my later work at the SAS and Robert´s lectures at the Faculty of Public Policy of the Silesian University in Opava.
        </p>
        <p>
        Basic information about Robert's activities can be found on the stands of the Slovak Academy of Sciences.{" "}
          <ALink href="https://www.sav.sk/?lang=sk&doc=user-org-user&user_no=3167">
          </ALink>
        </p>
      </>
    ),
  },
  {
    imageTitle: "halasz",
    name: "prof. IVAN HALÁSZ ",
    description:
      "Hungarian historian and lawyer, head of probably the largest department of constitutional law in Europe.",
    detail: (
      <>
        <p>
        Although Ivan and I collaborated as the authors on only one book (Janák et al. 2014), without his help, I would find it difficult to cross the language barrier and to a number of valuable contacts in the Hungarian academic environment when researching the history of Hungarian sociology. Based on our cooperation, Ivan has been a guest at the Silesian University since 2010, where he ran the Central European Papers magazine from 2015 to 2021 as editor-in-chief. At Ivan's workplace in Budapest at the University of Public Services, I lectured to undergraduate and postgraduate students in the academic year 2015/2016 and completed part of my research on the beginnings of sociology in Hungary.
        </p>
        <p>
        Basic information about Ivan's activities can be found on the website of the Hungarian Academy of Sciences.{" "}
          <ALink href="https://jog.tk.hu/en/researcher/halasz-ivan">
          </ALink>
        </p>
      </>
    ),
  },
  {
    imageTitle: "bittner",
    name: "dr. DAVID BITTNER",
    description:
      "Biologist, lover of grizzly bears and expert in interacting with them.",
    website: "https://davidbittner.ch/",
    detail: (
      <>
        <p>
        The collaboration with David Bittner started only as a result of the shift of my interest to interspecies communication. During a pilot study trip for wild animals to British Columbia in 2017, prof. Tom Reimchen (University of Victoria, BC) alerted me on David as he is one of the few people in the world who is able to establish friendly relationships with grizzly bears. We met David for the first time in 2018, but it was not until 2021 that it seems that if the covid situation does not make travel impossible, there is a chance for pilot data for research into multimodal communication from David's expedition to Alaska.
        </p>
        <p>
        David has a well-designed {" "}
          <ALink href="https://davidbittner.ch/">website</ALink> , where you can learn more about his expeditions to Alaska and elsewhere.
        </p>
      </>
    ),
  },
];
