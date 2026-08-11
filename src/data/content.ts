/**
 * All translatable copy, keyed by language. Anything language-independent
 * (prices, images, WhatsApp links, section ids) stays in ./siteData.
 */

export type Lang = 'nl' | 'de';

export interface SiteContent {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;

  nav: { home: string; voordelen: string; prijzen: string; stappen: string; sport: string; faq: string };

  hero: {
    eyebrow: string;
    title: string;
    /** Paragraph split around the two inline links. */
    bodyStart: string;
    linkChannels: string;
    bodyMiddle: string;
    linkTrial: string;
    cta: string;
    imageAlt: string;
  };

  benefitsHeading: string;
  benefits: { title: string; body: string }[];

  pricing: {
    eyebrow: string;
    heading: string;
    sub: string;
    familyHeading: string;
    familySub: string;
    familySubBold: string;
    orderCta: string;
    planNames: Record<string, string>;
    features: string[];
    sportFeature: string;
    seatsDuo: string;
    seatsTrio: string;
  };

  stepsHeading: string;
  steps: { title: string; body: string }[];

  sport: {
    eyebrow: string;
    heading: string;
    p1Start: string;
    p1Link: string;
    p1End: string;
    p2: string;
    p3Start: string;
    p3Link: string;
    p3End: string;
    cta: string;
    imageAlt: string;
  };

  trustpilot: { heading: string; line1: string; line2Start: string; line2Bold: string; cta: string };

  faq: {
    heading: string;
    stillQuestionsStart: string;
    stillQuestionsLink: string;
    items: { q: string; a: string }[];
    aria: { support: string; trial: string; order: string };
  };

  footer: {
    socialHeading: string;
    aboutHeading: string;
    about: string;
    infoHeading: string;
    info: string[];
    linksHeading: string;
    links: string[];
    whatsappHeading: string;
    whatsappNote: string;
  };

  whatsapp: {
    trial: string;
    support: string;
    order: string;
    /** Receives plan name and price. */
    plan: (name: string, price: string) => string;
  };

  chatAria: string;
}

/* Dutch ----------------------------------------------------------------- */

