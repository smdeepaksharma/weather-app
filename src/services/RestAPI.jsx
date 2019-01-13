import API from "./api.js";


const API_KEY = '0f250318d3fc153e862d1a271c7c36b1';

export const buildUrl = url => `${url}&APPID=${API_KEY}`;

export default class RestAPI {

    static get(url) {
        return API.get(url)
    }

}



