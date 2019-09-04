// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test
function calculateTotalScore(scores) {
    // Calculates the total of the array of scores that is passed in
    let totalScore = 0;
    for (let score of scores) {
        totalScore += score;
    }
    return totalScore;
}

function findWinner(players) {
    let winner = players[0].name;
    let winnerScore = calculateTotalScore(players[0].scores);
    for (let ind = 1; ind < players.length; ind++) {
        let playerTotalScore = calculateTotalScore(players[ind].scores)
        if (playerTotalScore > winnerScore) {
            winner = players[ind].name;
            winnerScore = playerTotalScore;
        }
    }
    return winner.name;
}

module.exports = {
    findWinner
}