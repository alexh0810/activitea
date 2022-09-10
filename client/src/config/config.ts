import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://activitea-be.herokuapp.com/api/v1/",
});
