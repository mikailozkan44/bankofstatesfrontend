import axios from "axios";
import axiosInstance from "./axiosInstance";
const BASE_URL = "http://localhost:8081";

class BankService {
  login(userInfo) {
    return axios.post(BASE_URL + "/auth/login", userInfo);
  }
  register(userInfo) {
    return axios.post(BASE_URL + "/auth/register", userInfo);
  }
  user() {
    return axiosInstance.get(BASE_URL + "/api/test/user");
  }
}
export default new BankService();
