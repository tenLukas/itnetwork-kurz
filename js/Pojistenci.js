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
  
    this.zaznamy.forEach((zaznam, index) => {
      const row = document.createElement("tr");
  
      const jmenoCell = document.createElement("td");
      jmenoCell.textContent = zaznam.jmeno;
      row.appendChild(jmenoCell);
  
      const prijmeniCell = document.createElement("td");
      prijmeniCell.textContent = zaznam.prijmeni;
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
  
      const akceCell = document.createElement("td");
  
      const upravitButton = document.createElement("button");
      upravitButton.textContent = "Upravit";
      upravitButton.addEventListener("click", () => {
        this.upravitPojistence(index, row);
      });
      akceCell.appendChild(upravitButton);
  
      const potvrditButton = document.createElement("button");
      potvrditButton.textContent = "Potvrdit změny";
      potvrditButton.style.display = "none";
      potvrditButton.addEventListener("click", () => {
        this.potvrditZmeny(index, row);
      });
      akceCell.appendChild(potvrditButton);
  
      const odstranitButton = document.createElement("button");
      odstranitButton.textContent = "Odstranit pojištěnce";
      odstranitButton.addEventListener("click", () => {
        this.odstranitPojistence(index);
      });
      akceCell.appendChild(odstranitButton);
  
      row.appendChild(akceCell);
  
      tableBody.appendChild(row);
    });
  }
  
  upravitPojistence(index, row) {
    const pojistenec = this.zaznamy[index];
  
    const jmenoCell = row.cells[0];
    const prijmeniCell = row.cells[1];
    const uliceCell = row.cells[2];
    const cisloPopisneCell = row.cells[3];
    const mestoCell = row.cells[4];
    const pscCell = row.cells[5];
    const emailCell = row.cells[6];
    const telefonCell = row.cells[7];
    const akceCell = row.cells[8];
  
    const jmenoInput = document.createElement("input");
    jmenoInput.type = "text";
    jmenoInput.value = pojistenec.jmeno;
    jmenoCell.innerHTML = "";
    jmenoCell.appendChild(jmenoInput);
  
    const prijmeniInput = document.createElement("input");
    prijmeniInput.type = "text";
    prijmeniInput.value = pojistenec.prijmeni;
    prijmeniCell.innerHTML = "";
    prijmeniCell.appendChild(prijmeniInput);
  
    const uliceInput = document.createElement("input");
    uliceInput.type = "text";
    uliceInput.value = pojistenec.ulice;
    uliceCell.innerHTML = "";
    uliceCell.appendChild(uliceInput);
  
    const cisloPopisneInput = document.createElement("input");
    cisloPopisneInput.type = "text";
    cisloPopisneInput.value = pojistenec.cisloPopisne;
    cisloPopisneCell.innerHTML = "";
    cisloPopisneCell.appendChild(cisloPopisneInput);
  
    const mestoInput = document.createElement("input");
    mestoInput.type = "text";
    mestoInput.value = pojistenec.mesto;
    mestoCell.innerHTML = "";
    mestoCell.appendChild(mestoInput);
  
    const pscInput = document.createElement("input");
    pscInput.type = "text";
    pscInput.value = pojistenec.psc;
    pscCell.innerHTML = "";
    pscCell.appendChild(pscInput);
  
    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.value = pojistenec.email;
    emailCell.innerHTML = "";
    emailCell.appendChild(emailInput);
  
    const telefonInput = document.createElement("input");
    telefonInput.type = "text";
    telefonInput.value = pojistenec.telefon;
    telefonCell.innerHTML = "";
    telefonCell.appendChild(telefonInput);
  
    const upravitButton = akceCell.querySelector("button:nth-of-type(1)");
    upravitButton.style.display = "none";
  
    const potvrditButton = akceCell.querySelector("button:nth-of-type(2)");
    potvrditButton.style.display = "inline-block";
  }
  
  potvrditZmeny(index, row) {
    const pojistenec = this.zaznamy[index];
  
    const jmenoInput = row.cells[0].querySelector("input");
    pojistenec.jmeno = jmenoInput.value;
    row.cells[0].innerHTML = pojistenec.jmeno;
  
    const prijmeniInput = row.cells[1].querySelector("input");
    pojistenec.prijmeni = prijmeniInput.value;
    row.cells[1].innerHTML = pojistenec.prijmeni;
  
    const uliceInput = row.cells[2].querySelector("input");
    pojistenec.ulice = uliceInput.value;
    row.cells[2].innerHTML = pojistenec.ulice;
  
    const cisloPopisneInput = row.cells[3].querySelector("input");
    pojistenec.cisloPopisne = cisloPopisneInput.value;
    row.cells[3].innerHTML = pojistenec.cisloPopisne;
  
    const mestoInput = row.cells[4].querySelector("input");
    pojistenec.mesto = mestoInput.value;
    row.cells[4].innerHTML = pojistenec.mesto;
  
    const pscInput = row.cells[5].querySelector("input");
    pojistenec.psc = pscInput.value;
    row.cells[5].innerHTML = pojistenec.psc;
  
    const emailInput = row.cells[6].querySelector("input");
    pojistenec.email = emailInput.value;
    row.cells[6].innerHTML = pojistenec.email;
  
    const telefonInput = row.cells[7].querySelector("input");
    pojistenec.telefon = telefonInput.value;
    row.cells[7].innerHTML = pojistenec.telefon;
  
    const upravitButton = row.cells[8].querySelector("button:nth-of-type(1)");
    upravitButton.style.display = "inline-block";
  
    const potvrditButton = row.cells[8].querySelector("button:nth-of-type(2)");
    potvrditButton.style.display = "none";
  }
  
  odstranitPojistence(index) {
    this.zaznamy.splice(index, 1);
    this.vytvorTabulku();
  }

}

