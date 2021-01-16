const eventHub = document.querySelector(".container")
let iteneraries = []

const dispatchStateChangeEvent = () => {
  const iteneraryStateChangedEvent = new CustomEvent("iteneraryStateChanged")

  eventHub.dispatchEvent(iteneraryStateChangedEvent)
}

export const useIteneraries = () => iteneraries.slice()

export const getIteneraries = () => {
  return fetch('http://localhost:8088/itineraries')
    .then(response => response.json())
    .then(parsedIteneraries => {
        iteneraries = parsedIteneraries
      
    })
}

export const saveItenerary = itenerary => {
  return fetch('http://localhost:8088/itineraries', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(itenerary)
  })
  .then(getIteneraries)
  .then(dispatchStateChangeEvent)
}
