import React from "react";
import { GatsbyLink } from "../../components/atoms";

export const Cz = () => {
  return (
    <>
      <p>
        K horolezectví jsem se dostal v polovině 90. let díky kombinaci radosti
        z pobytu v přírodě a touhy po dobrodružství. I když jsem se věnoval řadu
        let lezení poloprofesionálně, tyhle dvě základní noty pro mne byly vždy
        tím hlavním. Horolezectví se dobře doplňuje s vědou: ve studených
        bivacích jsem se strašně těšil do přetopené univerzitní knihovny a v
        knihovně nebo po dlouhém vysedávání u počítače a psaní textů na studené
        bivaky a pobyt na horách a ve skalách. Po úraze v roce 2016 se mi sice
        možnosti věnování se alpinismu výrazně omezily, ale na stranu druhou se
        mé výzkumné zájmy z knihovny a od dějin sociálního myšlení přesunuly víc
        do přírody k mezidruhové komunikaci. Spíš se ty dva dříve oddělené světy
        začínají prolínat…
      </p>

      <p>
        Stručné shrnutí mého přístupu k lezení z doby, kdy jsem byl tzv. na
        špici (kolem roku 2010) přináší úvod{" "}
        <GatsbyLink to="/alpinism-tilak-pdf">katalogu firmy Tilak</GatsbyLink>,
        se kterou spolupracuji dodnes.
      </p>
    </>
  );
};

export const En = () => {
  return (
    <>
      <p>
      I got into mountaineering in the mid-90s as it combined for me the joy of staying in the outdoors and desire for adventure. Although I have done climbing semi-professionally for many years, the two characteristics have always been essential to me. Mountaineering complements science well: in cold bivouacs, I was really looking forward to the overheated university library and in the library, while after sitting at the computer for a long time and writing texts, I was looking forward to cold bivouacs and spending time in the mountains and rocks. After my accident in 2016, my opportunities to devote myself to mountaineering were significantly reduced, but on the other hand, my research interests shifted from the library and from the history of social thought more towards the outdoors and interspecies communication. Or rather, the two previously separate worlds have begun to merge…
      </p>

      <p>
      A brief summary of my approach to climbing from the time when I was “at the top” (around 2010) is included in the introductory article of the catalog of the {" "}
        <GatsbyLink to="/alpinism-tilak-pdf">Tilak company</GatsbyLink>,
        with which I continue to cooperate.
      </p>
    </>
  );
};
