var items = document.getElementsByClassName("box")
var user_choice_p = document.querySelector(".user-choice > p"); 
var currentMark = 0
var marks = ["X","O",""]
var currentMark = true

var winAnswers = [
  [items[0], items[1], items[2]]
  ['item-4', 'item-5', 'item-6']
  ['item-7', 'item-8', 'item-9']
  ['item-1', 'item-4', 'item-7']
  ['item-2', 'item-5', 'item-8']
  ['item-3', 'item-6', 'item-9']
  ['item-1', 'item-5', 'item-9']
  ['item-3', 'item-5', 'item-7']
]

for(var i = 0; i < items.length; i++) {
items[i].addEventListener("click", function() {  
  console.log(this.id)
  
    currentMark ? this.player = 'X' : this.player = 'O'
    this.innerHTML = this.player
    
    currentMark=!currentMark
    checkWin();
})
}

function checkWin()
{
  winAnswers.forEach(function(combo){
  {
   console.log(combo[0][0].id+combo[0][1].id+combo[2])
    if(combo[0].player === combo[1].player && combo[1].player === combo[2].player)
    {
     console.log('WIN')
    }
  }
 })
}
