var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt ("Среди 7 клеток спрятан трёхпалубный корабль. Попробуй потопить его. Чем меньше попыток, тем лучше! Введи число 0-6.");
	if (guess < 0 || guess > 6) {
		alert("Введи число от 0 до 6!");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попал!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Ты потопил корабль!");
			}
		} else {
			alert("Мимо!");
		}
	}
}
var stats = "Количество выстрелов: " + guesses + ". Твоя точность выстрелов: " + (3/guesses);
alert(stats);