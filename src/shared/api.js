process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
let axios = require("axios");
const https = require("https");

let axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  headers: {
    "Content-type": "application/json"
  }
  /* other custom settings */
});
const Agent = new https.Agent({
  rejectUnauthorized: false
});
axiosInstance.defaults.httpsAgent = Agent;
export default axiosInstance;
