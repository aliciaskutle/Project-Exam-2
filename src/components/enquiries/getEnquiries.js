import { BASE_URL, headers } from "../../constants/api";

const options = { headers };

export function getEnquiries() {
  return fetch(BASE_URL + "enquiries", options).then((response) =>
    response.json()
  );
}