const nl: SiteContent = {
  htmlLang: 'nl',
  metaTitle: 'IPTV Kopen? Probeer een gratis IPTV abonnement in Nederland',
  metaDescription:
    'IPTV kopen en krijg toegang tot meer dan 35.000 tv-zenders en 150.000 films en series. Beschikbaar vanaf slechts €25 voor 3 maanden. Vraag nu je gratis proefpakket aan!',

  nav: {
    home: 'Home',
    voordelen: 'Voordelen',
    prijzen: 'Abonnementen',
    stappen: 'Zo Werkt Het',
    sport: 'Sport',
    faq: 'Veel Gestelde Vragen',
  },

  hero: {
    eyebrow: 'BESTE IPTV ABONNEMENT',
    title:
      'IPTV Kopen? Probeer een gratis IPTV abonnement Nederland legaal met +35.000 kanalen in 4K IPTV kwaliteit!',
    bodyStart: 'IPTV kopen en krijg toegang tot meer dan 35.000 ',
    linkChannels: 'tv-zenders',
    bodyMiddle:
      ' en 150.000 films en series. Beschikbaar vanaf slechts €25 voor 3 maanden via Ss IPTV Kastje, android IPTV app of IPTV box. Vraag nu je ',
    linkTrial: 'gratis proefpakket aan!',
    cta: 'Start nu uw GRATIS IPTV abonnement',
    imageAlt: 'IPTV abonnement op tv, laptop, smartphone en IPTV box',
  },

  benefitsHeading: 'Wat zijn de voordelen van IPTV Kopen Nederland?',
  benefits: [
    {
      title: 'Overal toegang',
      body:
        'WatchTivo IPTV Abonnement werkt naadloos met alle app IPTV, IPTV Box en de nieuwste IPTV Player op de markt. 100% compatibel. IPTV kopen bij WatchTivo, de beste IPTV keuze in IPTV Nederland, en bekijk onze tutorial voor een eenvoudige start.',
    },
    {
      title: 'Internationale kanalen en VOD',
      body:
        'Ontgrendel het ultieme 4K IPTV abonnement met meer dan 35.000 zenders wereldwijd. IPTV kopen doe je bij WatchTivo, de beste IPTV 2024 voor IPTV Nederland. Benieuwd naar onze uitgebreide IPTV Totaal zenderlijst met films en series?',
    },
    {
      title: 'Pauzeren & Replay',
      body:
        'Ervaar meer met WatchTivo, de beste IPTV provider. Koop een IPTV abonnement Nederland legaal en geniet van volledige flexibiliteit met de IPTV Replay-functie: pauzeer live tv en kijk uitzendingen terug wanneer het u uitkomt.',
    },
    {
      title: '24/7 ondersteuning',
      body:
        'Vraag of probleem? Ons team staat 24/7 voor je klaar. IPTV Kopen bij WatchTivo, de beste IPTV voor IPTV Nederland, betekent altijd snelle hulp via WhatsApp — elke dag van het jaar.',
    },
  ],

  pricing: {
    eyebrow: 'BESTE IPTV 2024',
    heading: 'Kies uw beste IPTV abonnement',
    sub:
      'Betaalbaar IPTV abonnement voor onbeperkt entertainment. Koop het beste IPTV kastje bij WatchTivo – de beste IPTV 2024 met alle zenders, films en series in topkwaliteit.',
    familyHeading: 'Familiepakket - Meerdere kamers',
    familySub: ' en Bespaar Groot – Tot 70% korting vergeleken met een enkel IPTV abonnement! ',
    familySubBold: 'Familiepakketten',
    orderCta: 'BESTELLEN',
    planNames: {
      'wt-3m': '3 Maanden',
      'wt-6m': '6 Maanden',
      'wt-12m': '12 Maanden',
      'wt-duo': '12 Maanden - Duo',
      'wt-trio': '12 Maanden - Trio',
    },
    features: [
      '35.000+ TV-kanalen',
      '150.000+ films en series met ondertitels',
      'Tot 8K beeldkwaliteit',
      'Ondertitels',
      'Ingebouwde VPN voor volledige beveiliging',
      'Zenders terugkijken (Replay)',
      'Anti-freeze technologie & 99,9% uptime',
    ],
    sportFeature: 'Eredivisie, F1, Darts.',
    seatsDuo: '2 Abonnementen / 2 Apparaten',
    seatsTrio: '3 Abonnementen / 3 Apparaten',
  },

  stepsHeading: 'DRIE EENVOUDIGE STAPPEN OM UW WatchTivo IPTV Kopen',
  steps: [
    {
      title: 'Voltooi de bestelling',
      body:
        'Kies voor een IPTV abonnement en bestel direct via WhatsApp. IPTV kopen is veilig en gemakkelijk bij WatchTivo, de beste IPTV 2024 van Nederland.',
    },
    {
      title: 'Ontvang uw gegevens',
      body:
        'Uw IPTV Nederland inloggegevens worden binnen enkele minuten verzonden – IPTV Kopen bij WatchTivo',
    },
    {
      title: 'Plug & Play',
      body:
        'Installeer een IPTV Player windows app en stream op al je 4K IPTV Tv. Weet je niet zeker welke app je moet kiezen? Bekijk onze handige tutorials.',
    },
  ],

  sport: {
    eyebrow: 'WATCHTIVO - LEGALE IPTV AANBIEDERS',
    heading: 'Mis de beste IPTV abonnement sportevenementen niet met WatchTivo',
    p1Start: 'WatchTivo – Uw #1 Premium ',
    p1Link: 'IPTV abonnement',
    p1End:
      ' in Europa. Geniet van meer dan 35.000 kanalen in verbluffende 4K IPTV kwaliteit en een uitgebreide bibliotheek met IPTV box, films en series. IPTV kopen bij de beste IPTV 2025 leveranciers voor IPTV Nederland .',
    p2:
      'Ervaar iets wat je nog nooit hebt gezien met onze revolutionaire 4K IPTV beeldkwaliteit – iets waar andere legale iptv aanbieders niet aan kunnen tippen. Kies WatchTivo , de beste IPTV 2024 voor IPTV Nederland , en geniet van ongeëvenaarde kwaliteit.',
    p3Start:
      'Maak je klaar voor de grootste games en must-see PPV-evenementen. Pak een kom popcorn en duik in de sensatie van live sportactie – ',
    p3Link: 'IPTV kopen',
    p3End: ' voor een onvergetelijke ervaring!',
    cta: 'Start nu uw GRATIS IPTV abonnement',
    imageAlt: 'WatchTivo IPTV kanalengids op een smart tv',
  },

  trustpilot: {
    heading: 'Bij WatchTivo staat klanttevredenheid altijd op de eerste plaats.',
    line1: 'Benieuwd wat onze gebruikers écht vinden?',
    line2Start: 'Lees onafhankelijke en geverifieerde reviews over WatchTivo op ',
    line2Bold: 'Trustpilot',
    cta: 'BEKIJK REVIEWS OP TRUSTPILOT',
  },

  faq: {
    heading: 'Veel Gestelde Vragen',
    stillQuestionsStart: 'Heeft u nog vragen? Onze ondersteuning is beschikbaar ',
    stillQuestionsLink: '24/7',
    aria: {
      support: 'Vraag stellen via WhatsApp',
      trial: 'Gratis proefpakket via WhatsApp',
      order: 'Bestellen via WhatsApp',
    },
    items: [
      {
        q: 'Bieden jullie een gratis proefperiode aan?',
        a: 'Ja. U kunt een gratis IPTV proefpakket aanvragen zodat u de kwaliteit, de zenders en de stabiliteit van WatchTivo eerst zelf kunt testen voordat u een IPTV abonnement koopt.',
      },
      {
        q: 'Beschikbare betaalmethoden?',
        a: 'U betaalt veilig met creditcard, PayPal, iDEAL, Bancontact en diverse cryptovaluta. Alle betalingen worden via WhatsApp afgehandeld met een beveiligde betaallink.',
      },
      {
        q: 'Welke apps zijn compatibel met WatchTivo?',
        a: 'WatchTivo werkt met alle bekende IPTV spelers, waaronder IPTV Smarters Pro, TiviMate, Ss IPTV, Smart IPTV en vrijwel iedere andere M3U- of Xtream Codes-speler.',
      },
      {
        q: 'Heeft u de kanalenlijst?',
        a: 'Ja, onze volledige kanalenlijst met meer dan 35.000 TV-kanalen en 150.000 films en series kunt u bij ons opvragen via WhatsApp.',
      },
      {
        q: 'Wat is de vereiste internetsnelheid?',
        a: 'Voor SD is 8 Mbps voldoende, voor Full HD adviseren wij 16 Mbps en voor 4K IPTV een stabiele verbinding van minimaal 25 Mbps.',
      },
      {
        q: 'Hoeveel apparaten kan ik tegelijkertijd gebruiken met één abonnement?',
        a: 'Eén abonnement is bedoeld voor één apparaat tegelijk. Wilt u op meerdere kamers tegelijk kijken, kies dan het Familiepakket Duo of Trio.',
      },
      {
        q: 'Zijn er ondertitels beschikbaar voor films en series op dit platform?',
        a: 'Ja, onze volledige VOD-bibliotheek met 150.000+ films en series wordt geleverd met Nederlandse en internationale ondertitels.',
      },
      {
        q: 'Heeft u verslag van live sportevenementen en Pay-Per-View (PPV)?',
        a: 'Zeker. U kijkt live sport zoals de Eredivisie, Formule 1 en darts, inclusief de grote PPV-evenementen, in topkwaliteit.',
      },
      {
        q: 'Wat is de levertijd?',
        a: 'Uw inloggegevens worden na de betaling binnen enkele minuten via WhatsApp verzonden.',
      },
      {
        q: 'Welke landen zijn aanwezig?',
        a: 'Wij bieden zenders uit Nederland, België, Duitsland, het Verenigd Koninkrijk, Frankrijk, Spanje, Turkije, de Verenigde Staten en tientallen andere landen wereldwijd.',
      },
      {
        q: 'Wordt mijn abonnement na afloop automatisch verlengd?',
        a: 'Nee. Er is geen automatische incasso: uw abonnement stopt vanzelf en u verlengt alleen wanneer u dat zelf wilt.',
      },
      {
        q: 'Moet ik een VPN gebruiken met WatchTivo',
        a: 'Dat hoeft niet. Onze servers beschikken over een ingebouwde VPN voor volledige beveiliging, zodat u zonder extra software stabiel kunt kijken.',
      },
      {
        q: 'Is er een verwijzingsprogramma beschikbaar?',
        a: 'Ja, via ons reseller- en verwijzingsprogramma ontvangt u korting of commissie voor iedere klant die u aanbrengt.',
      },
      {
        q: 'Welke apparaten kunnen worden gebruikt met WatchTivo IPTV?',
        a: 'Smart TV (Samsung, LG, Android TV), Amazon Fire TV Stick, NVIDIA Shield, IPTV box, smartphone, tablet, Windows-pc en Mac.',
      },
      {
        q: 'Heb ik de mogelijkheid om een VPN te gebruiken?',
        a: 'Ja, u kunt WatchTivo probleemloos combineren met uw eigen VPN-provider zonder verlies van beeldkwaliteit.',
      },
    ],
  },

  footer: {
    socialHeading: 'Volg ons op sociale media:',
    aboutHeading: 'WATCHTIVO, INC',
    about:
      'WatchTivo zet de norm als vooraanstaande IPTV-aanbieder en verovert de branche stormenderhand met de modernste technologieën en krachtige servers die een ongeëvenaarde servicekwaliteit garanderen.',
    infoHeading: 'INFORMATIE',
    info: [
      'IPTV Support',
      'Terugbetalingsbeleid',
      'Privacy-beleid',
      'GDPR-beleid',
      'Algemene Gebruikersvoorwaarden',
      'Nieuws',
    ],
    linksHeading: 'SNELLE LINKS',
    links: [
      'IPTV Proefabonnement & Proefperiode',
      'IPTV Gebruiksaanwijzing',
      'IPTV Reseller',
      'Beste IPTV Kastje',
      'Kanalenlijst Opvragen',
      'Statuspagina',
    ],
    whatsappHeading: 'WHATSAPP',
    whatsappNote: 'Bestel of stel uw vraag direct via WhatsApp — ons team antwoordt 24/7.',
  },

  whatsapp: {
    trial: 'Hallo WatchTivo, ik wil graag een GRATIS IPTV proefpakket aanvragen.',
    support: 'Hallo WatchTivo, ik heb een vraag over IPTV.',
    order: 'Hallo WatchTivo, ik wil graag een IPTV abonnement bestellen.',
    plan: (name, price) =>
      `Hallo WatchTivo, ik wil graag het IPTV abonnement "${name}" (${price}) bestellen.`,
  },

  chatAria: 'Chat via WhatsApp',
};

