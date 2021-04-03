import React from "react";

export const Cz = () => {
  return (
    <>
      <div>IN PROGRESS</div>
    </>
  );
};

/* pokud chcete přidat dalšího spolupracovníka, tak:
  - zkopírovat objekt {} a přidat na konec (do angličtiny i češtiny)
  - prepsat jmeno a popisek (pripadne webovou stranku) za to, co chceme
  - do images slozky nahrat fotku - jeji nazev musi zacinat na `cooperators_` - to co nasleduje za `cooperators_`, pak dat do imageTitle */

export const cooperatorsCz = [
  {
    imageTitle: "streit_1",
    name: "prof. JINDŘICH ŠTREIT",
    description:
      "Nepřehlédnutelná postava české fotografie, renomovaný fotograf s desítkami publikací i výstavami po celém světě.",
    website: "https://cs.wikipedia.org/wiki/Jindřich_Štreit",
  },
  {
    imageTitle: "klobucky",
    name: "dr. ROBERT KLOBUCKÝ",
    description:
      "Slovenský sociolog a někdejší ředitel sociologického ústavu Akademie věd SR, se kterým máme společný zájem o klasickou sociologii.",
  },
  {
    imageTitle: "halasz",
    name: "prof. IVAN HALÁSZ ",
    description:
      "Maďarský historik a právník, vedoucí asi největší katedry ústavního práva v Evropě.",
  },
  {
    imageTitle: "bittner_1",
    name: "dr. DAVID BITTNER",
    description:
      "Biolog, milovník medvědů grizzly a expert na interakce s nimi.",
    website: "https://davidbittner.ch/",
  },
];

export const cooperatorsEn = [
  {
    imageTitle: "streit_1",
    name: "prof. JINDŘICH ŠTREIT",
    description:
      "Nepřehlédnutelná postava české fotografie, renomovaný fotograf s desítkami publikací i výstavami po celém světě.",
    website: "https://cs.wikipedia.org/wiki/Jindřich_Štreit",
  },
  {
    imageTitle: "klobucky",
    name: "dr. ROBERT KLOBUCKÝ",
    description:
      "Slovenský sociolog a někdejší ředitel sociologického ústavu Akademie věd SR, se kterým máme společný zájem o klasickou sociologii.",
  },
  {
    imageTitle: "halasz",
    name: "prof. IVAN HALÁSZ ",
    description:
      "Maďarský historik a právník, vedoucí asi největší katedry ústavního práva v Evropě.",
  },
  {
    imageTitle: "bittner_1",
    name: "dr. DAVID BITTNER",
    description:
      "Biolog, milovník medvědů grizzly a expert na interakce s nimi.",
    website: "davidbittner.ch",
  },
];
