import http from "../http-common";

class DoctorDataService {
  getAll() {
    return http.get("/doctors");
  }

  get(id, headers) {
    return http.get(
      `/doctors/${id}`, {headers: headers}
      );
  }

  signIn (body) {
    return http.post("/api-token-auth/", body)
  }

  signUp (body) {
    return http.post("/doctors/", body)
  }
}

export default new DoctorDataService();