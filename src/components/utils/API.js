import axios from "axios";

export default axios.create({
    baseURL: 'https://api-licenta.herokuapp.com',
    responseType: "json"

});