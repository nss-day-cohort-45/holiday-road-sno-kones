//This is the HTMLConverter

export const bizarrerieHTMLConverter = (bizarreries) => {
    return `
    <h2 class="bizarreriesName">${bizarreries.name}</h2>
    <div>bizarreriesDescription: ${bizarreries.description}</div>
    <div>bizarreriesLocation: ${bizarreries.city}, ${bizarreries.state}</div>
    <div>bizarreriesRestroom: ${bizarreries.amenities.restroom}</div>
    <div>bizarreriesSouvenirs: ${bizarreries.amenities.souvenirs}</div>
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