let textListe = [];

function addText() {
  let textInput = document.getElementById("textInput").value;
  textListe.push(textInput);

  let ausgabeListe = document.getElementById("ausgabeListe");
  ausgabeListe.innerHTML = "";

  // Textliste in der HTML darstellen
  textListe.forEach(function(text, index) {
    ausgabeListe.innerHTML += (index + 1) + ". " + text + "<br>";
  });

  // "Löschen"-Button anzeigen
  let loeschenButton = document.getElementById("loeschenButton");
  loeschenButton.style.display = "inline";
}

function loescheText() {
  // Letzten Eintrag aus der Liste entfernen
  textListe.pop();

  let ausgabeListe = document.getElementById("ausgabeListe");
  ausgabeListe.innerHTML = "";

  // Textliste in der HTML darstellen
  textListe.forEach(function(text, index) {
    ausgabeListe.innerHTML += (index + 1) + ". " + text + "<br>";
  });

  // "Löschen"-Button ausblenden, wenn die Liste leer ist
  let loeschenButton = document.getElementById("loeschenButton");
  if (textListe.length == 0) {
    loeschenButton.style.display = "none";
  }
}
