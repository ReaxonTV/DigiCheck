var kategorieScores = JSON.parse(localStorage.getItem("aggregatedResults")) || {
  datenverarbeitung: 0,
  kommunikation: 0,
  erstellung: 0,
  sicherheit: 0,
  problemloesung: 0,
};

// Laden der Daten aus dem LocalStorage
var storedData = JSON.parse(localStorage.getItem("kategorieScores"));
if (storedData) {
  kategorieScores = storedData;
}

// Anpassen der Daten für das Diagramm
var data = {
  labels: [
    "Datenverarbeitung",
    "Kommunikation",
    "Erstellung von Inhalten",
    "Sicherheit",
    "Problemlöseverhalten",
  ],
  datasets: [
    {
      label: "Dein Ergebnis",
      data: [
        kategorieScores.datenverarbeitung,
        kategorieScores.kommunikation,
        kategorieScores.erstellung,
        kategorieScores.sicherheit,
        kategorieScores.problemloesung,
      ],
      backgroundColor: "rgba(255, 9, 132, 0.3)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Durchschnitt aller Teilnehmer",
      data: [2, 2.2, 2.5, 1, 2],
      backgroundColor: "rgba(143, 143, 143, 0.15)",
      borderColor: "rgba(143, 143, 143, 0.4)",
      borderWidth: 1,
    },
    {
      label: "",
      data: [0, 0, 0, 0, 0],
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: "rgba(0, 0, 0, 0)",
      borderWidth: 1,
    },
  ],
};

var options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          suggestedMax: 5,
          stepSize: 1,
        },
      },
    ],
  },
};

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: options,
});

var datenverarbeitungScore = kategorieScores.datenverarbeitung;
var kommunikationScore = kategorieScores.kommunikation;
var erstellungScore = kategorieScores.erstellung;
var sicherheitScore = kategorieScores.sicherheit;
var problemloesungScore = kategorieScores.problemloesung;

document.getElementById("datenverarbeitung").innerHTML =
  datenverarbeitungScore.toFixed(1) + " von 3 Punkten";
document.getElementById("kommunikation").innerHTML =
  kommunikationScore.toFixed(1) + " von 3 Punkten";
document.getElementById("erstellung").innerHTML =
  erstellungScore.toFixed(1) + " von 3 Punkten";
document.getElementById("sicherheit").innerHTML =
  sicherheitScore.toFixed(1) + " von 3 Punkten";
document.getElementById("problemloesung").innerHTML =
  problemloesungScore.toFixed(1) + " von 3 Punkten";

