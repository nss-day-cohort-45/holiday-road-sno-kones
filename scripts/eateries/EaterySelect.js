import { getEateries, useEateries} from "./EateryProvider.js"

const contentTarget = document.querySelector(".eateriesDropDown")

export const EateriesSelect = () => {
    getEateries()
    .then(() => { const eateries = useEateries()
    render(eateries)
    })
}

const render = eateriesCollection => {
    
    contentTarget.innerHTML = `
    <select class="dropdown" id="eaterySelect">
        <option value="0">Please select an eatery...</option>
        ${
            eateriesCollection.map((eatery) => `
          
                <option value= "${eatery.id}">"${eatery.businessName}"</option>`
            )
        }
        </select>
    `

}