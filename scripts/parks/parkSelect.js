import { getParks, useParks} from "./ParkProvider.js"

const contentTarget = document.querySelector(".parksDropDown")

export const ParksSelect = () => {
    getParks()
    .then(() => { const parks = useParks()
    render(parks)
    })
}

const render = ParksCollection => {
    
    contentTarget.innerHTML = `
    <section class="">
    <select class="dropdown" id="parksSelect">
        <option value="0">Please select an park...</option>
        ${
            ParksCollection.map((park) => `
          
                <option value= "${park.id}">"${park.fullName}"</option>`
            )
        }
        </select>
        <button id='showParks'>Show Details</button>
        </section>
    `

}