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
    <section class="eateryDetails">
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${
                eateriesCollection.map((eatery) => `
          
                    <option value= "${eatery.id}">"${eatery.businessName}"</option>`
                )
            }
        </select>
        <button type="button value=${eateriesCollection.map((eatery) => ` "${eatery.id}"`)}>Selection Details</button>
    </section>
    `

}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "closeDialog") {
        eateriesDialog.close();
    }
})

eventHub.addEventListener("eateriesBtnClicked", (event) => {
    const eateriesDialog = document.querySelector("#eateriesDialog")

    const dialogText = document.querySelector("#eateriesDialog__text")
    
    const eateries = useEateries()
    
    const selectedEatery = eateries.find( 
        (eatery) => eatery.id === parseInt(event.detail.SelectedEateryId))

        dialogText.innerHTML =`
        <h3>${selectedEatery.businessName}<h3></h3>
        ${eateriesEatery.map( (eatery) => `
        <div>${eatery.description}</div>
        <h4>${eatery.city}, ${eatery.state}</h4>
        <div>${eatery.amenities}</div>`
        ).join("")}`

    eateriesDialog.showModal()
})

export const EateriesDialog = () => {
    return`
        <dialog id="eateriesDialog">
            <div id="associatesDialog__text"></div>
            <button id="closeDialog">Close</button>
        </dialog>
        `
}


eventHub.addEventListener("click", (event) => {
    if (event.target.id === "eateriesBtnClicked") {
        const customEvent = new CustomEvent("eateriesBtnClicked", {
            detail: {
                SelectedEateryId: event.target.id
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
