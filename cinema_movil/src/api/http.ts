import axios from "axios";

export const http = axios.create({
  baseURL: "http://10.0.2.2:8000/api", // Cambia esta URL por la de tu backend
  //ipv4 localhost para emulador android
});
