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
        
    
























