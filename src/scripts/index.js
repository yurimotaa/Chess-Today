/*Funções do menu mobile*/


function showMenuMobile(){
    const btnMobile = document.querySelector(".btn__mobile")
   
    btnMobile.addEventListener("click",toggleMenu,{
       
    })
}

function toggleMenu(){
    const nav = document.querySelector("#nav")
    nav.classList.toggle("active")
}

/* Funções de troca de página*/

function changePages(){
    const clubsBtn = document.querySelector("#clubsBtn")
    const puzzlesBtn = document.querySelector("#puzzlesBtn")
    const aboutBtn = document.querySelector("#aboutBtn")
    const homeBtn = document.querySelector("#homeBtn")

    clubsBtn.addEventListener("click", ()=>{
        window.location.replace("/src/pages/clubs.html")
    })

    puzzlesBtn.addEventListener("click", ()=>{
        window.location.replace("/src/pages/puzzles.html")
    })

    aboutBtn.addEventListener("click", ()=>{
        window.location.replace("/src/pages/about.html")
    })
    homeBtn.addEventListener("click", ()=>{
        window.location.replace("/")
    })

}

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



showMenuMobile()
changePages()
changePagesFromButtons()

async function gerarPuzzle(){
    const mainList = document.querySelector('.main')

    const puzzleDoDia = await getPuzzles()

    function createElement() {
        let li = document.createElement('li')
        let title = document.createElement('h2')
        let img = document.createElement('img')
        let link = document.createElement('a')
       
        link.setAttribute('href',puzzleDoDia.url)
        link.setAttribute('target','_blank')
        link.innerHTML = 'Teste seu conhecimento com o puzzle do dia' 
        title.innerText = puzzleDoDia.title
        img.src = puzzleDoDia.image
    
        mainList.append(li)
        li.append(link,title,img)
    }
    createElement()
}
gerarPuzzle()
