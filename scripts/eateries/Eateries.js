export const eateryHTMLConverter = (eatery) => {
    return `
    <h2 class="EateryName">${eatery.businessName}<h2></h2>
    <div class="EateryDescription">${eatery.description}</div>
    <h4 class"EateryLocation">${eatery.city}, ${eatery.state}</h4>
    
   `

}