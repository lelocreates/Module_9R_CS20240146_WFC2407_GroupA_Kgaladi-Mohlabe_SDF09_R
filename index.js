// Defining variables

// Card number variables 
let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

// Variables that determine the state of the game 
let hasBlackJack = false 
let isAlive = true

// Variables for Game win/loss/new card draw messages 
let message = ""
let messageEl = document.getElementById("message-el")

// Variables for sum and card messages 
let sumEl = document.getElementById("#sum-el")
let cardsEl = document.getElementById("#cards-el")

// Defining game logic with startGame and renderGame function //

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum 

    // if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
    // else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
    // else -> "You're out of the game! 😭" .//
    if (sum <= 20) { 
        message= "Do you want to draw a new card"
    } else if (sum === 21 ) {
        message= "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message= "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// Function to add new game when a new card is required
function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 7
    sum += card
    renderGame()
}



