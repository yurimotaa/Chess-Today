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
    const clubIcon = document.createElement('img')
    const clubName = document.createElement('h2')
    clubName.classList.add('clubName')
    const descriptionBox = document.createElement('div')
    descriptionBox.classList.add('descriptionBox')
    const clubDescription = document.createElement('p')
    clubDescription.classList.add('clubDescription')
    const countAndRatingBox = document.createElement('div')
    countAndRatingBox.classList.add('countAndRating')
    const count = document.createElement('span')
    const mediumRating = document.createElement('span')
    const joinBtn = document.createElement('button')
    joinBtn.id = 'join'

    clubIcon.src = icon
    clubName.innerText = name
    clubDescription.innerHTML = description
    count.innerText = 'membros: ' + members_count
    mediumRating.innerText = 'Rating médio: ' + average_daily_rating
    joinBtn.innerText = 'Faça parte'

    iconAndImgBox.append(clubIcon, clubName)
    descriptionBox.append(clubDescription)
    countAndRatingBox.append(count, mediumRating)
    li.append(iconAndImgBox, descriptionBox, countAndRatingBox, joinBtn)

    renderCards(li)
}

export {
    renderCards,
    createCards,
}