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
                parks = parsedParks.data
            }
        )
}




// Uncaught (in promise) TypeError: parks.slice is not a function
//     at useParks (ParkProvider.js:3)
//     at parkSelect.js:7
// useParks @ ParkProvider.js:3
// (anonymous) @ parkSelect.js:7
// Promise.then (async)
// ParksSelect @ parkSelect.js:7
// (anonymous) @ main.js:5