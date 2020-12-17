import { parkHTMLConverter } from "./parks.js"
import { getParks, useParks} from "./ParkProvider.js"
const contentTarget = document.querySelector(".parksDropDown")

export const ParksSelect = () => {
    getParks()
    .then(() => { let parks = useParks()
    render(parks)
    })
}
const eventHub = document.querySelector(".container")
const render = parksCollection => {
    
    contentTarget.innerHTML = `
    <section class="parkDetails">
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map((park) => `
          
                    <option value= "${park.id}">"${park.fullName}"</option>`
                )
            }
        </select>
        
    </section>
    `

}

contentTarget.addEventListener( "change", event => {
    if (event.target.id === "parkSelect") {
        const customEvent = new CustomEvent("parkSelected", {
            detail: {
                parkThatWasChosen:event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

