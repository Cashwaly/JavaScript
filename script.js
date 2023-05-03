// Array erstellen
let meinArray = ["Apfel", "Banane", "Orange", "Erdbeere"];

// Referenz auf HTML-Element holen
let meinArrayDiv = document.getElementById("meinArray");

// Schleife durch das Array
for (let i = 0; i < meinArray.length; i++) {
  // Ein neues Element erstellen
  let neuesElement = document.createElement("p");
  // Den Text des Elements auf das Array-Element setzen
  neuesElement.innerText = meinArray[i];
  // Das Element zum HTML-Dokument hinzufügen
  meinArrayDiv.appendChild(neuesElement);
}
