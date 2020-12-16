export const parkHTMLConverter = (park) => {
  return `
  <h2 class="parkName">${park.fullName}<h2></h2>
  <div class="parkDescription">${park.directionsUrl}</div>
  <h4 class"parkLocation">${park.city}, ${park.stateCode}</h4>
  
 `

}