const information = [
  {
    text: "Datenhaltung und speichermedien",
    href: "https://www.e-teaching.org/technik/datenhaltung/speichermedien/index_html/html2print",
  },
  {
    text: "Digitale Datenspeicherung \u2013 ein Wegweiser | Canto",
    href: "https://www.canto.com/de/blog/digitale-datenspeicherung/",
  },
  {
    text: "Wie speichern wir unsere Daten f\u00fcr die Ewigkeit? - Spektrum der Wissenschaft",
    href: "https://www.spektrum.de/news/wie-speichern-wir-unsere-daten-fuer-die-ewigkeit/1219421",
  },
  {
    text: "Ablage im Griff mit dem 7-Ordner-System | sekretaria.de",
    href: "https://www.sekretaria.de/bueroorganisation/organisation/ablage/7-ordner-system/",
  },
  {
    text: "In 6 Schritten zur perfekten, digitalen Ordnerstruktur in Ihrem Unternehmen (fakturdigital.de)",
    href: "https://fakturdigital.de/in-6-schritten-zur-perfekten-digitalen-ordnerstruktur-in-ihrem-unternehmen/",
  },
  {
    text: "Ordnung im Computer? - 3 Tipps zur Top PC-Ordnung | B\u00fcro-Kaizen (buero-kaizen.de)",
    href: "https://www.buero-kaizen.de/ordnung-im-computer/",
  },
  {
    text: "Perfekte Ordnerstruktur in 5 Schritten: So geht digitale Ablage heute (buero-kaizen.de)",
    href: "https://www.buero-kaizen.de/ordnerstruktur/",
  },
  {
    text: "System statt Suche Ordnerstruktur PC Ablage B\u00fcroorganisation (denkvorgang.com)",
    href: "https://www.denkvorgang.com/bueroorganisation-ablageorganisation/ablage/ordnerstruktur/",
  },
  {
    text: "10 Anregungen, wie Du eine sinnvolle Ordnerstruktur findest | by Mirko Schubert | Digitaler Minimalismus (digitaler-minimalismus.de)",
    href: "https://digitaler-minimalismus.de/10-anregungen-wie-du-eine-sinnvolle-ordnerstruktur-findest-de12032ce371?gif=true",
  },
  {
    text: "Wie funktioniert eine Suchmaschine? - klicksafe.de",
    href: "https://www.klicksafe.de/suchmaschinen/wie-funktioniert-eine-suchmaschine/",
  },
  {
    text: "Tipps & Tricks beim Suchen - klicksafe.de",
    href: "https://www.klicksafe.de/suchmaschinen/tipps-tricks-beim-suchen/",
  },
  {
    text: "Die verschiedenen Suchmaschinentypen - klicksafe.de",
    href: "https://www.klicksafe.de/suchmaschinen/die-verschiedenen-suchmaschinentypen/",
  },
  {
    text: "Wie kommt ein Ranking zustande? - klicksafe.de",
    href: "https://www.klicksafe.de/suchmaschinen/wie-kommt-ein-ranking-zustande/",
  },
  {
    text: "10 Tipps f\u00fcr die Internetrecherche \u2013 So wird deine n\u00e4chste Arbeit grandios! (sofatutor.com)",
    href: "https://magazin.sofatutor.com/schueler/kann-man-das-googlen-10-tipps-fuer-eine-gelungene-internetrecherche/",
  },
  {
    text: "Wie man bei Google auch ohne AdWords oben steht - Sputnik Agentur (sputnik-agentur.de)",
    href: "https://www.sputnik-agentur.de/blog/wie-man-bei-google-auch-ohne-adwords-oben-steht/",
  },
  {
    text: "Youtube Channel \u27a1\ufe0f Verwaltung & SEO bei Youtube \u27a1\ufe0f Tipps (cloudweb.ch)",
    href: "https://www.cloudweb.ch/youtube-die-zweitgroesste-suchmaschine/",
  },
  {
    text: "Suchmaschinen Liste | Google-Alternativen im \u00dcberblick - IONOS",
    href: "https://www.ionos.de/digitalguide/online-marketing/suchmaschinenmarketing/google-alternativen-im-ueberblick/",
  },
  {
    text: "(imedpaed_glaubwuerdigkeit.htm) LeLe Lehr- und Lernplattform f\u00fcr Neue Medien im Unterricht (kubiss.de)",
    href: "http://www.kubiss.de/bildung/projekte/schb_netz/imedpaed_glaubwuerdigkeit.htm",
  },
  {
    text: "https://glaubwuerdigkeitscheck.de/",
    href: "https://glaubwuerdigkeitscheck.de/",
  },
  {
    text: "https://citizenevidence.amnestyusa.org/ (Metadaten Youtube)\nhttps://tineye.com/\n",
    href: "https://citizenevidence.amnestyusa.org/%20(Metadaten%20Youtube)",
  },
  {
    text: "https://www.ag.ch/de/mein_konto/uebersicht.jsp",
    href: "https://www.ag.ch/de/mein_konto/uebersicht.jsp",
  },
  {
    text: "https://fit4digital.webflow.io/smart-service-portal",
    href: "https://fit4digital.webflow.io/smart-service-portal",
  },
  {
    text: "https://www.egovernment.ch/de/",
    href: "https://www.egovernment.ch/de/",
  },
  {
    text: "https://www.superoffice.ch/quellen/artikel/der-wert-des-kunden-self-service-im-digitalen-zeitalter/",
    href: "https://www.superoffice.ch/quellen/artikel/der-wert-des-kunden-self-service-im-digitalen-zeitalter/",
  },
  {
    text: "https://freshdesk.com/de/self-service-portal/",
    href: "https://freshdesk.com/de/self-service-portal/",
  },
];

