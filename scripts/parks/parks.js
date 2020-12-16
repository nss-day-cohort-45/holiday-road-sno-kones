export const parkHTMLConverter = (park) => {
  return `
  <h2 class="parkName">${park.fullName}<h2></h2>
  <a class="parkDirections" href="${park.directionsUrl}">Click for directions</a>
  <div class="parkDescription">${park.description}</div>

  
 `

}
