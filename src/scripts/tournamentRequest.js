
const getTournament1 = async () => {
    const tournament1 = await fetch('https://api.chess.com/pub/tournament/18th-chess-com-chess960-quick-knockouts-under-1000',{
        method:'GET',
        
    }) 
    .then((res)=>{
        return res.json()
    }) 
    .then((res)=>{
        return res
    })

    .catch(err=>console.log(err))

        console.log(tournament1);

    return tournament1
}


export {
    getTournament1
}


const getTournament2 = async () => {
    const tournament2 = await fetch('https://api.chess.com/pub/tournament/18th-chess-com-chess960-quick-knockouts-1200-1399',{
        method:'GET',
        
    }) 
    .then((res)=>{
        return res.json()
    }) 
    .then((res)=>{
        return res
    })

    .catch(err=>console.log(err))

        console.log(tournament2);

    return tournament2
}


export {
    getTournament2
}



const getTournament3 = async () => {
    const tournament3 = await fetch('https://api.chess.com/pub/tournament/18th-chess-com-chess960-quick-knockouts-1600-1799',{
        method:'GET',
        
    }) 
    .then((res)=>{
        return res.json()
    }) 
    .then((res)=>{
        return res
    })

    .catch(err=>console.log(err))

        console.log(tournament3);

    return tournament3
}


export {
    getTournament3
}



const getTournament4 = async () => {
    const tournament4 = await fetch('https://api.chess.com/pub/tournament/18th-chess-com-chess960-quick-knockouts-1000-1199',{
        method:'GET',
        
    }) 
    .then((res)=>{
        return res.json()
    }) 
    .then((res)=>{
        return res
    })

    .catch(err=>console.log(err))

        console.log(tournament4);

    return tournament4
}


export {
    getTournament4
}



const getTournament5 = async () => {
    const tournament5 = await fetch('https://api.chess.com/pub/tournament/18th-chess-com-chess960-quick-knockouts-1400-1599',{
        method:'GET',
        
    }) 
    .then((res)=>{
        return res.json()
    }) 
    .then((res)=>{
        return res
    })

    .catch(err=>console.log(err))

        console.log(tournament5);

    return tournament5
}


export {
    getTournament5
}



const getTournament6 = async () => {
    const tournament6 = await fetch('https://api.chess.com/pub/tournament/18th-chess-com-chess960-quick-knockouts-1800-1999',{
        method:'GET',
        
    }) 
    .then((res)=>{
        return res.json()
    }) 
    .then((res)=>{
        return res
    })

    .catch(err=>console.log(err))

        console.log(tournament6);

    return tournament6
}


export {
    getTournament6
}



const getTournament7 = async () => {
    const tournament7 = await fetch('https://api.chess.com/pub/tournament/18th-chess-com-chess960-quick-knockouts-over-2000',{
        method:'GET',
        
    }) 
    .then((res)=>{
        return res.json()
    }) 
    .then((res)=>{
        return res
    })

    .catch(err=>console.log(err))

        console.log(tournament7);

    return tournament7
}


export {
    getTournament7
}