const komunikation = [
  {
    text: "Intranet Kanton Aargau - Social Media (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/kommunikation/online-kommunikation/social-media",
  },
  {
    text: "13 Tipps f\u00fcr ein erfolgreicheres LinkedIn-Profil (basicthinking.de)",
    href: "https://www.basicthinking.de/blog/2018/03/28/linkedin-optimierung/",
  },
  {
    text: "Auf Social-Media-Kommentare gekonnt reagieren (regenwald-schuetzen.org)",
    href: "https://www.regenwald-schuetzen.org/unsere-projekte/bildungs-projekte/systeme-verstehen/auf-social-media-kommentare-gekonnt-reagieren",
  },
  {
    text: "Netiquette: Regeln f\u00fcr Ihre Kommentare | Service | BR.de",
    href: "https://www.br.de/service/kommentare-netiquette-richtlinien-110.html",
  },
  {
    text: "Diskussionen im Internet \u2013 Die Rechtslage \u2013 Freiheit und Internet (internet-freiheit.de)",
    href: "https://www.internet-freiheit.de/diskussionen-im-internet-die-rechtslage/",
  },
  {
    text: "In f\u00fcnf Schritten zum professionellen Social-Media-Profil - ingenieur.de",
    href: "https://www.ingenieur.de/karriere/arbeitsleben/in-fuenf-schritten-zum-professionellen-social-media-profil/",
  },
  {
    text: "Die zw\u00f6lf wichtigsten Arten von Social-Media-Inhalten | Mailchimp",
    href: "https://mailchimp.com/de/resources/top-12-types-of-social-media-content-to-create/",
  },
  {
    text: "Wie pflegt man einen gelungenen Social Media-Auftritt? (webzunder.com)",
    href: "https://www.webzunder.com/de/blog/empfehlungen-fuer-einen-gelungenen-social-media-auftritt/",
  },
  {
    text: "Social Media einfach erkl\u00e4rt (explainity\u00ae Erkl\u00e4rvideo) - YouTube",
    href: "https://www.youtube.com/watch?v=3LZWP8m_vh8",
  },
  {
    text: "Manipulation: Wie uns soziale Medien beeinflussen | Quarks - YouTube",
    href: "https://www.youtube.com/watch?v=dv_5tHdZcF8",
  },
  {
    text: "Wie verdient Facebook Geld? Einfach erkl\u00e4rt - CHIP",
    href: "https://praxistipps.chip.de/wie-verdient-facebook-geld-einfach-erklaert_40913",
  },
  {
    text: "https://podcasts.apple.com/de/podcast/facebook-werbung-nur-mit-likes-geld-verdienen-7/id1434227771?i=1000421521615",
    href: "https://podcasts.apple.com/de/podcast/facebook-werbung-nur-mit-likes-geld-verdienen-7/id1434227771?i=1000421521615",
  },
  {
    text: "Intranet Kanton Aargau - Digitale Zusammenarbeit in der kantonalen Verwaltung (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/geschaefte-projekte/arbeitsinstrumente/digitale-zusammenarbeit",
  },
  {
    text: "https://www.heise.de/tipps-tricks/Die-besten-Videokonferenz-Tools-im-Ueberblick-4688243.html#Microsoft%20Teams\n\n\n\n\n\n",
    href: "https://www.heise.de/tipps-tricks/Die-besten-Videokonferenz-Tools-im-Ueberblick-4688243.html",
  },
  {
    text: "https://support.microsoft.com/de-de/office/skype-for-business-entdecken-aba02d7e-c801-4a82-bccd-e7207240f612?omkt=de-de&ui=de-de&rs=de-de&ad=de",
    href: "https://support.microsoft.com/de-de/office/skype-for-business-entdecken-aba02d7e-c801-4a82-bccd-e7207240f612?omkt=de-de&ui=de-de&rs=de-de&ad=de",
  },
  { text: "https://helpdesk.herdt.com/", href: "https://helpdesk.herdt.com/" },
  {
    text: "https://www.youtube.com/watch?v=KxKtDqNxGy0",
    href: "https://www.youtube.com/watch?v=KxKtDqNxGy0",
  },
  {
    text: "https://outlook-blog.de/category/tipps-tricks",
    href: "https://outlook-blog.de/category/tipps-tricks",
  },
  {
    text: "Wilde Workshop Spiele \u22c6 Wilde Workshop Spiele (workshop-spiele.de)",
    href: "https://www.workshop-spiele.de/",
  },
  {
    text: "Knigge f\u00fcr Videokonferenzen: 14 Tipps f\u00fcr den Erfolg (computerweekly.com)",
    href: "https://www.computerweekly.com/de/tipp/Knigge-fuer-Videokonferenzen-14-Tipps-fuer-den-Erfolg",
  },
  {
    text: "Videokonferenzen \u2013 10 Tipps f\u00fcr erfolgreiche Gespr\u00e4che (meetinn.de)",
    href: "https://www.meetinn.de/knowledgebase/videokonferenz/",
  },
  {
    text: "10 Tipps f\u00fcr Videokonferenzen - Teams, Zoom, Skype, etc. - YouTube",
    href: "https://www.youtube.com/watch?v=i-8hoB7nQPA",
  },
  {
    text: "Zusammenarbeit am Arbeitsplatz: 11 Tipps f\u00fcr noch mehr Leistung \u2022 Asana",
    href: "https://asana.com/de/resources/collaboration-in-the-workplace",
  },
  {
    text: "Moderne Floskeln in Gesch\u00e4ftsbriefen, E-Mails & Co. - workingoffice.de",
    href: "https://www.workingoffice.de/korrespondenz/korrespondenz/geschaeftsbriefe/marketing/modern-formulieren/",
  },
  {
    text: "Emoji Bedeutung: praktische Liste mit den beliebtesten Smileys (sparhandy.de)",
    href: "https://www.sparhandy.de/smartphones/info/emoji-bedeutung/",
  },
  {
    text: "Anrufbeantworter und Voicemailbox: So hinterlassen Sie als Anrufer einen guten Eindruck | akademie.de - Praxiswissen f\u00fcr Selbstst\u00e4ndige",
    href: "https://www.akademie.de/de/wissen/anrufbeantworter-ab-guten-eindruck-hinterlassen",
  },
  {
    text: "E-Mails schreiben: Tipps und Regeln. - Hallo Karriere",
    href: "https://www.hallokarriere.com/e-mail-schreiben/",
  },
  {
    text: "Knigge f\u00fcr Videokonferenzen: 14 Tipps f\u00fcr den Erfolg (computerweekly.com)",
    href: "https://www.computerweekly.com/de/tipp/Knigge-fuer-Videokonferenzen-14-Tipps-fuer-den-Erfolg",
  },
  {
    text: "Videokonferenzen \u2013 10 Tipps f\u00fcr erfolgreiche Gespr\u00e4che (meetinn.de)",
    href: "https://www.meetinn.de/knowledgebase/videokonferenz/",
  },
  {
    text: "10 Tipps f\u00fcr Videokonferenzen - Teams, Zoom, Skype, etc. - YouTube",
    href: "https://www.youtube.com/watch?v=i-8hoB7nQPA",
  },
  {
    text: "\u25b7 25 bew\u00e4hrte Tipps f\u00fcr effiziente Meetings und bessere Besprechungen - bessere Sitzungskultur und Teammeetings verbessern \u2022 Training & Seminar (organisationsberatung.net)",
    href: "https://organisationsberatung.net/effiziente-meetings-besprechungen-sitzungen/",
  },
  {
    text: "Meeting: 13 Tipps + 3 geniale Ideen f\u00fcr bessere Meetings (karrierebibel.de)",
    href: "https://karrierebibel.de/meeting/",
  },
  {
    text: "Intranet Kanton Aargau - Digitale Zusammenarbeit in der kantonalen Verwaltung (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/geschaefte-projekte/arbeitsinstrumente/digitale-zusammenarbeit",
  },
  {
    text: "Leicht gemacht \u2013 Medienauswahl und -bearbeitung - Kanton Aargau (ag.ch)",
    href: "https://www.ag.ch/de/bks/kultur/archiv_bibliothek/fachstelle_oeffentliche_bibliotheken/angebote_fuer_bibliotheken/bibliothekspraxis/details_6/bibliothekspraxis_100354.jsp",
  },
  {
    text: "WELCHES KOMMUNIKATIONSMITTEL SOLLTEN SIE BENUTZEN UND WANN? \u2502Mitel",
    href: "https://www.mitel.com/de-ch/blog/which-communication-method-should-you-use-and-when",
  },
  {
    text: "Intranet Kanton Aargau - Digitale Zusammenarbeit in der kantonalen Verwaltung (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/geschaefte-projekte/arbeitsinstrumente/digitale-zusammenarbeit",
  },
];

