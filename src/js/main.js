import blackjack from "blackjack-dealer-logic"

export default () =>{
    const game = blackjack.singleDeckGame
    let gameIsRunning = false
    const result = blackjack.Result
    const startButton = document.getElementById("btn-play")
    const hitButton = document.getElementById("btn-hit")
    const standButton = document.getElementById("btn-stand")
    const doubleButton = document.getElementById("btn-double")

   
    alert("Welcome to Blackjack")
    alert("Press play to begin")



    startButton.onclick = function(){
        document.getElementById("text")
        // text.innerText = `The amount of money in your wallet: ${game.getUserChips()}`
        const wager = window.prompt("Enter your wager: ");
        game.receiveAnte(wager)

        setTimeout(function() {const wagerDisplay = document.getElementById('text')
        wagerDisplay.innerText =`Your wager is: ${wager}`}, 2000)

        game.deal()

        setTimeout(function() {const cardDisplay = document.getElementById("dealerCards")
        cardDisplay.innerHTML = `Dealer is showing: ${game.getDealerCardUp()}`},2000)

        const yourcardDisplay = document.getElementById("yourCards")
        yourcardDisplay.innerHTML = `You are showing: ${game.getUserHandValue()}`
        
        setTimeout(function() {const ques1 = document.getElementById("Q1")
        ques1.innerHTML = `Whats your move?: `},5000)        
    }

    hitButton.onclick = function (){
        game.hitUser();
        game.evaluateUser();
        const yourcardDisplay2 = document.getElementById("yourCard2")
        yourcardDisplay2.innerHTML = `You are showing: ${game.getUserHandValue()}`
    }

    standButton.onclick = function(){
        game.standUser();
        game.evaluateUser();
        const yourcardDisplay3 = document.getElementById("yourCard3")
        yourcardDisplay3.innerHTML = `You are showing: ${game.getUserHandValue()}`

        game.settleDealerHand()
    
        const cardDisplay = document.getElementById("dealerCards")
        cardDisplay.innerHTML = `Dealer is showing: ${game.getDealerHandValue()}`

        switch(game.outcome()){
            case result.LOSS:
                const resultDisplay1 = document.getElementById("result")
                resultDisplay1.innerHTML = `You lost`            
                game.resetAnte()
                break
            case result.PUSH:
                 const resultDisplay2 = document.getElementById("result")
                 resultDisplay2.innerHTML = `Push, you got your money back`            
                 game.pushHand()
                break
            case result.WIN:
                 const resultDisplay3 = document.getElementById("result")
                 resultDisplay3.innerHTML = `You win`            
                 game.userWin()
                break
            default:
                break
        }
    }



    // doubleButton.onclick = function(){
    //     game.doubleUser();
    //     game.evaluateUser();
    //     const dblWager = document.getElementById("dblwager")
    //     dblWager.innerText =`Your wager is: ${wager}`
    // }
}