//This is the HTMLConverter

export const BizzarieHTMLConverter = (bizzariesObj) => {
    return `
    <article class="bizzaries">
    <h2>${bizzariesObj.name}</h2>
    <div>Description: ${bizzariesObj.desriptions}</div>
    <div>Location: ${bizzariesObj}</div>
    <div>Restroom: ${bizzariesObj.amenities.restroom}</div>
    <div>souvenirs: ${bizzariesObj.amenities.souvenirs}</div>
    <button id="associates--${bizzariesObj.id}">Associate Alibis</button> */
    </article>    
    
    `
}
