const pojistenec = new Pojistenec();
const pojistenci = new Pojistenci();
pojistenci.zaznamy.push(
    {
      jmeno: "Jan",
      prijmeni: "Novák",
      ulice: "Hlavní ulice",
      cisloPopisne: "10",
      mesto: "Praha",
      psc: "12345",
      email: "jan@example.com",
      telefon: "123456789"
    },
    {
      jmeno: "Petra",
      prijmeni: "Svobodová",
      ulice: "Druhá ulice",
      cisloPopisne: "20",
      mesto: "Brno",
      psc: "54321",
      email: "petra@example.com",
      telefon: "987654321"
    },
 );
  
pojistenci.vytvorTabulku();