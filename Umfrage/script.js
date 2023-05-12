// den Submit-Button abrufen
const submitButton = document.getElementById("submit-button");

// auf Klick-Event des Submit-Buttons hören
submitButton.addEventListener("click", function () {
  // leere Objekte erstellen, um die aggregierten Ergebnisse zu speichern
  const kategorieScores = {
    datenverarbeitung: 0,
    kommunikation: 0,
    erstellung: 0,
    sicherheit: 0,
    problemloesung: 0,
  };
  const results = {};

  // alle Fragen durchgehen
  const questions = document.querySelectorAll(".kategorie select");
  questions.forEach(function (question, index) {
    // die Antwort auswählen
    const answer = question.value;

    // den Score für die Antwort berechnen und speichern
    let score;
    switch (answer) {
      case "a":
        score = 0;
        break;
      case "b":
        score = 1;
        break;
      case "c":
        score = 2;
        break;
      case "d":
        score = 3;
        break;
      default:
        score = null;
        break;
    }
    results[`question${index + 1}`] = score;

    // aggregierte Scores berechnen
    if (index < 6) {
      kategorieScores.datenverarbeitung += score;
    } else if (index < 12) {
      kategorieScores.kommunikation += score;
    } else if (index < 21) {
      kategorieScores.erstellung += score;
    } else if (index < 30) {
      kategorieScores.sicherheit += score;
    } else {
      kategorieScores.problemloesung += score;
    }
  });

  // die aggregierten Ergebnisse in das Ergebnisobjekt einfügen
  results["kategorieScores"] = kategorieScores;

  // die Ergebnisse als JSON-String speichern
  const jsonResults = JSON.stringify(results);

  // die Ergebnisse in einer JSON-Datei speichern (z.B. "results.json")
  const blob = new Blob([jsonResults], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "results.json";
  a.click();
});
