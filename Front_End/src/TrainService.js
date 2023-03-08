import axios from "axios";

const TRAIN_API_BASE_URL = "http://localhost:2018/Train-Reservation/";

class TrainService {
  savePassenger(passenger) {
    return axios.post(TRAIN_API_BASE_URL + "add", passenger);
  }
  getPassengers() {
    return axios.get(TRAIN_API_BASE_URL + "view");
  }
  deletePassenger(id) {
    return axios.delete(TRAIN_API_BASE_URL + "del/" + id);
  }
  updatePassenger(id, passenger) {
    return axios.put(TRAIN_API_BASE_URL + "update/" + id, passenger);
  }
  getPassenger(id) {
    return axios.get(TRAIN_API_BASE_URL + "view/" + id);
  }
}

export default new TrainService();
