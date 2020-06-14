import { BASE_URL, headers } from "../../constants/api";

export function postEnquiry(data) {
  const options = { headers, method: "POST", body: JSON.stringify(data) };

  return fetch(BASE_URL + "enquiries", options).then((response) =>
    response.json()
  );
}
