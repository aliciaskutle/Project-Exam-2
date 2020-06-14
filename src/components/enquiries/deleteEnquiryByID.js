import { BASE_URL, headers } from "../../constants/api";

export function deleteEnquiryByID(id) {
  const options = { headers, method: "DELETE" };
  return fetch(BASE_URL + "enquiries/" + id, options);
}
