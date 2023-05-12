var kategorieScores = JSON.parse(localStorage.getItem("aggregatedResults")) || {
  datenverarbeitung: 0,
  kommunikation: 0,
  erstellung: 0,
  sicherheit: 0,
  problemloesung: 0,
};

// Laden der Daten aus dem LocalStorage
var storedData = JSON.parse(localStorage.getItem("kategorieScores"));
if (storedData) {
  kategorieScores = storedData;
}

// Anpassen der Daten für das Diagramm
var data = {
  labels: [
    "Datenverarbeitung",
    "Kommunikation",
    "Erstellung von Inhalten",
    "Sicherheit",
    "Problemlöseverhalten",
  ],
  datasets: [
    {
      label: "Wert",
      data: [
        kategorieScores.datenverarbeitung,
        kategorieScores.kommunikation,
        kategorieScores.erstellung,
        kategorieScores.sicherheit,
        kategorieScores.problemloesung,
      ],
      backgroundColor: "rgba(255, 9, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Durchschnitt aller Teilnehmer",
      data: [0, 0, 0, 0, 0],
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: "rgba(0, 0, 0, 0)",
      borderWidth: 1,
    },
  ],
};

var options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          suggestedMax: 5,
          stepSize: 1,
        },
      },
    ],
  },
};

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: options,
});
