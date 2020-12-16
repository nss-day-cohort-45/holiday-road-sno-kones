import { eateryHTMLConverter } from "./eateries.js"
import { getEateries, useEateries} from "./eateryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateryCards")



eventHub.addEventListener("eaterySelected", event => {
   if (event.detail.eateryThatWasChosen !== "0") {
    
    const eateries = useEateries()
    
    const selectedEatery = eateries.find( 
        (eatery) => eatery.id === parseInt(event.detail.eateryThatWasChosen))

       

       
    showSelection(selectedEatery);
  } 
})



export const showSelection = (selectedEatery) => {
    let eateryCards = [];

     {
        eateryCards.push(eateryHTMLConverter(selectedEatery))
    }

    contentTarget.innerHTML = eateryCards.join("")
}
