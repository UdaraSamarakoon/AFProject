import http from "../http-common";

class ConferenceManagementDataService {

 //New Conference Services

  getAll() {
    return http.get("/conference-management/conferences");
  }

  get(id) {
    return http.get(`/conference-management/conferences/${id}`);
  }

  create(data) {
    return http.post("/conference-management/conferences", data);
  }

  update(id, data) {
    return http.put(`/conference-management/conferences/${id}`, data);
  }

  delete(id) {
    return http.delete(`/conference-management/conferences/${id}`);
  }

  deleteAll() {
    return http.delete(`/conference-management/conferences`);
  }

  findByConferenceName(conName) {
    return http.get(`/conference-management/conferences?conName=${conName}`);
  }
}

export default new ConferenceManagementDataService();
