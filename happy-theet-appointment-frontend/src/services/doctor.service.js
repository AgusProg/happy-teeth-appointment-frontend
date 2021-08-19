import http from "../http-common";

class DoctorDataService {
  getAll() {
    return http.get("/doctors");
  }

  get(id) {
    return http.get(`/doctors/${id}/`);
  }

  signIn (body) {
    return http.post("/api-token-auth/", body)
  }
}

export default new DoctorDataService();