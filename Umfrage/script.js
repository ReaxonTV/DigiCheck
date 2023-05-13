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

    // Gesamtpunktzahl für jede Kategorie berechnen
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

  // Durchschnittsscore für jede Kategorie berechnen und in das Ergebnisobjekt einfügen
  const durchschnittScores = {
    datenverarbeitung: kategorieScores.datenverarbeitung / 6,
    kommunikation: kategorieScores.kommunikation / 6,
    erstellung: kategorieScores.erstellung / 9,
    sicherheit: kategorieScores.sicherheit / 9,
    problemloesung: kategorieScores.problemloesung / 8,
  };

  results["durchschnittScores"] = durchschnittScores;

  // Nur die durchschnittlichen Ergebnisse in einer Variablen speichern
  const aggregatedResults = durchschnittScores;

  // Hier kannst du jetzt die weitere Verarbeitung der aggregierten Ergebnisse durchführen
  // Zum Beispiel: die aggregierten Ergebnisse in der Konsole ausgeben
  console.log(aggregatedResults);

  // Save the results to the local storage
  localStorage.setItem("aggregatedResults", JSON.stringify(aggregatedResults));

  console.log("Aggregated results saved to local storage");
});

// Holen Sie sich das Modal-Fenster und die Schaltfläche
var modal = document.getElementById("myModal");
var btn = document.getElementById("submit-button");

// Holen Sie sich das Schließ-Symbol und fügen Sie einen Klick-Handler hinzu, um das Fenster zu schließen
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// Fügen Sie einen Klick-Handler zur Schaltfläche hinzu, um das Modal-Fenster anzuzeigen
btn.onclick = function () {
  modal.style.display = "block";
};

function showConfirmPopup() {
  var popup = document.getElementById("confirm-popup");
  var progressBar = document.getElementById("progress-bar");

  popup.style.display = "block";

  progressBar.classList.add("active");

  setTimeout(function () {
    popup.style.display = "none";
    progressBar.classList.remove("active");
    setTimeout(function () {
      window.location.href = "../Auswertung/index2.html";
    }, 250);
  }, 2000);
  return false; // return false, um das Standardverhalten des Buttons zu verhindern
}
