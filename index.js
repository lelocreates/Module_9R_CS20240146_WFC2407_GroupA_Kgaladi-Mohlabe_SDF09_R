// Defining variables //

let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

let hasBlackJack = false 
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("#sum-el")
let cardsEl = document.getElementById("#cards-el")

// Defining game logic //
// 
// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭" .//


function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20){ 
        message= "Do you want to draw a new card"
    } else if (sum === 21 ) {
        message= "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message= "You're out of the game!"
        isAlive = false
    }
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 7
    sum += card
    renderGame()
}


messageEl.textContent = message