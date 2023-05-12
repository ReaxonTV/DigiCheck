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

// Usage: Call the function and pass the path to the JSON file
auswertung_datenverarbeitung("../testuser.json");
