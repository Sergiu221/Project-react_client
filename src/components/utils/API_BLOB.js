import axios from "axios";

export default axios.create({
    baseURL: getBaseURL(),
    responseType: 'blob'

});

function getBaseURL() {
    if (process.env.NODE_ENV !== 'production') {
        console.log("We are on [" + process.env.NODE_ENV + "] evoiroment");
        return 'http://localhost:8080';
    }
    return 'https://api-licenta.herokuapp.com';
}