# Spare Parts API

## Projekti kirjeldus

Rakenduse eesmärk on lugeda varuosade andmed CSV-vormingus failist mällu ning teha need HTTP API kaudu kättesaadavaks JSON-vormingus.

Projekt kasutab Node.js-i, Expressi ja csv-parserit.

## Vajalikud tööriistad

- Node.js
- npm
- Git

## Projekti paigaldamine

1. Klooni projekt GitHubist või laadi projekt alla.
2. Ava terminalis projekti kaust:

   `cd spare-parts-api`

3. Paigalda vajalikud sõltuvused:

   `npm install`

4. Laadi alla andmefail [LE.txt](https://github.com/timotr/harjutused/blob/main/hajusrakendused/LE.txt).
5. Salvesta LE.txt projekti juurkausta, server.js faili kõrvale.

## Rakenduse käivitamine

Käivita terminalis järgmine käsk:

`node server.js`

Andmete eduka laadimise korral kuvatakse terminalis:

`Spare parts loaded.`

## Planeeritud API funktsionaalsus

- Varuosade andmete väljastamine JSON-vormingus.
- Otsing tootenime järgi.
- Otsing tootekoodi järgi.
- Tulemuste jagamine lehekülgedeks, 30 toodet lehel.
- Tulemuste sorteerimine hinna järgi.

## Kasutatud tehnoloogiad

- JavaScript
- Node.js
- Express
- csv-parser

## Rakenduse peatamine

Rakenduse peatamiseks vajuta terminalis `Ctrl + C`.
