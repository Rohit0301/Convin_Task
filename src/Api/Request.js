import axios from "axios";
const API_HOSTNAME = "https://reqres.in";


export const Request = async (method, endpoint, data) => {
  return await axios({
    method,
    url: API_HOSTNAME + endpoint,
    headers: {
          "Content-Type": "application/json",
        },
    data,
  }).catch((err) => err.response);
};

