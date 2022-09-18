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
  DoDeleteHouse(id) {
    return axios.delete("https://test-backend.baania.dev/home/" + id).then((response) => {
      return response;
    });
  },
  DoUpdateHouse(payload) {
    return axios.patch("https://test-backend.baania.dev/home/" + payload.id, payload).then((response) => {
      return response;
    });
  },
};
