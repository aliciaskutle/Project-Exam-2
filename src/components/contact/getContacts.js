import { BASE_URL, headers } from "../../constants/api";

const options = { headers };

export function getContacts() {
  return fetch(BASE_URL + "contacts", options).then((response) =>
    response.json()
  );
}
