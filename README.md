# Cafeteria Gelateria ISEO - Website

Web corporativa moderna i adaptativa per la Cafeteria Gelateria Iseo de Caldes de Montbui, especialitzada en gelats artesans, cafès de qualitat superior i productes casolans.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-06B6D4?style=flat&logo=tailwindcss)

##  Descripció del Projecte

Pàgina web desenvolupada per mostrar els productes i serveis de la Cafeteria Gelateria Iseo. El projecte està pensat com a eina de màrqueting i informació per clients potencials, amb un disseny atractiu que reflecteix la qualitat artesanal dels productes.

##  Característiques

-  **Disseny modern i atractiu** amb paleta de colors inspirada en gelats
-  **Completament adaptativa** - funciona perfectament en mòbil, tablet i desktop
-  **Animacions suaus** i transicions elegants
-  **Carrussel interactiu** per mostrar gelats destacats
-  **Secció de localització** amb horaris i informació de contacte
-  **Navegació smooth** entre seccions
-  **Optimitzat per rendiment** amb Vite
-  **TailwindCSS** per estils utilitaris i responsive design

##  Tecnologies Utilitzades

- **React 18.3.1** - Biblioteca JavaScript per a la UI
- **Vite 5.4.10** - Build tool ràpid i modern
- **TailwindCSS 3.4.0** - Framework CSS utility-first
- **Lucide React** - Llibreria d'icones moderna
- **Framer Motion** - Animacions fluides
- **React Router DOM** - Navegació entre pàgines

##  Estructura del Projecte

```
cafeteria-iseo/
├── public/
│   └── images/
│       ├── gelatos/          # Fotos dels gelats
│       ├── hero/             # Imatges principals
│       ├── about/            # Fotos de l'equip/local
│       └── products/         # Altres productes
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx    # Navegació principal
│   │   │   └── Footer.jsx    # Peu de pàgina
│   │   ├── sections/
│   │   │   ├── Hero.jsx      # Secció hero
│   │   │   ├── About.jsx     # Coneix-nos
│   │   │   ├── Products.jsx  # Gelats i productes
│   │   │   └── Location.jsx  # Ubicació i horaris
│   │   └── common/
│   │       └── ProductCard.jsx  # Targeta de producte
│   ├── data/
│   │   ├── products.js       # Dades dels productes
│   │   └── contact.js        # Info de contacte
│   ├── App.jsx               # Component principal
│   ├── main.jsx              # Punt d'entrada
│   └── index.css             # Estils globals
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md
```

## Instal·lació i Configuració

### Prerequisits

- Node.js (v16 o superior)
- npm o yarn

### Passos d'instal·lació

1. **Clonar el repositori:**
```bash
git clone https://github.com/usuari/cafeteria-iseo.git
cd cafeteria-iseo
```

2. **Instal·lar dependències:**
```bash
npm install
```

3. **Executar en mode desenvolupament:**
```bash
npm run dev
```

4. **Obrir al navegador:**
```
http://localhost:5173
```

##  Scripts Disponibles

- `npm run dev` - Inicia el servidor de desenvolupament
- `npm run build` - Crea la build de producció
- `npm run preview` - Preview de la build de producció
- `npm run lint` - Executa el linter

## Paleta de Colors

El projecte utilitza una paleta de colors personalitzada inspirada en gelats:

- **Gelato**: Tons taronges/pesca (#FFF8F1 → #FF5A1F)
- **Caffe**: Marró (#8B4513)
- **Cream**: Beix clar (#F5F2E8)

Definits a `tailwind.config.cjs`.

## Seccions del Web

###  Hero
Secció d'impacte amb imatge del llac Iseo, gradient i CTA principal.

###  Coneix-nos
Història i valors de la cafeteria amb certificat de qualitat.

### Els nostres productes
- Carrussel interactiu de gelats destacats
- Tabs per navegar entre gelats, cafès i altres productes
- Enllaç a carta completa externa

### On som
- Informació de contacte
- Horaris setmanals
- Indicacions de com arribar
- Integració amb Google Maps

### Contacte
Informació de contacte i xarxes socials al footer.

## Enllaços Externs

- **Carta digital**: [Avocaty - Caffe ISEO Gelateria](https://carta.avocaty.io/caffe-iseo-gelateria)

## Funcionalitats Futures

- Integració amb Google Maps a Location
- Formulari de contacte funcional
- Galeria d'imatges ampliable
- Blog de novetats i receptes
- Sistema de comandes online
- Integració amb xarxes socials (Instagram feed)
- Multiidioma (Català/Castellà/Anglès)
- Mode fosc

## Autor

**Janai** - Frontend Developer
- 7 anys d'experiència treballant a la Cafeteria Gelateria Iseo
- Portfolio: [@janai.dev](https://janai.dev)
- GitHub: [@janaigutierrez](https://github.com/janaigutierrez)

## Llicència

Aquest projecte és propietat de Cafeteria Gelateria Iseo. Tots els drets reservats.



**Caldes de Montbui, Barcelona**