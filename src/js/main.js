import blackjack from "blackjack-dealer-logic"

export default () =>{
    const game = blackjack.singleDeckGame
    let gameIsRunning = false
    const result = blackjack.Result
    const startButton = document.getElementById("btn-play")
    const hitButton = document.getElementById("btn-hit")
    const standButton = document.getElementById("btn-stand")
    const doubleButton = document.getElementById("btn-double")
    const nameButton = document.getElementById("btn-name")
    const nameDisplay = document.getElementById("username")
    const wagerDisplay = document.getElementById('text')
    const cardDisplay = document.getElementById("dealerCards")
    const yourcardDisplay = document.getElementById("yourCards")
    const ques1 = document.getElementById("Q1")
    const resultDisplay = document.getElementById("result")
    const dblWager = document.getElementById("dblWager")
    var gameHistory = []
    const history = document.getElementById("history")
    history.innerHTML = gameHistory;

    alert("Welcome to Blackjack")
    alert("Press play to begin")
    
    
    nameButton.onclick = function(){
        const userName = window.prompt("Enter your name: ");
        nameDisplay.innerText = `with ${userName}`
    }

    startButton.onclick = function(){
        var wager = window.prompt("Enter your wager (out of 200): ");
        game.receiveAnte(wager)

        setTimeout(function() {wagerDisplay.innerText =`Your wager is: ${wager}`}, 500)

        game.deal()

        setTimeout(function() {cardDisplay.innerHTML = `Dealer is showing: ${game.getDealerCardUp()}`},1000)

        setTimeout(function() {yourcardDisplay.innerHTML = `You have: ${game.getUserHandValue()}`}, 2000)
        
        setTimeout(function() {ques1.innerHTML = `Whats your move? Press a button to continue `},3500)        
    }

    hitButton.onclick = function (){
        game.hitUser();
        game.evaluateUser();
        yourcardDisplay.innerHTML = `You have: ${game.getUserHandValue()}`

        game.settleDealerHand()
    
        cardDisplay.innerHTML = `Dealer is showing: ${game.getDealerHandValue()}`

        switch(game.outcome()){
            case result.LOSS:
                resultDisplay.innerHTML = `You lost`  
                gameHistory.push("lost")          
                game.resetAnte()
                break
            case result.PUSH:
                 resultDisplay.innerHTML = `Push, you got your money back`
                 gameHistory.push("push")            
                 game.pushHand()
                break
            case result.WIN:
                 resultDisplay.innerHTML = `You win`
                 gameHistory.push("win")                        
                 game.userWin()
                break
            default:
                break
        }
        game.resetPlayers()
    }

    standButton.onclick = function(){
        game.standUser();
        game.evaluateUser();
        yourcardDisplay.innerHTML = `You have: ${game.getUserHandValue()}`

        game.settleDealerHand()
    
        cardDisplay.innerHTML = `Dealer is showing: ${game.getDealerHandValue()}`

        switch(game.outcome()){
            case result.LOSS:
                resultDisplay.innerHTML = `You lost` 
                gameHistory.push("lost")                     
                game.resetAnte()
                break
            case result.PUSH:
                 resultDisplay.innerHTML = `Push, you got your money back`
                 gameHistory.push("push")                        
                 game.pushHand()
                break
            case result.WIN:
                 resultDisplay.innerHTML = `You win` 
                 gameHistory.push("win")                                   
                 game.userWin()
                break
            default:
                break
        }
        game.resetPlayers()
    }

    doubleButton.onclick = function(){
        game.doubleUser();
        game.evaluateUser();
        dblWager.innerHTML =`Your wager is: ${game.getAnte()}`

        game.settleDealerHand()
    
        cardDisplay.innerHTML = `Dealer is showing: ${game.getDealerHandValue()}`

        switch(game.outcome()){
            case result.LOSS:
                resultDisplay.innerHTML = `You lost`
                gameHistory.push("lost")                                 
                game.resetAnte()
                break
            case result.PUSH:
                 resultDisplay.innerHTML = `Push, you got your money back`
                 gameHistory.push("push")                                    
                 game.pushHand()
                break
            case result.WIN:
                 resultDisplay.innerHTML = `You win`
                 gameHistory.push("win")                                    
                 game.userWin()
                break
            default:
                break
        }
        game.resetPlayers()
    }
}