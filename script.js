const mainDesktop = document.getElementById("main");

function apriFinestra(nome) {
  const finestra = document.createElement("div");
  finestra.className = "finestra";

  const topBar = document.createElement("div");
  topBar.className = "topBar";
  finestra.appendChild(topBar);

  const topName = document.createElement("div");
  topName.className = "topName";
  topName.textContent = nome.classList.item(1);
  topBar.appendChild(topName);

  const closeButton = document.createElement("div");
  closeButton.className = "closeBtn";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", chiudiFinestra);
  topBar.appendChild(closeButton);

  mainDesktop.appendChild(finestra);
}

function chiudiFinestra() {
  const finestra = document.querySelector(".finestra");
  finestra.remove();
}
