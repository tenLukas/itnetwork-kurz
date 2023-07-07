'use strict';

class Pojistenci {
  constructor(jazyk = "cs-CZ") {
    const zaznamyZeStorage = localStorage.getItem("zaznamy");
    this.zaznamy = zaznamyZeStorage ? JSON.parse(zaznamyZeStorage) : [];
    this.jazyk = jazyk;

    this.jmenoInput = document.getElementById("jmeno");
    this.prijmeniInput = document.getElementById("prijmeni");
    this.uliceInput = document.getElementById("ulice");
    this.cisloPopisneInput = document.getElementById("cisloPopisne");
    this.mestoInput = document.getElementById("mesto");
    this.pscInput = document.getElementById("psc");
    this.emailInput = document.getElementById("email");
    this.telefonInput = document.getElementById("telefon");
    this.pridatPojistenecButton = document.getElementById("pridatPojistenecButton");

    this.pridatPojistenecButton.addEventListener("click", (event) => {
      event.preventDefault();

      const jmeno = this.jmenoInput.value;
      const prijmeni = this.prijmeniInput.value;
      const ulice = this.uliceInput.value;
      const cisloPopisne = this.cisloPopisneInput.value;
      const mesto = this.mestoInput.value;
      const psc = this.pscInput.value;
      const email = this.emailInput.value;
      const telefon = this.telefonInput.value;

      const novyZaznam = new Pojistenec(
        jmeno,
        prijmeni,
        ulice,
        cisloPopisne,
        mesto,
        psc,
        email,
        telefon
      );

      this.zaznamy.push(novyZaznam);
      this.vytvorTabulku();

      this.jmenoInput.value = "";
      this.prijmeniInput.value = "";
      this.uliceInput.value = "";
      this.cisloPopisneInput.value = "";
      this.mestoInput.value = "";
      this.pscInput.value = "";
      this.emailInput.value = "";
      this.telefonInput.value = "";
    });
  }

  vytvorTabulku() {
    const tableBody = document.getElementById("pojistenecTableBody");
    tableBody.innerHTML = "";

    this.zaznamy.forEach((zaznam) => {
      const row = document.createElement("tr");

      const jmenoCell = document.createElement("td");
      jmenoCell.textContent = zaznam.jmeno;
      row.appendChild(jmenoCell);

      const prijmeniCell = document.createElement("td");
      prijmeniCell.textContent= zaznam.prijmeni;
      row.appendChild(prijmeniCell);

      const uliceCell = document.createElement("td");
      uliceCell.textContent = zaznam.ulice;
      row.appendChild(uliceCell);

      const cisloPopisneCell = document.createElement("td");
      cisloPopisneCell.textContent = zaznam.cisloPopisne;
      row.appendChild(cisloPopisneCell);

      const mestoCell = document.createElement("td");
      mestoCell.textContent = zaznam.mesto;
      row.appendChild(mestoCell);

      const pscCell = document.createElement("td");
      pscCell.textContent = zaznam.psc;
      row.appendChild(pscCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = zaznam.email;
      row.appendChild(emailCell);

      const telefonCell = document.createElement("td");
      telefonCell.textContent = zaznam.telefon;
      row.appendChild(telefonCell);

      tableBody.appendChild(row);
    });
  }
}

