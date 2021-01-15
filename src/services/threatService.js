import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = apiUrl + "/Books";

function threatUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getThreats() {
  return http.get(apiEndpoint);
}
export function getThreat(threatId) {
  return http.get(threatUrl(threatId));
}
export function saveThreat(threat) {
  //update threat
  if (threat.ID) {
    const body = { ...threat };
    delete body.ID;
    return http.put(threatUrl(threat.ID), body);
  }
  //new threat
  return http.post(apiEndpoint, threat);
}

export function deleteThreat(threatId) {
  return http.delete(threatUrl(threatId));
}