const produktion = [
  {
    text: "5. Probleml\u00f6sen und Weiterlernen - \u00dcberblick (fit4internet.at)",
    href: "https://module.fit4internet.at/kompetenzbereich5/infomodul/",
  },
  {
    text: "Intranet Kanton Aargau - Informatik (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/informatik",
  },
  {
    text: "Intranet Kanton Aargau - Anleitungen und Schulungen (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/informatik/anleitungen-und-schulungen",
  },
  {
    text: "Digitalisierung - Einf\u00fchrung in die f\u00fcnf Schl\u00fcsseltechnologien - YouTube",
    href: "https://www.youtube.com/watch?v=rNWlbn0bBIE",
  },
  {
    text: "Inspirieren - SmartAargau - Confluence KTAG",
    href: "https://confluence.ag.ch/display/KPSA/Inspirieren",
  },
  {
    text: "Serienbrief Word",
    href: "https://helpdesk.herdt.com/lesson/001-110-020-010",
  },
  {
    text: "Pivottabelle Excel",
    href: "https://helpdesk.herdt.com/lesson/002-080-020-010",
  },
  {
    text: "Automatisieren (Makro in Excel)",
    href: "https://helpdesk.herdt.com/lesson/002-090-010-010",
  },
  {
    text: "Formen und Funktionen in Excel ",
    href: "https://helpdesk.herdt.com/wissen/002-020",
  },
  {
    text: "mit Formeln arbeiten in Excel ",
    href: "https://support.microsoft.com/de-de/office/%C3%BCbersicht-%C3%BCber-formeln-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173",
  },
  {
    text: "Was ist der Unterschied zwischen Automatisierung & Digitalisierung? - YouTube",
    href: "https://www.youtube.com/watch?v=_IXW801NMBQ",
  },
  {
    text: "Unterschied: Digitalisierung und Automatisierung (wemakefuture.com)",
    href: "https://www.wemakefuture.com/automatisierung/digitalisierung-und-automatisierung",
  },
  {
    text: "K\u00fcnstliche Intelligenz einfach erkl\u00e4rt (explainity\u00ae Erkl\u00e4rvideo) - YouTube",
    href: "https://www.youtube.com/watch?v=v1nZnuokryw",
  },
  {
    text: "Internet der Dinge einfach erkl\u00e4rt (explainity Erkl\u00e4rvideo\u00ae) - YouTube",
    href: "https://www.youtube.com/watch?v=yLZbzbO_7yQ",
  },
  {
    text: "Exploring digital spheres \u2013 Ein Podcast des HIIG",
    href: "https://www.hiig.de/podcast-exploring-digital-spheres/",
  },
  {
    text: "Digitalisierung \u2013 die wichtigsten Trends in 2022 (rosenberger-data.de)",
    href: "https://www.rosenberger-data.de/digitalisierung-die-wichtigsten-trends-in-2022/",
  },
  {
    text: "Die 5 Top-Digitalisierungstrends und -projekte 2022 - it-daily.net",
    href: "https://www.it-daily.net/it-management/digitalisierung/31606-die-5-top-digitalisierungstrends-und-projekte-2022",
  },
  {
    text: "Cathy Mulzer: Wie Smartphones wirklich funktionieren | TED Talk",
    href: "https://www.ted.com/talks/cathy_mulzer_the_incredible_chemistry_powering_your_smartphone?language=de",
  },
  {
    text: "Briana Brownell: Wie lernt K\u00fcnstliche Intelligenz? - Briana Brownell | TED Talk",
    href: "https://www.ted.com/talks/briana_brownell_how_does_artificial_intelligence_learn?language=de",
  },
  {
    text: "Keller Rinaudo: Wie wir Drohnen nutzen, um Blut zu liefern und Leben zu retten | TED Talk",
    href: "https://www.ted.com/talks/keller_rinaudo_how_we_re_using_drones_to_deliver_blood_and_save_lives?language=de",
  },
  {
    text: "Anab Jain: Warum wir uns verschiedene Zukunftsszenarien vorstellen m\u00fcssen | TED Talk",
    href: "https://www.ted.com/talks/anab_jain_why_we_need_to_imagine_different_futures?language=de",
  },
  {
    text: "Top 8 Technologien f\u00fcr die digitale Transformation | PTC",
    href: "https://www.ptc.com/de/blogs/corporate/digital-transformation-technologies",
  },
  {
    text: "TechTalk - Technologie- und L\u00f6sungsentwicklung - Confluence KTAG",
    href: "https://confluence.ag.ch/display/TEC/TechTalk",
  },
  {
    text: "Technologie-Radar - Technologie- und L\u00f6sungsentwicklung - Confluence KTAG",
    href: "https://confluence.ag.ch/pages/viewpage.action?spaceKey=TEC&title=Technologie-Radar",
  },
  {
    text: "https://www.youtube.com/watch?v=J-ih8pLZEW4",
    href: "https://www.youtube.com/watch?v=J-ih8pLZEW4",
  },
  {
    text: "HelpDesk (herdt.com)",
    href: "https://helpdesk.herdt.com/lesson/900-050-000-000",
  },
  {
    text: "Open Content einfach erkl\u00e4rt (explainity\u00ae Erkl\u00e4rvideo) - YouTube",
    href: "https://www.youtube.com/watch?v=XT7gLUrKUJQ",
  },
  { text: "https://helpdesk.herdt.com/", href: "https://helpdesk.herdt.com/" },
  {
    text: "Videoproduktion: Gratis-Anleitung f\u00fcr professionelle Videos (filmpuls.info)",
    href: "https://filmpuls.info/videoproduktion/",
  },
  {
    text: "Bildbearbeitung | Die wichtigsten 5 Grundregeln (pixolum.com)",
    href: "https://www.pixolum.com/blog/fotografie/bildbearbeitung",
  },
  {
    text: "Die 10 besten Anbieter von lizenzfreien Bildern und Stockfotos | Jimdo",
    href: "https://www.jimdo.com/de/magazin/8-besten-anbieter-lizenzfreier-bilder-stockfotos/?jtm_source=adwords&jtm_medium=cpc&jtm_campaign=CH+-+S+-+Performance+Max+-+Jan+2022&jtm_campaign_id=15852711018&jtm_ad_group&jtm_ad_id&jtm_term&jtm_matchtype&jtm_device=c&gclid=EAIaIQobChMI8ubw1Kml9gIVUIxoCR0KYACbEAAYBCAAEgIpSfD_BwE",
  },
  {
    text: "12 kostenlose Quellen f\u00fcr GEMA-freie Musik - 2022 (kreativfilm.tv)",
    href: "https://kreativfilm.tv/quellen-gemafreie-musik-kostenlos/",
  },
  {
    text: "Die 7 goldenen Tipps zur Flyer-Gestaltung | print24 Blog",
    href: "https://print24.com/de/blog/2015/04/tutorial-die-7-goldenen-tipps-zur-flyer-gestaltung/",
  },
  {
    text: "Bilder in PowerPoint bearbeiten - PowerPoint Schulungen und Seminare (powerpoint-kurs.com)",
    href: "https://powerpoint-kurs.com/bilder-in-powerpoint-bearbeiten/",
  },
  {
    text: "Sender Empfa\u0308nger Modell der Kommunikation einfach erkla\u0308rt mit Beispiel - YouTube",
    href: "https://www.youtube.com/watch?v=dgZSU8WKK4s",
  },
  {
    text: "Dateiformate f\u00fcr Bilder und ihre Eigenschaften \u2014 MIND",
    href: "https://www.mind.ch/dateiformate-fuer-bilder-und-ihre-eigenschaften/",
  },
  {
    text: "Grundlegendes - Eidgen\u00f6ssisches Institut f\u00fcr Geistiges Eigentum",
    href: "https://www.ige.ch/de/etwas-schuetzen/urheberrecht/grundlegendes",
  },
  {
    text: "Bildrechte in der Schweiz | ifolor",
    href: "https://www.ifolor.ch/inspirationen/bildrechte-der-schweiz",
  },
  {
    text: "Ver\u00f6ffentlichung von Fotos (admin.ch)",
    href: "https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/Internet_und_Computer/veroeffentlichung-von-fotos.html",
  },
  {
    text: "Website gestalten \u2013 11 Tipps f\u00fcr eine erfolgreiche Website (sevdesk.ch)",
    href: "https://sevdesk.ch/blog/website-gestalten-tipps/",
  },
  {
    text: "Intranet Kanton Aargau - Corporate Design \u2013 Corporate Identity (CD/CI) (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/kommunikation/corporate-design-corporate-identity",
  },
];

