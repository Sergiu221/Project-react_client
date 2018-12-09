import axios from 'axios';
class MainServices {

  constructor() {
    console.log("MainServices is created");
  }

  getRestClient() {
    if (!this.serviceInstance) {
      this.serviceInstance = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json'
        },
      });
    }
    return this.serviceInstance;
  }

  getFinalPDF() {
    if (!this.serviceInstance) {
      this.serviceInstance = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 10000,
        headers: {
          'Content-Type': 'application/pdf'
        },
      });
    }
    return this.serviceInstance;
  }

}

export default (new MainServices());
