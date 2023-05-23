



function resetGame { }







function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("proszę wybrać nazwę gracza");
    return;
  }
  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    // jeśli klikniemy w coś co nie jest LI funkcja nie zadziała
    return;
  }
  const selectedField = event.target;

  const selectedColumn = +selectedField.dataset.col - 1;
  const selectedRow = +selectedField.dataset.row - 1; // piszemy -1 bo liczenie zaczyna się od 0, nie musimy dodawać plusa bo operacja matematyczna zmienia wynik ze string na numer

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("proszę wybrać puste pole!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  // console.log(gameData);

  const winnerId = checkForGameOver();

  console.log(winnerId)

  currentRound++; // currentRound = currentRound + 1

  if (winnerId !== 0) {
    gameOver(winnerId);
  }

  switchPlayer();
}

function checkForGameOver() {
  for (
    let i = 0;
    i < 3;
    i++ // sprawdzanie czy w rzędach poziomych wszystkie pola zaznaczył ten sam gracz
  ) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    )
      return gameData[i][0];
  }

  for (
    let i = 0;
    i < 3;
    i++ // sprawdzanie czy w kolumnach pionowych wszystkie pola zaznaczył ten sam gracz
  ) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    )
      return gameData[0][i];
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function gameOver(winnerId) {
  gameOverElement.style.display = "block";

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "Remis!";
  }
}
