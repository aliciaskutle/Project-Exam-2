import { BASE_URL, headers } from "../../constants/api";

export function postContact(data) {
  const options = { headers, method: "POST", body: JSON.stringify(data) };

  return fetch(BASE_URL + "contacts", options).then((response) =>
    response.json()
  );
}