/* German ---------------------------------------------------------------- */

const de: SiteContent = {
  htmlLang: 'de',
  metaTitle: 'IPTV kaufen? Testen Sie ein gratis IPTV Abonnement',
  metaDescription:
    'IPTV kaufen und Zugang zu mehr als 35.000 TV-Sendern sowie 150.000 Filmen und Serien erhalten. Ab nur 25 € für 3 Monate. Fordern Sie jetzt Ihr gratis Testpaket an!',

  nav: {
    home: 'Startseite',
    voordelen: 'Vorteile',
    prijzen: 'Abonnements',
    stappen: 'So funktioniert es',
    sport: 'Sport',
    faq: 'Häufige Fragen',
  },

  hero: {
    eyebrow: 'BESTES IPTV ABONNEMENT',
    title:
      'IPTV kaufen? Testen Sie ein gratis IPTV Abonnement, legal und mit +35.000 Sendern in 4K IPTV Qualität!',
    bodyStart: 'IPTV kaufen und Zugang zu mehr als 35.000 ',
    linkChannels: 'TV-Sendern',
    bodyMiddle:
      ' sowie 150.000 Filmen und Serien erhalten. Ab nur 25 € für 3 Monate über Ss IPTV Box, Android IPTV App oder IPTV Box. Fordern Sie jetzt Ihr ',
    linkTrial: 'gratis Testpaket an!',
    cta: 'Starten Sie jetzt Ihr GRATIS IPTV Abo',
    imageAlt: 'IPTV Abonnement auf TV, Laptop, Smartphone und IPTV Box',
  },

  benefitsHeading: 'Was sind die Vorteile von IPTV kaufen?',
  benefits: [
    {
      title: 'Überall Zugriff',
      body:
        'Das WatchTivo IPTV Abonnement funktioniert nahtlos mit allen IPTV Apps, IPTV Boxen und den neuesten IPTV Playern auf dem Markt. 100 % kompatibel. Kaufen Sie IPTV bei WatchTivo, der besten IPTV Wahl, und sehen Sie sich unser Tutorial für einen einfachen Start an.',
    },
    {
      title: 'Internationale Sender und VOD',
      body:
        'Entdecken Sie das ultimative 4K IPTV Abonnement mit mehr als 35.000 Sendern weltweit. IPTV kaufen Sie bei WatchTivo, dem besten IPTV Anbieter 2024. Neugierig auf unsere umfangreiche Senderliste mit Filmen und Serien?',
    },
    {
      title: 'Pause & Replay',
      body:
        'Erleben Sie mehr mit WatchTivo, dem besten IPTV Anbieter. Kaufen Sie ein legales IPTV Abonnement und genießen Sie volle Flexibilität mit der Replay-Funktion: Live-TV pausieren und Sendungen ansehen, wann immer es Ihnen passt.',
    },
    {
      title: '24/7 Support',
      body:
        'Fragen oder Probleme? Unser Team ist rund um die Uhr für Sie da. IPTV kaufen bei WatchTivo, dem besten IPTV Anbieter, bedeutet immer schnelle Hilfe über WhatsApp — an jedem Tag des Jahres.',
    },
  ],

  pricing: {
    eyebrow: 'BESTES IPTV 2024',
    heading: 'Wählen Sie Ihr bestes IPTV Abonnement',
    sub:
      'Günstiges IPTV Abonnement für unbegrenzte Unterhaltung. Kaufen Sie die beste IPTV Box bei WatchTivo – das beste IPTV 2024 mit allen Sendern, Filmen und Serien in Top-Qualität.',
    familyHeading: 'Familienpaket - Mehrere Räume',
    familySub: ' und sparen Sie groß – bis zu 70 % Rabatt gegenüber einem einzelnen IPTV Abo! ',
    familySubBold: 'Familienpakete',
    orderCta: 'BESTELLEN',
    planNames: {
      'wt-3m': '3 Monate',
      'wt-6m': '6 Monate',
      'wt-12m': '12 Monate',
      'wt-duo': '12 Monate - Duo',
      'wt-trio': '12 Monate - Trio',
    },
    features: [
      '35.000+ TV-Sender',
      '150.000+ Filme und Serien mit Untertiteln',
      'Bis zu 8K Bildqualität',
      'Untertitel',
      'Integriertes VPN für volle Sicherheit',
      'Sendungen nachträglich ansehen (Replay)',
      'Anti-Freeze-Technologie & 99,9 % Uptime',
    ],
    sportFeature: 'Bundesliga, F1, Darts.',
    seatsDuo: '2 Abonnements / 2 Geräte',
    seatsTrio: '3 Abonnements / 3 Geräte',
  },

  stepsHeading: 'DREI EINFACHE SCHRITTE ZU IHREM WatchTivo IPTV',
  steps: [
    {
      title: 'Bestellung abschließen',
      body:
        'Wählen Sie ein IPTV Abonnement und bestellen Sie direkt über WhatsApp. IPTV kaufen ist bei WatchTivo, dem besten IPTV Anbieter 2024, sicher und einfach.',
    },
    {
      title: 'Zugangsdaten erhalten',
      body:
        'Ihre IPTV Zugangsdaten werden innerhalb weniger Minuten verschickt – IPTV kaufen bei WatchTivo',
    },
    {
      title: 'Plug & Play',
      body:
        'Installieren Sie eine IPTV Player App und streamen Sie auf Ihrem 4K IPTV TV. Sie wissen nicht, welche App die richtige ist? Sehen Sie sich unsere praktischen Tutorials an.',
    },
  ],

  sport: {
    eyebrow: 'WATCHTIVO - LEGALE IPTV ANBIETER',
    heading: 'Verpassen Sie mit WatchTivo keine Sportereignisse mehr',
    p1Start: 'WatchTivo – Ihr Premium ',
    p1Link: 'IPTV Abonnement',
    p1End:
      ' Nr. 1 in Europa. Genießen Sie mehr als 35.000 Sender in beeindruckender 4K IPTV Qualität und eine umfangreiche Bibliothek mit Filmen und Serien. IPTV kaufen bei den besten IPTV Anbietern 2025.',
    p2:
      'Erleben Sie etwas, das Sie noch nie gesehen haben: unsere revolutionäre 4K IPTV Bildqualität – etwas, das andere legale IPTV Anbieter nicht bieten können. Wählen Sie WatchTivo, das beste IPTV 2024, und genießen Sie unvergleichliche Qualität.',
    p3Start:
      'Machen Sie sich bereit für die größten Spiele und die wichtigsten PPV-Events. Holen Sie sich eine Schüssel Popcorn und tauchen Sie ein in die Spannung von Live-Sport – ',
    p3Link: 'IPTV kaufen',
    p3End: ' für ein unvergessliches Erlebnis!',
    cta: 'Starten Sie jetzt Ihr GRATIS IPTV Abo',
    imageAlt: 'WatchTivo IPTV Senderübersicht auf einem Smart TV',
  },

  trustpilot: {
    heading: 'Bei WatchTivo steht die Kundenzufriedenheit immer an erster Stelle.',
    line1: 'Neugierig, was unsere Nutzer wirklich sagen?',
    line2Start: 'Lesen Sie unabhängige und verifizierte Bewertungen über WatchTivo auf ',
    line2Bold: 'Trustpilot',
    cta: 'BEWERTUNGEN AUF TRUSTPILOT ANSEHEN',
  },

  faq: {
    heading: 'Häufig gestellte Fragen',
    stillQuestionsStart: 'Haben Sie noch Fragen? Unser Support ist erreichbar ',
    stillQuestionsLink: '24/7',
    aria: {
      support: 'Frage stellen über WhatsApp',
      trial: 'Gratis Testpaket über WhatsApp',
      order: 'Bestellen über WhatsApp',
    },
    items: [
      {
        q: 'Bieten Sie eine kostenlose Testphase an?',
        a: 'Ja. Sie können ein gratis IPTV Testpaket anfordern, um die Qualität, die Sender und die Stabilität von WatchTivo selbst zu testen, bevor Sie ein IPTV Abonnement kaufen.',
      },
      {
        q: 'Welche Zahlungsmethoden sind verfügbar?',
        a: 'Sie zahlen sicher per Kreditkarte, PayPal, Sofortüberweisung, Bancontact und diversen Kryptowährungen. Alle Zahlungen werden über WhatsApp mit einem sicheren Zahlungslink abgewickelt.',
      },
      {
        q: 'Welche Apps sind mit WatchTivo kompatibel?',
        a: 'WatchTivo funktioniert mit allen bekannten IPTV Playern, darunter IPTV Smarters Pro, TiviMate, Ss IPTV, Smart IPTV und praktisch jedem anderen M3U- oder Xtream-Codes-Player.',
      },
      {
        q: 'Haben Sie eine Senderliste?',
        a: 'Ja, unsere vollständige Senderliste mit mehr als 35.000 TV-Sendern und 150.000 Filmen und Serien können Sie über WhatsApp bei uns anfordern.',
      },
      {
        q: 'Welche Internetgeschwindigkeit wird benötigt?',
        a: 'Für SD genügen 8 Mbit/s, für Full HD empfehlen wir 16 Mbit/s und für 4K IPTV eine stabile Verbindung von mindestens 25 Mbit/s.',
      },
      {
        q: 'Wie viele Geräte kann ich gleichzeitig mit einem Abo nutzen?',
        a: 'Ein Abonnement ist für ein Gerät gleichzeitig gedacht. Wenn Sie in mehreren Räumen gleichzeitig schauen möchten, wählen Sie das Familienpaket Duo oder Trio.',
      },
      {
        q: 'Sind Untertitel für Filme und Serien verfügbar?',
        a: 'Ja, unsere komplette VOD-Bibliothek mit über 150.000 Filmen und Serien wird mit deutschen und internationalen Untertiteln geliefert.',
      },
      {
        q: 'Übertragen Sie Live-Sport und Pay-per-View (PPV)?',
        a: 'Selbstverständlich. Sie sehen Live-Sport wie die Bundesliga, Formel 1 und Darts, inklusive der großen PPV-Events, in Top-Qualität.',
      },
      {
        q: 'Wie lange dauert die Lieferung?',
        a: 'Ihre Zugangsdaten werden nach der Zahlung innerhalb weniger Minuten über WhatsApp verschickt.',
      },
      {
        q: 'Welche Länder sind verfügbar?',
        a: 'Wir bieten Sender aus Deutschland, Österreich, der Schweiz, den Niederlanden, Belgien, Großbritannien, Frankreich, Spanien, der Türkei, den USA und Dutzenden weiteren Ländern weltweit.',
      },
      {
        q: 'Verlängert sich mein Abonnement automatisch?',
        a: 'Nein. Es gibt keinen automatischen Einzug: Ihr Abonnement endet von selbst und Sie verlängern nur dann, wenn Sie es möchten.',
      },
      {
        q: 'Muss ich mit WatchTivo ein VPN verwenden?',
        a: 'Das ist nicht nötig. Unsere Server verfügen über ein integriertes VPN für volle Sicherheit, sodass Sie ohne zusätzliche Software stabil streamen können.',
      },
      {
        q: 'Gibt es ein Empfehlungsprogramm?',
        a: 'Ja, über unser Reseller- und Empfehlungsprogramm erhalten Sie Rabatt oder Provision für jeden Kunden, den Sie werben.',
      },
      {
        q: 'Welche Geräte können mit WatchTivo IPTV genutzt werden?',
        a: 'Smart TV (Samsung, LG, Android TV), Amazon Fire TV Stick, NVIDIA Shield, IPTV Box, Smartphone, Tablet, Windows-PC und Mac.',
      },
      {
        q: 'Kann ich ein eigenes VPN verwenden?',
        a: 'Ja, Sie können WatchTivo problemlos mit Ihrem eigenen VPN-Anbieter kombinieren, ohne Verlust der Bildqualität.',
      },
    ],
  },

  footer: {
    socialHeading: 'Folgen Sie uns in den sozialen Medien:',
    aboutHeading: 'WATCHTIVO, INC',
    about:
      'WatchTivo setzt als führender IPTV-Anbieter den Maßstab und erobert die Branche im Sturm – mit modernster Technologie und leistungsstarken Servern, die eine unvergleichliche Servicequalität garantieren.',
    infoHeading: 'INFORMATIONEN',
    info: [
      'IPTV Support',
      'Rückerstattungsrichtlinie',
      'Datenschutzerklärung',
      'DSGVO-Richtlinie',
      'Allgemeine Geschäftsbedingungen',
      'Neuigkeiten',
    ],
    linksHeading: 'SCHNELLE LINKS',
    links: [
      'IPTV Testabonnement & Testphase',
      'IPTV Anleitung',
      'IPTV Reseller',
      'Beste IPTV Box',
      'Senderliste anfordern',
      'Statusseite',
    ],
    whatsappHeading: 'WHATSAPP',
    whatsappNote: 'Bestellen oder fragen Sie direkt über WhatsApp — unser Team antwortet 24/7.',
  },

  whatsapp: {
    trial: 'Hallo WatchTivo, ich möchte gerne ein GRATIS IPTV Testpaket anfordern.',
    support: 'Hallo WatchTivo, ich habe eine Frage zu IPTV.',
    order: 'Hallo WatchTivo, ich möchte gerne ein IPTV Abonnement bestellen.',
    plan: (name, price) =>
      `Hallo WatchTivo, ich möchte gerne das IPTV Abonnement "${name}" (${price}) bestellen.`,
  },

  chatAria: 'Chat über WhatsApp',
};

export const CONTENT: Record<Lang, SiteContent> = { nl, de };

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'nl', label: 'Nederlands' },
  { code: 'de', label: 'Deutsch' },
];