const sicherheit = [
  {
    text: "4. Sicherheit - \u00dcberblick (fit4internet.at)",
    href: "https://module.fit4internet.at/kompetenzbereich4/infomodul/",
  },
  {
    text: "Was ist Hacking & Malware? | Schweizerische Kriminalpr\u00e4vention (skppsc.ch)",
    href: "https://www.skppsc.ch/de/themen/internet/hacking-malware/",
  },
  {
    text: "Was ist strafbar im Netz?: Jugend und Medien",
    href: "https://www.jugendundmedien.ch/experten-und-fachwissen/politik-recht/was-ist-strafbar-im-netz",
  },
  {
    text: "Gesetze im Bereich Internet in der Schweiz - Zahlen und Fakten - suchtschweiz.ch",
    href: "https://zahlen-fakten.suchtschweiz.ch/de/digitale-welt/rechtliche-grundlagen.html",
  },
  {
    text: "https://irights.info/artikel/wie-erkenne-ich-rechtswidrige-angebote-im-internet/22725",
    href: "https://irights.info/artikel/wie-erkenne-ich-rechtswidrige-angebote-im-internet/22725",
  },
  {
    text: "\u00c4u\u00dferung im Internet - Was darf man schreiben und was nicht? (ggr-law.com)",
    href: "https://ggr-law.com/persoenlichkeitsrecht/faq/aeusserung-im-internet-wann-ist-eine-aeusserung-rechtswidrig/",
  },
  {
    text: "Urheberrecht im Internet: Das m\u00fcssen Sie wissen | AXA",
    href: "https://www.axa.ch/de/privatkunden/blog/zuhause/recht-und-justiz/urheberrecht-internet.html",
  },
  {
    text: "Allgemeine Gesch\u00e4ftsbedingungen (admin.ch)",
    href: "https://www.kmu.admin.ch/kmu/de/home/praktisches-wissen/kmu-betreiben/e-commerce/erstellung-e-commerce-site/allgemeine-geschaeftsbedingungen.html",
  },
  {
    text: "AGB - Allgemeine Gesch\u00e4ftsbedingungen \u203a Informationen zu Allgemeinen Gesch\u00e4ftsbedingungen und AGB-Recht in der Schweiz (agb-allgemeine-geschaeftsbedingungen.ch)",
    href: "https://www.agb-allgemeine-geschaeftsbedingungen.ch/",
  },
  {
    text: "Die CC-Lizenzen im \u00dcberblick \u2013 Welche Lizenz f\u00fcr welche Zwecke? - Medien - Material - wb-web",
    href: "https://wb-web.de/material/medien/die-cc-lizenzen-im-uberblick-welche-lizenz-fur-welche-zwecke-1.html",
  },
  {
    text: "Netiquette: Regeln f\u00fcr richtiges Benehmen im Internet (business-wissen.de)",
    href: "https://www.business-wissen.de/artikel/netiquette-regeln-fuer-richtiges-benehmen-im-internet/",
  },
  {
    text: "Das Web als Spiegel und B\u00fchne: Selbstdarstellung im Internet | APuZ (bpb.de)",
    href: "https://www.bpb.de/apuz/157546/das-web-als-spiegel-und-buehne-selbstdarstellung-im-internet?p=0",
  },
  {
    text: "Die Selbstdarstellung im Netz: Risiken und Potenziale | wissen.de",
    href: "https://www.wissen.de/die-selbstdarstellung-im-netz-risiken-und-potenziale",
  },
  {
    text: "Digitaler Fu\u00dfabdruck \u2013 Definition und Nutzen | Canto",
    href: "https://www.canto.com/de/blog/digitaler-fussabdruck/",
  },
  {
    text: "Alles was du \u00fcber den digital Footprint Wissen solltest (hslu.ch)",
    href: "https://blog.hslu.ch/diginect/2019/04/23/alles-was-du-ueber-den-digital-footprint-wissen-solltest/",
  },
  {
    text: "So kann ich meine Online-Daten einsehen - konsumentenschutz.ch",
    href: "https://www.konsumentenschutz.ch/online-ratgeber/online-daten-einsehen-so-gehts/",
  },
  {
    text: "Passwort-Manager Test 2022: Das sind die besten Dienste | CHIP",
    href: "https://www.chip.de/artikel/Test-Die-besten-Passwort-Manager_182620837.html",
  },
  {
    text: "Tipps: Passwort-Manager f\u00fcr sichere Passw\u00f6rter - Swisscom Magazin",
    href: "https://www.swisscom.ch/de/magazin/datensicherheit-infrastruktur/passwort-manager-tipps-sicherheit/",
  },
  {
    text: "Identit\u00e4tsdiebstahl im Internet: Betrug mit dem eigenen Namen | Der Fall Deborah A. - YouTube",
    href: "https://www.youtube.com/watch?v=pTDXR2nnEiw",
  },
  {
    text: "Schweizer f\u00fcrchten negative Auswirkungen von Social Media aufs Berufsleben | Netzwoche",
    href: "https://www.netzwoche.ch/news/2022-02-17/schweizer-fuerchten-negative-auswirkungen-von-social-media-aufs-berufsleben",
  },
  {
    text: "Zum perfekten LinkedIn-Profil in 6 Schritten | Michael Page",
    href: "https://www.michaelpage.ch/de/advice/karriere-tipps/jobs-und-offene-stellen-suchen/zum-perfekten-linkedin-profil-6-schritten",
  },
  {
    text: "Intranet Kanton Aargau - Social Media (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/kommunikation/online-kommunikation/social-media",
  },
  {
    text: "Online-Anwendung Passwort-Check \u2013 Staatsministerium f\u00fcr Digitales (bayern.de)",
    href: "https://www.stmd.bayern.de/service/passwort-check/online-anwendung-passwort-check/",
  },
  {
    text: "Datenschutz im Internet: Was Sie dar\u00fcber wissen sollten | FOCUS.de",
    href: "https://praxistipps.focus.de/datenschutz-im-internet-was-sie-darueber-wissen-sollten_116501",
  },
  {
    text: "Datenschutz im Internet: So sch\u00fctzen Sie Ihre Daten vor Google & Co. | Beobachter",
    href: "https://www.beobachter.ch/digital/sicherheit/datenschutz-im-internet-so-schutzen-sie-ihre-daten-vor-google-co",
  },
  {
    text: "Datenschutz einfach erkl\u00e4rt (explainity\u00ae Erkl\u00e4rvideo) - YouTube",
    href: "https://www.youtube.com/watch?v=VF5A2JhiJug",
  },
  {
    text: "Datenschutzbeauftragte des Kantons Z\u00fcrich | DSB Kanton Z\u00fcrich",
    href: "https://datenschutz.ch/",
  },
  {
    text: "Basisschutz digital | Deutschland sicher im Netz (sicher-im-netz.de)",
    href: "https://www.sicher-im-netz.de/basisschutz-digital",
  },
  {
    text: "Backup \u2013 5 Tipps, um Daten richtig zu sichern (t3n.de)",
    href: "https://t3n.de/news/backup-5-tipps-daten-richtig-sichern-1122975/",
  },
  {
    text: "Phishing E-Mails - Social Engineering | Schweizerische Kriminalpr\u00e4vention (skppsc.ch)",
    href: "https://www.skppsc.ch/de/themen/internet/phishing/",
  },
  {
    text: "Wie sich sensible Daten identifizieren und sch\u00fctzen lassen (computerweekly.com)",
    href: "https://www.computerweekly.com/de/tipp/Wie-sich-sensible-Daten-identifizieren-und-schuetzen-lassen",
  },
  {
    text: "Intranet Kanton Aargau - Sicherer Umgang mit E-Mails (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/informatik/informationssicherheit/sicherer-umgang-mit-e-mails",
  },
  {
    text: "Intranet Kanton Aargau - Teil 2: Cybercrime \u2013 Die Wege eines Cyberangriffs und wie Sie als Kantonsmitarbeitende Ihre Daten sch\u00fctzen (ag.ch)",
    href: "https://inka.ag.ch/aktuell/news-details/news-details-61633",
  },
  {
    text: "Sichere Passw\u00f6rter \u2013 so geht's | Verbraucherzentrale.de",
    href: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/sichere-passwoerter-so-gehts-11672",
  },
  {
    text: "Intranet Kanton Aargau - Webtransfer (ag.ch)",
    href: "https://inka.ag.ch/a-bis-z/informatik/services-und-it-werkzeuge/webtransfer",
  },
  {
    text: "https://www.fhnw.ch/de/forschung-und-dienstleistungen/psychologie/gestaltung-flexibler-arbeit/arbeiten-im-home-office",
    href: "https://www.fhnw.ch/de/forschung-und-dienstleistungen/psychologie/gestaltung-flexibler-arbeit/arbeiten-im-home-office",
  },
  {
    text: "Veranstaltungen | Mitarbeitendenmanagement MM (umantis.com)",
    href: "https://employeeapp-1270.umantis.com/SelfService/Courses?token=tkGumz_DsoY&_search_token61563=2007710351&token=tkrMMs-L5od",
  },
  {
    text: "Maintaining Your Mental Wellbeing While Working Home (internationalsos.com)",
    href: "https://www.internationalsos.com/magazine/maintaining-your-mental-wellbeing-while-working-from-home",
  },
  {
    text: "Sieben Tipps f\u00fcr die Arbeit im Homeoffice - Swisscom Magazin",
    href: "https://www.swisscom.ch/de/magazin/digitalisierung-im-alltag/sieben-tipps-fur-die-arbeit-im-homeoffice/",
  },
  {
    text: "7 Tipps f\u00fcr Home Office (mit Kindern) - Any Working Mom",
    href: "https://www.anyworkingmom.com/7-tipps-fuer-home-office-mit-kindern/",
  },
  {
    text: "EKAS-Box: Arbeitssicherheit, Gesundheitsschutz und Ergonomie im B\u00fcro",
    href: "https://www.ekas-box.ch/de/",
  },
  {
    text: "Ergonomie im B\u00fcro: Gratis Checkliste & Tipps | AXA",
    href: "https://www.axa.ch/de/unternehmenskunden/blog/mitarbeiter-und-vorsorge/gesundheit/checkliste-ergonomie-buero.html",
  },
  {
    text: "Intranet Kanton Aargau - Arbeitssicherheit und Bedrohungsmanagement",
    href: "https://inka.ag.ch/a-bis-z/personal/gesundheit-familie/arbeitssicherheit-und-bedrohungsmanagement",
  },
  {
    text: "Digital Detox: \u00d6fter offline f\u00fcr weniger Stress (ias-gruppe.de)",
    href: "https://www.ias-gruppe.de/magazin/digital-detox-oefter-offline-fuer-weniger-stress",
  },
  {
    text: "Startseite \u2013 stressnostress.ch",
    href: "https://stressnostress.ch/",
  },
  {
    text: "10 Tipps gegen Stress am Arbeitsplatz - Poolia",
    href: "https://www.poolia.de/karriere-blog/10-tipps-gegen-stress-am-arbeitsplatz/",
  },
];

