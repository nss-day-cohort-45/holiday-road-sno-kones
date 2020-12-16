export const parkHTMLConverter = (park) => {
  return `
  <h2 class="parkName">${park.fullName}<h2></h2>
  <div class="parkDirection">${park.directionsUrl}</div>
  <h4 class"parkLocation">${park.addresses.city}, ${park.addresses.stateCode}</h4>
  <div class="parkDescription">${park.description}</div>
  
 `

}
