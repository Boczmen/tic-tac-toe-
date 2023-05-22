function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // + zamienia "1" jako string na 1 jako numer
  playerConfigOverlay.style.display = "block";
  backDropElement.style.display = "block";
  console.log(editedPlayer);
}

function closeConfiguration() {
  playerConfigOverlay.style.display = "none";
  backDropElement.style.display = "none";
  configForm.firstElementChild.classList.remove("error");
  configEroorText.textContent = "";
  configForm.firstElementChild.lastElementChild.value = "";
  
}

function changePlayerName(event) {
  //   const configInput = EventTarget.textContent

  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); //trim usuwa spacje przed i po tekście

  if (!enteredPlayername) {
    // entered playername ===''
    event.target.firstElementChild.classList.add("error");
    configEroorText.textContent = "Please enter a name!";
    return;
  }
  const updatedPlayerName = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerName.children[1].textContent = enteredPlayername;

  players[editedPlayer-1].name = enteredPlayername 

  closeConfiguration()
}
