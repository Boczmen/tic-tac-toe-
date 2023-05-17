function openPlayerConfig() {
  playerConfigOverlay.style.display = "block";
  backDropElement.style.display = "block";
}

function closeConfiguration() {
  playerConfigOverlay.style.display = "none";
  backDropElement.style.display = "none";
}

function changePlayerName(event) {
  //   const configInput = EventTarget.textContent

  event.preventDefault();
const formData = new FormData(event.target)
const enteredPlayername = formData.get('playername')

enteredPlayername = player1Name.textContent
}
