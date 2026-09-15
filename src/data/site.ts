/**
 * Dati del locale: unico punto da aggiornare con le informazioni reali del cliente.
 * I campi vuoti ("" o false) nascondono automaticamente le sezioni/pulsanti corrispondenti.
 */
export const site = {
  name: "MaRo Pizza & Pollo",
  shortName: "MaRo",
  tagline: "Pizza & Pollo a Palermo",
  description:
    "MaRo Pizza & Pollo - Pizzeria e pollo allo spiedo in via Romagna 8 a Palermo. Aperti tutti i giorni a pranzo e cena. Apertura prevista fine ottobre 2026.",
  openingNotice: "Apertura prevista fine ottobre 2026",
  address: {
    street: "Via Romagna, 8",
    city: "Palermo",
    zip: "90144",
    lat: 38.145718,
    lng: 13.337559,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=38.145718,13.337559",
  },
  phone: "",            // TODO: numero del nuovo gestore
  whatsapp: "",         // TODO: solo cifre con prefisso, es. 393281234567
  email: "",            // TODO
  hours: [
    { days: "Tutti i giorni", time: "Pranzo e cena" },
  ], // TODO: fasce orarie precise quando disponibili
  social: {
    instagram: "", // TODO: pagina non ancora creata
    facebook: "",  // TODO: pagina non ancora creata
  },
  menuUrl: "",          // TODO: link menu digitale GO!Food (es. "/menu") quando disponibile
  hasGallery: false,    // TODO: true quando le foto sono in public/images/gallery/1..6.jpg
};

/** Le due anime del locale, mostrate nella sezione "Pizza & Pollo". */
export const offer = [
  {
    name: "Pizza",
    description:
      "Impasto a lunga lievitazione e cottura in forno, con ingredienti selezionati. Dalle classiche alle proposte della casa.",
  },
  {
    name: "Pollo allo spiedo",
    description:
      "Pollo cotto lentamente allo spiedo, croccante fuori e tenero dentro. Da gustare al tavolo o da portare a casa.",
  },
]; // TODO: sostituire con il menu reale quando disponibile
