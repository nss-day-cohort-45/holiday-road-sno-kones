export const ItineraryHTMLConverter = (Itinerary) => {
    return `
    <h2 class="parkName">${park.fullName}<h2></h2>
    <a class="parkDirections" href="${park.directionsUrl}">Click for directions</a>
    <div class="parkDescription">${park.description}</div>
    <h2 class="EateryName">${eatery.businessName}<h2></h2>
    <div class="EateryDescription">${eatery.description}</div>
    <h4 class"EateryLocation">${eatery.city}, ${eatery.state}</h4>
    <h2 class="Bizarrerie Name">${bizarreries.name}</h2>
    <div>${bizarreries.description}</div>
    <h3>Location: ${bizarreries.city}, ${bizarreries.state}</h3>
    <h3>Restrooms: ${bizarreries.ameneties.restrooms}</h3>
    <h3>Souvenirs: ${bizarreries.ameneties.souvenirs}</h3>
   `
  
  }
  