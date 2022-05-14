import {API_KEY , API_URL} from './setting'

const fromApiResponseGifs=apiResponse =>{
    const {data=[]}=apiResponse
    return data
    
}

export default async function getTrendingTerms() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
    const res = await fetch(apiURL)
    const apiResponse = await res.json()
    return fromApiResponseGifs(apiResponse)
}
