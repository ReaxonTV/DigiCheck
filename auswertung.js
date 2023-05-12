// Funktion Datenverarbeitung
function auswertung_datenverarbeitung(jsonFile) {
  // JSON file lesen
  const data = require(jsonFile);

  // Wert von "Datenverarbeitung" holen
  const datenverarbeitungValue = data.Datenverarbeitung;

  // Auswertung
  if (datenverarbeitungValue < 6) {
    console.log("Kurs dringend nötig.");
  } else if (datenverarbeitungValue >= 6 && datenverarbeitungValue <= 11) {
    console.log("Kurs empfohlen.");
  } else if (datenverarbeitungValue > 11 && datenverarbeitungValue <= 14) {
    console.log("Auffrischung empfohlen.");
  } else if (datenverarbeitungValue > 14) {
    console.log("Gute Arbeit!");
  }
}

// Funktion Kommunikation
function auswertung_kommunikation(jsonFile) {
  const data = require(jsonFile);
  const kommunikationValue = data.Kommunikation;

  if (kommunikationValue < 6) {
    console.log("Kurs dringend nötig.");
  } else if (kommunikationValue >= 6 && kommunikationValue <= 11) {
    console.log("Kurs empfohlen.");
  } else if (kommunikationValue > 11 && kommunikationValue <= 14) {
    console.log("Auffrischung empfohlen.");
  } else if (kommunikationValue > 14) {
    console.log("Gute Arbeit!");
  }
}

// Funktion Inhaltserstellung
function auswertung_inhaltserstellung(jsonFile) {
  const data = require(jsonFile);
  const InhaltserstellungValue = data.Inhaltserstellung;

  if (InhaltserstellungValue < 9) {
    console.log("Kurs dringend nötig.");
  } else if (InhaltserstellungValue >= 9 && InhaltserstellungValue <= 16) {
    console.log("Kurs empfohlen.");
  } else if (InhaltserstellungValue > 17 && InhaltserstellungValue <= 21) {
    console.log("Auffrischung empfohlen.");
  } else if (InhaltserstellungValue > 21) {
    console.log("Gute Arbeit!");
  }
}

// Funktion Sicherheit
function auswertung_sicherheit(jsonFile) {
  const data = require(jsonFile);
  const SicherheitValue = data.Sicherheit;

  if (SicherheitValue < 9) {
    console.log("Kurs dringend nötig.");
  } else if (SicherheitValue >= 9 && SicherheitValue <= 16) {
    console.log("Kurs empfohlen.");
  } else if (SicherheitValue > 17 && SicherheitValue <= 21) {
    console.log("Auffrischung empfohlen.");
  } else if (SicherheitValue > 21) {
    console.log("Gute Arbeit!");
  }
}

// Funktion Problemlöseverhalten
function auswertung_problemloeseverhalten(jsonFile) {
  const data = require(jsonFile);
  const ProblemloeseverhaltenValue = data.Problemoeseverhalten;

  if (ProblemloeseverhaltenValue < 8) {
    console.log("Kurs dringend nötig.");
  } else if (
    ProblemloeseverhaltenValue >= 8 &&
    ProblemloeseverhaltenValue <= 14
  ) {
    console.log("Kurs empfohlen.");
  } else if (
    ProblemloeseverhaltenValue > 15 &&
    ProblemloeseverhaltenValue <= 19
  ) {
    console.log("Auffrischung empfohlen.");
  } else if (ProblemloeseverhaltenValue > 19) {
    console.log("Gute Arbeit!");
  }
}

// Usage: Call the function and pass the path to the JSON file
auswertung_ergebnis("testuser.json");
