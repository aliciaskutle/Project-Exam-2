import { BASE_URL, headers } from "../../constants/api";

export function getEstablishmentByID(id) {
  const url = BASE_URL + "establishments/" + id;
  const options = { headers };

  return fetch(url, options).then((response) => response.json());
}
