import axios from "axios";

export default {
  DoGetHouseList() {
    return axios.get("https://test-backend.baania.dev/home?skip=1&take=100").then((response) => {
      return response;
    });
  },
  DoCreateHouse(payload) {
    return axios.post("https://test-backend.baania.dev/home", payload).then((response) => {
      return response;
    });
  },
};
