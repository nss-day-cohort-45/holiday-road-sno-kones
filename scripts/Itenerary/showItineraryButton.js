const contentTarget = document.querySelector(".showButton")
const eventHub = document.querySelector(".container")






eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showItineraries") {
        const customEvent = new CustomEvent("showItinerariesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})




export const ShowItineraryButton = () => {
    contentTarget.innerHTML = "<button id='showItineraries'>Show Itineraries</button>"
}