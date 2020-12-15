const contentTarget = document.querySelector(".bizzarieButton")
const eventHub = document.querySelector(".container")

dialogToggle.close()

eventHub.addEventListener("showdetailsClicked", customEvent => {
    let bizzaries = usebizzaries()
    const bizzarie = bizzaries.find( (bizzarie) => bizzarie.id === customEvent.detail.bizzarieID)
    
    contentTarget.innerHTML = ""
    dialogToggle.close()

    for (let i=0; i < bizzarie.name.length; i++) {
        contentTarget.innerHTML += `<div class="note__alibi"><b>Known Associate:</b> ${ criminal.name[i].description }  <p><b>Description:</b> ${criminal.name[i].amenities.souvenirs }<br><br></div>`
    }
    
    contentTarget.innerHTML += `<button id="closeDialog">Close</button>`
    dialogToggle.show()
    
})

eventHub.addEventListener("closeDialogClicked", customEvent => {
    dialogToggle.close()
    contentTarget.innerHTML = ""
})