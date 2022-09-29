import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://malotube.herokuapp.com/api/"
})