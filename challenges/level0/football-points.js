// challenge 25
let wins = 3, draws = 4, losses = 2;
let result = calculatePoints(wins, draws, losses);

function calculatePoints(w, d, l) {
    let wins = w * 3;
    let draws = d * 1;
    let losses = l;
    losses = 0;

    return wins + draws + losses;
}


console.log(`O total de pontos foi de: ${result}`);










// Create a function that takes the number of wins, draws
// and losses and calculates the number of points a
// football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points
