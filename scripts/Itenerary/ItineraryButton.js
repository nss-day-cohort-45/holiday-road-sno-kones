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
  <button type ="button" id="saveSelectionBtn" disabled>Save Current Selections</button>
  ` 
  manage()
}


const manage = () => {
  const submitBtn = document.getElementById('saveSelectionBtn');
  if (iteneraryStateObject.parkId === "" || iteneraryStateObject.eateryId === null || iteneraryStateObject.attractionId === null) {
      submitBtn.disabled = true;
  }
  else {
      submitBtn.disabled = false;
  }}

eventHub.addEventListener("parkSelected", event => {
  iteneraryStateObject.parkId = event.detail.parkThatWasChosen
  manage()
})

eventHub.addEventListener("eaterySelected", event => {
  iteneraryStateObject.eateryId = parseInt(event.detail.eateryThatWasChosen)
  manage()
})

eventHub.addEventListener("bizarrerieSelected", event => {
  iteneraryStateObject.attractionId = parseInt(event.detail.bizarrerieThatWasChosen)
  manage()
})
