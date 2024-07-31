// Defining variables

// Card number variables 
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [] 
let sum = 0

// Variables that determine the state of the game 
let hasBlackJack = false 
let isAlive = false

// Variables for Game win/loss/new card draw messages 
let message = ""
let messageEl = document.getElementById("message-el")

// Variables for sum and card messages 
let sumEl = document.getElementById("#sum-el")
let cardsEl = document.getElementById("#cards-el")

//function renders a random card number
function getRandomCard() {
    let randomNum = Math.floor(Math.random * 14)
    // 1 must always return 11 and jack, Queen and king must all return 10
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
    return randomNum
    }
}

// Defining game logic with startGame and renderGame function //
// function thaat starts a new game 
function startGame() {
    // Reassign varible to show the start of the game 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    renderGame()
}

// funtion that renders the game when start game or new card is clicked 
function renderGame() {
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: " + sum 

    // for loop to render out all the cards in the array the time
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
    let card = getRandomCard()
    sum += card
    cards.push(card) //pushes cards to cards array
    renderGame()
}



