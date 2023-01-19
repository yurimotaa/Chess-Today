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
        window.location.replace("/src/pages/puzzle.html")
    })


    homeBtn.addEventListener("click", ()=>{
        window.location.replace("/")
    })

}





//showMenuMobile()
changePages()


