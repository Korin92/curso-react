import { API_KEY, API_URL } from './settings';

const fromApiresponseToGifs = apiResponse => {
    const { data } = apiResponse;
    const { images, title, id } = data;
    const { url } = images.downsized_medium;
    return { title, id, url };

}

export default function getSingleGif({ id }) {

    return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
        //Una vez qe tengamos respuesta, lo pasamos a json
        .then(res => res.json())
        //después de pasarlo a json le pasamos el método
        .then(fromApiresponseToGifs)
}