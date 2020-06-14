import { BASE_URL, headers } from "../../constants/api";

export function deleteContactByID(id) {
  const options = { headers, method: "DELETE" };
  return fetch(BASE_URL + "contacts/" + id, options);
}
