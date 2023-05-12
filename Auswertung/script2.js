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
      label: "Dein Ergebnis",
      data: [3, 2, 4, 3, 6],
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
  scale: {
    ticks: {
      suggestedMin: 0,
      suggestedMax: 5,
      stepSize: 1,
    },
  },
  legend: {
    labels: {
      fontSize: 0,
    },
  },
};

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: options,
});
