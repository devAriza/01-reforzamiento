import type { GiphyRandomResponse, Gif } from "../data/giphy.response";

const API_KEY = "xwSpsh4OtRh8acW9eIgKx2kxcTjBqR8o"



const createImageInsideDOM = (url: string) => {

    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}


// Funciones que sea de manera sincrono y algunas de manera asincrona
const getRandomGifUrl = async ():Promise<string> => {

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const {data} = (await response.json()) as GiphyRandomResponse;
    return data.images.original.url;
    
}

getRandomGifUrl().then(createImageInsideDOM)