import { BASE_URL, headers } from "../../constants/api";

export function postEstablishment(data) {
  const options = { headers, method: "POST", body: JSON.stringify(data) };

  return fetch(BASE_URL + "establishments", options).then((response) =>
    response.json()
  );
}
