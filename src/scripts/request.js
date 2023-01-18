const getPuzzles = async () =>{
    
    const puzzle = await fetch('https://api.chess.com/pub/puzzle',{
        method: 'GET'
    })
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        console.log(response)
        return response
    })
    .catch((err)=> console.log(err))
    return puzzle
    
}

getPuzzles()