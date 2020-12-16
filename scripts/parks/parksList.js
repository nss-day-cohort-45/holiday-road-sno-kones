import { parkHTMLConverter } from "./parks.js"
import { getParks, useParks} from "./ParkProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkCards")



eventHub.addEventListener("parkSelected", event => {
   if (event.detail.parkThatWasChosen !== "0") {
    
    const parks = useParks()
    
    const selectedPark = parks.find( 
        (park) => park.id === event.detail.parkThatWasChosen)

       

     console.log(selectedPark)  
    showSelection(selectedPark);
  } 
})



export const showSelection = (selectedPark) => {
    let parkCards = [];

     {
        parkCards.push(parkHTMLConverter(selectedPark))
    }

    contentTarget.innerHTML = parkCards.join("")
}
