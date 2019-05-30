var items = document.getElementsByClassName("box")
var user_choice_p = document.querySelector(".user-choice > p"); 
var player1 = true

var winAnswers = [
  [items[0], items[1], items[2]], // first colum
  [items[3], items[4], items[5]], // second column
  [items[6], items[7], items[8]], // third column
  [items[0], items[3], items[6]], // first row
  [items[1], items[4], items[7]], // second row
  [items[2], items[5], items[8]], // third row
  [items[0], items[4], items[8]], // \ diagonal
  [items[2], items[4], items[6]], // / diagonal
]

for(var i = 0; i < items.length; i++) {
items[i].addEventListener("click", function() {  
    
    // if player 1 print x if player 2 print o
    player1 ? this.player = 'X' : this.player = 'O'
    this.innerHTML = this.player
    // toggle the current player
    player1 = !player1
    checkWin();
})
}

function checkWin()
{
  winAnswers.forEach(function(combo){
  {
    // if the first item is empty skip this combo (rows/columns with at least one missing value can never win)
    if (combo[0].player){ 
      // check to see if all of the cells in a combo are equal, if so the game is won!
      if(combo[0].player === combo[1].player && combo[1].player === combo[2].player)
    {
     console.log('WIN')
     return
    }
    }
    
  }
 })
}