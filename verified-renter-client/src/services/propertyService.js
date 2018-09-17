import http from "./httpService";
import { apiURL } from "../config.json";

export function getPropertys() {
  return http.get(apiURL + "/propertys");
}
