import { BASE_URL, headers } from "../../constants/api";

const options = { headers };

export function getEstablishments() {
  return fetch(BASE_URL + "establishments", options).then((response) =>
    response.json()
  );
}
