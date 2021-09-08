import http from "../http-common";

class CustomerDataService {
  getAll() {
    return http.get("/customers");
  }

  get(id, headers) {
    return http.get(
      `/customers/${id}`, {headers: headers}
      );
  }

  signIn (body) {
    return http.post("/api-token-auth/", body)
  }

  signUp (body) {
    return http.post("/customers/", body)
  }
}

export default new CustomerDataService();