import {useParks} from "../IteneraryProvider.js"
import {useEateries} from "../EateryProvider.js"
import {useBizarreries} from "../AttractionProvider.js"

import {useIteneraries} from "./IteneraryProvider.js"
const eventHub = document.querySelector(".container")

export const ItineraryList = () => {
    getItinerary()
        .then(() => {
            const allItinerary = useItinerary()
            render(allItinerary)
        })
}


const render = (itineraryArray) => {
    const allItinerariesConvertedToStrings = itineraryArray.map(
        (itinerary) => {
         return   ItineraryHTMLConverter(itinerary)  
        }
    ).join("")

    contentTarget.innerHTML = allItinerariesConvertedToStrings
}
