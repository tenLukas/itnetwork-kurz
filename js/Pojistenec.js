'use strict'

class Pojistenec {
  constructor(jmeno, prijmeni, ulice, cisloPopisne, mesto, psc, email, telefon) {
    this.jmeno = jmeno;
    this.prijmeni = prijmeni;
    this.ulice = ulice;
    this.cisloPopisne = cisloPopisne;
    this.mesto = mesto;
    this.psc = psc;
    this.email = email;
    this.telefon = telefon;
  }
  
  toString() {
    return `Jméno: ${this.jmeno}
Příjmení: ${this.prijmeni}
Ulice: ${this.ulice}
Číslo popisné: ${this.cisloPopisne}
Město: ${this.mesto}
PSČ: ${this.psc}
Email: ${this.email}
Telefon: ${this.telefon}`;
  }


}