"use strict"

let secretNumber = Math.ceil(Math.random() * 30)
let score = 20;
let highscore = 0


document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)
    if (!guess) {
        document.querySelector(".message").textContent = "❌ NO Number"
        // When playes WINS
        
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number"
        score++
        document.querySelector(".score").textContent = score
        
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber
        
        if (score > highscore) {
            highscore = score
            document.querySelector(".highscore").textContent = highscore
        }
     } else if (guess !== secretNumber) {
            if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? "⬆️ Too high!" : "⬇️ Too low!"
                score--
            document.querySelector(".score").textContent = score
            } else {
            document.querySelector(".message").textContent = "☹️ You lost the game"
        }
        }
        
})

document.querySelector(".again").addEventListener("click", function() {
     document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".number").style.width = "15rem"
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").textContent = "?"
    secretNumber = Math.ceil(Math.random() * 20)
    document.querySelector(".guess").value = ""
    
                                                  })




