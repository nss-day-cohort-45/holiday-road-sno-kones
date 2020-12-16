//This is the HTMLConverter

export const bizarrerieHTMLConverter = (bizarreries) => {
    return `
    <h2 class="Bizarrerie Name">${bizarreries.name}</h2>
    <div>Description: ${bizarreries.description}</div>
    <div>Location: ${bizarreries.city}, ${bizarreries.state}</div>
    <div>Restrooms: ${bizarreries.ameneties.restrooms}</div>
    <div>Souvenirs: ${bizarreries.ameneties.souvenirs}</div>
 `  
}    
/*     export const attractionHTMLConverter = (attraction) => {
        return `
        <h2 class="bizzarieName">${bizzarie.businessName}<h2></h2>
        <div class="bizzarieDescription">${bizzarie.description}</div>
        <div class="bizzarieAmenities">${bizzarie.description}</div>
        <h4 class"bizzarieLocation">${bizzarie.city}, ${bizzarie.state}</h4>
        
       `
    
    } */