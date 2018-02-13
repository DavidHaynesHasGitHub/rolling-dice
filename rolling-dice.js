var numOfDice = process.argv.slice(2);

function rollDice() {
  var numOfRolls = parseInt(numOfDice);
  var diceRoll = '';
  for (var i = 0; i < numOfRolls; i++) {
    var min = 1;
    var max = 6;
      if (i === 0) {
      diceRoll += (Math.floor(Math.random() * (max - min + 1)) + min).toString().split('')
    } else {
      diceRoll += ", "
      diceRoll += (Math.floor(Math.random() * (max - min + 1)) + min).toString().split('')
    }
}
return 'Rolled ' + numOfDice + ' dice: ' + diceRoll;
};

console.log(rollDice(numOfDice));
