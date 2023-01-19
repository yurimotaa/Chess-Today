function changePagesFromButtons(){
    const tournamentBtn = document.querySelector("#tournamentBtn")
    const leaderBtn = document.querySelector("#leaderboardBtn")
    
    tournamentBtn.addEventListener("click",()=>{
        
        window.location.replace("/src/pages/tournament.html")
    })

    leaderBtn.addEventListener("click",()=>{
        window.location.replace("/src/pages/leaderboard.html")
    })
}

changePagesFromButtons()
