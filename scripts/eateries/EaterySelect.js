import { eateryHTMLConverter } from "./eateries.js"
import { getEateries, useEateries} from "./eateryProvider.js"

const contentTarget = document.querySelector(".eateriesDropDown")

export const EateriesSelect = () => {
    getEateries()
    .then(() => { let eateries = useEateries()
    render(eateries)
    })
}
const eventHub = document.querySelector(".container")
const render = eateriesCollection => {
    
    contentTarget.innerHTML = `
    <section class="eateryDetails">
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${
                eateriesCollection.map((eatery) => `
          
                    <option value= "${eatery.id}">"${eatery.businessName}"</option>`
                )
            }
        </select>
        
    </section>
    `

}

contentTarget.addEventListener( "change", event => {
    if (event.target.id === "eaterySelect") {
        const customEvent = new CustomEvent("eaterySelected", {
            detail: {
                eateryThatWasChosen:event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})


//make change event in the dropdown that shows details of the selected event