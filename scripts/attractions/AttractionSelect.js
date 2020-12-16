/* import { useBizzarie, getBizzarie } from "./AttractionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".attractionsDropDown")
const attractionElement = document.querySelector("#attractionsContainer")
const eventHub = document.querySelector(".container") 


// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "attractionselect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("bizzarieChosen", {
            detail: {
                bizzarieThatWasChosen: event.target.id
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const bizzarieSelect = () => {
    // Get all convictions from application state
    getBizzarie()
    .then( () => { 
    const bizzaries = useBizzarie()
    render(bizzaries)
})
}


const render = bizzariesCollection => {
    
    contentTarget.innerHTML = `
        <select class="dropdown" id="bizzarieSelect">
            <option value="0">Please select an Bizzarie...</option>
            ${
                bizzariesCollection.map(bizzarieObj => {
                    const bizzarieName = bizzarieObj.name
                return `<option value=${bizzarieObj.id}>
                ${bizzarieName}
                </option>`
                })
            }
            </select>
            <button id='showbizzaries'>Show Details</button>
    `
        } */

        //import { useBizzaries } from "./AttractionProvider.js"
import { bizarrerieHTMLConverter } from "./Attraction.js"
import { getBizarreries, useBizarreries } from "./AttractionProvider.js"
        
const contentTarget = document.querySelector(".bizarreriesDropDown")
        
export const BizarreriesSelect = () => {
     getBizarreries()
    .then(() => { let bizarreries = useBizarreries()
    render(bizarreries)
    })
}
const eventHub = document.querySelector(".container")
const render = bizarreriesCollection => {
            
    contentTarget.innerHTML = `
    <section class="bizarrerieDetails">
         <select class="dropdown" id="bizarrerieSelect">
             <option value="0">Please select an Bizarrerie...</option>
            ${
                bizarreriesCollection.map((bizarrerie) => `
                  
                    <option value= "${bizarrerie.id}">"${bizarrerie.name}"</option>`
                )
            }
        </select>
                
     </section>
    `
        
}
        
eventHub.addEventListener( "change", event => {
    if (event.target.id === "bizarrerieSelect") {
        const customEvent = new CustomEvent("bizarrerieSelected", {
            detail: {
                bizarrerieThatWasChosen:event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
        
        
        //make change event in the dropdown that shows details of the selected event
























