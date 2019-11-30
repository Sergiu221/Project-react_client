import axios from "axios";

export default axios.create({
    baseURL: process.env.NODE_ENV == 'production' ? 'https://api-licenta.herokuapp.com' : 'http://localhost:8080',
    responseType: "json"

});