import { saveItenerary } from "./IteneraryProvider.js"

const saveElement = document.querySelector(".saveButton")
const eventHub = document.querySelector(".container")

let iteneraryStateObject = {
  parkId: "",
  eateryId: null,
  attractionId: null,
}

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveSelectionBtn") {
      if (iteneraryStateObject.parkId !== "" && iteneraryStateObject.eateryId !== null && iteneraryStateObject.attractionId !== null) {
        saveItenerary(iteneraryStateObject)
      }
  }
})

export const saveButton = () => {
  saveElement.innerHTML = `
  <button id="saveSelectionBtn">Save Current Selections</button>
  ` 
}

eventHub.addEventListener("parkSelected", event => {
  iteneraryStateObject.parkId = event.detail.parkThatWasChosen
})

eventHub.addEventListener("eaterySelected", event => {
  iteneraryStateObject.eateryId = parseInt(event.detail.eateryThatWasChosen)
})

eventHub.addEventListener("bizarrerieSelected", event => {
  iteneraryStateObject.attractionId = parseInt(event.detail.bizarrerieThatWasChosen)
})