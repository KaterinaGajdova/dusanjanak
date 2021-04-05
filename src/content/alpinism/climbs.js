import React from "react";
import { Date, Name, IMGGrid } from "../../components/atoms";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";

export const Cz = () => {
  return (
    <>
      <Climb>
        <h4>VÝSTUPY HIGHLIGHTS</h4>
        <p>
          Přelezl jsem tisíce cest na skalách, v ledu a v horách. Několik
          desítek mi utkví v paměti nadosmrti. Z těch několika desítek jsem se
          rozhodl vybrat k veřejné prezentaci tolik, kolik lze spočítat na
          prstech… rukou i nohou.
        </p>
      </Climb>
      <Climb>
        <Date> 2018: </Date>
        <Name>Eiger – severní stěna</Name>
        Legendární cesta z roku 1938 není z hlediska výkonnosti žádný extrém,
        ale vylezená po úraze s parťákem Bačou bude v mém osobním katalogu
        výstupů na emoční stupnici hodně vysoko. (spolulezec: Bača)
        <br />
        <Link
          to="/alpinism-eiger-pdf"
          style={{ color: "white", textDecoration: "none", fontWeight: 600 }}
        >
          článek „Eiger 80letý“
        </Link>
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/eiger-2018_1.jpg"
          alt="eiger"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/eiger-2018_2.jpg"
          alt="eiger"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2015: </Date>
        <Name>Bellavista</Name>
        První cesta ve stupni 8c (10+/11-) vylezená v horách českými lezci.
        Prostoupení největší střechy v Alpách bylo takovou pěknou tečkou za mojí
        výkonnostní horolezeckou kariérou. Nejtěžší délku lezl na prvním konci
        Honza a nejsem si jistý, jestli bych jí býval ve sportovním stylu sám
        vylezl. Na začátku následující sezony jsem se rozbil. Je čas poslat
        dopředu lepší, mladší, perspektivnější… (spolulezec: Honza Zbranek)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/bellavista-2015_1.jpg"
          alt="Bellavista"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/bellavista-2015_2.jpg"
          alt="Bellavista"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/bellavista-2015_3.jpg"
          alt="Bellavista"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>

      <Climb>
        <Date> 2014: </Date>
        <Name>Královský převis</Name>Nejtěžší mixová cesta Tater a jedna z
        nejtěžších cest tohoto typu v horách na světě. (spolulezec: Stračena)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/kralprevis-2014_1.jpg"
          alt="Královský převis"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/kralprevis-2014_2.jpg"
          alt="Královský převis"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/kralprevis-2014_3.jpg"
          alt="Královský převis"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Name>No siesta</Name>Legendární cesta v legendární Alpské stěně a náš
        dlouholetý sen. (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/nosiesta-2014_1.jpg"
          alt="No siesta"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/nosiesta-2014_2.jpg"
          alt="No siesta"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/nosiesta-2014_3.jpg"
          alt="No siesta"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Name>Pohádkové sny</Name>Moje nejtěžší sportovní cesta na skalách.
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/sny-2014_1.jpg"
          alt="Pohádkové sny"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/sny-2014_2.jpg"
          alt="Pohádkové sny"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/sny-2014_3.jpg"
          alt="Pohádkové sny"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>

      <Climb>
        <Date> 2013: </Date>
        <Name>Dionýzos</Name>Solidní prvovýstup v solidní alpské stěně.
        (spolulezci: Šatavis a Miro)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/dionyzos-2013_1.jpg"
          alt="Dionýzos"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/dionyzos-2013_2.jpg"
          alt="Dionýzos"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/dionyzos-2013_3.jpg"
          alt="Dionýzos"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2012: </Date>
        <Name>American direct</Name>Americká diretissima na Věž bláznů,
        legendární prvovýstup a skobovací extrém z 60. let, dnes lezený volně.
        (spolulezec: Miro)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/fou-2012_1.jpg"
          alt="fou"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/fou-2012_2.jpg"
          alt="fou"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/fou-2012_3.jpg"
          alt="fou"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2009 - 2011: </Date>
        <Name>Erectissima</Name>Prvovýstup půl kilometru vysoké stěny, ve které
        je skoro každá lanová délka převislá. (spolulezci: Ricardo, Šatavis,
        Džony, na RP přelez Miro)
      </Climb>
      <IMGGrid noborder>
        <StaticImage
          src="../../images/climbs/erectissima-2009_1.jpg"
          alt="erectissima"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/erectissima-2009_2.jpg"
          alt="erectissima"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/erectissima-2009_3.jpg"
          alt="erectissima"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/erectissima-2011_1.jpg"
          alt="erectissima"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/erectissima-2011_2.jpg"
          alt="erectissima"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/erectissima-2011_3.jpg"
          alt="erectissima"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2011: </Date>
        <Name>Centrální kout na Galerii Ganku</Name>První volný a zároveň zimní
        přelez významné cesty ve významné tatranské stěně. (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/ganek-2011_1.jpg"
          alt="ganek"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/ganek-2011_2.jpg"
          alt="ganek"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/ganek-2011_3.jpg"
          alt="ganek"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2010: </Date>
        <Name>Vol de Nuit</Name>První cesta ve stupni M8 vylezená v Alpách
        českými lezci (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/voldenuit-2010_1.jpg"
          alt="Vol de Nuit"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/voldenuit-2010_2.jpg"
          alt="Vol de Nuit"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/voldenuit-2010_3.jpg"
          alt="Vol de Nuit"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Name>Těžká karta</Name>Pro mne první pískovcová jedenáctka.
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/karta-2010_1.jpg"
          alt="Voie Petit"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2009: </Date>
        <Name>Hazard</Name>Nervy drásající skobovací kutilství ve stupni A5.
        (spolulezec: Ricardo)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/hazard-2009_1.jpg"
          alt="hazard"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/hazard-2009_2.jpg"
          alt="hazard"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/hazard-2009_3.jpg"
          alt="hazard"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2008: </Date>
        <Name>Matrix</Name>Ve své době posunutí obtížnosti v Tatranském zimním
        lezení. (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/matrix-2008_1.jpg"
          alt="Matrix"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/matrix-2008_2.jpg"
          alt="Matrix"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/matrix-2008_3.jpg"
          alt="Matrix"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2007: </Date>
        <Name>Voie Petit</Name>Byla a stále asi je nejtěžší skalní cestou v
        masivu Mont Blancu (spolulezec: Šatavis, první pokus Džony)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/voiepetit-2007_1.jpg"
          alt="Voie Petit"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/voiepetit-2007_2.jpg"
          alt="Voie Petit"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Name>Jet Stream</Name>Posunutí laťky volného lezení v Tatrách (jištěn
        Monikou)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/jetstream-2007_1.jpg"
          alt="Jet Stream"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/jetstream-2007_2.jpg"
          alt="Jet Stream"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/jetstream-2007_3.jpg"
          alt="Jet Stream"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2006: </Date>
        <Name>Freerider</Name>Tehdy nejtěžší volná cesta vylezená v El Capitanu
        v Yosemitech českými lezci, v roce 2017 vylezená Alexem Honoldem v
        dechberoucím freesolo stylu… (spolulezec: Šrůťas)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/freerider-2006_1.jpg"
          alt="Freerider"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/freerider-2006_2.jpg"
          alt="Freerider"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/freerider-2006_3.jpg"
          alt="Freerider"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2005-2006: </Date>
        <Name>Fram – End of Mystery</Name>První česká desetmínuska v Alpách
        (spolulezci: Šatavis, Džony, na RP přelez Šatavis)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/fram-2005_1.jpg"
          alt="Fram"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/fram-2005_2.jpg"
          alt="Fram"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/fram-2005_3.jpg"
          alt="Fram"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2004: </Date>
        <Name>Robinson Crusoe</Name>Prvovýstup v super stylu, stále jedna z
        psychicky nejnáročnějších cest na Tre Cime (spolulezec: Doudlebák)
        <Name>Jean Couzy in memoriam</Name>Úžasně vzdušné lezení na hranici mých
        tehdejších možností a první cesta v desátém stupni vylezená českými
        lezci v horách (spolulezec: Doudlebák, první pokusy Kvak)
      </Climb>
      <IMGGrid></IMGGrid>
      <Climb>
        <Date> 2002: </Date>
        <Name>Kyrgyzstán – Pik 4810</Name>Divoké lezení v 1200 metrů vysoké
        skalní stěně. (spolulezec: Doudlebák)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/kyrg-2002_1.jpg"
          alt="Kyrgyzstán"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/kyrg-2002_2.jpg"
          alt="Kyrgyzstán"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/kyrg-2002_3.jpg"
          alt="Kyrgyzstán"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
    </>
  );
};

export const En = () => {
  return (
    <>
      <Climb>
        <h4>VÝSTUPY HIGHLIGHTS</h4>
        <p>
          Přelezl jsem tisíce cest na skalách, v ledu a v horách. Několik
          desítek mi utkví v paměti nadosmrti. Z těch několika desítek jsem se
          rozhodl vybrat k veřejné prezentaci tolik, kolik lze spočítat na
          prstech… rukou i nohou.
        </p>
      </Climb>
      <Climb>
        <Date> 2018: </Date>
        <Name>Eiger – severní stěna</Name>
        Legendární cesta z roku 1938 není z hlediska výkonnosti žádný extrém,
        ale vylezená po úraze s parťákem Bačou bude v mém osobním katalogu
        výstupů na emoční stupnici hodně vysoko. (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/eiger-2018_1.jpg"
          alt="eiger"
          style={{ maxHeight: 400 }}
          height={400}
        />{" "}
        <StaticImage
          src="../../images/climbs/eiger-2018_2.jpg"
          alt="eiger"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2015: </Date>
        <Name>Bellavista</Name>
        První cesta ve stupni 8c (10+/11-) vylezená v horách českými lezci.
        Prostoupení největší střechy v Alpách bylo takovou pěknou tečkou za mojí
        výkonnostní horolezeckou kariérou. Nejtěžší délku lezl na prvním konci
        Honza a nejsem si jistý, jestli bych jí býval ve sportovním stylu sám
        vylezl. Na začátku následující sezony jsem se rozbil. Je čas poslat
        dopředu lepší, mladší, perspektivnější… (spolulezec: Honza Zbranek)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/bellavista-2015_1.jpg"
          alt="Bellavista"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/bellavista-2015_2.jpg"
          alt="Bellavista"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/bellavista-2015_3.jpg"
          alt="Bellavista"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>

      <Climb>
        <Date> 2014: </Date>
        <Name>Královský převis</Name>Nejtěžší mixová cesta Tater a jedna z
        nejtěžších cest tohoto typu v horách na světě. (spolulezec: Stračena)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/kralprevis-2014_1.jpg"
          alt="Královský převis"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/kralprevis-2014_2.jpg"
          alt="Královský převis"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/kralprevis-2014_3.jpg"
          alt="Královský převis"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Name>No siesta</Name>Legendární cesta v legendární Alpské stěně a náš
        dlouholetý sen. (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/nosiesta-2014_1.jpg"
          alt="No siesta"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/nosiesta-2014_2.jpg"
          alt="No siesta"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/nosiesta-2014_3.jpg"
          alt="No siesta"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Name>Pohádkové sny</Name>Moje nejtěžší sportovní cesta na skalách.
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/sny-2014_1.jpg"
          alt="Pohádkové sny"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/sny-2014_2.jpg"
          alt="Pohádkové sny"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/sny-2014_3.jpg"
          alt="Pohádkové sny"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>

      <Climb>
        <Date> 2013: </Date>
        <Name>Dionýzos</Name>Solidní prvovýstup v solidní alpské stěně.
        (spolulezci: Šatavis a Miro)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/dionyzos-2013_1.jpg"
          alt="Dionýzos"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/dionyzos-2013_2.jpg"
          alt="Dionýzos"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/dionyzos-2013_3.jpg"
          alt="Dionýzos"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2012: </Date>
        <Name>American direct</Name>Americká diretissima na Věž bláznů,
        legendární prvovýstup a skobovací extrém z 60. let, dnes lezený volně.
        (spolulezec: Miro)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/fou-2012_1.jpg"
          alt="fou"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/fou-2012_2.jpg"
          alt="fou"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/fou-2012_3.jpg"
          alt="fou"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2009 - 2011: </Date>
        <Name>Erectissima</Name>Prvovýstup půl kilometru vysoké stěny, ve které
        je skoro každá lanová délka převislá. (spolulezci: Ricardo, Šatavis,
        Džony, na RP přelez Miro)
      </Climb>
      <IMGGrid noborder>
        <StaticImage
          src="../../images/climbs/erectissima-2009_1.jpg"
          alt="erectissima"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/erectissima-2009_2.jpg"
          alt="erectissima"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/erectissima-2009_3.jpg"
          alt="erectissima"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/erectissima-2011_1.jpg"
          alt="erectissima"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/erectissima-2011_2.jpg"
          alt="erectissima"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/erectissima-2011_3.jpg"
          alt="erectissima"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2011: </Date>
        <Name>Centrální kout na Galerii Ganku</Name>První volný a zároveň zimní
        přelez významné cesty ve významné tatranské stěně. (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/ganek-2011_1.jpg"
          alt="ganek"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/ganek-2011_2.jpg"
          alt="ganek"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/ganek-2011_3.jpg"
          alt="ganek"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2010: </Date>
        <Name>Vol de Nuit</Name>První cesta ve stupni M8 vylezená v Alpách
        českými lezci (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/voldenuit-2010_1.jpg"
          alt="Vol de Nuit"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/voldenuit-2010_2.jpg"
          alt="Vol de Nuit"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/voldenuit-2010_3.jpg"
          alt="Vol de Nuit"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Name>Těžká karta</Name>Pro mne první pískovcová jedenáctka.
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/karta-2010_1.jpg"
          alt="Voie Petit"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2009: </Date>
        <Name>Hazard</Name>Nervy drásající skobovací kutilství ve stupni A5.
        (spolulezec: Ricardo)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/hazard-2009_1.jpg"
          alt="hazard"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/hazard-2009_2.jpg"
          alt="hazard"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/hazard-2009_3.jpg"
          alt="hazard"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2008: </Date>
        <Name>Matrix</Name>Ve své době posunutí obtížnosti v Tatranském zimním
        lezení. (spolulezec: Bača)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/matrix-2008_1.jpg"
          alt="Matrix"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/matrix-2008_2.jpg"
          alt="Matrix"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/matrix-2008_3.jpg"
          alt="Matrix"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2007: </Date>
        <Name>Voie Petit</Name>Byla a stále asi je nejtěžší skalní cestou v
        masivu Mont Blancu (spolulezec: Šatavis, první pokus Džony)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/voiepetit-2007_1.jpg"
          alt="Voie Petit"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/voiepetit-2007_2.jpg"
          alt="Voie Petit"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Name>Jet Stream</Name>Posunutí laťky volného lezení v Tatrách (jištěn
        Monikou)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/jetstream-2007_1.jpg"
          alt="Jet Stream"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/jetstream-2007_2.jpg"
          alt="Jet Stream"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/jetstream-2007_3.jpg"
          alt="Jet Stream"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2006: </Date>
        <Name>Freerider</Name>Tehdy nejtěžší volná cesta vylezená v El Capitanu
        v Yosemitech českými lezci, v roce 2017 vylezená Alexem Honoldem v
        dechberoucím freesolo stylu… (spolulezec: Šrůťas)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/freerider-2006_1.jpg"
          alt="Freerider"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/freerider-2006_2.jpg"
          alt="Freerider"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/freerider-2006_3.jpg"
          alt="Freerider"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2005-2006: </Date>
        <Name>Fram – End of Mystery</Name>První česká desetmínuska v Alpách
        (spolulezci: Šatavis, Džony, na RP přelez Šatavis)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/fram-2005_1.jpg"
          alt="Fram"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/fram-2005_2.jpg"
          alt="Fram"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/fram-2005_3.jpg"
          alt="Fram"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
      <Climb>
        <Date> 2004: </Date>
        <Name>Robinson Crusoe</Name>Prvovýstup v super stylu, stále jedna z
        psychicky nejnáročnějších cest na Tre Cime (spolulezec: Doudlebák)
        <Name>Jean Couzy in memoriam</Name>Úžasně vzdušné lezení na hranici mých
        tehdejších možností a první cesta v desátém stupni vylezená českými
        lezci v horách (spolulezec: Doudlebák, první pokusy Kvak)
      </Climb>
      <IMGGrid></IMGGrid>
      <Climb>
        <Date> 2002: </Date>
        <Name>Kyrgyzstán – Pik 4810</Name>Divoké lezení v 1200 metrů vysoké
        skalní stěně. (spolulezec: Doudlebák)
      </Climb>
      <IMGGrid>
        <StaticImage
          src="../../images/climbs/kyrg-2002_1.jpg"
          alt="Kyrgyzstán"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/kyrg-2002_2.jpg"
          alt="Kyrgyzstán"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
        <StaticImage
          src="../../images/climbs/kyrg-2002_3.jpg"
          alt="Kyrgyzstán"
          placeholder="blurred"
          style={{ maxHeight: 400 }}
          height={400}
        />
      </IMGGrid>
    </>
  );
};

const Climb = styled.div`
  max-width: 960px;
  margin: 3rem auto 0;
  padding: 0 5% 20px;
  line-height: 1.5;
`;
