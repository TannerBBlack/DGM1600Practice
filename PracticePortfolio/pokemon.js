async function getPokeData() {
    const response = await fetch('http://example.com/movies.json')
    const myJson = await response.json()
    console.log(JSON.stringify)
}

getPokeData()