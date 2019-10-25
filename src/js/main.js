import blackjack from "blackjack-dealer-logic"

export default () =>{
    const game = blackjack.singleDeckGame
    const gameIsRunning = true
    const startButton = document.getElementById("btn-play")
   
    alert("Welcome to Blackjack")
    alert("Press play to begin")



    startButton.onclick = function(){
        document.getElementById("text")
        text.innerText = `The amount of money in your wallet: ${game.getUserChips()}`
        const wager = window.prompt("Enter your wager: ");
        game.receiveAnte(wager)
        document.write(`Your wager is: ${wager}`)
        game.deal()
        document.write(`Dealer is showing: ${game.getDealerCardUp()}`)
        document.write(`Your current hand: ${game.getUserHandValue()}`)

    }
    
}

// const gameIsRunning = true;


// while(gameIsRunning) {
// p();
// document.body.textContent = `The amount of money in your wallet: ${singleDeckGame.getUserChips()}`;
// const userWager = Number(ask("Please enter an amount to wager: "));
// singleDeckGame.recieveAnte(userWager);
// p();
// }