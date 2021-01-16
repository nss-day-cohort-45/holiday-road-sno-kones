import {useParks} from "../parks/ParkProvider.js"
import {useEateries} from "../eateries/EateryProvider.js"
import {useBizarreries} from "../attractions/AttractionProvider.js"
import {useIteneraries, getIteneraries} from "./IteneraryProvider.js"
const eventHub = document.querySelector(".container")


eventHub.addEventListener("showItinerariesClicked", () => {
    ItineraryFetch()
})


eventHub.addEventListener("iteneraryStateChanged", () => {
    ItineraryFetch()
    
})


// export const ItineraryList = () => {
//         let parks = useParks()
//         let eateries = useEateries()
//         let bizarreries = useBizarreries()
//         getIteneraries()
//         .then(() => {
//                 const allItinerary = useIteneraries()
//                 for (const parki of allItinerary) {
//                         let parkObj = parks.find( 
//                                 park => park.id == parki.parkId)
//                              itineraryArray.push(parkObj)
//              break;
//             }


//         for (const eateryi of allItinerary) {
//             let eateryObj = eateries.find( 
//                     eatery => eatery.id == eateryi.eateryId)
//                  itineraryArray.push(eateryObj)
//                  break;
//                  }
        
        
//                 for (const attractioni of allItinerary) {
//         let attractionObj = bizarreries.find( 
//             bizarrerie => bizarrerie.id == attractioni.attractionId)
//              itineraryArray.push(attractionObj)
//             }  
//         console.log(itineraryArray)

//             // render(allItinerary)
//         })
//     }


export const ItineraryFetch = () => {
    let itineraryArray= []
    getIteneraries()
    .then(() => {
        const allItinerary = useIteneraries()
        for (const itineraryi of allItinerary) {
            let itineraryObj = allItinerary.find(
                itinerary => itinerary.id == itineraryi.id)
        itineraryArray.push(itineraryObj)
    
    }
    
    })
}

let taco = ItineraryFetch()
export const ItineraryList = () => {
        let parks = useParks()
        let eateries = useEateries()
        let bizarreries = useBizarreries()
        for each (const burrito in taco) {

        }









//         const render = (itineraryArray) => {
//         const allItinerariesConvertedToStrings = itineraryArray.map(
//                 (itinerary) => {
//          return   ItineraryHTMLConverter(itinerary)  
//         }
//     ).join("")

//     contentTarget.innerHTML = allItinerariesConvertedToStrings
// }
