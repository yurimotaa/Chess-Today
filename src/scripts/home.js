function changePagesFromButtons(){
    const tournamentBtn = document.querySelector("#tournamentBtn")
    const leaderBtn = document.querySelector("#leaderboardBtn")

    tournamentBtn.addEventListener("click",()=>{
        window.location.replace("/src/pages/tournaments.html")
    })

    leaderBtn.addEventListener("click",()=>{
        window.location.replace("/src/pages/leaderboards.html")
    })
}
