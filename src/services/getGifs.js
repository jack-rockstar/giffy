import {API_KEY, API_URL} from './setting'


const fromApiResponseGifs=apiResponse =>{
    const {data=[]}=apiResponse
    if (Array.isArray(data)) {
        const gifs=data.map(img=>{
            const {image, title, id}=img
            const {url}=img.images.downsized_medium
            return {id, title, url}
        })
        return gifs
    }
    return[]
}

export default async function getGifs({limit=20, keyword='morty' , page=0 }={}) {
    
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
    const res = await fetch(apiURL)
    const apiResponse = await res.json()
    return fromApiResponseGifs(apiResponse)
}

//PROD
//https://giffy-omega-orcin.vercel.app/search/rick
//DES
//https://giffy-jack-rockstar.vercel.app/search/saturday%20morning
