var game = {
 kills: 2,
 luck: 1,
 gold: 20,
 
}
game.luck = 2;
var artid01 = {
  change: "luck",
}
a = artid01.change;
console.log(game[a]); //returns "luck"
