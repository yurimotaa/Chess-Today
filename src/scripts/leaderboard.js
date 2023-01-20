async function getLeaderboard(){
    const leaderboarder = await fetch(`https://api.chess.com/pub/leaderboards`, {
        method: 'GET',
    }) 
    
    const leaderboarderJson = await leaderboarder.json()
    
    return leaderboarderJson
}

const leaderboarderAll = await getLeaderboard()

const leaderboarderBattle = leaderboarderAll.battle
const leaderboarderDaily = leaderboarderAll.daily
const leaderboarderDaily960 = leaderboarderAll.daily960
const leaderboarderLiveBlitz = leaderboarderAll.live_blitz
const leaderboarderLiveBlitz960 = leaderboarderAll.live_blitz960
const leaderboarderLiveBughouse = leaderboarderAll.live_bughouse
const leaderboarderLiveBullet = leaderboarderAll.live_bullet
const leaderboarderLiveCrazyHouse = leaderboarderAll.live_crazyhouse
const leaderboarderLivekingofthehill = leaderboarderAll.live_kingofthehill
const leaderboarderLiveRapid = leaderboarderAll.live_rapid
const leaderboarderLiveThreecheck = leaderboarderAll.live_threecheck
const leaderboarderRush = leaderboarderAll.rush
const leaderboarderTactics = leaderboarderAll.tactics

async function getCountry(data){
    const country = await fetch(`https://api.chess.com/pub/country/${data}`, {
        method: 'GET',
    }) 

    const countryJson = await country.json()

    return countryJson
}



async function renderLeaderBoard(data){
    const ul = document.querySelector('ul')
    
    for(let i = 0; i<data.length; i++) {
        const country = await getCountry(data[i].country.slice(34))

        const card = createCardsLeaderBoard(data[i], country.name)
        
        ul.appendChild(card)
    }
}


function createCardsLeaderBoard(data, country){
    const li = document.createElement('li')
    const name = document.createElement('h2')
    const username = document.createElement('h3')
    const rank = document.createElement('p')
    const status = document.createElement('p')
    const score = document.createElement('p')
    const id = document.createElement('p')
    const countryProfile = document.createElement('p')
    const url = document.createElement('a')
    if(!data.name){
        li.append(username, rank, countryProfile, url)
        username.innerText = `${data.username}`
    } else {
        li.append(name, rank, countryProfile, url)
        name.innerText = `${data.name}`
    }
    rank.innerText = `#${data.rank}`
    status.innerText = `Status: ${data.status[0].toUpperCase() + data.status.substring(1)}`
    score.innerText = `Pontuação atual: ${data.score}`
    id.innerText = `Id do jogador: ${data.player_id}`
    countryProfile.innerText = `País: ${country}`
    url.innerText = `Perfil`
    
    url.href = data.url
    url.target = 'blank'
    
    return li
}

function renderSelectedValue(){
    const ul = document.querySelector('ul')
    const select = document.querySelector('#leaderboards')
    const h1 = document.querySelector('section > h1')

    select.addEventListener('change', async function(){
        if(select.value === 'battle'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderBattle)
            h1.innerText = `Leaderboard Battle`
        } else if(select.value === 'daily'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderDaily)
            h1.innerText = `Leaderboard Daily`
        } else if(select.value === 'daily960'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderDaily960)
            h1.innerText = `Leaderboard Daily 960`
        } else if(select.value === 'live_blitz'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderLiveBlitz)
            h1.innerText = `Leaderboard Blitz`
        } else if(select.value === 'live_blitz960'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderLiveBlitz960)
            h1.innerText = `Leaderboard Blitz 960`
        } else if(select.value === 'live_bughouse'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderLiveBughouse)
            h1.innerText = `Leaderboard Bug House`
        } else if(select.value === 'live_bullet'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderLiveBullet)
            h1.innerText = `Leaderboard Bullet`
        } else if(select.value === 'live_crazyhouse'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderLiveCrazyHouse)
            h1.innerText = `Leaderboard Crazy House`
        } else if(select.value === 'live_kingofthehill'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderLivekingofthehill)
            h1.innerText = `Leaderboard King of the hill`
        } else if(select.value === 'live_rapid'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderLiveRapid)
            h1.innerText = `Leaderboard Rapid`
        } else if(select.value === 'live_threecheck'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderLiveThreecheck)
            h1.innerText = `Leaderboard Threecheck`
        } else if(select.value === 'rush'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderRush)
            h1.innerText = `Leaderboard Rush`
        } else if(select.value === 'tactics'){
            ul.innerHTML = ''
            renderLeaderBoard(leaderboarderTactics)
            h1.innerText = `Leaderboard Tactics`
        }
    })
}

renderLeaderBoard(leaderboarderBattle)
renderSelectedValue()


