import { renderCards, createCards } from "./clubs.js"

const getClubs = async (clubId) => {
    const devClub = await fetch(`https://api.chess.com/pub/club/${clubId}`, {
        method: 'GET',
    })
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        return res
    })
    return devClub
}

const devs = await getClubs('chess-com-developer-community')
const cats = await getClubs('the-cats')
const capybaras = await getClubs('capivaras-nervosos')
const kenzies = await getClubs('chess-kenzie')
const womanlyClub = await getClubs('womanly-chess')
const churros = await getClubs('churros-club')

createCards(devs)
createCards(cats)
createCards(capybaras)
createCards(kenzies)
createCards(womanlyClub)
createCards(churros)

export {
    getClubs
}