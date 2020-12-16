let bizarreries = []

export const useBizarreries = () => bizarreries.slice()

export const getBizarreries = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(
        parsedBizarreries => { 
        console.table(parsedBizarreries) 
            bizarreries = parsedBizarreries
    }
    )
} 
 
