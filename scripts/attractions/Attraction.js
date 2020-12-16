//This is the HTMLConverter

export const bizarrerieHTMLConverter = (bizarreries) => {
    return `
    <h2 class="Bizarrerie Name">${bizarreries.name}</h2>
    <div>${bizarreries.description}</div>
    <h3>Location: ${bizarreries.city}, ${bizarreries.state}</h3>
    <h3>Restrooms: ${bizarreries.ameneties.restrooms}</h3>
    <h3>Souvenirs: ${bizarreries.ameneties.souvenirs}</h3>
 `  
}    