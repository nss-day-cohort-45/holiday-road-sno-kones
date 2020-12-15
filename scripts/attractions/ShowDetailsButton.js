const contentTarget = document.querySelector(".bizzarieButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "bizzarie") {
        const detailsClickedEvent = new CustomEvent("bizzarieClicked")
        eventHub.dispatchEvent(detailsClickedEvent)
    }
})

export const ShowBizzarieButton = () => {
    contentTarget.innerHTML = "<button id='bizzaries'>Show Details</button>"
}