import {ParksHTMLConverter} from "./parks.js"
import { getParks, useParks} from "./ParkProvider.js"




const parksElement = document.querySelector(".parkCards")
const eventHub = document.querySelector(".container")




const render = (parks) => {
    let parkCards= []
    for (const park of parks) {
        parkCards.push(ParksHTMLConverter(park))
   }
parksElement.innerHTML = parkCards.join("")
}


export const ParkList = () => {
    getParks()
        .then(() => {
            const allParks = useParks()
            render(allParks)
        })
}

eventHub.addEventListener("parkChosen", event => {
    

if (event.detail.parkThatWasChosen !=='0'){

    const parks = useParks()
    const park = parks.find( (park) => park.id === parseInt(event.detail.parkThatWasChosen))
    
    ParkList(park)

}
})