const problemloesung = [
  {
    text: "Probleme lösem - in 6 Schritten zur Lösung",
    href: "https://www.tk.de/techniker/magazin/life-balance/stress-bewaeltigen/probleme-loesen-2006878?tkcm=aaus",
  },
  {
    text: "Techniken und Tipps zur Problemlösung",
    href: "https://www.wrike.com/de/blog/techniken-und-tipps-fuer-problemloesungen-die-tatsaechlich-funktionieren/",
  },
  {
    text: "Stressabbau - systematisch managen",
    href: "https://stressnostress.ch",
  },
  {
    text: "Problemlösung -> Video für effizienten Stressabbau",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const userScores = [
  Math.round(kategorieScores.datenverarbeitung),
  Math.round(kategorieScores.kommunikation),
  Math.round(kategorieScores.erstellung),
  Math.round(kategorieScores.sicherheit),
  Math.round(kategorieScores.problemloesung),
];

const domainLinks = [
  information,
  komunikation,
  produktion,
  sicherheit,
  problemloesung,
];

function generatepersonalizedLinks(scores, links) {
  let result = [];
  const maxScore = 4;
  for (let i = 0; i < links.length; i++) {
    let score = scores[i];
    let linksToAdd = maxScore - score;
    list = [];
    for (let j = 0; j < linksToAdd; j++) {
      let randomIndex = Math.floor(Math.random() * links[i].length);
      if (links[i][randomIndex]) {
        list.push(links[i][randomIndex]);
        // Remove the selected link from the array to avoid duplicates
        links[i].splice(randomIndex, 1);
      }
    }
    result.push(list);
  }
  return result;
}

function addLinksToDOM(links) {
  const container = document.getElementById("link-container");
  const titles = [
    "Datenverarbeitung - Empfehlungen",
    "Kommunikation - Empfehlungen",
    "Erstellung von Inhalten - Empfehlungen",
    "Sicherheit - Empfehlungen",
    "Problemlösung - Empfehlungen",
  ];
  links.forEach((linkList, index) => {
    let h3 = document.createElement("h3");
    h3.textContent = titles[index];
    h3.className = "w-100";
    container.appendChild(h3);
    let ul = document.createElement("ul");
    ul.className = "list-group w-100";
    linkList.forEach((link) => {
      let li = document.createElement("li");
      li.className = "list-group-item w-100";
      let a = document.createElement("a");
      console.log(link["href"]);
      a.href = link["href"];
      a.textContent = link["text"];
      a.className = "btn btn-link styled-link w-100";
      a.target = "_blank";
      li.appendChild(a);
      li.style.marginBottom = "10px";
      ul.appendChild(li);
    });
    container.appendChild(ul);
  });
}

const personalizedLinks = generatepersonalizedLinks(userScores, domainLinks);
console.log(personalizedLinks);
window.onload = generatepersonalizedLinks;
addLinksToDOM(personalizedLinks);
