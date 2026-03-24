# CLAUDE.md — Caffè Iseo

Web de la Cafeteria Gelateria Iseo, ubicada a Caldes de Montbui (Barcelona).
Deploy a Netlify: `caffeiseo.netlify.app`

---

## Stack

- **React 19** (JSX, sense TypeScript)
- **React Router DOM 7** — routing entre pàgina principal i pàgines legals
- **Tailwind CSS 3** — amb paleta personalitzada `iseo`
- **Framer Motion 12** — animacions
- **Lucide React** — icones
- **Vite 7** — build tool

---

## Estructura de fitxers

```
src/
├── components/
│   ├── common/         → ProductCard (no s'usa a la carta actual)
│   ├── layout/         → Header.jsx, Footer.jsx
│   └── sections/       → Hero.jsx, About.jsx, Products.jsx, Location.jsx
├── data/
│   ├── contact.js      → contactInfo, horaris
│   └── products.js     → gelats, cafesXocolataInfusions, begudes, perMenjar
├── pages/              → AvisLegal.jsx, PoliticaPrivacitat.jsx, PoliticaCookies.jsx
├── App.jsx             → routing principal
└── main.jsx
public/
├── logoiseo.webp       → logo (usat com a favicon i header)
├── llac-iseo.jpg       → fons del Hero
├── terrassaiseo.jpg    → foto a la secció About
└── iseo-llac.jpg       → foto alternativa (no usada actualment)
```

---

## Paleta de colors (`iseo`)

| Token       | Hex       | Ús principal                  |
|-------------|-----------|-------------------------------|
| `iseo-50`   | `#fffef2` | Fons molt clars               |
| `iseo-100`  | `#fefcd4` | Fons clars, text sobre fosc   |
| `iseo-200`  | `#fdf5a0` | Fons destacats, hover suau    |
| `iseo-300`  | `#c49a55` | Icones sobre fons fosc        |
| `iseo-400`  | `#8c5a1a` | Icones, text secundari fosc   |
| `iseo-500`  | `#663f08` | **Accent principal** (marró)  |
| `iseo-600`  | `#4d2f06` | Hover de l'accent             |
| `iseo-700`  | `#3a2304` | Text body sobre fons clar     |
| `iseo-900`  | `#1f1202` | Fons fosc, text fosc          |

**Tipografies:**
- `font-display` → Playfair Display (titols)
- `font-body` → Inter (text corrent, és la font per defecte del body)

---

## Dades de la botiga (`src/data/`)

### `contact.js`
Exporta `contactInfo` i `horaris`.

`horaris` té tres temporades: `hivern`, `primavera`, `estiu`.
A `Location.jsx` s'usa `horaris.primavera` — **cal canviar manualment** quan canvia la temporada.

### `products.js`
Quatre arrays exportats: `gelats`, `cafesXocolataInfusions`, `begudes`, `perMenjar`.

Cada ítem té:
```js
{ id, subcategoria, nom, descripcio, preu, nota?, extra? }
```
- `extra: true` → ítem de suplement (es renderitza en cursiva, sense línia separadora)
- `nota` → badge petit al costat del nom (ex: `"8h–12:30h"`)

La secció Products agrupa els ítems per `subcategoria` i distribueix els grups en dues columnes equilibrades pel pes (nombre d'ítems).

---

## Routing

| Ruta                    | Component            | Header/Footer |
|-------------------------|----------------------|---------------|
| `/`                     | HomePage             | Sí            |
| `/avis-legal`           | AvisLegal            | No            |
| `/politica-privacitat`  | PoliticaPrivacitat   | No            |
| `/politica-cookies`     | PoliticaCookies      | No            |

Les pàgines legals no tenen navegació de retorn integrada (millora pendent).

---

## Comportaments destacats

- **Header:** transparent quan és a dalt de la pàgina, `bg-iseo-100/95` amb blur al fer scroll (threshold: 50px)
- **Horaris:** detecta el dia actual amb `new Date().getDay()` i destaca la fila corresponent
- **Carta:** canvi de pestanya amb estat local `activeTab` sense cap animació de transició

---

## Decisions tècniques

- Les dades de la carta i contacte estan externalitzades a `src/data/` per facilitar actualitzacions sense tocar els components
- La carta usa distribució de dues columnes calculada algorítmicament (no CSS columns) per equilibrar el pes visual
- No s'usa TypeScript — el projecte és JSX pur
- Framer Motion importat a `Location.jsx` però l'animació del mapa no s'activa (showMap sempre és true)

---

## Millores pendents

- [ ] Domini propi (actualment `caffeiseo.netlify.app`) — actualitzar canonical, OG URL, sitemap i schema quan es tingui
- [ ] Lògica automàtica de temporada als horaris (per data del calendari)
- [ ] Pàgines legals sense navegació de retorn
- [ ] Eliminar codi mort: `showMap` mai canvia, `isLoaded` fade-in no aporta res
- [ ] Comandes online (futur)

## SEO implementat

- `public/robots.txt` — allow all + referència a sitemap
- `public/sitemap.xml` — totes les rutes indexables
- `netlify.toml` — redirects SPA (200), cache headers d'assets, headers de seguretat
- `index.html` — schema `CafeOrCoffeeShop` (LocalBusiness) amb adreça, coordenades, horaris, xarxes socials
- `index.html` — canonical, hreflang `ca`, geo meta tags
- `index.html` — OG image corregida a `terrassaiseo.jpg`
- `index.html` — Google Fonts via `<link>` al head (no `@import` CSS, evita render-blocking)
- `Header.jsx` — `h1` canviat a `p` (eliminat H1 duplicat, ara l'únic H1 és al Hero)
- `Hero.jsx` — afegit "Caldes de Montbui" visible dins el H1
- `About.jsx` — alt text descriptiu a la imatge amb keywords locals
