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

  console.log(gameData);
  switchPlayer();
}

// function playerTurnName() {
//   if (activePlayer === 0) {
//     activePlayerName.textContent = players[0].name;
//   } else {
//     activePlayerName.textContent = players[1].name;
//   }
// }
