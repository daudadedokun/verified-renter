import http from "./httpService";
import { apiURL } from "../config.json";

export function getBathrooms() {
  return http.get(apiURL + "/bathrooms");
}
