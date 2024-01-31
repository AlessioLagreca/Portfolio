const mainDesktop = document.getElementById("main");

function apriFinestra() {
  const finestra = document.createElement("div");
  finestra.className = "finestra";

  const topBar = document.createElement("div");
  topBar.className = "topBar";
  finestra.appendChild(topBar);

  const topName = document.createElement("div");
  topName.className = "topName";

  const closeButton = document.createElement("div");
  closeButton.className = "closeBtn";
  closeButton.style.cursor = "pointer";
  topBar.appendChild(closeButton);

  mainDesktop.appendChild(finestra);
}
