var items = document.getElementsByClassName("box")
var user_choice_p = document.querySelector(".user-choice > p"); 

var options = ["x", "o"]
var userChoice = [] 
for(var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    this.id = "x"
    userChoice.push(this.id)
     

    // randomChoice = options[Math.floor(Math.random() * options.length)]
    // alert(`You picked ${this.id}`)
    user_choice_p.innerHTML =  `You picked ${this.id}`
  })

}
