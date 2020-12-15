const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (event) => {
  if (event.target.id.includes("parks--")) {
    const customEvent = new CustomEvent("parksBtnClicked", {
      detail: {
        clickedParkId: event.target.id.split("--")[1]
      }
    })
    eventHub.dispatchEvent(customEvent)
  }
})


export const ParksHTMLConverter = (parks) => {
    return `
        <section class="parks">
            <h1 class="parksName">${parks.fullName}</h1>
            <div class="parksAddress">${parks.addresses}</div>
            <button id='park--${parks.id}'>Show Details</button>
        </section>
    `
}