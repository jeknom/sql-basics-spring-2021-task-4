# Helsinki University SQL Basics Spring 2021

This repo contains the fourth task for the course. The goal was to learn what happens when data is written by multiple users at the same time.

## Instructions for the assignment in finnish:

```
## Testi 1

Tietokantaan on luotu seuraava taulu, joka on aluksi tyhjä:

CREATE TABLE Testi (x INTEGER);

Tee ohjelma, joka toistaa 5000 kertaa seuraavan operaation:

1. Hae SELECT-kyselyllä taulun Testi suurin arvo x
2. Lisää tauluun Testi uusi rivi, jonka arvona on x+1
3. Tulosta lisätyn rivin arvo x

Testaa ensin, että ohjelma toimii: kun ohjelma suoritetaan ja taulu Testi on aluksi tyhjä, tauluun ilmestyy 5000 riviä, joilla on arvot 1, 2, 3, ..., 5000.
Tee sitten testi, jossa taulu on taas alussa tyhjä ja käynnistät samaan aikaan kaksi ohjelmaa, jotka molemmat lisäävät rinnakkain 5000 riviä tauluun.

Mitä havaitset? Montako riviä taulussa on lopuksi ja mikä on suurin arvo x rivillä?


## Testi 2

Toista testi 1 niin, että taulu onkin määritelty näin:

CREATE TABLE Testi (x INTEGER UNIQUE);

Toteuta rivin lisääminen niin, että lisäämistä yritetään uudestaan (tarvittaessa useita kertoja), jos lisääminen epäonnistuu UNIQUE-ehdon takia.
Mitä havaitset? Montako riviä taulussa on lopuksi ja mikä on suurin arvo x rivillä?


## Testi 3

Toista testi 1 niin, että komennot SELECT ja INSERT suoritetaan transaktion sisällä (eli alussa suoritetaan BEGIN ja lopussa COMMIT).
Toteuta ohjelma niin, että transaktiota yritetään uudestaan (tarvittaessa useita kertoja), jos komento epäonnistuu. Suorita välissä komento ROLLBACK, jotta transaktio ei jää jumiin.

Mitä havaitset? Montako riviä taulussa on lopuksi ja mikä on suurin arvo x rivillä?
```
