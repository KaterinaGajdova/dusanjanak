import React from "react";
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
      <div>
        Stejně jako v horolezectví, nejsou ani ve vědě oficiální ocenění cílem a
        asi ani prostředkem k vědeckému růstu. Za tu námahu by to (alespoň mně)
        nestálo. Ale potěší a někdy potvrdí, že jdeme správnou cestou.
      </div>

      <Section>
        <H4>
          Nominace na Cenu České sociologické společnosti za mimořádný
          publikační počin v oboru sociologie (2020)
        </H4>
        Cena je vyhlašována jednou za dva roky, v tomto případě za léta 2018 a
        2019. Místo mojí nominované publikace{" "}
        <u>
          Janák, D. 2018.{" "}
          <i>
            Klasická sociologie ve střední Evropě: Mezi centrem a periferií.
          </i>{" "}
          Praha: Sociologické nakladatelství. ISBN 978-80-7419-278-4.
        </u>{" "}
        zvítězila po zásluze kniha Martina Ďurďoviče Ďurďovič, M. 2019.
        <i> Vyprávění a rozhovor: Teorie sociální intersubjektivity.</i> Pro mne
        je potěšující, že nezávisle na sobě jsme se s kolegou Ďurďovičem setkali
        nad tématem dialogické (inter)subjektivity a uvidíme, jestli se z toho
        tematického protnutí v budoucnu vyvine i konkrétnější spolupráce.
      </Section>

      <Section>
        <H4>
          Nejlepší disertace Fakulty sociálních studií Masarykovy univerzity v
          Brně (2008)
        </H4>
        Disertace věnovaná dílu jednoho z klasiků české sociologie uspěla v
        každoroční soutěži Fakulty sociálních studií Masarykovy univerzity a v
        roce 2009 díky tomu vyšla tiskem. Moje první knížka… <br />
        <br />
        Janák, D. 2009.{" "}
        <i>
          Hodnoty a hodnocení v sociologii Inocence Arnošta Bláhy. Studie z
          dějin klasické české sociologie.
        </i>{" "}
        1. vyd. Brno: Mezinárodní politologický ústav. ISBN: 978-80-210-5038-9.
      </Section>

      <Section>
        <H4>
          Soutěž o nejlepší doktorandskou stať <i>Sociologického časopisu</i> /{" "}
          <i>Czech Sociological review</i> (2005)
        </H4>
        Můj úplně první vědecký článek, který jsem kdy napsal, uspěl spolu s
        dalšími dvěma v soutěži hlavního českého sociologického periodika (první
        cena tehdy nebyla udělena). Víc než ocenění a finanční odměna mne však
        potěšilo, když mi několik měsíců po publikaci přistála v e-mailu
        pochvalná zpráva od věhlasného českého profesora (M. Petruska), se
        kterým jsem se v podstatě neznal. Mám pocit, že jeho e-mail byl jedním z
        faktorů, proč se ze mne nestal profesionální horolezec. A jsem za to
        rád. <br />
        <br />
        Janák, D. 2006. „Sociální introspekce In. A. Bláhy a Wittgensteinův
        argument proti soukromému jazyku. Poznámky k introspektivnímu přístupu v
        sociálních vědách.” <i>Sociologický časopis</i>, Vol. 42 (No.4): 761 –
        782, ISSN:0038-0288. DOI: 10.13060/00380288.2006.42.4.08.
        <br />
        Dostupné{" "}
        <ALink href="https://sreview.soc.cas.cz/pdfs/csr/2006/04/08.pdf">
          zde
        </ALink>
      </Section>
    </>
  );
};
