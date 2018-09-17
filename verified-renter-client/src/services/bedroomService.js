import http from "./httpService";
import { apiURL } from "../config.json";

export function getBedrooms() {
  return http.get(apiURL + "/bedrooms");
}
