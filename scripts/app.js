let editedPlayer = 0; //numer gracza którego edytujemy, let dlatego, że chcemy zmienić wartość
let activePlayer = 0; //numer gracza którego jest teraz kolej

let currentRound = 1; //numer akturalnej rundy 1 bo zaczynamy od pierwszej rundy

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];



const playerConfigOverlay = document.getElementById("config-overlay"); //pole konfiguracja
const backDropElement = document.getElementById("backdrop"); //przyciemnione tło konfiguracji
const configForm = document.getElementById("playername-config"); // forma, input, label dla konfiguracji

const editPlayerButton1 = document.getElementById("edit-player-1-btn"); //przycisk edit 1
const editPlayerButton2 = document.getElementById("edit-player-2-btn"); //przycisk edit 2

const cancelConfigButton = document.getElementById("button-alt"); // przycisk wyłączający konfigurację
const configEroorText = document.getElementById("config-error"); // komunikat błąd konfiguracji
const gameArea = document.getElementById("active-game"); // pole gry
const startGameButton = document.getElementById("start-game-button"); // przycisk rozpoczynający grę
// const gameFileds = document.querySelectorAll("#game-board li"); // zbiór pojedynczych pól gry
const gameBoard = document.getElementById("game-board"); // Wszystkie pola LI razem z OL
const gameOverElement = document.getElementById('game-over') // pole wyskakujące po zakończeniu gry


const playerNameInput = document.getElementById("playername"); //pole do wpisania nazwy gracza
const confirmButton = document.getElementById("confirm-button"); //przycisk potwierdzający nazwę gracza

const player1Name = document.getElementById("player-1-name"); //nazwa gracza 1
const player2Name = document.getElementById("player-2-name"); //nazwa gracza 2
const activePlayerName = document.getElementById("active-player-name"); //nazwa gracza którego jest teraz kolej

editPlayerButton1.addEventListener("click", openPlayerConfig);
editPlayerButton2.addEventListener("click", openPlayerConfig);

cancelConfigButton.addEventListener("click", closeConfiguration);
backDropElement.addEventListener("click", closeConfiguration);

configForm.addEventListener("submit", changePlayerName);

startGameButton.addEventListener("click", startNewGame);

// for (const gameFiled of gameFileds) {
//   gameFiled.addEventListener("click", selectGameField);
// } // gameField to pojedyncze pole gry

gameBoard.addEventListener("click", selectGameField);
