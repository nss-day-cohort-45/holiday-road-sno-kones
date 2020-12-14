let parks = []

export const useParks = () => {
    return parks.slice()
}

export const getParks = () => {

    return fetch("https://developer.nps.gov/api/v1/parks?api_key=WpnO3PMpcXHYKpw0cjWrKedEaAFH8AAUhNSgSmMh")
        .then(response => response.json())
        .then(
            parsedParks => {
                console.table(parsedParks)
                parks = parsedParks
            }
        )
}