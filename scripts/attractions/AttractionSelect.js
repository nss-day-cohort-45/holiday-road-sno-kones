import { useBizzarie, getBizzarie } from "./AttractionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".attractionsDropDown")
const eventHub = document.querySelector(".container") 


// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "bizzarieSelect") {
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
    `
        }


























