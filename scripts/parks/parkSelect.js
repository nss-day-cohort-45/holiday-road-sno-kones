import { getParks, useParks} from "./ParkProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parksDropDown")

export const ParksSelect = () => {
    getParks()
    .then(() => { let parks = useParks()
    render(parks)
    })
}

const render = ParksCollection => {
    
    contentTarget.innerHTML = `
    <select class="dropdown" id="parksSelect">
        <option value="0">Please select an park...</option>
        ${
            ParksCollection.map((park) => `
          
                <option value= "${park.id}">"${park.fullName}"</option>`
            )
        }
        </select>

    `

}



eventHub.addEventListener("change", event => {
    if (event.target.id === "parkSelect")  {
        const customEvent = new CustomEvent('parkChosen', {
            detail: {
                parkThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})