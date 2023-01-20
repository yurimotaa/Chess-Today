
import {getTournament1,getTournament2,getTournament3,getTournament4,getTournament5,getTournament6,getTournament7} from './tournamentRequest.js'

const tournamentList = document.querySelector('.t_box')

const tournament1 = await getTournament1()
const tournament2 = await getTournament2()
const tournament3 = await getTournament3()
const tournament4 = await getTournament4()
const tournament5 = await getTournament5()
const tournament6 = await getTournament6()
const tournament7 = await getTournament7()

async function renderizarT1(tournament1){

const tournamentLi = document.createElement('li')
const t1name = document.createElement('h2')
const t1url = document.createElement('button')     
const t1description = document.createElement('p')
const t1isOficial = document.createElement('h3')
const t1rules = document.createElement('h4')
const tbox = document.createElement('div')
tbox.classList.add('divli')
tbox.append(t1isOficial,t1rules)

tournamentLi.classList.add('liGeral')
t1url.classList.add('btn1')
t1name.innerText = tournament1.name
t1url.innerHTML = 'Ir para Torneio'
t1description.innerText = "Este é o 18th Torneio Chess960 Quick Knockouts Chess.com. O requisito para um torneio Quick Knockouts é que seu tempo médio por jogada seja inferior a 12 horas. Você tem 1 dia por movimento!"
t1isOficial.innerText = `Torneio Oficial`
t1rules.innerText =  `Regras: ${tournament1.settings.rules}` 

tournamentList.append(tournamentLi)
tournamentLi.append(t1name,t1url,t1description,tbox)

t1url.addEventListener('click',(event) => {
    event.preventDefault()
    window.open("https://www.chess.com/tournament/18th-chess-com-chess960-quick-knockouts-under-1000", '_blank')
})
}
renderizarT1(tournament1)

async function renderizarT2(tournament2){

const tournamentLi = document.createElement('li')
const t2name = document.createElement('h2')
const t2url = document.createElement('button')
const t2description = document.createElement('p')
const t2isOficial = document.createElement('h3')
const t2rules = document.createElement('h4')
const tbox = document.createElement('div')
tbox.classList.add('divli')
tbox.append(t2isOficial,t2rules)
 
tournamentLi.classList.add('liGeral')
t2url.classList.add('btn1')
t2name.innerText = tournament2.name
t2url.innerHTML = 'Ir para Torneio'
t2description.innerText = "Este é o 18th Torneio Chess960 Quick Knockouts Chess.com. O requisito para um torneio Quick Knockouts é que seu tempo médio por jogada seja inferior a 12 horas. Você tem 1 dia por movimento!"
t2isOficial.innerText = `Torneio Oficial`
t2rules.innerText =  `Regras: ${tournament2.settings.rules}` 
    
tournamentList.append(tournamentLi)
tournamentLi.append(t2name,t2url,t2description,tbox)
    
t2url.addEventListener('click',(event) => {
    event.preventDefault()
    window.open("https://www.chess.com/tournament/18th-chess-com-chess960-quick-knockouts-1200-1399", '_blank')
})
}
renderizarT2(tournament2)

async function renderizarT3(tournament3){

const tournamentLi = document.createElement('li')
const t3name = document.createElement('h2')
const t3url = document.createElement('button')
const t3description = document.createElement('p')
const t3isOficial = document.createElement('h3')
const t3rules = document.createElement('h4')
const tbox = document.createElement('div')
tbox.classList.add('divli')
tbox.append(t3isOficial,t3rules)
 
tournamentLi.classList.add('liGeral')
t3url.classList.add('btn1')
t3name.innerText = tournament3.name
t3url.innerHTML = 'Ir para Torneio'
t3description.innerText = "Este é o 18th Torneio Chess960 Quick Knockouts Chess.com. O requisito para um torneio Quick Knockouts é que seu tempo médio por jogada seja inferior a 12 horas. Você tem 1 dia por movimento!"
t3isOficial.innerText = `Torneio Oficial`
t3rules.innerText =  `Regras: ${tournament3.settings.rules}` 
        
tournamentList.append(tournamentLi)
tournamentLi.append(t3name,t3url,t3description,tbox)
  
t3url.addEventListener('click',(event) => {
    event.preventDefault()
    window.open("https://www.chess.com/tournament/18th-chess-com-chess960-quick-knockouts-1600-1799", '_blank')
})
}
renderizarT3(tournament3)

async function renderizarT4(tournament4){

const tournamentLi = document.createElement('li')
const t4name = document.createElement('h2')
const t4url = document.createElement('button')
const t4description = document.createElement('p')
const t4isOficial = document.createElement('h3')
const t4rules = document.createElement('h4')
const tbox = document.createElement('div')
tbox.classList.add('divli')
tbox.append(t4isOficial,t4rules)
 
tournamentLi.classList.add('liGeral')
t4url.classList.add('btn1')
t4name.innerText = tournament4.name
t4url.innerHTML = 'Ir para Torneio'
t4description.innerText = "Este é o 18th Torneio Chess960 Quick Knockouts Chess.com. O requisito para um torneio Quick Knockouts é que seu tempo médio por jogada seja inferior a 12 horas. Você tem 1 dia por movimento!"
t4isOficial.innerText = `Torneio Oficial`
t4rules.innerText =  `Regras: ${tournament4.settings.rules}` 
            
tournamentList.append(tournamentLi)
tournamentLi.append(t4name,t4url,t4description,tbox)

t4url.addEventListener('click',(event) => {
    event.preventDefault()
    window.open("https://www.chess.com/tournament/18th-chess-com-chess960-quick-knockouts-1000-1199", '_blank')
})

}
renderizarT4(tournament4)

