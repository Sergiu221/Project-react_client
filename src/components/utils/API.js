import axios from "axios";

export default axios.create({
    baseURL: getBaseURL(),
    responseType: 'json'

});

function getBaseURL() {
    if (process.env.REACT_APP_STAGE !== 'production') {
        console.log("REACT_APP_STAGE:" + process.env.REACT_APP_STAGE);
        return 'http://localhost:8080';
    }
    return 'https://api-licenta.herokuapp.com';
}