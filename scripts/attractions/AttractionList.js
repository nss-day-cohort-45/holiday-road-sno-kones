import { bizarrerieHTMLConverter } from "./Attraction.js"
import { getBizarreries, useBizarreries} from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".bizarrerieCards")



eventHub.addEventListener("bizarrerieSelected", event => {
   if (event.detail.bizarrerieThatWasChosen !== "0") {
    
    const bizarreries = useBizarreries()
    
    const selectedBizarrerie = bizarreries.find( 
        (bizarrerie) => bizarrerie.id === parseInt(event.detail.bizarrerieThatWasChosen))

       

      console.log(selectedBizarrerie) 
    ShowSelection(selectedBizarrerie);
  } 
})



export const ShowSelection = (selectedBizarrerie) => {
    let bizarrerieCards = [];

     {
        bizarrerieCards.push(bizarrerieHTMLConverter(selectedBizarrerie))
    }

    contentTarget.innerHTML = bizarrerieCards.join("")
}
