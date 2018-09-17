import http from "./httpService";
import { apiURL } from "../config.json";

const apiEndPoint = apiURL + "/listings";
export function getListings() {
  return http.get(apiEndPoint);
}
export function getListing(listingId) {
  return http.get(apiEndPoint + "/" + listingId);
}
export function saveListing(listing) {
  return http.post(apiEndPoint, listing);
}

export function deleteListing(listingId) {
  return http.delete(apiEndPoint + "/" + listingId);
}
