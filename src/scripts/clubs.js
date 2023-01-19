function renderCards(clubCard){
    
    const ul = document.querySelector('.clubs-list')
    ul.append(clubCard)
}

function createCards(elements){
    
    const {icon, name, description, members_count, average_daily_rating} = elements

    const li = document.createElement('li')
    li.classList.add('clubs-card')
    const iconAndImgBox = document.createElement('div')
    iconAndImgBox.classList.add('iconAndImg')
    const iconNameAndDescriptionBox = document.createElement('div')
    iconNameAndDescriptionBox.classList.add('iconNameAndDescriptionBox')
    const clubIcon = document.createElement('img')
    const clubName = document.createElement('h2')
    clubName.classList.add('clubName')
    const descriptionBox = document.createElement('div')
    descriptionBox.classList.add('descriptionBox')
    const clubDescription = document.createElement('p')
    clubDescription.classList.add('clubDescription')
    const countAndRatingBox = document.createElement('div')
    countAndRatingBox.classList.add('countAndRating')
    const countAndRatingContainer = document.createElement('div')
    countAndRatingContainer.classList.add('countAndRatingContainer')
    const count = document.createElement('span')
    const mediumRating = document.createElement('span')
    const joinBtn = document.createElement('button')
    joinBtn.id = 'join'

    clubIcon.src = icon
    clubName.innerText = name
    clubDescription.innerHTML = description
    count.innerText = 'Membros: ' + members_count
    mediumRating.innerText = 'Rating médio: ' + average_daily_rating
    joinBtn.innerText = 'Faça parte'

    iconAndImgBox.append(clubIcon, clubName)
    descriptionBox.append(clubDescription)
    iconNameAndDescriptionBox.append(iconAndImgBox, descriptionBox)
    countAndRatingContainer.append(count, mediumRating)
    countAndRatingBox.append(countAndRatingContainer, joinBtn)
    li.append(iconNameAndDescriptionBox, countAndRatingBox)

    joinBtn.addEventListener('click',(event) => {
        event.preventDefault()
        window.open("https://www.chess.com/pt-BR/clubs", '_blank')
    })

    renderCards(li)
}

function changeBetweenPages(){
    const clubsBtn = document.querySelector("#clubsBtn")
    const puzzlesBtn = document.querySelector("#puzzlesBtn")
    const homeBtn = document.querySelector("#homeBtn")

    clubsBtn.addEventListener("click", ()=>{
        window.location.replace("../src/pages/clubs.html")
    })

    puzzlesBtn.addEventListener("click", ()=>{
        window.location.replace("../pages/puzzle.html")
    })

    homeBtn.addEventListener("click", ()=>{
        window.location.replace("/index.html")
    })

}

export {
    renderCards,
    createCards,
    changeBetweenPages
}