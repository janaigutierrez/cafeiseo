// ─────────────────────────────────────────────────────────────
// GELATS — Dades de la vitrina
// ─────────────────────────────────────────────────────────────

export const ALERGENS = {
    L: 'Llet',
    O: 'Ous',
    G: 'Gluten',
    FC: 'Fruits de closca',
    C: 'Cacauets',
    S: 'Soja',
    SF: 'Sulfits',
}

export const CATEGORIES = [
    { id: 'tots', nom: 'Tots' },
    { id: 'cremosos', nom: 'Cremosos' },
    { id: 'fruita', nom: 'De Fruita' },
    { id: 'xocolata', nom: 'Xocolata' },
    { id: 'fruitssecs', nom: 'Fruits Secs i Cafè' },
    { id: 'especials', nom: 'Especials' },
]

// disponibilitat: 'sempre' | 'temporada' | 'puntual'
export const gelatsList = [

    // CREMOSOS
    { id: 1, nom: 'Vainilla', categoria: 'cremosos', descripcio: '', alergens: [ALERGENS.L], disponibilitat: 'sempre', imatge: '/images/gelatos/vainilla.jpg' },
    { id: 2, nom: 'Nata', categoria: 'cremosos', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/nata.jpg' },
    { id: 3, nom: 'Mascarpone', categoria: 'cremosos', descripcio: 'Mascarpone amb melmelada de figues i nous', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/mascarpone.jpg' },
    { id: 4, nom: 'Dolç de Llet', categoria: 'cremosos', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/dolç-llet.jpg' },
    { id: 5, nom: 'Stracciatella', categoria: 'cremosos', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/straciatella.jpg' },

    // DE FRUITA
    { id: 6, nom: 'Mango', categoria: 'fruita', descripcio: '', alergens: [], disponibilitat: 'temporada', imatge: '/images/gelatos/mango.jpg' },
    { id: 7, nom: 'Amarena', categoria: 'fruita', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/amarena.jpg' },
    { id: 8, nom: 'Iogurt Fruites del Bosc', categoria: 'fruita', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/iogurt-fdb.jpg' },

    // XOCOLATA
    { id: 9, nom: 'Xocolata', categoria: 'xocolata', descripcio: 'La millor recepta de gelat de xocolata que provaràs mai', alergens: ['L'], disponibilitat: 'sempre', imatge: '/images/gelatos/xocolata.jpg' },
    { id: 10, nom: 'Bacio', categoria: 'xocolata', descripcio: 'Xocolata amb avellanes del Piemonte i cobertura de xocolata negra', alergens: ['L', 'FC'], disponibilitat: 'sempre', imatge: '/images/gelatos/bacio.jpg' },
    { id: 11, nom: 'After Eight', categoria: 'xocolata', descripcio: 'Menta refrescant amb cobertura de xocolata negra', alergens: [], disponibilitat: 'puntual', imatge: '/images/gelatos/aftereight.jpg' },
    { id: 12, nom: 'Oreo', categoria: 'xocolata', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/oreo.jpg' },
    { id: 13, nom: 'Cookies', categoria: 'xocolata', descripcio: 'Gelat de galeta amb crema de xocolata i avellanes barrejada amb trossets de cookies', alergens: ['L', 'G'], disponibilitat: 'sempre', imatge: '/images/gelatos/cookies.jpg' },

    // FRUITS SECS I CAFÈ
    { id: 14, nom: 'Avellana', categoria: 'fruitssecs', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/avellana.jpg' },
    { id: 15, nom: 'Festuc', categoria: 'fruitssecs', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/festuc.jpg' },
    { id: 16, nom: 'Cafè', categoria: 'fruitssecs', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: '/images/gelatos/cafe.jpg' },

    // ESPECIALS — afegir gustos aquí quan estiguin disponibles
    // { id: 17, nom: '', categoria: 'especials', descripcio: '', alergens: [], disponibilitat: 'sempre', imatge: null },
]

// ─────────────────────────────────────────────────────────────
// ENVASOS PER EMPORTAR
// ─────────────────────────────────────────────────────────────
export const envasos = [
    { id: 'S', mida: 'S', litres: '0,5 L', preu: null },
    { id: 'M', mida: 'M', litres: '0,75 L', preu: null },
    { id: 'L', mida: 'L', litres: '1 L', preu: null },
    { id: 'XL', mida: 'XL', litres: '1,2 L', preu: '17€' },
]
