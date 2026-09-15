# MaRo Pizzeria

Benvenuti su MaRo Pizzeria. Sito ufficiale di MaRo Pizza & Pollo, via Romagna 8, Palermo. Dominio: maropizzeria.it

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide Astro](https://lucide.dev/)
- **Typography**: [Fontsource](https://fontsource.org/) (Playfair Display, Inter)
- **Hosting**: Vercel

## 🚀 Struttura del Progetto

- `src/data/site.ts`: dati del locale (indirizzo, orari, contatti, link menu, flag gallery). **Unico punto da aggiornare**: i campi vuoti nascondono automaticamente pulsanti e sezioni.
- `src/layouts/`: layout principale.
- `src/components/`: sezioni della home (Navbar, Hero, About, Specials, Gallery, Contact, Footer). La Gallery si attiva con `hasGallery: true`.
- `src/pages/`: pagine del sito.
- `public/images/`: logo (logo.png, logo.webp, logo-sm.webp) e foto (about.jpg, gallery/1..6.jpg).

## 🧞 Comandi principali

| Comando | Azione |
| :--- | :--- |
| `npm install` | Installa le dipendenze |
| `npm run dev` | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build` | Compila il sito in `./dist/` |
| `npm run preview` | Anteprima della build |

## 👨‍💻 Developed by

Sviluppato da [GO!Food Italia](https://gofoodmenu.it).
