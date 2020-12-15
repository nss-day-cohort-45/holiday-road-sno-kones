let attractions = []

export const useBizzarie = () => {
    return attractions.slice()
}

export const getBizzarie = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(
        parsedAttractions => { 
        console.table(parsedAttractions) 
            attractions = parsedAttractions
    }
    )
} 

