

let editedPlayer = 0; //numer gracza którego edytujemy, let dlatego, że chcemy zmienić wartość


const playerConfigOverlay = document.getElementById("config-overlay"); //pole konfiguracja
const backDropElement = document.getElementById("backdrop"); //przyciemnione tło konfiguracji
const configForm = document.getElementById("playername-config"); // forma, input, label dla konfiguracji

const editPlayerButton1 = document.getElementById("edit-player-1-btn"); //przycisk edit 1
const editPlayerButton2 = document.getElementById("edit-player-2-btn"); //przycisk edit 2

const cancelConfigButton = document.getElementById("button-alt"); // przycisk wyłączający konfigurację
const configEroorText = document.getElementById("config-error")// komunikat błąd konfiguracji

const playerNameInput = document.getElementById("playername"); //pole do wpisania nazwy gracza
const confirmButton = document.getElementById("confirm-button"); //przycisk potwierdzający nazwę gracza

const player1Name = document.getElementById("player-1-name"); //nazwa gracza 1
const player2Name = document.getElementById("player-2-name"); //nazwa gracza 2

editPlayerButton1.addEventListener("click", openPlayerConfig);
editPlayerButton2.addEventListener("click", openPlayerConfig);

cancelConfigButton.addEventListener("click", closeConfiguration);
backDropElement.addEventListener("click", closeConfiguration);

configForm.addEventListener("submit", changePlayerName);
