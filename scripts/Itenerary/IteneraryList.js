const saveElement = document.querySelector(".saveButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
if (clickEvent.target.id === saveSelectionbtn) {
  const customEvent = new CustomEvent("savebtnClicked")
  eventHub.dispatchEvent(customEvent)
}
})

export const saveButton = () => {
  saveElement.innerHTML = `
  <button id="saveSelectionbtn">Save Current Selections</button>
  ` 
}