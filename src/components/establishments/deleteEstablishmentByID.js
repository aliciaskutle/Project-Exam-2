import { BASE_URL, headers } from "../../constants/api";

export function deleteEstablishmentByID(id) {
  const options = { headers, method: "DELETE" };
  return fetch(BASE_URL + "establishments/" + id, options);
}