async function renderizarT5(tournament5){

const tournamentLi = document.createElement('li')
const t5name = document.createElement('h2')
const t5url = document.createElement('button')
const t5description = document.createElement('p')
const t5isOficial = document.createElement('h3')
const t5rules = document.createElement('h4')
const tbox = document.createElement('div')
tbox.classList.add('divli')
tbox.append(t5isOficial,t5rules)
  
tournamentLi.classList.add('liGeral')
t5url.classList.add('btn1')
t5name.innerText = tournament5.name
t5url.innerHTML = 'Ir para Torneio'
t5description.innerText = "Este é o 18th Torneio Chess960 Quick Knockouts Chess.com. O requisito para um torneio Quick Knockouts é que seu tempo médio por jogada seja inferior a 12 horas. Você tem 1 dia por movimento!"
t5isOficial.innerText = `Torneio Oficial`
t5rules.innerText =  `Regras: ${tournament5.settings.rules}` 
                
tournamentList.append(tournamentLi)
tournamentLi.append(t5name,t5url,t5description,tbox)

t5url.addEventListener('click',(event) => {
    event.preventDefault()
    window.open("https://www.chess.com/tournament/18th-chess-com-chess960-quick-knockouts-1400-1599", '_blank')
})

}
renderizarT5(tournament5)

async function renderizarT6(tournament6){

const tournamentLi = document.createElement('li')
const t6name = document.createElement('h2')
const t6url = document.createElement('button')
const t6description = document.createElement('p')
const t6isOficial = document.createElement('h3')
const t6rules = document.createElement('h4')
const tbox = document.createElement('div')
tbox.classList.add('divli')
tbox.append(t6isOficial,t6rules)
  
tournamentLi.classList.add('liGeral')
t6url.classList.add('btn1')
t6name.innerText = tournament6.name
t6url.innerHTML = 'Ir para Torneio'
t6description.innerText = "Este é o 18th Torneio Chess960 Quick Knockouts Chess.com. O requisito para um torneio Quick Knockouts é que seu tempo médio por jogada seja inferior a 12 horas. Você tem 1 dia por movimento!"
t6isOficial.innerText = `Torneio Oficial`
t6rules.innerText =  `Regras: ${tournament6.settings.rules}` 
                    
tournamentList.append(tournamentLi)
tournamentLi.append(t6name,t6url,t6description,tbox)

t6url.addEventListener('click',(event) => {
    event.preventDefault()
    window.open("https://www.chess.com/tournament/18th-chess-com-chess960-quick-knockouts-1800-1999", '_blank')
})

}
renderizarT6(tournament6)

async function renderizarT7(tournament7){

const tournamentLi = document.createElement('li')
const t7name = document.createElement('h2')
const t7url = document.createElement('button')
const t7description = document.createElement('p')
const t7isOficial = document.createElement('h3')
const t7rules = document.createElement('h4')
const tbox = document.createElement('div')
tbox.classList.add('divli')
tbox.append(t7isOficial,t7rules)
   
tournamentLi.classList.add('liGeral')
t7url.classList.add('btn1')
t7name.innerText = tournament7.name
t7url.innerHTML = 'Ir para Torneio'
t7description.innerText = "Este é o 18th Torneio Chess960 Quick Knockouts Chess.com. O requisito para um torneio Quick Knockouts é que seu tempo médio por jogada seja inferior a 12 horas. Você tem 1 dia por movimento!"
t7isOficial.innerText = `Torneio Oficial`
t7rules.innerText =  `Regras: ${tournament7.settings.rules}` 
                        
tournamentList.append(tournamentLi)
tournamentLi.append(t7name,t7url,t7description,tbox)

t7url.addEventListener('click',(event) => {
    event.preventDefault()
    window.open("https://www.chess.com/tournament/18th-chess-com-chess960-quick-knockouts-over-2000", '_blank')
})
}
renderizarT7(tournament7)          

const goHome = document.querySelector('#hbtn1')
const goClubs = document.querySelector('#hbtn2')
const goPuzzles = document.querySelector('#hbtn3')

function redirectBtn() {

    goHome.addEventListener('click',(event) => {
        event.preventDefault()
        window.location.replace("/index.html")
    })
    goClubs.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.replace("/src/pages/clubs.html")
    })
    goPuzzles.addEventListener('click',(event) => {
        event.preventDefault()
        window.location.replace("/src/pages/puzzle.html")
    })
}
redirectBtn()