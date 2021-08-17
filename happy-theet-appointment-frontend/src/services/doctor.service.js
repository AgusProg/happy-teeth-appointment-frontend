import http from "../http-common";

class DoctorDataService {
  getAll() {
    return http.get("/doctors");
  }

  get(id) {
    return http.get(`/doctors/${id}/`);
  }
}

export default new DoctorDataService();